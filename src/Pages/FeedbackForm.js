import React, { useState, useEffect } from 'react';

import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';

export default function FeedbackForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    email: '',
    rating: 0,
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (e, newValue) => {
    setFeedbackData((prev) => ({ ...prev, rating: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedbackData);
    alert('Thank you for your feedback!');
    setFeedbackData({ name: '', email: '', rating: 0, comments: '' });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 12, mb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Paper elevation={10} sx={{ p: 4, borderRadius: 3, width: 350, mx: 'auto' }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Feedback Form
          </Typography>
          <Typography variant="subtitle2" gutterBottom sx={{ textAlign: 'center', color: '#555', mb: 3 }}>
            We value your thoughts! Let us know how we're doing.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              size='small'
              value={feedbackData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              size='small'
              value={feedbackData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
            <Box sx={{ mb: 2 }}>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Rate Your Experience:
              </Typography>
              <Rating
                name="rating"
                value={feedbackData.rating}
                onChange={handleRatingChange}
              />
            </Box>
            <TextField
              fullWidth
              label="Comments"
              name="comments"
              multiline
              rows={4}
              value={feedbackData.comments}
              onChange={handleChange}
              sx={{ mb: 3 }}
              required
            />
            <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: '#43a047' }}>
              Submit Feedback
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Container>
  );
}