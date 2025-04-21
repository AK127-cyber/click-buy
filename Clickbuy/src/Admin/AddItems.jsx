import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Admin/css/AddItems.css";

const AddItems = () => {
    const [image, setImage] = useState("images/upload-placeholder.png");
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddItem = () => {
        if (itemName && itemDescription && itemPrice) {
            alert("Item added successfully!");
            setItemName("");
            setItemDescription("");
            setItemPrice("");
            setImage("images/upload-placeholder.png");
        } else {
            alert("Please fill all fields!");
        }
    };

    return (
        <div className="container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li><Link to="/admin-profile">Profile</Link></li>
                    <li><Link to="/view-orders">View Orders</Link></li>
                    <li><Link to="/view-users">View Users</Link></li>
                    <li><Link to="/add-items">Add Items</Link></li>
                    <li><Link to="/edit-items">Edit Items</Link></li>
                    <li><Link to="/delete-items">Delete Items</Link></li>
                    <li><button className="logout">Logout</button></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <h1>Add Items</h1>
                <p>Upload an image and enter details for the new item.</p>

                <div className="add-items-container">
                    {/* Image Upload Box */}
                    <div className="upload-box" onClick={() => document.getElementById("fileUpload").click()}>
                        <input type="file" id="fileUpload" accept="image/*" hidden onChange={handleImageUpload} />
                        <img src={image} alt="Upload Preview" />
                        <button className="upload-btn">Upload Image</button>
                    </div>

                    {/* Item Details */}
                    <div className="item-details">
                        <input
                            type="text"
                            placeholder="Item Name"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                        <textarea
                            placeholder="Description"
                            rows="3"
                            value={itemDescription}
                            onChange={(e) => setItemDescription(e.target.value)}
                        ></textarea>
                        <input
                            type="number"
                            placeholder="Price (Rs.)"
                            value={itemPrice}
                            onChange={(e) => setItemPrice(e.target.value)}
                        />
                        <button onClick={handleAddItem}>Add Item</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItems;
