import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ code = 404, message = "Page Not Found" }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.code}>{code}</h1>
      <p style={styles.message}>{message}</p>
      <button style={styles.button} onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  code: {
    fontSize: "80px",
    fontWeight: "bold",
    color: "#f44336",
    margin: "0",
  },
  message: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
};

export default ErrorPage;
