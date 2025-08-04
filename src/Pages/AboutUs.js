import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
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
                <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
                  Who We Are
                </Typography>
                <Typography variant="body1" sx={{ color: '#444' }}>
                  We are a team of passionate developers and designers dedicated to delivering modern, responsive, and user-friendly digital solutions. Our work focuses on combining functionality with elegant UI/UX to help businesses and users thrive in the digital era.
                </Typography>
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
                <Typography variant="body1" sx={{ color: '#444' }}>
                  Our mission is to bridge the gap between ideas and execution through quality code, innovative thinking, and client-first development. We aim to build solutions that are scalable, secure, and meaningful in real-world contexts.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Your Organization Name. All rights reserved.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
}