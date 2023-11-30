
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
            <h2 className="quiz__text">Questions</h2>
          </div>
          <div className="subtitle__quiz">
            <h2 className="quiz__text2">Quizzes to help you test and improve your knowledge and skill up</h2>
          </div>
          {tests.map((test) => (
            <QuizLink key={test.test_ID} to={`/quiz`} text={test.title} description={test.Description} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Quiz_main;


