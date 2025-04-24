//src/pages/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../Admin/css/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
       <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="/adminprofile">Profile</a></li>
          <li><a href="/vieworders">View Orders</a></li>
          <li><a href="/viewusers">View Users</a></li>
          <li><a href="/additems">Add Items</a></li>
          <li><a href="/edititems">Edit Items</a></li>
          <li><a href="/deleteitems" >Delete Items</a></li>
          <li><a href="/" className="logout">Logout</a></li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome, Admin!</h1>
        <p>Select an option from the sidebar to manage your dashboard efficiently.</p>
        <div className="right-image">
          <img src="../images/a12.webp" alt="Dashboard" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
