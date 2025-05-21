import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAccountInfo } from '../http/accountApi';
import TestResults from '../components/TestResultsProgress/TestResultsProgress.js';
import { getTestById } from "../http/testsApi";
import { fetchTestResults } from "../http/testResultsAPI";
import { jwtDecode } from "jwt-decode";
import TestResultsRadar from '../components/TestResultsChart/TestResultsChart.js';

const TestResultsPage = () => {
  const [userData, setUserData] = useState(null);
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    let decodedToken;

    if (token) {
      try {
        decodedToken = jwtDecode(token);
      } catch (e) {
        console.error('Error decoding token:', e);
      }
    }

    if (!decodedToken || !decodedToken.id) {
      console.error('User ID not found in token');
      return;
    }

    const userId = decodedToken.id;

    const fetchData = async () => {
      try {
        const accountInfo = await getAccountInfo();
        setUserData(accountInfo);
    
        const results = await fetchTestResults(userId);
    
        if (!results || results.length === 0) {
          console.warn('No test results available');
          return;
        }

        // Группировка по tests_ID и выбор результата с наибольшим score
        const groupedResults = results.reduce((acc, result) => {
          const testId = result.tests_ID;
          const current = acc[testId];

          if (!current || result.score > current.score) {
            acc[testId] = result; // Сохраняем результат с наибольшим score
          }
    
          return acc;
        }, {});
    
        const latestResults = Object.values(groupedResults);
    
        // Подгружаем названия тестов
        const resultsWithTitles = await Promise.all(
          latestResults.map(async (res) => {
            try {
              const testInfo = await getTestById(res.tests_ID);
              return { ...res, testTitle: testInfo.title };
            } catch (e) {
              console.warn(`Error loading test title for test ID ${res.tests_ID}`);
              return { ...res, testTitle: "Unknown Test" };
            }
          })
        );
    
        setTestResults(resultsWithTitles);
      } catch (error) {
        console.error('Error fetching test results:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!userData || testResults.length === 0) {
    return (
      <div>Вы не прошли еще ни одного теста!
        <div>
          <Link to="/account" className="menu__list-link">Назад</Link>
        </div>
      </div>
    );
  }

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
              <Link to="/quizes" className="menu__list-link">Тесты</Link>
              <div className="line-list acc"></div>
            </div>
            <div className="white_container">
              <svg xmlns="http://www.w3.org/2000/svg" width="1065" height="788" viewBox="0 0 1065 788" fill="none">
                <path d="M0 30C0 13.4314 13.4315 0 30 0H1035C1051.57 0 1065 13.4315 1065 30V758C1065 774.569 1051.57 788 1035 788H30C13.4315 788 0 774.569 0 758V30Z" fill="white" />
              </svg>
              <div className="back-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                  <path d="M18 5.5H3.83L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.08L3.83 7.5H18V5.5Z" fill="#333333" />
                </svg>
                <Link to="/account" className="menu__list-link">Назад</Link>
                <TestResultsRadar testResults={testResults} />
              </div>
              
              <div className="results-progress">
                {testResults.map((result, index) => (
                  <div key={index} className="test-result-block">
                    <h3>{result.testTitle}</h3>
                    <TestResults testResults={[result]} />
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

export default TestResultsPage;