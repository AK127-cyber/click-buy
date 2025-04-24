import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Product.css";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  

  
  
  const defaultProduct = {
    name: "Natural Plant",
    price: 250,
    image: "https://gachwala.in/wp-content/uploads/2022/06/BRAHMI-1.webp",
    description:
      "Money plant has long been associated with good luck and fortune.",
  };

  const product = location.state || defaultProduct;

  const handleAddToCart = () => {
    console.log("Added to cart:", { ...product, quantity});
    navigate("/cart");
  };

  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/Home">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; <span>{product.name}</span>
      </div>
      <div className="product-container">
        <div className="image-section">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="info-section">
          <h2>{product.name}</h2>
          <p className="price">Rs. {product.price}.00</p>
          <div className="rating">
            ⭐⭐⭐⭐☆ <span>5 Customer Reviews</span>
          </div>
          <p className="desc">{product.description}</p>

        
          <div className="quantity-cart">
            <div className="quantity">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart">
              Add To Cart
            </button>
          </div>

          <div className="meta">
            <p><strong>SKU:</strong> 54861</p>
            <p><strong>Category:</strong> Seeds</p>
            <p><strong>Tags:</strong> Exotic, Chair, Home, Shop</p>
            <div className="share-icons">
              <span>Share:</span>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
