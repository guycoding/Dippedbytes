import React from 'react';
import './Services.css';
import { FaWordpress, FaCode, FaRobot, FaHandshake, FaCalendarAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Web Development Services</h1>
        <p className="services-subtitle">Modern solutions for small businesses</p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <FaCode size={40} />
          </div>
          <h2>Custom-Coded Websites</h2>
          <p>
            Bespoke websites built from scratch to perfectly match your business needs. 
            Handcrafted solutions with modern technologies for optimal performance.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaWordpress size={40} />
          </div>
          <h2>WordPress Websites</h2>
          <p>
            Powerful WordPress sites with custom themes and plugins. 
            Easy-to-manage solutions with all the flexibility you need.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaRobot size={40} />
          </div>
          <h2>AI-Powered Features</h2>
          <p>
            All our websites include AI integration for:
            <ul>
              <li>Automated content suggestions</li>
              <li>Smart security monitoring</li>
              <li>Performance optimization</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="pricing-section">
        <h2 className="pricing-title">Flexible Pricing Options</h2>
        
        <div className="pricing-options">
          <div className="pricing-card">
            <div className="pricing-icon">
              <FaCalendarAlt size={30} />
            </div>
            <h3>Monthly Maintenance</h3>
            <p>
              Perfect for small businesses. Includes:
              <ul>
                <li>Regular updates</li>
                <li>Security patches</li>
                <li>Performance checks</li>
                <li>Basic content updates</li>
              </ul>
              <span className="price-note">Prices negotiable based on requirements</span>
            </p>
          </div>

          <div className="pricing-card">
            <div className="pricing-icon">
              <FaHandshake size={30} />
            </div>
            <h3>Annual Plans</h3>
            <p>
              For established businesses wanting long-term stability:
              </p>
              <ul>
                <li>All monthly benefits</li>
                <li>Priority support</li>
                <li>Discount on initial development</li>
                <li>Quarterly strategy reviews</li>
              </ul>
              <span className="price-note">Custom quotes available</span>
           
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Establish Your Online Presence?</h2>
        <p>
          Contact us today to discuss your project and get a personalized quote. 
          We'll work with you to find the perfect solution for your budget and needs.
        </p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
    </div>
  );
};

export default Services;