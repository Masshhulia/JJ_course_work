import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAccountInfo } from '../http/accountApi';
import TestResults from '../components/TestResultsProgress/TestResultsProgress.js';
import { getTestById } from "../http/testsApi";
import { fetchTestResults } from "../http/testResultsAPI";
import { jwtDecode } from "jwt-decode";

const TestResultsPage = () => {
    const [userData, setUserData] = useState(null);
    const [testResults, setTestResults] = useState(null);
    const [testName, setTestName] = useState("");
    const token = localStorage.getItem('token');
  
    const testId = localStorage.getItem('selectedTestId');
  
    useEffect(() => {
      let decodedToken;
    
      if (token) {
        try {
          decodedToken = jwtDecode(token);
          console.log('Decoded token:', decodedToken);
        } catch (e) {
          console.error('Error decoding token:', e);
        }
      }
    
      if (!decodedToken || !decodedToken.id) {
        console.error('ID not found in decoded token');
        return; 
      }
    
      const userId = decodedToken.id;
    
      const fetchData = async () => {
        try {
          const accountInfo = await getAccountInfo();
          setUserData(accountInfo);
    
          const results = await fetchTestResults(userId, testId);
    
          if (results && results.length > 0) {
            setTestResults([results[results.length - 1]]);

            if (testId) {
              const testInfo = await getTestById(testId);
              setTestName(testInfo.title);
            } else {
              console.error('Test ID is undefined.');
            }
          } else {
            console.warn('No test results available for the user.');
          }
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
    
      fetchData();
    }, [testId, token]);

  if (!userData || !testResults) {
    return <div>You haven't taken any tests yet!
        <div>
        <Link to="/account" className="menu__list-link">Back</Link>
        </div>
    </div>;
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
              <Link to="/roadmaps" className="menu__list-link">Roadmaps</Link>
              <div className="line-list acc"></div>
              <Link to="/urating" className="menu__list-link">Rating</Link>
              <div className="line-list acc"></div>
              <Link to="/testres" className="menu__list-link">Test results</Link>
              <div className="line-list acc"></div>
              <Link to="/quizes" className="menu__list-link">Tests</Link>
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
                <Link to="/account" className="menu__list-link">Back</Link>
              </div>
              <div className="results-progress">
              <h2 className="test-name">{testName}</h2>
              <TestResults testResults={testResults}></TestResults>
              </div>
              
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default TestResultsPage;
