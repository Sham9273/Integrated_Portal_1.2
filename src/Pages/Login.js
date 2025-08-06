import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  useMediaQuery
} from '@mui/material';
import { useState, useEffect } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 5 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
};

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '', captchaInput: '' });
  const [captcha, setCaptcha] = useState('');
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRefreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setForm({ ...form, captchaInput: '' });
  };

  const handleSubmit = () => {
    if (form.captchaInput !== captcha) {
      alert('❌ Captcha does not match.');
      return;
    }
    alert('✅ Login successful');
    console.log('Form Data:', form);
  };

  return (
    <Box
      sx={{
        minHeight: '85vh',
        //backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: isMobile ? '100%' : 300,
         // height: '100px',
          p: 3,
          bgcolor: '#fff',
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{fontWeight: 'bold', mb: 2, color: '#333', textDecoration: 'underline' }}
        >
          Login
        </Typography>

        <TextField
          fullWidth
          label="Username"
          name="username"
          onChange={handleChange}
          margin="normal"
          size="small"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          margin="normal"
          size="small"
        />

        <TextField
          fullWidth
          label="Enter Captcha"
          name="captchaInput"
          value={form.captchaInput}
          onChange={handleChange}
          margin="normal"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleRefreshCaptcha}>
                  <RefreshIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box mt={2} display="flex" justifyContent="center">
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'monospace',
              letterSpacing: 2,
              px: 2,
              py: 1,
              border: '2px dashed #333',
              fontSize: 18,
              userSelect: 'none',
              color: '#000',
            }}
          >
            {captcha}
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 3, py: 1.2, fontWeight: 'bold', fontSize: 15 }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};
export default Login;


























/*******(1A)**********/

// import { Box, TextField, Button, Typography, Paper, IconButton, InputAdornment } from '@mui/material';
// import { useState, useEffect } from 'react';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import banner from '../images/v1.jpg';

// const generateCaptcha = () => {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   let captcha = '';
//   for (let i = 0; i < 5; i++) {
//     captcha += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return captcha;
// };

// const Login = () => {
//   const [form, setForm] = useState({ username: '', password: '', captchaInput: '' });
//   const [captcha, setCaptcha] = useState('');

//   // Generate captcha on mount
//   useEffect(() => {
//     setCaptcha(generateCaptcha());
//   }, []);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleRefreshCaptcha = () => {
//     setCaptcha(generateCaptcha());
//     setForm({ ...form, captchaInput: '' }); // clear input
//   };

//   const handleSubmit = () => {
//     if (form.captchaInput !== captcha) {
//       alert('Captcha does not match. Please try again.');
//       return;
//     }
//     console.log('Form submitted:', form);
//     alert('Login successful (Captcha matched)');
//   };

//   return (
//     <Box sx={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       //background: 'url("https://images.unsplash.com/photo-1503264116251-35a269479413") no-repeat center/cover',
//       backgroundImage: `url(${banner})`,
//     }}>
//       <Paper elevation={10} sx={{
//         p: 4,
//         width: 350,
//         bgcolor: 'rgba(255, 255, 255, 0.1)',
//         backdropFilter: 'blur(12px)',
//         borderRadius: 4,
//         boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
//         color: '#fff'
//       }}>
//         <Typography variant="h5" mb={3} align="center" color='#000'><b>Log In</b></Typography>

//         <TextField
//           fullWidth
//           label="Username"
//           name="username"
//           onChange={handleChange}
//           margin="normal"
//           InputProps={{ style: { color: '#fff' } }}
//         />

//         <TextField
//           fullWidth
//           label="Password"
//           type="password"
//           name="password"
//           onChange={handleChange}
//           margin="normal"
//           InputProps={{ style: { color: '#fff' } }}
//         />

//         {/* Captcha Display */}
//         <TextField
//           fullWidth
//           label="Enter Captcha"
//           name="captchaInput"
//           value={form.captchaInput}
//           onChange={handleChange}
//           margin="normal"
//           InputProps={{
//             style: { color: '#fff' },
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={handleRefreshCaptcha} edge="end">
//                   <RefreshIcon sx={{ color: '#fff' }} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />

//         <Box mt={1} mb={2} display="flex" alignItems="center" justifyContent="center">
//           <Typography
//             variant="h6"
//             sx={{
//               fontFamily: 'monospace',
//               letterSpacing: '2px',
//               color: '#fff',
//               border: '1px dashed #fff',
//               px: 2,
//               py: 1,
//               userSelect: 'none',
//             }}
//           >
//             {captcha}
//           </Typography>
//         </Box>

//         <Button
//           fullWidth
//           variant="contained"
//           color="primary"
//           sx={{ mt: 2 }}
//           onClick={handleSubmit}
//         >
//           Login
//         </Button>
//       </Paper>
//     </Box>
//   );
// };
// export default Login;




//*******(1B)********* */

// import { Box, TextField, Button, Typography, Paper } from '@mui/material';
// import { useState } from 'react';

// const Login = () => {
//   const [form, setForm] = useState({ username: '', password: '', captcha: '' });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = () => {
//     console.log(form);
//   };

//   return (
//     <Box sx={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       //background: 'url("https://images.unsplash.com/photo-1503264116251-35a269479413") no-repeat center/cover',
//     }}>
//       <Paper elevation={10} sx={{
//         p: 4,
//         width: 350,
//         bgcolor: 'rgba(255, 255, 255, 0.1)',
//         backdropFilter: 'blur(12px)',
//         borderRadius: 4,
//         boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
//         color: '#fff'
//       }}>
//         <Typography variant="h5" mb={3} align="center" color='#000'>Welcome</Typography>
//         <TextField fullWidth label="Username" name="username" onChange={handleChange} margin="normal" InputProps={{ style: { color: '#fff' } }} />
//         <TextField fullWidth label="Password" type="password" name="password" onChange={handleChange} margin="normal" InputProps={{ style: { color: '#fff' } }} />
//         <TextField fullWidth label="Enter Captcha: 7KRP" name="captcha" onChange={handleChange} margin="normal" InputProps={{ style: { color: '#fff' } }} />
//         <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>Login</Button>
//       </Paper>
//     </Box>
//   );
// };
// export default Login;



















//*******(2)********* */


















//*******(3)**********/

// import { Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
// import { useState } from 'react';

// const LoginPage3 = () => {
//   const [form, setForm] = useState({ username: '', password: '', captcha: '' });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = () => {
//     console.log(form);
//   };

//   return (
//     <Grid container sx={{ height: '100vh' }}>
//       <Grid item xs={12} md={6}
//         sx={{
//           background: 'url("https://source.unsplash.com/featured/?technology") center/cover no-repeat'
//         }}
//       />
//       <Grid item xs={12} md={6} sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f7fa',
//       }}>
//         <Paper elevation={3} sx={{ p: 4, width: '80%', maxWidth: 400 }}>
//           <Typography variant="h5" mb={3} align="center">User Login</Typography>
//           <TextField fullWidth label="Username" name="username" onChange={handleChange} margin="normal" />
//           <TextField fullWidth label="Password" type="password" name="password" onChange={handleChange} margin="normal" />
//           <TextField fullWidth label="Enter Captcha: PQ82" name="captcha" onChange={handleChange} margin="normal" />
//           <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>Login</Button>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default LoginPage3;