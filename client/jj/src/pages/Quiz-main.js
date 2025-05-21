// Quiz_main.js
import React, { useState, useEffect } from 'react';
import QuizLink from '../components/QuizLink/QuizLink';
import Header from '../components/Header/Header';
import { getTests } from '../http/testsApi';

const Quiz_main = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchTestsData = async () => {
      try {
        const fetchedTests = await getTests();
        setTests(fetchedTests);
      } catch (error) {
        console.error('Error fetching tests:', error.message);
      }
    };

    fetchTestsData();
  }, []);

  return (
    <main className="main">
      <Header />
      <section className="autorize">
        <div className="autorize__container">
          <div className="title__quiz">
            <h2 className="quiz__text">Тесты</h2>
          </div>
          <div className="subtitle__quiz">
            <h2 className="quiz__text2">Тесты, которые помогут вам проверить и улучшить свои знания и навыки</h2>
          </div>
          {tests.map((test) => (
            <QuizLink key={test.test_ID}  to={`/quiz`} testId={test.test_ID} text={test.title} description={test.Description} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Quiz_main;