import React from 'react';

const BackButton = () => {
  return (
    <div className="back-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
        <path d="M18 5.5H3.83L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.08L3.83 7.5H18V5.5Z" fill="#333333"/>
      </svg>
      <a href="#" className="back-link">Back</a>
    </div>
  );
};

export default BackButton;