import React, { useEffect } from "react";
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import { Link } from "react-router-dom";

const siteMapLinks = [
    { label: "Home", to: "/intportal" },
    { label: "Login", to: "/login" },
    { label: "About Us", to: "/aboutus" },
    { label: "Contact Us", to: "/contact" },
    { label: "Help", to: "/help" },
    { label: "Website Policy", to: "/websitepolicy" },

    // { label: "Feedback", to: "/feedback" },
    // Add more links as needed
];

const SiteMap = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container maxWidth="sm" sx={{ mt: 12, mb: 8 }}>
            <Box sx={{ p: 4, bgcolor: "#fff", borderRadius: 3, boxShadow: 6}}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center", color: "#1976d2" }}>
                    Site Map
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 3, color: "#555" }}>
                    Quick navigation to all major sections of the portal.
                </Typography>
                <List>
                    {siteMapLinks.map((item) => (
                        <ListItem key={item.to} disablePadding>
                            <ListItemIcon>
                                <LinkIcon sx={{ color: "#1976d2" }} />
                            </ListItemIcon>
                            <ListItemText>
                                <Link to={item.to} style={{ textDecoration: "none", color: "#1976d2", fontWeight: "bold" }}>
                                    {item.label}
                                </Link>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
};
export default SiteMap;