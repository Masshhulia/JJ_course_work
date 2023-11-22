import React from 'react';
import './Roadmap.css';

const Roadmap = ({ title, steps }) => {
  return (
    <div className="roadmap-container">
      <div className="roadmap-title">
        <h2>{title}</h2>
      </div>
      <div className="roadmap-steps">
        {steps.map((step, index) => (
          <div key={index} className="roadmap-step">
            <div className="step-box"></div>
            <div className="step-label">{step}</div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
