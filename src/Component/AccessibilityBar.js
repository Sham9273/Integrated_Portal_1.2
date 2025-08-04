import { useState, useEffect } from 'react';
import { Box, IconButton, Tooltip, Typography, Stack } from '@mui/material';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  FormatLineSpacing,
  Visibility,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AccessibilityBar = ({ setFontSize, darkMode, setDarkMode }) => {
  const increaseFont = () => setFontSize(prev => Math.min(prev + 2, 24));
  const decreaseFont = () => setFontSize(prev => Math.max(prev - 2, 12));

  const [lineSpacing, setLineSpacing] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

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
          mt:8,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: '4px 16px',
          gap: 1,
          height: '40px',
          background: 'linear-gradient(to right, #9dd0f1ff, #37474f)',
        }}
      >
        {/* Accessibility Icon */}
        <Tooltip title="Accessibility Options">
          <IconButton size="large" onClick={() => setShowOptions(!showOptions)}>
            <AccessibilityNewIcon sx={{ fontSize: 22, color: '#fff' }} />
          </IconButton>
        </Tooltip>

        {/* Conditionally shown icons */}
        {showOptions && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Tooltip title="A+ Increase Font">
              <IconButton size="large" onClick={increaseFont}>
                <Typography variant="body2" fontWeight="bold" sx={{ color: '#fff' }}>A+</Typography>
              </IconButton>
            </Tooltip>

            <Tooltip title="A- Decrease Font">
              <IconButton size="large" onClick={decreaseFont}>
                <Typography variant="body2" fontWeight="bold" sx={{ color: '#fff' }}>A-</Typography>
              </IconButton>
            </Tooltip>

            <Tooltip title="Toggle Theme">
              <IconButton size="large" onClick={() => setDarkMode(!darkMode)}>
                {darkMode
                  ? <Brightness7Icon fontSize="small" sx={{ color: '#fff' }} />
                  : <Brightness4Icon fontSize="small" sx={{ color: '#fff' }} />}
              </IconButton>
            </Tooltip>

            <Tooltip title="Toggle Line Spacing">
              <IconButton size="large" onClick={() => setLineSpacing(!lineSpacing)}>
                <FormatLineSpacing fontSize="small" sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="High Contrast Mode">
              <IconButton size="large" onClick={() => setHighContrast(!highContrast)}>
                <Visibility fontSize="medium" sx={{ color: '#fff' }} />
              </IconButton>
            </Tooltip>
          </Stack>
        )}
      </Box>
    </motion.div>
  );
};
export default AccessibilityBar;