import React from 'react';
import './Calculations.css';
import { FaWeight, FaRuler, FaCalculator, FaTools, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Calculations = () => {
  const calculators = [
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index to understand your weight status",
      icon: <FaWeight className="calc-icon" />,
      link: "/bmi",
      color: "#4ca1af"
    },
    {
      title: "Unit Converter",
      description: "Convert between different length units (mm, cm, m, km)",
      icon: <FaRuler className="calc-icon" />,
      link: "/measurements",
      color: "#2ecc71"
    },
    {
      title: "Machine Tools",
      description: "Various calculation tools for machine operations and maintenance",
      icon: <FaTools className="calc-icon" />,
      link: "/machines",
      color: "#f39c12"
    }
  ];

  return (
    <div className="calculations-container">
      <div className="calculations-header">
        <h1><FaCalculator className="header-icon" /> Calculation Tools</h1>
        <p className="subtitle">Select a calculator tool to get started</p>
      </div>

      <div className="calculations-grid">
        {calculators.map((calc, index) => (
          <div 
            key={index} 
            className="calculator-card"
            style={{ borderTop: `5px solid ${calc.color}` }}
          >
            <div className="card-icon" style={{ color: calc.color }}>
              {calc.icon}
            </div>
            <div className="card-content">
              <h2>{calc.title}</h2>
              <p>{calc.description}</p>
              <Link to={calc.link} className="card-link">
                Open Tool <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="calculations-info">
        <h3>About Our Calculation Tools</h3>
        <p>
          Our collection of calculators helps you perform essential calculations quickly and accurately.
          Whether you're monitoring health metrics, converting units, or working with machines,
          we provide reliable tools to simplify your work.
        </p>
        <p>
          All calculators are designed with precision and user experience in mind, providing
          clear results and helpful information about each calculation.
        </p>
      </div>
    </div>
  );
};

export default Calculations;