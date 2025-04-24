import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Admin/css/AddItems.css";

const AddItems = () => {
  const [imageFile, setImageFile] = useState(null); // Store the image file
  const [imagePreview, setImagePreview] = useState("images/upload-placeholder.png"); // Preview the image
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemCategory, setItemCategory] = useState("");

  // Handle file input change (image upload)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Store the actual file
      setImagePreview(URL.createObjectURL(file)); // Preview the image
    }
  };

  // Handle form submission to add item
  const handleAddItem = async () => {
    if (itemName && itemDescription && itemPrice && itemCategory && imageFile) {
      try {
        const formData = new FormData();
        formData.append("item_name", itemName);
        formData.append("description", itemDescription);
        formData.append("price", itemPrice);
        formData.append("category", itemCategory);
        formData.append("image", imageFile); // Append the image file

        const response = await fetch("http://localhost:5000/api/additem", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.success) {
          alert("✅ Item added successfully!");
          // Reset the form
          setItemName("");
          setItemDescription("");
          setItemPrice("");
          setItemCategory("");
          setImageFile(null);
          setImagePreview("images/upload-placeholder.png");
        } else {
          alert("❌ " + data.message);
        }
      } catch (err) {
        console.error("Error:", err);
        alert("❌ Failed to add item.");
      }
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
          <li><Link to="/adminprofile">Profile</Link></li>
          <li><Link to="/vieworders">View Orders</Link></li>
          <li><Link to="/viewusers">View Users</Link></li>
          <li><Link to="/additems">Add Items</Link></li>
          <li><Link to="/edititems">Edit Items</Link></li>
          <li><Link to="/deleteitems">Delete Items</Link></li>
          <li><Link to="/" className="logout">Logout</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Add Items</h1>
        <p>Upload an image and enter details for the new item.</p>

        <div className="add-items-container">
          {/* Image Upload Box */}
          <div
            className="upload-box"
            onClick={() => document.getElementById("fileUpload").click()}
          >
            <input
              type="file"
              id="fileUpload"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
            <img
              src={imagePreview}
              alt="Upload Preview"
              className="upload-preview"
            />
            <button className="upload-btn" type="button">Upload Image</button>
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

            {/* Category Dropdown */}
            <select
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Artificial">Artificial</option>
              <option value="Air Purifying">Air Purifying</option>
            </select>

            <button onClick={handleAddItem}>Add Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
