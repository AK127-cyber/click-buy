import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="form-section">
        <h1>Admin Signup</h1>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter Password" />

          <button type="submit">Signup</button>
        </form>
        <div className="login-link">
          <p>Or</p>
          <p>
            Have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
      <div className="image-section">
        <img src="/mnt/data/c00d8408-e9c6-47ce-af31-1aa8eccc4a12.png" alt="Leaf background" />
      </div>
    </div>
  );
};

export default App;
