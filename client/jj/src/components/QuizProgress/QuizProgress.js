// import React, { useState } from 'react';
// import { ProgressBar } from 'react-bootstrap'; // Используйте { ProgressBar } вместо ProgressBar

// const QuizProgress = ({ totalQuestions }) => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const move = () => {
//     setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//   };

//   const percent = (currentQuestion / totalQuestions) * 100;

//   return (
//     <div className="lane-Progress_container">
//       <ProgressBar className="w3-light-grey">
//         <ProgressBar now={percent} className="w3-container w3-green" />
//       </ProgressBar>
//       <p id="demo" className="lane-Progress_text">{`${currentQuestion} из ${totalQuestions}`}</p>
//       <button onClick={move}>Move Progress</button>
//     </div>
//   );
// };

// export default QuizProgress;
