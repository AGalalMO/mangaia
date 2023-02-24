import { Chip, Stack } from "@mui/material";
import { useRouter } from "next/router";
import TabPanel from "react-tabs/lib/components/TabPanel";
import { StyledButton, StyledTextFiled } from "./styles";

function Login({ loginForm, loginError }) {
  const { locale } = useRouter();

  return (
    <form onSubmit={loginForm.handleSubmit}>
      <Stack spacing={4}>
        <StyledTextFiled
          fullWidth
          id='email'
          name='email'
          label={locale == "en" ? "Email" : "البريد الالكتروني"}
          variant='filled'
          value={loginForm.values.email}
          onChange={loginForm.handleChange}
          InputProps={{ disableUnderline: true, style: { fontSize: "14px" } }}
          InputLabelProps={{ style: { fontSize: "14px" } }} // font size of input label
          error={loginForm.touched.email && Boolean(loginForm.errors.email)}
          helperText={loginForm.touched.email && loginForm.errors.email}
        />

        <StyledTextFiled
          sx={{ paddingBottom: "50px" }}
          fullWidth
          id='password'
          name='password'
          label={locale == "en" ? "Password" : "كلمة السر"}
          variant='filled'
          type='password'
          value={loginForm.values.password}
          onChange={loginForm.handleChange}
          error={
            loginForm.touched.password && Boolean(loginForm.errors.password)
          }
          helperText={loginForm.touched.password && loginForm.errors.password}
          InputProps={{ disableUnderline: true, style: { fontSize: "14px" } }}
          InputLabelProps={{ style: { fontSize: "14px" } }} // font size of input label
        />

        {loginError && (
          <Chip
            sx={{ fontSize: "14px" }}
            label={
              locale == "ar"
                ? "اسم المستخدم او كلمه السر خاطئين"
                : "user name or password is wrong"
            }
            style={{
              borderRadius: "8px",
              background: "transparent",
              color: "red",
            }}
          />
        )}

        <StyledButton
          sx={{ minHeight: "40px" }}
          color='error'
          variant='contained'
          type='submit'>
          {locale == "en" ? "Sign In" : "تسجيل دخول"}
        </StyledButton>
      </Stack>
    </form>
  );
}

export default Login;
