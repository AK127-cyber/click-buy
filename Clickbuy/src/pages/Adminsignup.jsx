import React from "react";
import { Link } from "react-router-dom";
import "./Adminsignup.css";

const Adminsignup = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2 className="signup-title">Admin Signup</h2>
        <form className="signup-form">
          <label>
            Name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email Address
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter Password" />
          </label>
          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>
        <div className="signup-or">Or</div>
        <p className="login-text">
          Have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>

      <div className="signup-right">
        <img
          src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?cs=srgb&dl=pexels-sohi-807598.jpg&fm=jpg" // 📸 Make sure this image exists in public/images/
          alt="Plant background"
          className="signup-image"
        />
      </div>
    </div>
  );
};

export default Adminsignup;
