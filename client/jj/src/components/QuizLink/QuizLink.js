
import React from 'react';
import { Link } from 'react-router-dom';

const QuizLink = ({ to, text, description, testId }) => {
  const handleQuizLinkClick = () => {
    console.log('QuizLink Clicked', testId);
    localStorage.setItem('selectedTestId', testId);
    const storedTestId = localStorage.getItem('selectedTestId');
  console.log('Stored TestId:', storedTestId);
  };

  return (
    <div className="container1">
      <Link to={to} className="quiz__link" onClick={handleQuizLinkClick}>
        <p className="text_in_button-r">{text}</p>
        <p className="text_in_button2-r">{description}</p>
      </Link>
    </div>
  );
};


export default QuizLink;

