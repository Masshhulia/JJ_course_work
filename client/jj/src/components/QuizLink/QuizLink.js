
import React from 'react';
import { Link } from 'react-router-dom';

const QuizLink = ({ to, text, description }) => {
  return (
    <div className="container1">
      <Link to={to} className="quiz__link">
        <p className="text_in_button-r">{text}</p>
        <p className="text_in_button2-r">{description}</p>
      </Link>
    </div>
  );
};

export default QuizLink;
