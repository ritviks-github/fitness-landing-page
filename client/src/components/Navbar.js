// Navbar.js
import React from 'react';
import './Navbar.css'; // Custom CSS for specific styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* Left-aligned Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="https://www.fitnearn.com/img/logo-icon.png"
            alt="FitnEarnPal Logo"
            className="logo-icon"
          />
          <span className="logo-text ms-2">FitnEarnPal</span>
        </a>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Centered Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How It Works
              </a>
            </li>
          </ul>

          {/* Right-aligned Button */}
          <button className="btn signup-button ms-lg-3">Sign Up Form</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
