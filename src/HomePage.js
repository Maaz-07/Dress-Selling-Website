// HomePage.js

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>Welcome to our Dress Selling Website</h1>
        <p>Find the perfect dress for any occasion.</p>
      </div>
      
      <div className="product-grid">
        <div className="dress-card">
          <h3>Dress 1</h3>
          <p>Description of Dress 1</p>
          <span>$99.99</span>
        </div>
        <div className="dress-card">
          <h3>Dress 2</h3>
          <p>Description of Dress 2</p>
          <span>$129.99</span>
        </div>
        <div className="dress-card">
          <h3>Dress 3</h3>
          <p>Description of Dress 3</p>
          <span>$79.99</span>
        </div>
      </div>
      
      <div className="promotion-banner">
        <h2>Special Offer!</h2>
        <p>Get 20% off on selected dresses. Limited time only.</p>
      </div>
      
      <div className="testimonials">
        <h2>What our customers say</h2>
        <div className="testimonial">
          <p>"I love the quality and style of their dresses. Highly recommended!"</p>
          <span>- Happy Customer 1</span>
        </div>
        <div className="testimonial">
          <p>"The best dress shopping experience I've had. Amazing collection!"</p>
          <span>- Happy Customer 2</span>
        </div>
        <div className="testimonial">
          <p>"Great customer service and prompt delivery. Will buy again!"</p>
          <span>- Happy Customer 3</span>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; 2023 Your Dress Selling Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;