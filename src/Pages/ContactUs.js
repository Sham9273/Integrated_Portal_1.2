import { useState } from 'react';
import {
  //Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Message sent! (We can replace this with actual logic)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 12, mb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center', mb: 4, color: '#555' }}>
          We'd love to hear from you. Fill out the form below or reach us directly.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={8} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  sx={{ mb: 2 }}
                  required
                />
                <Button type="submit" variant="contained" sx={{ backgroundColor: '#1976d2' }}>
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h6" gutterBottom sx={{ color: '#43a047' }}>
                Reach Us At
              </Typography>
              <Typography variant="body1" sx={{ color: '#444', mb: 1 }}>
                📍 Centre for Development of Advanced Computing
                Gulmohar Cross Road No. 9,Juhu, Mumbai - 400 049.
              </Typography>
              <Typography variant="body1" sx={{ color: '#444', mb: 1 }}>
                📧 contact@cdacproject.org
              </Typography>
              <Typography variant="body1" sx={{ color: '#444' }}>
                ☎️ +91-**********
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}