import React from 'react';

const QuizQuestion = ({ question }) => {
  return (
    <div className="questions__container">
      <h1 className="question__text">{question}</h1>
      <button className="reveal__button">Click to Reveal the Answer</button>
    </div>
  );
};

export default QuizQuestion;
