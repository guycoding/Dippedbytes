import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Dipped<span>Bytes</span></h3>
          <p className="footer-tagline">Empowering Africa through technology</p>
          <div className="footer-social">
            <a href="https://github.com/guycoding" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-heading">Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <ul>
            <li>
              <a href="tel:0672986034">067 298 6034</a>
            </li>
            <li>
              <a href="mailto:info@dippedbytes.co.za">info@dippedbytes.co.za</a>
            </li>
            <li>Johannesburg, South Africa</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DippedBytes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;