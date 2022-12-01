import { Stack } from '@mui/material';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import { StyledButton, StyledTextFiled } from './styles';

function Login ({ loginForm }) {
    return (
        <form onSubmit={loginForm.handleSubmit}>
            <Stack spacing={4}>
                <StyledTextFiled
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant='filled'
                    value={loginForm.values.email}
                    onChange={loginForm.handleChange}
                    InputProps={{ disableUnderline: true, style: { fontSize: '14px' } }}
                    InputLabelProps={{ style: { fontSize: '14px' } }} // font size of input label
                    error={loginForm.touched.email && Boolean(loginForm.errors.email)}
                    helperText={loginForm.touched.email && loginForm.errors.email}
                />

                <StyledTextFiled
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    variant='filled'
                    type="password"
                    value={loginForm.values.password}
                    onChange={loginForm.handleChange}
                    error={loginForm.touched.password && Boolean(loginForm.errors.password)}
                    helperText={loginForm.touched.password && loginForm.errors.password}
                    InputProps={{ disableUnderline: true, style: { fontSize: '14px' } }}
                    InputLabelProps={{ style: { fontSize: '14px' } }} // font size of input label

                />
                <StyledButton color="error" variant="contained" type="submit">
                    Sign In
                </StyledButton>
            </Stack>

            </form>
        
    )
}

export default Login;