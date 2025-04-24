import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Optional: show message for a few seconds
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <div className="header-left">
          <h1>Contact</h1>
          <p>
            <Link to="/">Home</Link> &gt; Contact
          </p>
        </div>
        <div className="header-right">
          <img
            src="https://gachwala.in/wp-content/uploads/2022/06/BRAHMI-1.webp"
            alt="Plant"
          />
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-main">
        <h2>Get In Touch With Us</h2>
        <p className="subtext">
          For more information about our products & services, please feel free to
          drop us an email. Our staff is always there to help you out. Do not hesitate!
        </p>

        <div className="contact-content">
          {/* Left: Info */}
          <div className="contact-info">
            <div className="info-item">
              <h4><FaMapMarkerAlt /> Address</h4>
              <p>226 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="info-item">
              <h4><FaPhoneAlt /> Phone</h4>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
            <div className="info-item">
              <h4><FaClock /> Working Time</h4>
              <p>Monday–Friday: 9:00 – 22:00</p>
              <p>Saturday–Sunday: 9:00 – 21:00</p>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              placeholder="Abc"
              required
              onChange={handleChange}
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Abc@def.com"
              required
              onChange={handleChange}
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              placeholder="This is optional"
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              placeholder="Hi! I’d like to ask about..."
              required
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
            {submitted && <p className="success-message">Thank you! We'll be in touch soon.</p>}
          </form>
        </div>
      </section>

      {/* Footer Icons */}
      <footer className="contact-footer">
        <div className="footer-item">
          <h4>Free Delivery</h4>
          <p>For all orders over $50, consectetur adipim scing elit.</p>
        </div>
        <div className="footer-item">
          <h4>10 Days Return</h4>
          <p>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div className="footer-item">
          <h4>Secure Payment</h4>
          <p>100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

