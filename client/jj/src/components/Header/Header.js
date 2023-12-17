import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header header-main">
      <div className="container">
        <div className="header_inner">
          <Link to="/main" className="logo">
            <img src="images/JJ_logo.svg" alt="" className="logo_img" />
          </Link>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="/main" className="menu__list-link">Home</Link>
              </li>
              <li className="menu__item">
                <Link to="/advices" className="menu__list-link">Advices</Link>
              </li>
              <li className="menu__item">
                <Link to="/roadmaps" className="menu__list-link">RoadMaps</Link>
              </li>
              <li className="menu__item">
                <Link to="/quizes" className="menu__list-link">Quiz</Link>
              </li>
            </ul>
          </nav>
          <div className="buttons__container">
          <Link to="/auth" className="log__in">
            <div className="button-text">Log In</div>
          </Link>
          <Link to="/main" className="log__up">
            <div className="button-text">Sign In</div>
          </Link>
          <Link to="/account" className="acc_h">
          <img src="images/acc.svg" alt="" className="" />
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
