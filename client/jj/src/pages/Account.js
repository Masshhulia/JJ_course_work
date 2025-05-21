import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAccountInfo } from '../http/accountApi';
import { getRoadmapsNamesByID } from '../http/roadmapStepsAPI';
import { jwtDecode } from "jwt-decode";

const AccountPage = () => {
    const [userData, setUserData] = useState(null);
    const [roadmapName, setRoadmapName] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    let userId;

    useEffect(() => {
        const fetchAccountInfo = async () => {
            try {
                const response = await getAccountInfo();
                setUserData(response);
            } catch (error) {
                console.error('Ошибка получения данных аккаунта:', error.message);
            }
        };

        fetchAccountInfo();
    }, []);

    useEffect(() => {
        const fetchRoadmapName = async () => {
            const roadmapId = localStorage.getItem('selectedRoadmapId'); // Получаем ID как строку
            if (!roadmapId) return;

            try {
                const data = await getRoadmapsNamesByID(roadmapId); // Запрашиваем название по ID
                setRoadmapName(data?.RoadmapName_name || 'Unknown roadmap');
            } catch (error) {
                console.error('Ошибка при получении названия дорожной карты:', error.message);
            }
        };

        fetchRoadmapName();
    }, []);

    // Извлечение ID пользователя из токена
    const token = localStorage.getItem('token'); // Получаем токен
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
        userId = decodedToken.id;
        console.log('ID found in decoded token:', userId);
    }

    if (!userData) {
        return (
            <div>
                Вы еще не авторизованы! Желаете войти в свой аккаунт?
                <Link to="/auth" className="log__in">
                    <div className="button-text">Войти</div>
                </Link>
            </div>
        );
    }
       const handleDownload = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/account/download/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/pdf', // Убедитесь, что заголовок правильный
                },
            });
            if (!response.ok) {
                throw new Error('Ошибка при скачивании дорожной карты');
            }
            const blob = await response.blob(); // Получаем файл как Blob
            const url = window.URL.createObjectURL(blob); // Создаем URL для Blob
            const a = document.createElement('a'); // Создаем элемент a для скачивания
            a.style.display = 'none';
            a.href = url;
            a.download = 'roadmap.pdf'; // Название для скачиваемого файла
            document.body.appendChild(a);
            a.click(); // Имитация клика для скачивания
            window.URL.revokeObjectURL(url); // Освобождаем URL
        } catch (error) {
            setErrorMessage('У вас нет индивидуальной дорожной карты. Пройдите тестирование.');
            console.error(error);
        }
    };

    return (
        <div className="body-acc">
            <div className="wrapper">
                <main className="main">
                    <div className="acc-container">
                        <img src="images/avatar.svg" alt="" className="avatar-img" />
                        <div className="name-acc">
                            <p className="name">{userData.name} {userData.last_name}</p>
                            <p className="job">{userData.job}</p>
                        </div>
                        <div className="menu_pages">
                            <Link to="/roadmaps" className="menu__list-link">Дорожные карты</Link>
                            <div className="line-list acc"></div>
                            <Link to="/urating" className="menu__list-link">Рейтинг</Link>
                            <div className="line-list acc"></div>
                            <Link to="/testres" className="menu__list-link">Результаты тестов</Link>
                            <div className="line-list acc"></div>
                            <Link to="/quizes" className="menu__list-link">Тесты</Link>
                            <div className="line-list acc"></div>
                        </div>
                        <div className="white_container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1065" height="788" viewBox="0 0 1065 788" fill="none">
                            <path d="M0 30C0 13.4314 13.4315 0 30 0H1035C1051.57 0 1065 13.4315 1065 30V758C1065 774.569 1051.57 788 1035 788H30C13.4315 788 0 774.569 0 758V30Z" fill="white"/>
                            <path d="M0 30C0 13.4314 13.4315 0 30 0H1035C1051.57 0 1065 13.4315 1065 30V758C1065 774.569 1051.57 788 1035 788H30C13.4315 788 0 774.569 0 758V30Z" fill="white"/>
                        </svg>
                        <div className="back-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                <path d="M18 5.5H3.83L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.08L3.83 7.5H18V5.5Z" fill="#333333"/>
                            </svg>
                            <Link to="/main" className="menu__list-link">Назад</Link>
                        </div>
                        <div className="info">
                            <p className="personal-det">Персональная информация</p>
                            <div className="name_block">
                                <p className="name-white">Имя</p>
                                <p className="name-own">{userData.name} {userData.last_name}</p>
                            </div>
                            <div className="job_block">
                                <p className="job-white">Должность</p>
                                <p className="job-own">{userData.job}</p>
                            </div>
                            <p className="contact-det">Контактная информация</p>
                            <div className="Email_block">
                                <p className="Email-white">Эл. почта</p>
                                <p className="Email-own">{userData.email}</p>
                            </div>
                            <div className="LinkedIn_block">
                                <p className="LinkedIn-white">LinkedIn</p>
                                <p className="LinkedIn-own">{userData.linkedin}</p>
                            </div>
                        </div>

                        <p className="statistics">Статистика</p>
                        
                        <p className="days">Дней на Juniors Journey: {userData.days}</p>

                            

                         <div className="selected-roadmaps">
                            <h3>Выбранные дорожные карты:</h3>
                            {roadmapName ? (
                                <div className="roadmap-card">{roadmapName}</div>
                            ) : (
                                <p>Дорожных карт не выбрано.</p>
                            )}
                        
                        
                        {/* {roadmapName ? ( */}
                        <div className="roadmap-card1">
                            <h3>Моя индивидуальная дорожная карта:</h3>
                         <br />
                        <button onClick={handleDownload} className="download-link">
                         Скачать дорожную карту
                        </button>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <h3>       </h3>
                            <br />
                            <a
                                href="https://t.me/JuniJourney_bot"
                                className="download-link1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Перейти в бот и получить дорожную карту
                            </a>

                        </div>
                            {/* ) : (
                            <div>
                            <p>Индивидуальная дорожная карта не построена. Пройти тестирование и получить дорожную карту:</p>


                            Copy
                            </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    );
};

export default AccountPage;