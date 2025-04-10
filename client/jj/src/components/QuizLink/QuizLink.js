import React from 'react';
import { Link } from 'react-router-dom';

const QuizLink = ({ to, text, description, testId, roadmapId }) => {
  const handleQuizLinkClick = () => {
    console.log('QuizLink Clicked', roadmapId, testId);
    localStorage.setItem('selectedRoadmapId', roadmapId); // Сохраняем ID дорожной карты
    localStorage.setItem('selectedTestId', testId); // Сохраняем ID теста
    console.log('Stored RoadmapId:', localStorage.getItem('selectedRoadmapId'));
    console.log('Stored TestId:', localStorage.getItem('selectedTestId'));
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
