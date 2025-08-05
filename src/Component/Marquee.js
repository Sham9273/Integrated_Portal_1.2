import { Box, Typography } from '@mui/material';

const Marquee = () => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        backgroundColor: '#e3f2fd',
        py: 1,
        borderTop: '2px solid #90caf9',
        borderBottom: '2px solid #90caf9',
        fontWeight: 'bold',
        // fontSize: '1rem',
        position: 'relative',
        py: { xs: 0.5, sm: 0.1 }, // Smaller padding, responsive
        fontSize: { xs: '0.75rem', sm: '0.5rem' }, // Responsive text size
        
      }}
    >
      <Typography
        component="div"
        sx={{
          display: 'inline-block',
          animation: 'marquee 20s linear infinite',
          color: '#1565c0',
        }}
      >
        🚀 Welcome to the Integrated Portal! | 📢 Stay updated with services. | 🔒 Secure login enabled. | 🎯 Fast, Transparent, and User-Friendly.
      </Typography>

      {/* Keyframe CSS injected directly */}
      <style>
        {`
          @keyframes marquee {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Box>
  );
};
export default Marquee;