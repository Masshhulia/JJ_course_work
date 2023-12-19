import React, { useEffect, useState } from 'react';
import { getQuestions } from '../../http/questionsApi'; // Импортируйте ваш метод API

const QetAllQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await getQuestions();
            setQuestions(data);
        };

        if (isVisible) {
            fetchQuestions();
        }
    }, [isVisible]);

    const styles = {
        button: {
            margin: '10px 0',
            padding: '10px 20px',
            fontSize: '16px',
        },
        question: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px 0',
        },
        questionInfo: {
            margin: '5px 0',
        },
    };

    return (
        <div>
            <button style={styles.button} onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Скрыть список вопросов' : 'Показать список вопросов'}
            </button>

            {isVisible && questions.map((question) => (
                <div key={question.question_ID} style={styles.question}>
                    <p style={styles.questionInfo}>{question.question_text}</p>
                    {/* Отображение других свойств вопроса */}
                </div>
            ))}
        </div>
    );
};

export default QetAllQuestions;
