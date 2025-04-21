import React from "react";
import "../Admin/css/ViewUsers.css"; // You can move the CSS into this file

const ViewUsers = () => {
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prevUsers) => prevUsers.filter((_, i) => i !== index));
    }
  };

  const handleEdit = () => {
    alert("Edit function coming soon!");
  };

  const [users, setUsers] = React.useState([
    {
      name: "John Doe",
      username: "john_d",
      email: "john@example.com",
      gender: "Male",
      password: "********",
    },
    {
      name: "Jane Smith",
      username: "jane_s",
      email: "jane@example.com",
      gender: "Female",
      password: "********",
    },
    {
      name: "Mike Johnson",
      username: "mike_j",
      email: "mike@example.com",
      gender: "Male",
      password: "********",
    },
  ]);

  return (
    <div className="view-users-body">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="main-content">
        <h1>View Users</h1>
        <p>Manage users from the list below.</p>

        {/* User Table */}
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn edit-btn" onClick={handleEdit}>Edit</button>
                  <button className="btn delete-btn" onClick={() => handleDelete(idx)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUsers;
