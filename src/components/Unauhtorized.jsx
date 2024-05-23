import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>403 - Unauthorized</h1>
      <p style={styles.message}>
        You do not have permission to access this page.
      </p>
      <button onClick={goBack} style={styles.button}>
        Go Back
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  header: {
    fontSize: "48px",
    margin: "20px 0",
  },
  message: {
    fontSize: "24px",
    margin: "20px 0",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default Unauthorized;
