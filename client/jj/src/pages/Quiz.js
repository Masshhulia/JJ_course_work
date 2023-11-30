import React, { useState, useEffect } from 'react';
import QuizButton from '../components/QuizButton/QuizButton';
import Header from '../components/Header/Header';
import QuestionText from '../components/QuestionText/QuestionText';
import AnswerOptions from '../components/AnswerOptions/AnswerOptions';
import { getQuestions } from '../http/questionsApi';
import { getTests } from '../http/testsApi';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [test, setTests] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      const newProgress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
      setProgress(newProgress);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsLastQuestion(true);
    }
  };

  const moveToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsLastQuestion(false);
    }
  };

  const handleAnswerSelected = (index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = newSelectedAnswers[currentQuestionIndex] || [];
    newSelectedAnswers[currentQuestionIndex][index] = !newSelectedAnswers[currentQuestionIndex][index];
    setSelectedAnswers(newSelectedAnswers);
  };

  useEffect(() => {
    const fetchQuestionsData = async () => {
      try {
        const fetchedQuestions = await getQuestions();
        setQuestions(fetchedQuestions);
        setTotalQuestions(fetchedQuestions.length);
      } catch (error) {
        console.error('Error fetching questions:', error.message);
      }
    };

    const fetchTestsData = async () => {
      try {
        const fetchedTests = await getTests();
        setTests(fetchedTests);
      } catch (error) {
        console.error('Error fetching tests:', error.message);
      }
    };

    fetchQuestionsData();
    fetchTestsData();
  }, []); 

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main className="main">
      <Header />
      <section className="autorize">
        <div className="autorize__container-q">
          <div className="text__quiz">
            <div className="upper_text">
              <h1 className="title_quiz">{test.length > 0 ? test[0].title : 'No Title'}</h1>
            </div>
            <div className="upper_text2">
              <h2 className="subtitle_quiz">{test.length > 0 ? test[0].Description : 'Test, rate and improve your React knowledge with these questions.'}</h2>
            </div>
          </div>
          <div className="lane-Progress_container">
            <div className="w3-light-grey">
              <div id="myBar" className="w3-container w3-green" style={{ height: '10px', width: `${progress}%` }}></div>
            </div>
            <div className="lane-Progress_text">{currentQuestionIndex + 1} из {totalQuestions}</div>
          </div>
          <div className="questions__container">
            <QuestionText questionText={currentQuestion?.question_text || ''} />
            <AnswerOptions
              answerOptions={currentQuestion?.Options || []}
              onAnswerSelected={handleAnswerSelected}
              currentQuestionIndex={currentQuestionIndex}
              selectedAnswers={selectedAnswers}
            />
          </div>
          <div className="buttons__quiz">
            <QuizButton text="Back" textColor="#333" bgColor="#FFF" borderColor="#333" onClick={moveToPreviousQuestion} />
            {!isLastQuestion && <QuizButton text="Next" textColor="#333" bgColor="#FFF" borderColor="#333" onClick={moveToNextQuestion} />}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quiz;
