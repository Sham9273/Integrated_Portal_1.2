// import React from 'react';
import { useEffect } from "react";
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export default function WebsitePolicy() {
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
                    Website Policy
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 100 }}
                        >
                            <Paper elevation={10} sx={{ p: 4 }}>
                                <Typography variant="body1" sx={{ color: '#444', textAlign: 'justify' }}>
                                    This is the official website of the Centre for Development of Advanced Computing (C-DAC), an autonomous scientific society under the Ministry of Electronics and Information Technology, Government of India. The website has been designed, developed, and is maintained by C-DAC.
                                    The objective of this site is to provide accurate, comprehensive, and reliable information about C-DAC and its various groups and divisions.<br/>It has been developed for the benefit of the general public, stakeholders, and partner organizations.
                                    Efforts have been made to ensure that the information on this site is up-to-date and accessible. Hyperlinks to various Indian Government portals and websites are provided for broader reference. The content on this website is the result of collaborative contributions from different departments and divisions within C-DAC.
                                    We are committed to continuously enhancing the website in terms of content coverage, user experience, and technological upgrades.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </motion.div>
        </Container>
    );
}
