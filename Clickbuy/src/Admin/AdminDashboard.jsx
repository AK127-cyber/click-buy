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
          <li><Link to="/admin/profile">Profile</Link></li>
          <li><Link to="/admin/orders">View Orders</Link></li>
          <li><Link to="/admin/users">View Users</Link></li>
          <li><Link to="/admin/add-items">Add Items</Link></li>
          <li><Link to="/admin/edit-items">Edit Items</Link></li>
          <li><Link to="/admin/delete-items">Delete Items</Link></li>
          <li><a href="#">Logout</a></li>
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
