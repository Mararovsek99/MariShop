import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-text">
          <h1>Find Your Car</h1>
          <p>Explore our collection of cars and find your perfect match</p>
          <a href="/shop" className="cta-button">
            Shop Now
          </a>
        </div>
        <img src="Octavia.webp" alt="Car" className="hero-img" />
      </header>

      <section className="features">
        <div className="feature">
          <div className="icon">🚗</div>
          <h3>Free Shipping</h3>
          <p>Enjoy free shipping on all orders with no minimum purchase</p>
        </div>
        <div className="feature">
          <div className="icon">🛡️</div>
          <h3>Secure Payment</h3>
          <p>Payments are processed securely and your data is protected</p>
        </div>
        <div className="feature">
          <div className="icon">✅</div>
          <h3>Money Back Guarantee</h3>
          <p>Your satisfaction is our priority or your money back in 30 days</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
