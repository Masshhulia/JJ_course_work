import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuizButton from '../components/QuizButton/QuizButton';
import Header from '../components/Header/Header';
import QuestionText from '../components/QuestionText/QuestionText';
import AnswerOptions from '../components/AnswerOptions/AnswerOptions';
import { getQuestions } from '../http/questionsApi';
import { getTestById } from '../http/testsApi';
import { $authHost } from "../http/index";
import {fetchTestResults} from "../http/testResultsAPI"
import { jwtDecode } from "jwt-decode";


const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [testId, setTestId] = useState(null);
  const [test, setTest] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [testResults, setTestResults] = useState(null);

  const token = localStorage.getItem('token'); 


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
  } else {
    console.log('ID found in decoded token:', decodedToken.id);
  }

  let userId;
  if (decodedToken) {
    userId = decodedToken.id;
  }
  
  
  console.log(userId);

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
    newSelectedAnswers[currentQuestionIndex] = [
      ...newSelectedAnswers[currentQuestionIndex] || [] 
    ];
    newSelectedAnswers[currentQuestionIndex][index] = !newSelectedAnswers[currentQuestionIndex][index];
    setSelectedAnswers(newSelectedAnswers);
  };

  const submitAnswers = async () => {
    try {
        const formattedAnswers = selectedAnswers.map((answer, index) => {
            const question = questions[index]; // Получаем вопрос по индексу

            const selectedOptions = answer
                .map((isSelected, optionIndex) => 
                    isSelected ? { question_ID: question.question_ID, option_ID: optionIndex } : null
                )
                .filter(Boolean);

            return {
                questionIndex: index + 1,
                selectedOptions,
                testId: test ? test.test_ID : null // Убедитесь, что test — это объект
            };
        });

        const jsonString = JSON.stringify({ answers: formattedAnswers });

        console.log('Submitting answers:', jsonString); // Логируем окончательный JSON

        const response = await $authHost.post('/api/questions/testresults', jsonString, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Test results submitted successfully:', response.data);

        await handleTestCompletion();
    } catch (error) {
        console.error('Error submitting test results:', error.message);
    } finally {
        setShowResultsModal(true);
    }
};
  

  const handleTestCompletion = async () => {
    const results = await fetchTestResults(userId, testId);
    setTestResults(results);
    setShowResultsModal(true);
  };
  


  useEffect(() => {
    const storedTestId = localStorage.getItem('selectedTestId');
    if (storedTestId) {
      setTestId(storedTestId);
      fetchQuestionsData(storedTestId);
      fetchTestData(storedTestId); // Передаем ID теста для получения конкретного теста
    }
  }, []);

  const fetchQuestionsData = async (id) => {
    try {
      const fetchedQuestions = await getQuestions(id);
      setQuestions(fetchedQuestions);
      setTotalQuestions(fetchedQuestions.length);
    } catch (error) {
      console.error('Error fetching questions:', error.message);
    }
  };

  const fetchTestData = async (id) => {
    try {
      const fetchedTest = await getTestById(id); // Получаем тест по ID
      setTest(fetchedTest); // Устанавливаем тест
    } catch (error) {
      console.error('Error fetching test data:', error.message);
    }
  };
  const currentQuestion = questions[currentQuestionIndex];
  

  return (
    <main className="main">
      <Header />
      <section className="autorize">
        <div className="autorize__container-q">
          <div className="text__quiz">
          <div className="upper_text">
              <h1 className="title_quiz">{test ? test.title : 'No Title'}</h1>
            </div>
            <div className="upper_text2">
              <h2 className="subtitle_quiz">{test ? test.Description : 'Test description not available.'}</h2>
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
              setSelectedAnswers={setSelectedAnswers} 
            />

          </div>
          <div className="buttons__quiz">
            <QuizButton text="Back" textColor="#333" bgColor="#FFF" borderColor="#333" onClick={moveToPreviousQuestion} />
            {!isLastQuestion && <QuizButton text="Next" textColor="#333" bgColor="#FFF" borderColor="#333" onClick={moveToNextQuestion} />}
            {isLastQuestion && <QuizButton text="Submit Answers" textColor="#FFF" bgColor="#1DC9A0" borderColor="#1DC9A0" onClick={submitAnswers} />}
          </div>
        </div>
      </section>

    {showResultsModal && (
      <div style={{
        display:'block' ,
        position: 'fixed',
        top: '50%',
        left: '50%',
        width: '454px',
        height: '372px',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        background: '#fff',
        boxShadow: '0px 4px 0px rgba(159, 106, 173, 0.25) inset',
        borderRadius: '12px',
        border: '1px #562D61 solid',
        zIndex: 999,
        textAlign: 'center', 
      }}>
    <div className="modal-content">
      <h2 style={{color: '#1DC9A0'}}>Test completed!</h2>
      {testResults && testResults.length > 0 ? (
        <>
          <p style={{fontSize: '20px'}}>Your result: {testResults[testResults.length - 1].score} %</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <button onClick={() => setShowResultsModal(false)} style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer'
        }}>Close</button>
    </div>
    )}
    </main>
  );
};

export default Quiz;

