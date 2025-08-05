import React, { useState, useRef } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper
} from '@mui/material';
// import ReCAPTCHA from 'react-google-recaptcha';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const recaptchaRef = useRef(null);

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            alert('Please verify the captcha.');
            return;
        }
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        alert('Login successful!');
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f2f5'
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, width: 350 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        margin="normal"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* <Box mt={2} mb={2}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="YOUR_SITE_KEY" // Replace with your reCAPTCHA site key
              onChange={handleCaptchaChange}
            />
          </Box> */}

                    <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        fullWidth
                        disabled={!captchaVerified}
                    >
                        Login
                    </Button>
                </form>
                <Typography
                    variant="body2"
                    align="center"
                    mt={2}
                >
                    <a
                        href="https://epramaan.gov.in" // Replace with actual ePramaan login URL if different
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            color: '#1976d2',
                            fontWeight: 'bold',
                        }}
                    >
                        Login with ePramaan
                    </a>
                </Typography>

            </Paper>

        </Box>
    );
};

export default LoginPage;
