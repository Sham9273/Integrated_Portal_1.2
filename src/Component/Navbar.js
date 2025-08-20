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
// import SearchComponent from './SearchComponent';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import BaseLocal from '../URLS/BaseLocal';
import Logout from '../LoginWithEpramaan/Logout';
import LoginWithEpramaan from '../LoginWithEpramaan/LoginPageWithEpramaan';

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  // const [, setActiveCard] = useState('');
  const [setUsername] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch(BaseLocal + 'authenticatelogin', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await res.json();
        if (data.authenticated === 'true') {
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
  }, [setIsAuthenticated]);

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
      onClick: () => handleNavigation('home'),
    },
    {
      label: 'Contact',
      icon: <ContactMailIcon sx={{ fontSize: 18, color: '#2196f3' }} />,
      onClick: () => handleNavigation('contact'),
    },
    {
      label: 'Help',
      icon: <HelpOutlineIcon sx={{ fontSize: 18, color: '#a5a322' }} />,
      onClick: () => handleNavigation('help'),
    },
  ];

  const drawer = (
    <Box sx={{ width: 240 }} onClick={() => setMobileOpen(false)}>
      <List>
        {menuItems.map(({ label, icon, onClick }) => (
          <ListItem button key={label} onClick={onClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText
              primary={
                <span style={{ fontSize: '0.85rem', color: 'black' }}>{label}</span>
              }
            />
          </ListItem>
        ))}

        {/* Login / Logout in Drawer */}
        <ListItem button>
          {isAuthenticated ? (
            <Logout onLogout={() => setIsAuthenticated(false)} />
          ) : (
            <>
              <ListItemIcon>
                <LoginIcon sx={{ fontSize: 18, color: '#ff9800' }} />
              </ListItemIcon>
              <LoginWithEpramaan />
            </>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />

      {/* Sticky Navbar */}
      <Box sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 1201 }}>
        <AccessibilityBar darkMode={darkMode} setDarkMode={setDarkMode} />

        <AppBar
          position="static"
          elevation={6}
          sx={{
            background: 'linear-gradient(to right, #96d0edff, #f1f4f6ff)',
            backdropFilter: 'blur(12px) saturate(150%)',
            color: '#000',
          }}
        >
          <Toolbar
            sx={{
              minHeight: { xs: 30, sm: 38 }, // <-- Change these for smaller height
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
                {/* <SearchComponent setActiveCard={setActiveCard} /> */}

                {menuItems.map(({ label, icon, onClick }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClick}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      {icon}
                      <Typography
                        variant="button"
                        sx={{ color: '#000', fontFamily: 'Cambria, serif' }}
                      >
                        {label}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}

                {isAuthenticated ? (
                  <Logout onLogout={() => setIsAuthenticated(false)} />
                ) : (
                  <LoginWithEpramaan />
                )}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Spacer to push content below fixed header */}
      <Box sx={{ height: { xs: 56, sm: 56 } }} /> {/* AccessibilityBar + AppBar height */}

      {/* Mobile Drawer */}
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
    </>
  );
}