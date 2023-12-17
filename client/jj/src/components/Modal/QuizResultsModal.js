import React from 'react';
import '../../../src/style.css'
const QuizResultsModal = ({ results, onClose }) => {
    // Реализуйте пользовательский интерфейс модального окна с использованием результатов
    console.log('Rendering QuizResultsModal')
    return (
      <div className="modal" style={{ zIndex: 99999 }}> {/* Увеличьте z-index, чтобы модальное окно отображалось поверх других элементов */}
        <div className="modal-content">
          <h2>Результаты квиза</h2>
          {/* Отобразите результаты квиза здесь */}
          <button onClick={onClose}>Закрыть</button>
        </div>
      </div>
    );
   };

export default QuizResultsModal;
