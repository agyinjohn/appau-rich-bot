import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [redirect, setIsLoading] = useState(false);
  const onsubmitForm = async (ev) => {
    ev.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Acess-Control-Allow-Origin": "*",
        },
      });
      const res = await response.json();
      console.log(res);
      if (response.ok) {
        localStorage.setItem("AuthToken", res.data.token);
        setEmail("");
        setPassword("");
        setIsLoading(false);
        setRedirect(true);
      } else {
        toast.error(res.error);
      }

      // toast.error(res);
    } catch (error) {
      setIsLoading(false);
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Sign in with Google");
  };

  const handleFacebookSignIn = () => {
    // Handle Facebook sign-in logic here
    console.log("Sign in with Facebook");
  };

  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  if (redirect) {
    return <Navigate to={"/chatbot"} />;
  }

  return (
    <div>
      <Box
        minHeight={400}
        maxHeight={600}
        minWidth={400}
        maxWidth={500}
        sx={{ margin: "auto" }}
      >
        <div className="login-container">
          <form className="login-form" onSubmit={onsubmitForm}>
            <h2
              style={{
                fontFamily:
                  " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontSize: "250%",
                fontWeight: "bold",
              }}
            >
              Login
            </h2>
            <div className="form-group">
              <label
                style={{
                  fontFamily:
                    " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  fontSize: "160%",
                  fontWeight: "bold",
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label
                style={{
                  fontFamily:
                    " 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  fontSize: "160%",
                  fontWeight: "bold",
                }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              {isLoading ? "Loading" : "Login"}
            </button>
          </form>
          <div className="sign-up-link">
            <button>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Login;
