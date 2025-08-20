import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode, // 'light' or 'dark'
      ...(mode === 'light'
        ? {
            // custom light colors
            background: {
              default: '#f5f5f5',
              paper: '#fff',
            },
            text: {
              primary: '#000',
            },
          }
        : {
            // custom dark colors
            background: {
              default: '#121212',
              paper: '#1e1e1e',
            },
            text: {
              primary: '#fff',
            },
          }),
    },
    typography: {
      fontFamily: 'Cambria, serif',
    },
  });