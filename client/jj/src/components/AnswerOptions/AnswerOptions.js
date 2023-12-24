import React, { useState, useEffect } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import '../Checkbox/checkstyles.css';

const AnswerOptions = ({ answerOptions, onAnswerSelected, currentQuestionIndex, selectedAnswers, setSelectedAnswers }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(answerOptions?.length || 0).fill(false));

  useEffect(() => {
    setSelectedOptions(selectedAnswers[currentQuestionIndex] || []);
  }, [currentQuestionIndex, selectedAnswers, answerOptions]);

  const handleCheckboxChange = (option) => {
    try {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[currentQuestionIndex] = [
        ...(newSelectedAnswers[currentQuestionIndex] || [])
      ];
      
      const existingAnswerIndex = newSelectedAnswers[currentQuestionIndex].findIndex(
        (answer) => answer.option_ID === option.option_ID
      );
      
      if (existingAnswerIndex !== -1) {
        newSelectedAnswers[currentQuestionIndex].splice(existingAnswerIndex, 1);
      } else {
        newSelectedAnswers[currentQuestionIndex].push({
          question_ID: currentQuestionIndex,
          option_ID: option.option_ID,
        });
      }
      
      setSelectedAnswers(newSelectedAnswers);
      onAnswerSelected(option.option_ID);
    } catch (error) {
      console.error("Пользователь попытался выбрать второй вариант ответа: ", error);
    }
  };
  
  return (
    <div className="answer-options__container">
      {answerOptions?.map((option, index) => (
        <div key={index} className="answer-option">
          <Checkbox
            id={option.option_ID}
            isChecked={selectedOptions[option.option_ID]}
            onChange={() => handleCheckboxChange(option)}
          />
          <div className="answer-text">{option.option_text}</div>
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;
