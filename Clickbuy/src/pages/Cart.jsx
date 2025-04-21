import React from "react";
import "./Cart.css";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const product = {
    name: "Natural Plant",
    price: 250,
    quantity: 1,
    image:
      "https://gachwala.in/wp-content/uploads/2022/06/BRAHMI-1.webp",
  };

  const subtotal = product.price * product.quantity;

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to Checkout page
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Cart</h1>
        <p>Home &gt; Cart</p>
        <img
          src="https://img.freepik.com/free-photo/birds-nest-fern-plant-terracotta-pot-home-decor-object_53876-133133.jpg?semt=ais_hybrid&w=740"
          alt="Cart Plant"
        />
      </div>

      <div className="cart-content">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="product-info">
                <img src={product.image} alt={product.name} />
                <span>{product.name}</span>
              </td>
              <td>Rs. {product.price.toFixed(2)}</td>
              <td>
                <input type="number" min="1" value={product.quantity} readOnly />
              </td>
              <td className="subtotal">
                Rs. {subtotal.toFixed(2)}{" "}
                <FaTrashAlt className="trash-icon" title="Remove Item" />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div className="totals-row">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>
          <div className="totals-row total-bold">
            <span>Total</span>
            <span className="highlight">Rs. {subtotal.toFixed(2)}</span>
          </div>
          <button onClick={handleCheckout} className="checkout-btn">
            Check Out
          </button>
        </div>
      </div>

      <div className="cart-benefits">
        <div>
          <h3>Free Delivery</h3>
          <p>For all orders over $50, consectetur adipim scing elit.</p>
        </div>
        <div>
          <h3>10 Days Return</h3>
          <p>If goods have problems, consectetur adipim scing elit.</p>
        </div>
        <div>
          <h3>Secure Payment</h3>
          <p>100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
