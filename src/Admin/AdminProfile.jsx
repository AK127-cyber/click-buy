import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminProfile = () => {
  const navigate = useNavigate();

  // Admin state
  const [admin] = useState({
    name: "Kamel",
    email: "admin@example.com",
    profileImage: "images/default-avatar.png",
  });

  const handleEditProfile = () => {
    navigate("/editadminprofile");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminSession");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/adminprofile">Profile</Link></li>
          <li><Link to="/vieworders">View Orders</Link></li>
          <li><Link to="/viewusers">View Users</Link></li>
          <li><Link to="/additems">Add Items</Link></li>
          <li><Link to="/edititems">Edit Items</Link></li>
          <li><Link to="/deleteitems">Delete Items</Link></li>
          <li>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-700">Admin Profile</h1>
        <div className="w-1/2 mx-auto bg-white p-6 shadow-md rounded-lg text-center mt-6">
          <img
            src={admin.profileImage}
            alt="Admin"
            className="w-32 h-32 rounded-full mx-auto"
          />
          <div className="mt-4 text-lg">
            <p><strong>Name:</strong> {admin.name}</p>
            <p><strong>Email:</strong> {admin.email}</p>
            <p><strong>Role:</strong> Administrator</p>
          </div>
          <button
            onClick={handleEditProfile}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
