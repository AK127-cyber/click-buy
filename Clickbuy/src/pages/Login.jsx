import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios to communicate with backend
import "./Login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For handling error messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        if (response.data.isAdmin) {
          // If Admin login is successful
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("isAdmin", "true");  // Save admin status
          setError(""); // Clear any previous error
          navigate("/admin-dashboard"); // Redirect to Admin Dashboard
        } else {
          // If User login is successful
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("isAdmin", "false"); // Save non-admin status
          setError(""); // Clear any previous error
          navigate("/home"); // Redirect to Home
        }
      } else {
        setError("Invalid email or password"); // Invalid login attempt
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Login failed, please try again"); // General error
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="form-wrapper">
          <h2>Welcome back!</h2>
          <p>Enter your credentials to access your account</p>
          <form onSubmit={handleSubmit}>
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error-message">{error}</p>}
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember for 30 days</label>
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="divider">
            <span>or</span>
          </div>
        </div>
      </div>
      <div className="login-image-section">
        <img
          src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohi-807598.jpg&fm=jpg"
          alt="Leaf"
        />
      </div>
    </div>
  );
};

export default LoginPage;
