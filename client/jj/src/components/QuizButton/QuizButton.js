import React from 'react';

const QuizButton = ({ text, textColor, bgColor, borderColor, onClick }) => {
  const buttonStyle = {
    background: bgColor,
    color: textColor,
    border: `1px solid ${borderColor}`,
  };

  return (
    <button className="already-button" style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default QuizButton;
