import './Footer.css';

import {
  Box,
  Typography,
  Link,
  Stack,
  Divider,
  Fade
} from '@mui/material';
import {
  Facebook,
  Twitter,
  YouTube,
  Email,
  Link as LinkIcon,
  Bookmark,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box className="footer-container">
      <Box className="logo-box">
      </Box>

      {/* Main Content*/}
      <Box className="footer-content">
        <Fade in timeout={1500}>
          <Box textAlign="center">
            <Typography variant="h5" fontWeight="bold" fontFamily={'Cambria, serif'} gutterBottom color='#000'sx={{textDecoration:'underline'}}>
              Help us in making it better
            </Typography>
            <Typography color='#2c3e50' fontFamily={'Cambria, serif'}>
              We welcome your participation in enhancing the directory further and also invite your comments and suggestions for improvement.
              {/* Help us improve the directory — share your feedback or suggestions. */}
            </Typography>

            <Divider className="footer-divider" />
<br/>

            <Stack
              spacing={1}
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              gap={2}
              mb={3}
            >
          
              <Link href="#" className="footer-link">
                <LinkIcon fontSize="small" className="link-icon" />
                Link To Us
              </Link>
              <Link href="#" className="footer-link">
                <Bookmark fontSize="small" className="link-icon" />
                Bookmark This Page
              </Link>
            </Stack>

            <Typography variant="h6" fontWeight="bold" gutterBottom color='#000' fontFamily={'Cambria, serif'}>
              Connect With Us
            </Typography>

            <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
              <Link href="#" className="social-icon facebook">
                <Facebook className="icon" />
              </Link>
              <Link href="#" className="social-icon twitter">
                <Twitter className="icon" />
              </Link>
              <Link href="#" className="social-icon youtube">
                <YouTube className="icon" />
              </Link>
              <Link href="mailto:support@gov.in" className="social-icon email">
                <Email className="icon" />
              </Link>
            </Stack>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};
export default Footer;