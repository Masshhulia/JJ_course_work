
import React from 'react';
import QuizLink from '../components/QuizLink/QuizLink';
import Header from '../components/Header/Header';

const Quiz_main = () => {
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
          <QuizLink to="/quiz" text="Frontend Quiz" description="Test your knowledge in frontend development" />
          <QuizLink to="/backend-quiz" text="Backend Quiz" description="Test your knowledge in backend development" />
        </div>
      </section>
    </main>
  );
};

export default Quiz_main;

