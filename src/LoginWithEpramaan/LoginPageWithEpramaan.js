import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper
} from '@mui/material';

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
      const res = await fetch('http://localhost:8080/Demo2');
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

        <Typography variant="body2" align="center" mt={2}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleClick}
          >
            Login with ePramaan
          </Button>
        </Typography>

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
          </form>
        )}
      </Paper>
    </Box>
  );
};

export default LoginPageWithEpramaan;
