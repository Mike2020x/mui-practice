import { useState } from "react";
import { TextField, Box, Button } from "@mui/material";

export default function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError({
        error: false,
        message: "",
      });
      console.log("Email correcto");
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    }
  };
  return (
    <>
      <h1>Register</h1>

      <Box
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          helperText={error.message}
          error={error.error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}
