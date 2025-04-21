import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AdminProfile = () => {
    const navigate = useNavigate();

    // Mocked session data (Replace with API call or Context)
    const [admin, SetAdmin] = useState({
        name: "Kamel",
        email: "admin@example.com",
        profileImage: "images/default-avatar.png",
    });

    const handleEditProfile = () => {
        navigate("/edit-profile"); // Adjust route as per your setup
    };

    const handleLogout = () => {
        // Clear session (Adjust based on actual authentication method)
        localStorage.removeItem("adminSession");
        navigate("/login");
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-6 fixed h-full">
                <h2 className="text-center text-xl font-bold mb-4">Admin Panel</h2>
                <ul className="space-y-3">
                    <li><a href="/profile" className="block p-3 bg-gray-700 rounded">Profile</a></li>
                    <li><a href="/view-orders" className="block p-3 bg-gray-700 rounded">View Orders</a></li>
                    <li><a href="/view-users" className="block p-3 bg-gray-700 rounded">View Users</a></li>
                    <li><a href="/add-items" className="block p-3 bg-gray-700 rounded">Add Items</a></li>
                    <li><a href="/edit-items" className="block p-3 bg-gray-700 rounded">Edit Items</a></li>
                    <li><a href="/delete-items" className="block p-3 bg-gray-700 rounded">Delete Items</a></li>
                    <li><button onClick={handleLogout} className="block w-full p-3 bg-red-600 rounded">Logout</button></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="ml-64 flex-1 p-6">
                <h1 className="text-2xl font-bold text-gray-700">Admin Profile</h1>

                <div className="w-1/2 mx-auto bg-white p-6 shadow-md rounded-lg text-center mt-6">
                    <img src={admin.profileImage} alt="Admin Profile" className="w-32 h-32 rounded-full mx-auto" />
                    
                    <div className="mt-4 text-lg">
                        <p><strong>Name:</strong> {admin.name}</p>
                        <p><strong>Email:</strong> {admin.email}</p>
                        <p><strong>Role:</strong> Administrator</p>
                    </div>

                    <button 
                        onClick={handleEditProfile} 
                        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
