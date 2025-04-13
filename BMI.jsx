import React, { useState } from 'react';
import './BMI.css';
import { FaWeight, FaRulerVertical, FaCalculator, FaInfoCircle } from 'react-icons/fa';

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const calculateBMI = () => {
    if (!height || !weight) return;
    
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(calculatedBmi);
    
    // Determine BMI category
    if (calculatedBmi < 18.5) {
      setBmiCategory('Underweight');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      setBmiCategory('Normal weight');
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setBmiCategory('Overweight');
    } else {
      setBmiCategory('Obese');
    }
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setBmiCategory('');
  };

  return (
    <div className="bmi-container">
      <div className="bmi-header">
        <h1>BMI Calculator</h1>
        <p>Calculate your Body Mass Index to understand your weight status</p>
      </div>

      <div className="bmi-calculator">
        <div className="input-group">
          <label htmlFor="height">
            <FaRulerVertical className="input-icon" />
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>

        <div className="input-group">
          <label htmlFor="weight">
            <FaWeight className="input-icon" />
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>

        <div className="button-group">
          <button onClick={calculateBMI} className="calculate-btn">
            <FaCalculator /> Calculate BMI
          </button>
          <button onClick={resetForm} className="reset-btn">
            Reset
          </button>
        </div>

        {bmi && (
          <div className="result-container">
            <h3>Your Results:</h3>
            <div className="result-card">
              <div className="result-value">
                <span>BMI:</span>
                <strong>{bmi}</strong>
              </div>
              <div className={`result-category ${bmiCategory.toLowerCase().replace(' ', '-')}`}>
                {bmiCategory}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bmi-info">
        <h3><FaInfoCircle /> About BMI</h3>
        <p>
          Body Mass Index (BMI) is a simple calculation using a person's height and weight.
          It provides a numeric value that helps categorize weight status.
        </p>
        
        <div className="bmi-categories">
          <h4>BMI Categories:</h4>
          <ul>
            <li><span className="underweight">Underweight:</span> BMI less than 18.5</li>
            <li><span className="normal">Normal weight:</span> BMI 18.5–24.9</li>
            <li><span className="overweight">Overweight:</span> BMI 25–29.9</li>
            <li><span className="obese">Obese:</span> BMI 30 or greater</li>
          </ul>
        </div>
        
        <p className="disclaimer">
          Note: BMI is a screening tool but not a diagnostic of body fatness or health.
          Consult a healthcare provider for more comprehensive assessments.
        </p>
      </div>
    </div>
  );
};

export default BMI;