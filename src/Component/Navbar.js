import {
  AppBar,
  Toolbar,
  Box,
  Typography,
 // InputBase,
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
//import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LoginIcon from '@mui/icons-material/Login';
import { motion } from 'framer-motion';
import AccessibilityBar from './AccessibilityBar';
import logo from '../images/cdaclogo2.png';
import { useState, useEffect } from 'react';
import SearchComponent from './SearchComponent';

export default function Navbar({ onFontSizeChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavigation = (page) => {
    console.log(`Navigating to ${page}`);
  };

  const menuItems = [

    {
      label: (
        <span style={{ fontSize: '0.85rem', color: 'black' }}>Home</span> // or '12px'
      ),
      icon: (
        <HomeIcon sx={{ fontSize: 18, color: '#07720aff' }} /> // smaller icon
      )
    },
    {
      label: (
        <span style={{ fontSize: '0.85rem',  color: 'black' }}>Contact</span> // or '12px'
      ),
      icon: (
        <ContactMailIcon sx={{ fontSize: 18, color: '#2196f3' }} /> // smaller icon
      )
    },
    {
      label: (
        <span style={{ fontSize: '0.85rem',  color: 'black' }}>Help</span> // or '12px'
      ),
      icon: (
        <HelpOutlineIcon sx={{ fontSize: 18, color: '#a5a322ff' }} /> // smaller icon
      )
    },
    {
      label: (
        <span style={{ fontSize: '0.85rem',  color: 'black' }}>Login</span> // or '12px'
      ),
      icon: (
        <LoginIcon sx={{ fontSize: 18, color: '#ff9800' }} /> // smaller icon
      )
    },
  ];

  const drawer = (
    <Box onClick={() => setMobileOpen(false)} sx={{ width: 240 }}>
      <List>
        {menuItems.map(({ label, icon }) => (
          <ListItem button key={label} onClick={() => handleNavigation(label.toLowerCase())}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [fontSize, setFontSize] = useState(16);
  const [showAccessibilityBar, setShowAccessibilityBar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setShowAccessibilityBar(window.scrollY < 50); // hide after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CssBaseline />
      {showAccessibilityBar && (
        <AccessibilityBar
          setFontSize={setFontSize}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      )}

      {/* Nav bar  */}

      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          mt: showAccessibilityBar ? 4 : 0,
          transition: 'margin-top 0.3s ease',
          background: '#c3e1f0ff',
          WebkitBackdropFilter: 'blur(12px) saturate(150%)',
          backdropFilter: 'blur(12px) saturate(150%)',
          color: '#000',
          zIndex: 1201,
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 48, sm: 40 }, // smaller height on mobile
            px: { xs: 1, sm: 2 },         // responsive horizontal padding
            justifyContent: 'space-between',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: { xs: 24, sm: 28 }, // responsive height
                alignSelf: 'center',
              }}
            />

          </motion.div>

          {/* Center - Search (Hide on small) */}
          {/* Right - Nav Items or Menu Icon */}
          {isMobile ? (
            <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {/* 🔍 Search bar with toggle (center) */}
              <SearchComponent />
              {menuItems.map(({ label, icon }) => (
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
                      {label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar >

      {/* Drawer for Mobile Menu */}
      < Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)
        }
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer >
    </>
  );
}