import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedInStatus);
    };

    checkLogin();

    // Listen to localStorage changes (even across tabs)
    window.addEventListener("storage", checkLogin);

    // Also poll every second (optional, for safe side)
    const interval = setInterval(checkLogin, 1000);

    return () => {
      window.removeEventListener("storage", checkLogin);
      clearInterval(interval);
    };
  }, []);

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">PG</Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        {!isLoggedIn && <Link to="/signup">Signup</Link>}
      </nav>

      <div className="icons">
        <div className="icon-wrapper relative">
          <FaUserCircle className="icon" onClick={toggleDropdown} />
          {isDropdownOpen && isLoggedIn && (
            <div className="dropdown-menu">
              <ul className="dropdown-list">
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
                <li>
                  <Link to="/" onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="icon-wrapper">
          <FaSearch className="icon" onClick={handleSearchToggle} />
        </div>
        {showSearch && (
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
          </form>
        )}

        <div className="icon-wrapper">
          <FaShoppingCart className="icon" onClick={handleCartClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
