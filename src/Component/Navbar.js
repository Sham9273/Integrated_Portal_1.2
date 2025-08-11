import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  CssBaseline,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LoginIcon from '@mui/icons-material/Login';
import { motion } from 'framer-motion';
import AccessibilityBar from './AccessibilityBar';
import logo from '../images/cdaclogo2.png';
import { useState, useEffect } from 'react';
import SearchComponent from './SearchComponent';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import BaseLocal from '../URLS/BaseLocal';
import Logout from '../LoginWithEpramaan/Logout';
import { Dialog, DialogContent } from '@mui/material';
import LoginWithEpramaan from '../LoginWithEpramaan/LoginPageWithEpramaan';

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [loginOpen, setLoginOpen] = useState(false);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(BaseLocal + 'authenticatelogin', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await res.json();
        if (data.authenticated === "true") {
          setIsAuthenticated(true);
          setUsername(data.username);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error('Error checking auth:', err);
      }
    };

    checkAuth();
  }, []);


  const handleNavigation = (page) => {
    switch (page) {
      case 'home':
        navigate('/intportal');
        break;
      case 'contact':
        navigate('/intportal/contact');
        break;
      case 'help':
        navigate('/intportal/help');
        break;
      case 'login':
        navigate('/intportal/login');
        break;
      case 'aboutus':
        navigate('/intportal/aboutus');
        break;
      default:
        break;
    }
  };

  const menuItems = [
    {
      label: 'Home',
      icon: <HomeIcon sx={{ fontSize: 18, color: '#07720a' }} />,
      onClick: () => handleNavigation('home')
    },
    {
      label: 'Contact',
      icon: <ContactMailIcon sx={{ fontSize: 18, color: '#2196f3' }} />,
      onClick: () => handleNavigation('contact')
    },
    {
      label: 'Help',
      icon: <HelpOutlineIcon sx={{ fontSize: 18, color: '#a5a322' }} />,
      onClick: () => handleNavigation('help')
    },
    // isAuthenticated
    //   ? {
    //     // custom: (
    //     //   <Logout
    //     //     onLogout={() => {
    //     //       setIsAuthenticated(false);
    //     //       setUsername('');
    //     //       navigate('/intportal');
    //     //     }}
    //     //   />
    //     // )

    //      label: 'Logout',
    //   }
    //   : {
    //     label: 'Login',
    //     icon: <LoginIcon sx={{ fontSize: 18, color: '#ff9800' }} />,
    //     onClick: () => setLoginOpen(true) // <-- open modal instead of navigation
    //   }
  ];


  // const drawer = (
  //   <Box onClick={() => setMobileOpen(false)} sx={{ width: 240 }}>
  //     <List>
  //       {menuItems.map(({ label, icon }) => (
  //         <ListItem button key={label} onClick={() => handleNavigation(label.toLowerCase())}>
  //           <ListItemIcon>{icon}</ListItemIcon>
  //           <ListItemText primary={
  //             <span style={{ fontSize: '0.85rem', color: 'black' }}>{label}</span>
  //           } />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  // drawer stays same except menuItems now has dynamic Login/Logout
  const drawer = (
    <Box onClick={() => setMobileOpen(false)} sx={{ width: 240 }}>
      <List>
        {menuItems.map(({ label, icon }) => (
          <ListItem button key={label} onClick={() => handleNavigation(label.toLowerCase())}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText
              primary={<span style={{ fontSize: '0.85rem', color: 'black' }}>{label}</span>}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [darkMode, setDarkMode] = useState(false);



  return (
    <>
      <CssBaseline />

      {/* Sticky AccessibilityBar + Navbar */}

      <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 1201 }}>
        <AccessibilityBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <AppBar
          position="static"
          elevation={4}
          sx={{
            background: 'linear-gradient(to right, #96d0edff, #f1f4f6ff)',
            WebkitBackdropFilter: 'blur(12px) saturate(150%)',
            backdropFilter: 'blur(12px) saturate(150%)',
            color: '#000',
          }}
        >
          <Toolbar
            sx={{
              minHeight: { xs: 48, sm: 40 },
              px: { xs: 1, sm: 2 },
              justifyContent: 'space-between',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Box
                component={RouterLink}
                to="/intportal"
                sx={{ display: 'inline-block', cursor: 'pointer' }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Logo"
                  sx={{
                    height: { xs: 24, sm: 28 },
                    alignSelf: 'center',
                  }}
                />
              </Box>
            </motion.div>

            {isMobile ? (
              <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 3 }}>
                <SearchComponent />
                {/* {menuItems.map(({ label, icon }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleNavigation(label.toLowerCase())}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {icon}
                      <Typography
                        variant="button"
                        sx={{
                          color: '#fff',
                          fontWeight: 400,
                          fontSize: '0.95rem',
                          '&:hover': { color: '#000' },
                        }}
                      >
                        <span style={{ fontSize: '0.85rem', color: 'black', fontFamily: 'Cambria, serif' }}>
                          {label}
                        </span>
                      </Typography>
                    </Box>
                  </motion.div>
                ))} */}

                {/* Common menu items */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleNavigation('home')}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <HomeIcon sx={{ fontSize: 18, color: '#07720aff' }} />
                    <Typography variant="button" sx={{ color: '#000' }}>Home</Typography>
                  </Box>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleNavigation('contact')}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ContactMailIcon sx={{ fontSize: 18, color: '#2196f3' }} />
                    <Typography variant="button" sx={{ color: '#000' }}>Contact</Typography>
                  </Box>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleNavigation('help')}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <HelpOutlineIcon sx={{ fontSize: 18, color: '#a5a322ff' }} />
                    <Typography variant="button" sx={{ color: '#000' }}>Help</Typography>
                  </Box>
                </motion.div>

                {/* Login / Logout button */}
                {isAuthenticated ? (
                  //  <Logout onLogout={() => setIsAuthenticated(false)} />

                  <Logout onLogout={() => setIsAuthenticated(false)} />
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setLoginOpen(true)}
                  >
                    {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LoginIcon sx={{ fontSize: 18, color: '#ff9800' }} />
                      <Typography variant="button" sx={{ color: '#000' }}>
                        Login
                      </Typography>
                    </Box> */}

                    <Box
                      // onClick={handleLogin}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        backgroundColor: '#ffffff',
                        border: '1px solid #ff9800',       // orange accent
                        // borderRadius: '6px',
                        // padding: '6px 12px',
                        // cursor: 'pointer',

                        borderRadius: '4px',                // slightly smaller radius
                        padding: '2px 4px',                 // reduced padding
                        fontSize: '0.5rem',                  // smaller font size
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          backgroundColor: '#fff3e0',      // subtle orange tint
                          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                        },
                        '&:active': {
                          transform: 'scale(0.97)',
                        }
                      }}
                    >
                      <LoginIcon sx={{ fontSize: 18, color: '#ff9800' }} />
                      <Typography
                        variant="button"
                        sx={{
                          color: '#ff9800',
                          fontWeight: 'bold',
                          textTransform: 'none',
                        }}
                      >
                        Login
                      </Typography>
                    </Box>


                  </motion.div>
                )}

              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Margin top to prevent content from hiding under fixed header */}
      <Box sx={{ mt: '80px' }} />

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Dialog open={loginOpen} onClose={() => setLoginOpen(false)} maxWidth="sm" fullWidth>
        <DialogContent>
          <LoginWithEpramaan onSuccess={() => {
            setIsAuthenticated(true);
            setLoginOpen(false);
          }} />
        </DialogContent>
      </Dialog>

    </>
  );
}