import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Admin/css/DeleteItems.css";

const DeleteItems = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([
    {
      id: 1,
      image: "/images/air3.jpg", // Place image in public/images
      name: "Indoor Plant",
      description: "Beautiful indoor plant for home decor.",
      price: "Rs.25",
      category: "Decor"
    }
  ]);

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="delete-items-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="/adminprofile">Profile</a></li>
          <li><a href="/vieworders">View Orders</a></li>
          <li><a href="/viewusers">View Users</a></li>
          <li><a href="/additems">Add Items</a></li>
          <li><a href="/edititems">Edit Items</a></li>
          <li><a href="/deleteitems" className="active">Delete Items</a></li>
          <li><a href="/" className="logout">Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Delete Items</h1>
        <p>Manage and delete items from the list below.</p>

        {/* Items Table */}
        <table className="items-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn edit-btn"
                    onClick={() => navigate("/edititems")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn delete-btn"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteItems;
