// src/pages/Shop.js

import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

const Shop = () => {
  const handleAddToCart = (plantName) => {
    alert(`${plantName} added to cart`);
  };

  const bestSellingPlants = [
    {
      id: 1,
      name: "Natural Plant",
      price: "Rs1000.00",
      img: "https://shop.globalbees.com/cdn/shop/files/81lsu4v4tkL.jpg?v=1720012280"
    },
    {
      id: 2,
      name: "Hanging Plant",
      price: "Rs1500.00",
      img: "https://m.media-amazon.com/images/I/81X+dTFd71L.jpg"
    },
    {
      id: 3,
      name: "Succulents",
      price: "Rs1200.00",
      img: "https://memoriesinsite.com/cdn/shop/files/WhatsAppImage2024-08-03at13.21.20_28.jpg?v=1724672785"
    },
    {
      id: 4,
      name: "Artificial",
      price: "Rs2000.00",
      img: "https://m.media-amazon.com/images/I/A13344UemTL.jpg"
    },
    {
      id: 5,
      name: "Flower",
      price: "Rs2500.00",
      img: "https://dms.mydukaan.io/original/jpeg/730950/570a0a01-8039-4174-b518-9bf54edfe5fb/nurserylive-flowering-plants-category-image-2aafdfbb-56e0-4d91-ad9d-06adc3c331f5.jpg"
    },
    {
      id: 6,
      name: "Cactus",
      price: "Rs300.00",
      img: "https://growurban.uk/cdn/shop/products/flowering-cactus-with-terracotta-pot-968308.jpg?v=1667167462&width=1813"
    },
    {
      id: 7,
      name: "Tree Plant",
      price: "Rs500.00",
      img: "https://www.homesake.in/cdn/shop/files/IH0F021-GR-1_theme.jpg?v=1704515115&width=1445"
    }
  ];

  return (
    <div className="shop">
      {/* Welcome Section */}
      <section className="shop-welcome">
        <h1>Welcome to Our Shop</h1>
        <p>Find the perfect plants to brighten your space and refresh your surroundings.</p>
      </section>

      {/* Hero Section */}
      <section className="shop-hero">
        <div className="hero-text">
          <span className="shop-tag">Shop Now</span>
          <h1>
            KEEP YOUR <br /> <span>PLANTS HEALTHY</span>
          </h1>
          <p>Plants reduce stress levels and boost your mood. Making them perfect for your home and your workspace too.</p>
        </div>
        <div className="hero-image">
          <img src="https://assets.giftalove.com/resources/common/giftimages/largeimage/money-plant-with-beautiful-pot_1.jpg" alt="Plant" />
        </div>
      </section>

      {/* Best Selling Plants */}
      <section className="best-selling">
        <h2>Best Selling Plants</h2>
        <p>Check out our most popular plants</p>
        <div className="plant-list">
          {bestSellingPlants.map((plant) => (
            <div className="plant-item" key={plant.id}>
              <Link to={`/product/${plant.id}`}>
                <img src={plant.img} alt={plant.name} />
                <p>{plant.name}</p>
              </Link>
              <span>{plant.price}</span>
              <button onClick={() => handleAddToCart(plant.name)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <Link to="/shop">
          <button>See More</button>
        </Link>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Categories</h2>
        <div className="plant-list">
          <div className="plant-item">
            <img src="https://shop.globalbees.com/cdn/shop/files/81lsu4v4tkL.jpg?v=1720012280" alt="Plant 1" />
            <p>Natural Plant</p>
            <span>Rs300.00</span>
          </div>
          <div className="plant-item">
            <img src="https://m.media-amazon.com/images/I/81X+dTFd71L.jpg" alt="Plant 2" />
            <p>Hanging Plant</p>
            <span>Rs350.00</span>
          </div>
          <div className="plant-item">
            <img src="https://memoriesinsite.com/cdn/shop/files/WhatsAppImage2024-08-03at13.21.20_28.jpg?v=1724672785" alt="Plant 3" />
            <p>Succulents</p>
            <span>Rs400.00</span>
          </div>
          <div className="plant-item">
            <img src="https://m.media-amazon.com/images/I/A13344UemTL.jpg" alt="Plant 4" />
            <p>Artificial</p>
            <span>Rs500.00</span>
          </div>
        </div>
        <Link>
          <button>Explore</button>
        </Link>
      </section>

      {/* Customer Reviews */}
      <section className="customer-reviews">
        <h2>What customers say about it?</h2>
        <div className="reviews">
          {[
            { name: "Vineet Kantil", rating: "4.5", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Orisha", rating: "4.8", img: "https://randomuser.me/api/portraits/women/44.jpg" }
          ].map((review, index) => (
            <div className="review-card" key={index}>
              <img src={review.img} alt={review.name} />
              <div className="review-text">
                <h4>{review.name}</h4>
                <p>
                  Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                  libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <span>⭐ ⭐⭐⭐{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Shop;
