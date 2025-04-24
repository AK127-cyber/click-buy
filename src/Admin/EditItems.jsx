import React, { useState } from "react";
import "../Admin/css/EditItems.css"; // Move CSS to an external file

const EditItems = () => {
  const [image, setImage] = useState("images/plant.png");
  const [itemName, setItemName] = useState("Indoor Plant");
  const [itemDescription, setItemDescription] = useState("Beautiful indoor plant for home decor.");
  const [itemPrice, setItemPrice] = useState(455);
  const [itemCategory, setItemCategory] = useState("Indoor");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveChanges = () => {
    alert("Item updated successfully!");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
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
      {/* Main Content */}
      <div className="main-content">
        <h1>Edit Items</h1>
        <p>Modify item details below.</p>

        {/* Edit Form */}
        <div className="edit-container">
          <label>Item Image</label>
          <div className="image-preview">
            <img src={image} alt="Item" />
          </div>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          <label>Item Name</label>
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />

          <label>Description</label>
          <input type="text" value={itemDescription} onChange={(e) => setItemDescription(e.target.value)} />

          <label>Price</label>
          <input type="number" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />

          <label>Category</label>
          <select value={itemCategory} onChange={(e) => setItemCategory(e.target.value)}>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Air purifying">Air purifying</option>
            <option value="Artificial">Artificial</option>
          </select>

          <button className="btn save-btn" onClick={saveChanges}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditItems;
