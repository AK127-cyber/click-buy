import React from "react";
import "./Adminlogin.css";
import { Link } from "react-router-dom";
const AdminLogin = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h2 className="login-title">Admin Login</h2>
        <form className="login-form">
          <label>
            Email Address
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter Password" />
          </label>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>

      <div className="login-right">
        <img
          src="/images/plant-bg.jpg" // Replace with the path to your image
          alt="Plant background"
          className="login-image"
        />
      </div>
    </div>
  );
};

export default AdminLogin;
