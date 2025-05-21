import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers, getAccountInfo } from '../http/accountApi'; 

const UserRankingPage = () => {

    const [userData, setUserData] = useState(null);
    const [users, setUsers] = useState([]);
  
    
  
    useEffect(() => {
        const fetchUsersAndAccountInfo = async () => {
          const accountInfo = await getAccountInfo();
          setUserData(accountInfo);
    
          const fetchedUsers = await getAllUsers();
          setUsers(fetchedUsers);
        };
    
        fetchUsersAndAccountInfo();
      }, []);
    

  if (!userData) {
    return <div>Loading...</div>;
  }
  const sortedUsers = users.sort((a, b) => b.days - a.days);
  return (
    <body className="body-acc">
      <div className="wrapper">
        <main className="main">
          <div className="acc-container">
            <img src="images/avatar.svg" alt="" className="avatar-img" />
            <div className="name-acc">
              <p className="name">{userData.name} {userData.last_name}</p>
              <p className="job">{userData.job}</p>
            </div>
            <div className="menu_pages">
              <Link to="/roadmaps" className="menu__list-link">Дорожные карты</Link>
              <div className="line-list acc"></div>
              <Link to="/urating" className="menu__list-link">Рейтинг</Link>
              <div className="line-list acc"></div>
              <Link to="/testres" className="menu__list-link">Результаты тестов</Link>
              <div className="line-list acc"></div>
              <Link to="/quizes" className="menu__list-link">Теста</Link>
              <div className="line-list acc"></div>
            </div>
            <div className="white_container">
              <svg xmlns="http://www.w3.org/2000/svg" width="1065" height="788" viewBox="0 0 1065 788" fill="none">
                <path d="M0 30C0 13.4314 13.4315 0 30 0H1035C1051.57 0 1065 13.4315 1065 30V758C1065 774.569 1051.57 788 1035 788H30C13.4315 788 0 774.569 0 758V30Z" fill="white" />
                <path d="M0 30C0 13.4314 13.4315 0 30 0H1035C1051.57 0 1065 13.4315 1065 30V758C1065 774.569 1051.57 788 1035 788H30C13.4315 788 0 774.569 0 758V30Z" fill="white" />
              </svg>
              <div className="back-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                  <path d="M18 5.5H3.83L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.08L3.83 7.5H18V5.5Z" fill="#333333" />
                </svg>
                <Link to="/account" className="menu__list-link">Назад</Link>
              </div>
              <div className="results-progress">
                    <h1 style={{ fontSize: '2em', color: '#454676'}}>Рейтинг пользователей Juniors Journey</h1>
                    {sortedUsers.slice(0, 5).map((user, index) => (
                        <div key={user.id} style={{ margin: '20px 0', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
                        <h2 style={{ fontSize: '1.5em' ,fontWeight: 'normal'}}>{index + 1}. {user.name}</h2>
                        </div>
                    ))}
                    </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};


export default UserRankingPage;
