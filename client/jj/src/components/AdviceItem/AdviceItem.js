import React from 'react';
import { Link } from 'react-router-dom';

const AdviceItem = ({ text, url }) => {
  return (
    <>
      <Link to={url} className="advices-link">{text}</Link>
      <div className="line-list"></div>
    </>
  );
};

export default AdviceItem;

