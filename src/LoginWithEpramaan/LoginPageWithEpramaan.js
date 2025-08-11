import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper
} from '@mui/material';
import BaseLocal from '../URLS/BaseLocal';
import LoginIcon from '@mui/icons-material/Login';

const LoginPageWithEpramaan = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [captchaVerified, setCaptchaVerified] = useState(true); // Set true for now (since captcha is commented)
    const [redirectionURL, setRedirectionURL] = useState(null);
    const formRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!captchaVerified) {
            alert('Please verify the captcha.');
            return;
        }
        console.log('Username:', username);
        console.log('Password:', password);
        alert('Login successful!');
    };

    const handleClick = async () => {
        try {
            // const res = await fetch('http://localhost:8080/Demo2');
            const res = await fetch(BaseLocal + 'Demo2');
            const data = await res.json();

            if (data.redirectionURL) {
                setRedirectionURL(data.redirectionURL);
            } else {
                alert("No redirection URL received.");
            }
        } catch (error) {
            console.error("Error in ePramaan login:", error);
            alert("Failed to initiate ePramaan login.");
        }
    };

    useEffect(() => {
        if (redirectionURL && formRef.current) {
            formRef.current.submit();
        }
    }, [redirectionURL]);

    return (
        <>
            {/* <Box
       sx={{
            height: '100vh',
                display: 'flex',
               alignItems: 'center',
            justifyContent: 'center',
                backgroundColor: '#f0f2f5'
           }}
         > */}
            {/* <Paper elevation={3} sx={{ padding: 4, width: 350 }}> */}
            {/* <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Login
                </Typography> */}
            {/* <form onSubmit={handleLogin}>
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

                    <Button
                        variant="contained"
                        type="submit"
                        color="primary"
                        fullWidth
                        disabled={!captchaVerified}
                    >
                        Login
                    </Button>
                </form> */}

            {/* <Typography variant="body2" align="center" mt={2}>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={handleClick}
                    >
                        
                          Login
                    </Button>
                </Typography> */}

            {/* <Typography variant="body2" align="center" mt={2}> */}
                <Button
                    variant="contained"
                    onClick={handleClick}
                    startIcon={<LoginIcon sx={{ fontSize: 16 }} />}
                    sx={{
                        backgroundColor: '#ff9800',
                        color: '#fff',
                        textTransform: 'none',
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        minWidth: 'auto',
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#fb8c00',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                        },
                        '&:active': {
                            transform: 'scale(0.97)',
                        }
                    }}
                >
                    Login
                </Button>
            {/* </Typography> */}


            {/* Hidden form for auto-submission */}
            {redirectionURL && (
                <form
                    ref={formRef}
                    action={redirectionURL}
                    method="post"
                    name="ResponsePost"
                    style={{ display: 'none' }}
                >
                    {/* Add hidden fields here if needed:
            <input type="hidden" name="token" value="..." />
            */}

                    {/* <input type="hidden" name="code" value={extractedCode} />
                        <input type="hidden" name="state" value={extractedState} /> */}
                </form>
            )}
            {/* </Paper> */}
            {/* </Box> */}
        </>
    );
};

export default LoginPageWithEpramaan;
