/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  // About Button Functionality
  const handleAboutClick = () => {
    alert(
      "Welcome to the Counseling Platform! We connect you with licensed counselors to help you navigate mental health challenges, relationships, and personal growth. Visit the About Us page for more information."
    );
  };

  return (
    <footer className="footer">
      {/* Brand Section */}
      <div className="brand">
        Counseling Platform
        <p className="tagline">
          Your trusted partner in mental health and personal growth.
        </p>
      </div>

      {/* Social Media Links */}
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>

      

      {/* Contact and Information */}
      <div className="contact-info">
        <p>
          <strong>Contact Us:</strong> support@counselingplatform.com | +1 800 123
          4567
        </p>
        <p>
          <strong>Address:</strong> 123 Wellness Street, Suite 100, Healthy City,
          HC 56789
        </p>
      </div>

      {/* Copyright */}
      <div className="copyright">
        &copy; {new Date().getFullYear()} Counseling Platform. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
