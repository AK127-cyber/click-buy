import React, { useState } from 'react';
import '../Admin/css/ViewOrders.css';

const ViewOrders = () => {
  const [orders, setOrders] = useState([
    { id: '#001', name: 'John Doe', date: '2025-02-16', total: 100, status: 'Pending' },
    { id: '#002', name: 'Jane Smith', date: '2025-02-15', total: 75, status: 'Successfully Delivered' },
    { id: '#003', name: 'Michael Johnson', date: '2025-02-14', total: 120, status: 'Successfully Delivered' },
  ]);

  const deleteOrder = (index) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders(orders.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="app-body">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><a href="./ad_profile.html"><img src="images/profile.png" alt="Profile" /> Profile</a></li>
          <li><a href="./view_orders.html"><img src="images/orders.png" alt="Orders" /> View Orders</a></li>
          <li><a href="./view_user.html"><img src="images/users.png" alt="View Users" /> View Users</a></li>
          <li><a href="./add_items.html"><img src="images/add.png" alt="Add Items" /> Add Items</a></li>
          <li><a href="./edit_items.html"><img src="images/edit.png" alt="Edit Items" /> Edit Items</a></li>
          <li><a href="./delete_items.html"><img src="images/delete.png" alt="Delete Items" /> Delete Items</a></li>
          <li><a href="#" className="logout"><img src="images/logout.png" alt="Logout" /> Logout</a></li>
        </ul>
      </div>

      <div className="main-content">
        <h1>View Orders</h1>

        <div className="search-bar">
          <input type="text" placeholder="Search Order by Name or ID..." />
          <button className="search-btn">Search</button>
        </div>

        <div className="orders-container">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Date</th>
                <th>Total ($)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                  <td>
                    <button className="action-btn view-btn">View</button>
                    <button className="action-btn delete-btn" onClick={() => deleteOrder(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
