import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { jwtDecode } from "jwt-decode";

  const Header = observer(() =>{

    const {user} = useContext(Context)
    const token = localStorage.getItem('token');
  
    let decodedToken;
    let userRole;
    if (typeof token === 'string') {
      decodedToken = jwtDecode(token);
      userRole = decodedToken.role;
    } else {
      console.error('Token is not a string:', token);
    }
  
    const handleLogout = () => {
      user.logout();
    }
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
          {user.isAuth && userRole === 'ADMIN' && (
         <Link to="/admin" className="acc_h">
           <img src="images/AD.svg" alt="" className="" />
         </Link>
          )}
          <Link to="/auth" className="log__in">
            <div className="button-text">Log In</div>
          </Link>
          <Link to="/main" className="log__up">
            <div className="button-text">Sign In</div>
          </Link>
          <Link to="/account" className="acc_h">
          <img src="images/acc.svg" alt="" className="" />
          </Link>
          {user.isAuth && (
          <Link to="/main" className="log__up" onClick={handleLogout}>
            <div className="button-text">Logout</div>
          </Link>
          )}
          
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
