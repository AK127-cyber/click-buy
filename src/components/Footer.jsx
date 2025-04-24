import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>ClickBuy</h2>
        <p>We help you find your dream plant</p>
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-column">
          <h3>Information</h3>
          <a href="#">About</a>
          <a href="#">Product</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="#">Community</a>
          <a href="#">Career</a>
          <a href="#">Our story</a>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <a href="#">Getting Started</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>2025 all Right Reserved Term of use GREENMIND</p>
      </div>
    </footer>
  );
};

export default Footer;
