// AnswerOptions.js
import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import '../Checkbox/checkstyles.css'

const AnswerOptions = () => {
  const answerOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const [selectedOptions, setSelectedOptions] = useState(Array(answerOptions.length).fill(false));

  const handleCheckboxChange = (index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = !newSelectedOptions[index];
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div className="answer-options__container">
      {answerOptions.map((option, index) => (
        <div key={index} className="answer-option">
          <Checkbox
            isChecked={selectedOptions[index]}
            onChange={() => handleCheckboxChange(index)}
          />
          <div className="answer-text">{option}</div>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
