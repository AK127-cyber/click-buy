import React, { useState } from 'react';
import '../Admin/css/AdminProfileEdit.css';

const EditAdminProfile = () => {
  const [profileImage, setProfileImage] = useState("images/default-avatar.png");
  const [adminName, setAdminName] = useState("kamel");
  const [adminEmail, setAdminEmail] = useState("admin@example.com");
  const [adminPassword, setAdminPassword] = useState(""); // This should be initialized correctly

  // Handle file preview
  const previewFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save profile logic
  const saveProfile = () => {
    // Here you might want to do more checks and validations before saving
    if (!adminName || !adminEmail || !adminPassword) {
      alert("Please fill out all fields!");
      return;
    }
    alert("Profile updated successfully!");
    // Redirect or reset state as needed
    window.location.href = "./index.jsp"; // You might want to change this if you're using React Router
  };

  // Cancel edit action
  const cancelEdit = () => {
    window.location.href = "./ad_profile.jsp"; // You might want to change this if you're using React Router
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="/adminprofile">Profile</a></li>
          <li><a href="/vieworders">View Orders</a></li>
          <li><a href="/viewusers">View Users</a></li>
          <li><a href="/additems">Add Items</a></li>
          <li><a href="/edititems">Edit Items</a></li>
          <li><a href="/deleteitems">Delete Items</a></li>
          <li><a href="/" className="logout">Logout</a></li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Edit Profile</h1>
        <div className="edit-container">
          <img src={profileImage} className="profile-picture" alt="Admin Profile" />
          <input type="file" className="file-input" accept="image/*" onChange={previewFile} />
          
          <label>Name</label>
          <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
          
          <label>Email</label>
          <input type="email" value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
          
          <label>New Password</label>
          <input 
            type="password" 
            placeholder="Enter new password" 
            value={adminPassword} // Make sure to bind the value of password to state
            onChange={(e) => setAdminPassword(e.target.value)} 
          />
          
          <button className="btn save-btn" onClick={saveProfile}>Save Changes</button>
          <button className="btn cancel-btn" onClick={cancelEdit}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditAdminProfile;
