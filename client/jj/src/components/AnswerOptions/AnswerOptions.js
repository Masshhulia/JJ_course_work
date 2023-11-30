import React, { useState, useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import '../Checkbox/checkstyles.css';

const AnswerOptions = ({ answerOptions, onAnswerSelected, currentQuestionIndex, selectedAnswers }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(answerOptions?.length || 0).fill(false));

  useEffect(() => {
    // Update selected options when the current question changes
    setSelectedOptions(selectedAnswers[currentQuestionIndex] || Array(answerOptions?.length || 0).fill(false));
  }, [currentQuestionIndex, selectedAnswers]);

  const handleCheckboxChange = (index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = !newSelectedOptions[index];
    setSelectedOptions(newSelectedOptions);
    onAnswerSelected(index);
  };

  return (
    <div className="answer-options__container">
      {answerOptions?.map((option, index) => (
        <div key={index} className="answer-option">
          <Checkbox
            isChecked={selectedOptions[index]}
            onChange={() => handleCheckboxChange(index)}
          />
          <div className="answer-text">{option.option_text}</div>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
