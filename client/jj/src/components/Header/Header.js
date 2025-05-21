import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { jwtDecode } from "jwt-decode";

  const Header = observer(() =>{

    const token = localStorage.getItem('token');
  
    let decodedToken;
    let userRole;
    if (typeof token === 'string') {
      decodedToken = jwtDecode(token);
      userRole = decodedToken.role;
    } 
    //   console.error('Token is not a string:', token);
    // }
    
  
    const {user} = useContext(Context);

  const handleLogout = () => {
  user.logout();
};
const userAuth = localStorage.getItem('auth');
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
                <Link to="/main" className="menu__list-link">Главная</Link>
              </li>
              <li className="menu__item">
                <Link to="/advices" className="menu__list-link">Советы</Link>
              </li>
              <li className="menu__item">
                <Link to="/roadmaps" className="menu__list-link">Дорожные карты</Link>
              </li>
              <li className="menu__item">
                <Link to="/quizes" className="menu__list-link">Тесты</Link>
              </li>
            </ul>
            
          </nav>
          <div className="buttons__container">
          {userAuth === 'true' && userRole === 'ADMIN' && (
         <Link to="/admin" className="acc_h">
           <img src="images/AD.svg" alt="" className="" />
         </Link>
          )}
          <Link to="/auth" className="log__in">
            <div className="button-text">Вход</div>
          </Link>
          <Link to="/#create" className="log__up">
            <div className="button-text">Регистрация</div>
          </Link>
          <Link to="/account" className="acc_h">
          <img src="images/acc.svg" alt="" className="" />
          </Link>
          {userAuth === 'true' && (
          <Link to="/main" className="log__up" onClick={handleLogout}>
            <div className="button-text">Выйти</div>
          </Link>
          )}
          
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
