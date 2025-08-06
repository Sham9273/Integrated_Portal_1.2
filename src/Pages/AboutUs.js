import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center', fontFamily: 'Cambria, serif' }}>
          About Us
        </Typography>

        <Typography variant="subtitle1" sx={{ color: '#555', textAlign: 'center', mb: 4 }}>
          Empowering Innovation Through Technology
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                {/* <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
                  Who We Are
                </Typography> */}
                <Typography variant="body1" sx={{ color: '#444', textAlign: 'justify' }}>
                  The Unified Dashboard has been developed by the Centre for Development of Advanced Computing (C-DAC), an autonomous scientific society under the Ministry of Electronics and Information Technology, Government of India. This platform is designed to offer a consolidated view of various services offered by C-DAC through a single, user-friendly interface.
                  The integration of the Unified Dashboard with e-Pramaan Single Sign-On (SSO) has been completed. The system will be launched soon after incorporating all SITS (Services, Infrastructure, Tools & Solutions) services into the SSO framework. This initiative aims to streamline access, improve efficiency, and enhance user experience across C-DAC’s digital ecosystem. </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#43a047' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: '#444', textAlign: 'justify' }}>
                  To provide a unified, secure, and seamless access point to C-DAC's diverse range of services through a centralized dashboard, empowering users with efficient, integrated digital solutions. We are committed to supporting transparency, accessibility, and technological excellence in public service delivery.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          {/* <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Your Organization Name. All rights reserved.
          </Typography> */}
        </Box>
      </motion.div>
    </Container>
  );
}