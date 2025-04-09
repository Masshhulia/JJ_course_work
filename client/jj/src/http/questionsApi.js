import { $authHost } from './index';

export const getQuestions = async (testId) => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.error("Ошибка: Токен отсутствует в localStorage");
        throw new Error("Token is missing");
    }

    console.log("Используемый токен:", token);

    try {
        const response = await $authHost.get(`/api/quest/questions/${testId}`, {
            headers: {
                Authorization: `Bearer ${token}` // Используем токен из переменной
            }
        });

        // Логируем ответ для отладки
        console.log("Ответ от сервера:", response.data);

        return response.data; // Возвращаем данные
    } catch (error) {
        console.error("Ошибка загрузки вопросов:", error.response?.data || error.message);
        throw error; // Пробрасываем ошибку дальше
    }
};

// Создать новый вопрос
export const createQuestion = async (questionData) => {
    const response = await $authHost.post('/api/quest/questions', questionData);
    return response.data;
};