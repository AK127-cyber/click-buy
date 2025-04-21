import React, { useState } from 'react';
import '../Admin/css/AdminProfileEdit.css';

const EditAdminProfile = () => {
    const [profileImage, setProfileImage] = useState("images/default-avatar.png");
    const [adminName, setAdminName] = useState("kamel");
    const [adminEmail, setAdminEmail] = useState("admin@example.com");
    const [adminPassword, setAdminPassword] = useState("");

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

    const saveProfile = () => {
        alert("Profile updated successfully!");
        window.location.href = "./index.jsp";
    };

    const cancelEdit = () => {
        window.location.href = "./ad_profile.jsp";
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li><a href="./ad_profile.jsp">Profile</a></li>
                    <li><a href="./view_orders.jsp">View Orders</a></li>
                    <li><a href="./view_user.jsp">View Users</a></li>
                    <li><a href="./add_items.jsp">Add Items</a></li>
                    <li><a href="./edit_items.jsp">Edit Items</a></li>
                    <li><a href="./delete_items.jsp">Delete Items</a></li>
                    <li><a href="#" className="logout">Logout</a></li>
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
                    <input type="password" placeholder="Enter new password" onChange={(e) => setAdminPassword(e.target.value)} />
                    <button className="btn save-btn" onClick={saveProfile}>Save Changes</button>
                    <button className="btn cancel-btn" onClick={cancelEdit}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditAdminProfile;
