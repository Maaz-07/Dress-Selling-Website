import React from 'react';
import './FrontPage.css'; // Assuming you have a CSS file for styling

const HomePage = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-left">Your Website Name</div>
        <div className="navbar-right">
          <ul>
            <li>Products</li>
            <li>Discount & Promotion</li>
            <li>Login & Signup</li>
            <li>Cart</li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <div className="left">
          <h1>Website Introduction</h1>
          <p>Description and slogans here...</p>
        </div>
        <div className="right">
          <img src="your-image-url.jpg" alt="Product" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
