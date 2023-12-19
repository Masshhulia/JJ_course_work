import React, { useState } from 'react';
import { createTest } from '../../http/testsApi'; // Импортируйте ваш метод API

const AddTest = () => {
    const [testData, setTestData] = useState({ test_ID: '', title: '', Description: '' });
    const [isFormOpen, setFormOpen] = useState(false);

    const handleInputChange = (event) => {
        setTestData({ ...testData, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const newTest = await createTest(testData);
            console.log('Новый тест успешно создан:', newTest);
        } catch (error) {
            console.error('Ошибка при создании теста:', error);
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
       
    };

    return (
        <div>
            <button style={styles.button}onClick={() => setFormOpen(!isFormOpen)}>
            {isFormOpen ? 'Закрыть форму' : 'Добавить тест'}
            </button>
           
            {isFormOpen && (
                <form style={styles.form} onSubmit={handleFormSubmit}>
                    <label>
                        ID теста:
                        <input type="text" name="test_ID" onChange={handleInputChange} />
                    </label>
                    <label>
                        Название теста:
                        <input type="text" name="title" onChange={handleInputChange} />
                    </label>
                    <label>
                        Описание теста:
                        <input type="text" name="Description" onChange={handleInputChange} />
                    </label>
                    <button type="submit">Создать тест</button>
                </form>
            )}
        </div>
    );
};

export default AddTest;
