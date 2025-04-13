import React, { useState, useEffect } from 'react';
import './Measurement.css';
import { MdCompareArrows } from "react-icons/md";

const Measurements = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('mm');
  const [outputUnit, setOutputUnit] = useState('cm');
  const [isConverting, setIsConverting] = useState(false);

  // Complete conversion factors including mm and µm
  const conversionFactors = {
    µm: {
      mm: 0.001,
      cm: 0.0001,
      m: 0.000001,
      km: 0.000000001
    },
    mm: {
      µm: 1000,
      cm: 0.1,
      m: 0.001,
      km: 0.000001
    },
    cm: { 
      µm: 10000,
      mm: 10,
      m: 0.01, 
      km: 0.00001 
    },
    m: { 
      µm: 1000000,
      mm: 1000,
      cm: 100, 
      km: 0.001 
    },
    km: { 
      µm: 1000000000,
      mm: 1000000,
      cm: 100000, 
      m: 1000 
    }
  };

  // Handle conversion with precision control
  const handleConversion = () => {
    if (inputValue === '' || isNaN(inputValue)) {
      setOutputValue('');
      return;
    }

    setIsConverting(true);
    
    // Same unit - no conversion needed
    if (inputUnit === outputUnit) {
      setOutputValue(inputValue);
      setIsConverting(false);
      return;
    }

    // Perform conversion
    const factor = conversionFactors[inputUnit][outputUnit];
    const result = parseFloat(inputValue) * factor;
    
    // Determine appropriate precision based on the magnitude
    let precision;
    if (Math.abs(result) < 0.0001) {
      precision = 8;
    } else if (Math.abs(result) < 0.1) {
      precision = 6;
    } else if (Math.abs(result) < 10) {
      precision = 4;
    } else {
      precision = 2;
    }
    
    // Format the result with dynamic precision
    const formattedResult = result.toLocaleString(undefined, {
      maximumFractionDigits: precision,
      minimumFractionDigits: 0
    });
    
    setOutputValue(formattedResult);
    setIsConverting(false);
  };

  // Swap units and values
  const swapUnits = () => {
    setInputUnit(outputUnit);
    setOutputUnit(inputUnit);
    setInputValue(outputValue);
    setOutputValue(inputValue);
  };

  // Auto-convert when input or units change
  useEffect(() => {
    const timer = setTimeout(() => {
      handleConversion();
    }, 300); // Small delay for better performance with rapid typing
    
    return () => clearTimeout(timer);
  }, [inputValue, inputUnit, outputUnit]);

  return (
    <div className='measurement'>
      <h1 className='measure-title'>
        Precision Length Unit Converter
      </h1>
      <div className='measurement-container'>
        <div className='input-group'>
          <label htmlFor="user-input">Input Value:</label>
          <input 
            id='user-input' 
            type="number" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value"
            className='measurement-input'
            step="any"
          />
          <select 
            name="inputUnits" 
            value={inputUnit}
            onChange={(e) => setInputUnit(e.target.value)}
            className='unit-select'
          >
            <option value="µm">Micrometer (µm)</option>
            <option value="mm">Millimeter (mm)</option>
            <option value="cm">Centimeter (cm)</option>
            <option value="m">Meter (m)</option>
            <option value="km">Kilometer (km)</option>
          </select>
        </div>
        
        <MdCompareArrows 
          className='swap-icon' 
          onClick={swapUnits}
          title="Swap units"
        />
        
        <div className='output-group'>
          <label htmlFor="user-output">Converted Value:</label>
          <input 
            id='user-output' 
            type="text" 
            value={isConverting ? 'Converting...' : outputValue}
            readOnly
            className='measurement-output'
          />
          <select 
            name="outputUnits" 
            value={outputUnit}
            onChange={(e) => setOutputUnit(e.target.value)}
            className='unit-select'
          >
            <option value="µm">Micrometer (µm)</option>
            <option value="mm">Millimeter (mm)</option>
            <option value="cm">Centimeter (cm)</option>
            <option value="m">Meter (m)</option>
            <option value="km">Kilometer (km)</option>
          </select>
        </div>
      </div>
      
      <div className='conversion-info'>
        {inputValue && outputValue && !isConverting && (
          <p className='conversion-formula'>
            {inputValue} {inputUnit} = {outputValue} {outputUnit}
            <span className='conversion-details'>
              (1 {inputUnit} = {conversionFactors[inputUnit][outputUnit]} {outputUnit})
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Measurements;
