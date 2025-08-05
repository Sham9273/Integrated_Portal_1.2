import { useState, useEffect } from 'react';
import { Box, IconButton, Tooltip, Typography, Stack } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  FormatLineSpacing,
  Visibility,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AccessibilityBar = ({  darkMode, setDarkMode }) => {

const [fontSize, setFontSize] = useState(16); // default size

const increaseFont = () => {
  const newSize = Math.min(22, fontSize + 2); // cap at 22px
  setFontSize(newSize);
  document.documentElement.style.fontSize = `${newSize}px`;
};

const decreaseFont = () => {
   const newSize = Math.max(12, fontSize - 2); // don't go below 12px
  setFontSize(newSize);
  document.documentElement.style.fontSize = `${newSize}px`;
};




  const [lineSpacing, setLineSpacing] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.body.style.lineHeight = lineSpacing ? '2' : 'normal';
  }, [lineSpacing]);

  useEffect(() => {
    document.body.style.filter = highContrast ? 'contrast(150%)' : 'none';
  }, [highContrast]);

  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          mt: 0,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '4px 16px',
          gap: 1,
          height: 'auto',
          backgroundColor: 'rgb(44, 62, 80)',
        }}
      >
        {/* Static Accessibility Icon */}

        <Stack direction="row" alignItems="center" spacing={1}>
          <Tooltip title="A+ Increase Font">
            <IconButton size="small" onClick={increaseFont} >
              <Typography variant="body2" fontWeight="bold" sx={{ color: '#fff' }}>A+</Typography>
            </IconButton>
          </Tooltip>

          <Tooltip title="A- Decrease Font">
            <IconButton size="small" onClick={decreaseFont}>
              <Typography variant="body2" fontWeight="bold" sx={{ color: '#fff' }}>A-</Typography>
            </IconButton>
          </Tooltip>

          <Tooltip title="Toggle Theme">
            <IconButton size="small" onClick={() => setDarkMode(!darkMode)}>
              {darkMode
                ? <Brightness7Icon fontSize="small" sx={{ color: '#fff' }} />
                : <Brightness4Icon fontSize="small" sx={{ color: '#fff' }} />}
            </IconButton>
          </Tooltip>

          <Tooltip title="Toggle Line Spacing">
            <IconButton size="small" onClick={() => setLineSpacing(!lineSpacing)}>
              <FormatLineSpacing fontSize="small" sx={{ color: '#fff' }} />
            </IconButton>
          </Tooltip>

          <Tooltip title="High Contrast Mode">
            <IconButton size="small" onClick={() => setHighContrast(!highContrast)}>
              <Visibility fontSize="medium" sx={{ color: '#fff' }} />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </motion.div>
  );
};
export default AccessibilityBar;