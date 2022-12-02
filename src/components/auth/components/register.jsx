import { Stack } from '@mui/material';
import { TabPanel } from 'react-tabs';
import { StyledButton, StyledRegionSelect, StyledTextFiled } from './styles';

function Register ({ registerForm }) {

    return (
        <form onSubmit={registerForm.handleSubmit}>
            <Stack spacing={4}>
                <StyledTextFiled
                    fullWidth
                    id="name"
                    name="name"
                    label="name"
                    variant='filled'
                    value={registerForm.values.name}
                    onChange={registerForm.handleChange}
                    InputProps={{ disableUnderline: true, style: { fontSize: '14px' } }}
                    InputLabelProps={{ style: { fontSize: '14px' } }} // font size of input label
                    error={registerForm.touched.name && Boolean(registerForm.errors.name)}
                    helperText={registerForm.touched.name && registerForm.errors.name}
                />
                <StyledTextFiled
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant='filled'
                    value={registerForm.values.email}
                    onChange={registerForm.handleChange}
                    InputProps={{ disableUnderline: true, style: { fontSize: '14px' } }}
                    InputLabelProps={{ style: { fontSize: '14px' } }} // font size of input label
                    error={registerForm.touched.email && Boolean(registerForm.errors.email)}
                    helperText={registerForm.touched.email && registerForm.errors.email}
                />
                <StyledTextFiled
                    fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                    label="phoneNumber"
                    variant='filled'
                    value={registerForm.values.phoneNumber}
                    onChange={registerForm.handleChange}
                    InputProps={{ disableUnderline: true, style: { fontSize: '14px' } }}
                    InputLabelProps={{ style: { fontSize: '14px' } }} // font size of input label
                    error={registerForm.touched.phoneNumber && Boolean(registerForm.errors.phoneNumber)}
                    helperText={registerForm.touched.phoneNumber && registerForm.errors.phoneNumber}
                />
                <StyledRegionSelect
                    id="city"
                    name="city"
                    country={'Egypt'}
                    defaultOptionLabel={'Cairo'}
                    value={registerForm.values.city}
                    onChange={(value) => registerForm.setFieldValue('city',value)}

                />
                <StyledTextFiled
                    fullWidth
                    id="address"
                    name="address"
                    label="address"
                    variant='filled'
                    value={registerForm.values.address}
                    onChange={registerForm.handleChange}
                    InputProps={{ disableUnderline: true, style: { fontSize: '14px' } }}
                    InputLabelProps={{ style: { fontSize: '14px' } }} // font size of input label
                    error={registerForm.touched.address && Boolean(registerForm.errors.address)}
                    helperText={registerForm.touched.address && registerForm.errors.address}
                />
                <StyledTextFiled
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    variant='filled'
                    type="password"
                    value={registerForm.values.password}
                    onChange={registerForm.handleChange}
                    error={registerForm.touched.password && Boolean(registerForm.errors.password)}
                    helperText={registerForm.touched.password && registerForm.errors.password}
                    InputProps={{ disableUnderline: true, style: { fontSize: '14px' } }}
                    InputLabelProps={{ style: { fontSize: '14px' } }} // font size of input label

                />

                <StyledButton color="error" variant="contained" type="submit">
                    Sign Up
                </StyledButton>
            </Stack>

        </form>
    )
}

export default Register;