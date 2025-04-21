import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Buy your <br /> <span>dream plants</span></h1>
          <p>50+ Plant Species | 100+ Happy Customers</p>
          <input type="text" placeholder="What are you looking for?" />
          <button>Search</button>
        </div>
        <div className="hero-image">
          <img
            src="https://img.staticmb.com/mbcontent/images/crop/uploads/2023/3/A-variety-of-green-artificial-plants-for-home-decor_0_1200.jpg"
            alt="Plant"
          />
        </div>
      </section>

      {/* Best Selling Plants */}
      <section className="best-selling">
        <div className="see">
        <h2>Best Selling Plants</h2>
        <p>Easiest way to healthy life by
           buying your favorite plants </p>
        <Link to="/shop"><button className="">See More</button></Link>
        
        </div>

        <div className="plant-list">
          <div className="plant-item">
            <img src="https://shrigramorganics.com/wp-content/uploads/2020/06/51OukLdAS5L.jpg" alt="Plant 1" />
            <p>Natural Plant</p>
            <span>Rs260.00</span>
          </div>
          <div className="plant-item">
            <img src="https://m.media-amazon.com/images/I/91cggUipYSL.jpg" alt="Plant 2" />
            <p>Hanging Plant</p>
            <span>Rs300.00</span>
          </div>
          <div className="plant-item">
            <img src="https://www.satyamkraft.in/cdn/shop/products/51GK4guXorL_500x500.jpg?v=1712215620" alt="Plant 3" />
            <p>Succulents</p>
            <span>Rs400.00</span>
          </div>
          <div className="plant-item">
            <img src="https://i.pinimg.com/originals/54/c9/8f/54c98fcf8fc553fb7fe8903a380eef4f.jpg" alt="Plant 4" />
            <p>Artificial</p>
            <span>Rs500.00</span>
          </div>
          <div className="plant-item">
            <img src="https://www.juneflowers.com/wp-content/uploads/2022/08/Cactus-Plant.jpg" alt="Plant 5" />
            <p>Cactus</p>
            <span>Rs600.00</span>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about">
        <h2>About Us</h2>
        <p>Order now and appreciate the beauty of nature</p>
        <div className="features">
          <div>
            <h3>Large Assortment</h3>
            <p>We offer many different types of products with fewer variations in each category.</p>
          </div>
          <div>
            <h3>4-day or less delivery time, free shipping and an expedited delivery option.</h3>
            <p>On all orders</p>
          </div>
          <div>
            <h3>24/7 Support</h3>
            <p>Answers to any business-related inquiry 24/7 and in real-time.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          {[
            {
              img: "https://cdn.shopify.com/s/files/1/0277/6757/0567/files/fiddle-leaf_480x480.jpg?v=1730883796",
              label: "Natural Plants",
            },
            {
              img: "https://m.media-amazon.com/images/I/91cggUipYSL.jpg",
              label: "Artificial Plants",
            },
            {
              img: "https://www.vishalmegamart.com/dw/image/v2/BGHT_PRD/on/demandware.static/-/Sites-vmm-gm-master-catalog/default/dwc9b67362/images/large/1213002525.jpg?sw=900&sh=900",
              label: "Flower",
            },
            {
              img: "https://plantorbit.com/cdn/shop/files/Opuntia_Microdasys_Var._Pallida_BUNNY_EAR_CACTUS_YELLOW_BARE_ROOTED.webp?v=1731762238&width=533",
              label: "Cactus",
            },
            {
              img: "https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1620332032362-9L8NO4BL65GHIX8MNI10/transplanted-pothos-plant.jpg",
              label: "Money Plant",
            },
          ].map((item, index) => (
            <div className="category-item" key={index}>
              <img src={item.img} alt={item.label} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
        <button className="explore">Explore</button>
      </section>

      {/* Customer Reviews */}
      <section className="customer-reviews">
        <h2>What customers say about GREENMIND?</h2>
        <div className="reviews">
          {[
            { name: "Vineet Kantil", rating: "4.5", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Orisha", rating: "4.8", img: "https://randomuser.me/api/portraits/women/44.jpg" },
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
                <span>⭐ ⭐⭐⭐ {review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
