import { Box, Stack, Typography, Fade, Slide } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const QuickLinksFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2c3e50',
        color: '#fff',
        py: { xs: 3, sm: 4 },
        px: { xs: 2, sm: 6 },
        textAlign: 'center',
      }}
    >
      <Slide direction="up" in={true} timeout={800}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ mb: 2, fontFamily: 'Cambria, serif' }}
        >
          {/* {[
            'About Us',
            'Help',
            'Sitemap',
            'Website Policies',
            'Feedback',
            'Contact Us',
          ].map((text, idx) => (
            <Link
              key={idx}
              href="#"
              underline="none"
              sx={{
                color: '#f1f1f1',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  color: '#00e5ff',
                },
              }}
            >
              {text}
            </Link>
          ))} */}
          {[
            { text: 'About Us', to: '/aboutus' },
            { text: 'Help', to: '/help' },
            { text: 'Sitemap', to: '#' },
            { text: 'Website Policies', to: '/websitepolicy' },
            { text: 'Feedback', to: '/feedback' },
            { text: 'Contact Us', to: '/contact' },
          ].map(({ text, to }, idx) => (
            <MuiLink
              key={idx}
              component={to !== '#' ? RouterLink : 'a'}
              to={to !== '#' ? to : undefined}
              href={to === '#' ? '#' : undefined}
              underline="none"
              sx={{
                color: '#f1f1f1',
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  color: '#00e5ff',
                },
              }}
            >
              {text}
            </MuiLink>
          ))}
        </Stack>
      </Slide>

      <Fade in={true} timeout={1200}>
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.8rem', sm: '0.9rem' },
              fontFamily: 'Cambria, serif',
            }}
          >
            © 2025 Copyright: <strong>C-DAC.</strong> All Rights Reserved
          </Typography>

          <Typography
            variant="body2"
            mt={1}
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.85rem' },
              fontFamily: 'Cambria, serif',
            }}
          >
            Last Updated:{' '}
            <strong>
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              })}
            </strong>
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
};
export default QuickLinksFooter;