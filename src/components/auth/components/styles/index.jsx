import { Button, TextField } from "@mui/material";
import { RegionDropdown } from "react-country-region-selector";
import styled from "styled-components";



export const StyledTextFiled = styled(TextField)({
    height: '36px',
})
export const StyledButton = styled(Button)({
    height: '40px', fontSize: '14px'
})
export const StyledRegionSelect = styled(RegionDropdown)({
    height: '50px',
    background: '#f0f0f0',
    border: '0px',
    fontSize: '14px',
    padding: '6px',
})
