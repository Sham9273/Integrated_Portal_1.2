import { Box, Typography } from '@mui/material';

const Marquee = () => {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        py: 0.3,
        fontSize: { xs: '0.7rem', sm: '0.8rem' },
      }}
    >
      <Typography
        component="div"
        sx={{
          display: 'inline-block',
       
          animation: 'marquee 40s linear infinite', // slowed down
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