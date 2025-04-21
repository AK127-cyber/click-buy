import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Handles both success and error messages

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setMessage("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });

      if (res.status === 200 || res.status === 201) {
        setMessage("Signup successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMessage("Signup failed. Please try again.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Get Started Now</h2>

        {message && (
          <p
            className={`message ${
              message.includes("successful") ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <div className="terms">
          <label htmlFor="terms">
            <input type="checkbox" id="terms" />
            I agree to the <a href="#">terms & policy</a>
          </label>
        </div>

        <button className="signup-btn" onClick={handleSignup}>
          Signup
        </button>

        <p className="login-link">
          Or <br />
          Have an account? <a href="/login">Log In</a>
        </p>
      </div>

      <div className="signup-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsEcsraB8Yh5vD5Us3MSDIpS2XE5hs8XNKA&s"
          alt="Plant"
        />
      </div>
    </div>
  );
};

export default Signup;
