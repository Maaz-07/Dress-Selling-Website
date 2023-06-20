import React from 'react';
import logo from './logo.svg';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Website Name</span>
      </div>
      <div className="navbar-items">
        <a href="#">Products</a>
        <a href="#">Promotion & Discount</a>
        <a href="#">Cart</a>
      </div>
    </nav>
  );
}

export default Navbar;
