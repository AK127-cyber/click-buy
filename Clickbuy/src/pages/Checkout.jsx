// src/pages/Checkout.js

import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h2>Checkout</h2>
        <p>Home &gt; Checkout</p>
      </div>

      <div className="checkout-content">
        <div className="billing-form">
          <h3>Billing details</h3>
          <form>
            <div className="row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="text" placeholder="Company Name (Optional)" />
            <input type="text" placeholder="Country / Region" required />
            <input type="text" placeholder="Street Address" required />
            <input type="text" placeholder="Town / City" required />
            <input type="text" placeholder="Province" required />
            <input type="text" placeholder="ZIP Code" required />
            <input type="text" placeholder="Phone" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Additional Information" rows="3"></textarea>
          </form>
        </div>

        <div className="order-summary">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Asgaard sofa × 1</td>
                <td>Rs. 250.00</td>
              </tr>
              <tr>
                <td>Subtotal</td>
                <td>Rs. 250.00</td>
              </tr>
              <tr className="total">
                <td>Total</td>
                <td>Rs. 250.00</td>
              </tr>
            </tbody>
          </table>

          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="payment"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
              />
              Direct Bank Transfer
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
              />
              Cash on Delivery
            </label>
            <p className="privacy-note">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy</a>.
            </p>
          </div>

          <button className="place-order" onClick={handlePlaceOrder}>
            Place order
          </button>
        </div>
      </div>

      <div className="checkout-footer">
        <div>
          <h4>Free Delivery</h4>
          <p>For all orders over $50, consectetur adipim scing elit.</p>
        </div>
        <div>
          <h4>10 Days Return</h4>
          <p>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div>
          <h4>Secure Payment</h4>
          <p>100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
