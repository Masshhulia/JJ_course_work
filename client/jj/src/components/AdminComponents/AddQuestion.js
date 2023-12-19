import React, { useState } from 'react';
import { createQuestion } from '../../http/questionsApi'; 

const AddQuestion = () => {
    const [questionData, setQuestionData] = useState({ question_text: '' });
    const [isVisible, setIsVisible] = useState(false);

    const handleInputChange = (event) => {
        setQuestionData({ ...questionData, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const newQuestion = await createQuestion(questionData);
            console.log('Новый вопрос успешно создан:', newQuestion);
        } catch (error) {
            console.error('Ошибка при создании вопроса:', error);
        }
    };

    const styles = {
        button: {
            margin: '10px 0',
            padding: '10px 20px',
            fontSize: '16px',
        },
        form: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px 0',
        },
        formInfo: {
            margin: '5px 0',
        },
    };

    return (
        <div>
            <button style={styles.button} onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Скрыть форму' : 'Добавить вопрос'}
            </button>

            {isVisible && (
                <form style={styles.form} onSubmit={handleFormSubmit}>
                    <label style={styles.formInfo}>
                        Текст вопроса:
                        <input type="text" name="question_text" onChange={handleInputChange} />
                    </label>
                    <button type="submit">Добавить вопрос</button>
                </form>
            )}
        </div>
    );
};

export default AddQuestion;

