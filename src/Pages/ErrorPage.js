import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ code = 404, message = "Page Not Found" }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
        px: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: "center",
          maxWidth: 400,
          borderRadius: 3
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 60, color: "#d32f2f", mb: 2 }} />
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontFamily: "Cambria, serif",
            color: "#d32f2f"
          }}
        >
          {code}
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontFamily: "Cambria, serif", fontStyle: "italic" }}
        >
          {message}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/intportal")}
        >
          Go Home
        </Button>
      </Paper>
    </Box>
  );
};

export default ErrorPage;
