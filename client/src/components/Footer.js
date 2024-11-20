import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="brand-name">FitnEarnPal</h2>
          <p>
            FitnEarnPal is your all-in-one place where you can train people as
            per your schedule. It's a place where you can upload workout
            videos, create live sessions, write blogs, and much more. Available
            on Android and iOS. Join our community of coaches today!
          </p>
          <p className="support-email">
            📧 <a href="mailto:help-support@fitnearn.com">help-support@fitnearn.com</a>
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Pinterest">📌</a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Sign Up form</a></li>
          </ul>
        </div>

        <div className="footer-policies">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Data Deletion</a></li>
          </ul>
        </div>

        <div className="footer-download">
          <h3>Download Now</h3>
          <a href="#" className="app-store">Download on the App Store</a>
          <a href="#" className="google-play">Get it on Google Play</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024, All Rights Reserved.</p>
        <p>Made with ❤️ in India</p>
      </div>
    </footer>
  );
};

export default Footer;
