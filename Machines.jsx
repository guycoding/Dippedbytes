import React from 'react';
import './Machines.css';
import { FaRobot, FaChartLine, FaHome, FaBusinessTime, FaTools, FaClock } from 'react-icons/fa';

const Machines = () => {
  const upcomingFeatures = [
    {
      title: "Housing Price Predictor",
      description: "AI-powered tool to estimate property values based on location, size, and market trends",
      icon: <FaHome className="feature-icon" />,
      status: "In Development"
    },
    {
      title: "Business Performance Analyzer",
      description: "Machine learning models to forecast sales, identify trends, and optimize operations",
      icon: <FaBusinessTime className="feature-icon" />,
      status: "Planned"
    },
    {
      title: "Equipment Maintenance Predictor",
      description: "Predictive analytics to anticipate machine failures and schedule maintenance",
      icon: <FaTools className="feature-icon" />,
      status: "Planned"
    },
    {
      title: "Market Trend Visualizer",
      description: "Interactive dashboards showing real-time market trends and predictions",
      icon: <FaChartLine className="feature-icon" />,
      status: "Research Phase"
    }
  ];

  return (
    <div className="machines-container">
      <div className="machines-header">
        <h1><FaRobot className="header-icon" /> Machine Learning Tools</h1>
        <p className="subtitle">Powerful AI-driven analytics coming soon</p>
      </div>

      <div className="coming-soon-banner">
        <div className="banner-content">
          <FaClock className="clock-icon" />
          <h2>Under Development</h2>
          <p>
            We're currently building a suite of machine learning tools to help you make data-driven decisions.
            Check back soon for these powerful features!
          </p>
        </div>
      </div>

      <div className="upcoming-features">
        <h3>Planned Features:</h3>
        <div className="features-grid">
          {upcomingFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
                <span className={`status-badge ${feature.status.toLowerCase().replace(' ', '-')}`}>
                  {feature.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-prompt">
        <h3>Interested in early access?</h3>
        <p>
          We're looking for beta testers for our machine learning tools.
          Contact us to be notified when these features become available.
        </p>
        <a href="/contact" className="contact-button">Get in Touch</a>
      </div>
    </div>
  );
};

export default Machines;