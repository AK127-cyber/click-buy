import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// User Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/Product";

// Admin Pages
import AdminDashboard from "./Admin/AdminDashboard";
import AdminProfile from "./Admin/AdminProfile";
import EditAdminProfile from "./Admin/EditAdminProfile";
import EditItems from "./Admin/EditItems";
import ViewOrders from "./Admin/ViewOrders";
import ViewUsers from "./Admin/ViewUsers";
import AddItems from "./Admin/AddItems";
import DeleteItems from "./Admin/DeleteItems";

// Layout wrapper for user pages
const UserLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* User Layout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productd" element={<ProductDetails />} />
        </Route>

        {/* Admin Routes (no header/footer) */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/adminprofile" element={<AdminProfile />} />
        <Route path="/editadminprofile" element={<EditAdminProfile />} />
        <Route path="/edititems" element={<EditItems />} />
        <Route path="/vieworders" element={<ViewOrders />} />
        <Route path="/viewusers" element={<ViewUsers />} />
        <Route path="/additems" element={<AddItems />} />
        <Route path="/deleteitems" element={<DeleteItems />} />
      </Routes>
    </Router>
  );
}

export default App;
