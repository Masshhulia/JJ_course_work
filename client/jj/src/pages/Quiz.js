import React from 'react';
import QuizButton from '../components/QuizButton/QuizButton';
import Header from '../components/Header/Header';
import QuestionText from '../components/QuestionText/QuestionText';
import AnswerOptions from '../components/AnswerOptions/AnswerOptions';
import { move } from '../fuctions';

const Quiz = () => {
  return (
    <main className="main">
      <Header />
      <section className="autorize">
        <div className="autorize__container-q">
          <div className="text__quiz">
            <div className="upper_text">
              <h1 className="title_quiz">React Questions</h1>
            </div>
            <div className="upper_text2">
              <h2 className="subtitle_quiz">Test, rate and improve your React knowledge with these questions.</h2>
            </div>
          </div>
          <div className="lane-Progress_container">
            <div className="w3-light-grey">
              <div id="myBar" className="w3-container w3-green" style={{ height: '10px', width: '0%' }}></div>
            </div>
            <p id="demo" className="lane-Progress_text">0 из 51</p>
          </div>
          <div className="questions__container">
          <QuestionText questionText="How to write a comment in React?" />
          <AnswerOptions />
          </div>
          <div className="buttons__quiz">
            <QuizButton text="Back" textColor="#333" bgColor="#FFF" borderColor="#333" onClick={move} />
            <QuizButton text="Next" textColor="#333" bgColor="#FFF" borderColor="#333" onClick={move} />
          </div>
        </div>
      </section>
    </main>
  );
};


export default Quiz;
