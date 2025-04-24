import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 Static Admin Credentials (Frontend-only for demo/testing)
  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // ✨ Check if it's the hardcoded admin login
    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("isAdmin", "true");
      setError("");
      navigate("/admindashboard");  
      return;
    }

    // 👤 Normal user login via backend
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isAdmin", "false");
        setError("");
        navigate("/home");
      } else {
        setError(response.data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed, please try again later");
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
             
            <button type="submit">Login</button>

            <p className="login-link">
          Or <br />
          Haven't account? <a href="/signup">sign Up</a>
        </p>
          </form>
        </div>
      </div>
      <div className="login-image-section">
        <img
          src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg"
          alt="Leaf"
        />
      </div>
    </div>
  );
};

export default LoginPage;
