import React from "react";
import { connect } from "react-redux";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import ALink from "~/src/components/features/alink";
import useAuth from "~/src/hooks/useAuth";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import { useRouter } from "next/router";
function WishlistMenu (props) {
  const { wishlist } = props;
  const { locale,push } = useRouter()
   
  const { isAuthenticated, logout } = useAuth();
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
     setAnchorEl(null);
   };

   const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  
  return (
    <>
      {isAuthenticated ? (
        <>
          <PersonOutlineOutlinedIcon
            aria-describedby={id}
            onClick={handleClick}
            style={{ width: "24px", height: "24px" ,color:'white'}}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}>
            <ALink style={{ p: 2, marginBottom: "5px" }} href='/'>
              {locale == "ar" ? "طلباتي" : "My orders"}
            </ALink>


            <Typography sx={{ p: 2, cursor: 'pointer' }} onClick={() => {
              logout()
              push('/')
            }}>
              {locale == "ar" ? "تسجيل الخروج" : "Logout"}
            </Typography>
          </Popover>
        </>
      ) : (
        <Button
          aria-describedby={id}
          style={{ marginInlineStart: "10px", marginInlineEnd: "10px" }}
          variant='contained'
          color='error'
            onClick={() => {
            push("/auth/signin/");
          }}>
          {locale == "ar" ? "تسجيل الدخول" : "Login"}
        </Button>
      )}
    </>
  );
}

function mapStateToProps (state) {
  return {
    wishlist: [],
  };
}

export default connect(mapStateToProps, {})(WishlistMenu);
