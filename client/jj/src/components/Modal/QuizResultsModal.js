import React from 'react';
import '../../../src/style.css'
const QuizResultsModal = ({ results, onClose }) => {
    
    console.log('Rendering QuizResultsModal')
    return (
      <div className="modal" style={{ zIndex: 99999 }}> 
        <div className="modal-content">
          <h2>Результаты квиза</h2>
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    );
   };

export default QuizResultsModal;
