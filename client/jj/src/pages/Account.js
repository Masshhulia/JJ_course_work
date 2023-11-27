import React, { useState, useEffect } from 'react';
import { getAccountInfo } from '../http/accountApi';

const AccountPage = () => {
    const [userData, setUserData] = useState(null);

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

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <body className="body-acc">
            <div className="wrapper">
                <main className="main">
                    <div className="acc-container">
                        <img src="images/avatar.svg" alt="" className="avatar-img" />
                        <div className="name-acc">
                            <p className="name">{userData.name} {userData.last_name}</p>
                            <p className="job">{userData.job}</p>
                        </div>
                        <div className="menu_pages">
                            <a href="#" className="page_item">RoadMaps</a>
                            <div className="line-list acc"></div>
                            <a href="#" className="page_item">Rating</a>
                            <div className="line-list acc"></div>
                            <a href="#" className="page_item">Calendar</a>
                            <div className="line-list acc"></div>
                            <a href="#" className="page_item">Tests</a>
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
                                <a href="#" className="back-link">Back</a>
                            </div>
                            <div className="info">
                                <p className="personal-det">Personal details</p>
                                <div className="name_block">
                                    <p className="name-white">Name</p>
                                    <p className="name-own">{userData.name} {userData.last_name}</p>
                                </div>
                                <div className="job_block">
                                    <p className="job-white">Job</p>
                                    <p className="job-own">{userData.job}</p>
                                </div>
                                <p className="contact-det">Contact details</p>
                                <div className="Email_block">
                                    <p className="Email-white">Email</p>
                                    <p className="Email-own">{userData.email}</p>
                                </div>
                                <div className="LinkedIn_block">
                                    <p className="LinkedIn-white">LinkedIn</p>
                                    <p className="LinkedIn-own">{userData.linkedin}</p>
                                </div>
                            </div>

                            <p className="statistics">Statistics</p>
                            <div className="progress-circles">
                                <img src="images/progress-bar-circle.svg" alt="" className="circle" />
                                <img src="images/progress-bar-circle2.svg" alt="" className="circle" />
                                <img src="images/progress-bar-circle3.svg" alt="" className="circle" />
                            </div>
                            <div className="progress-text-row">
                                <p className="progress-text">Overall progress</p>
                                <p className="progress-text">Achievements</p>
                                <p className="progress-text">Roadmaps</p>
                            </div>
                            <p className="days">Days on Juniors Journey: {userData.days}</p>
                            <img src="images/progress-bar-line.svg" alt="" className="progress-bar-line" />
                        </div>
                    </div>
                </main>
            </div>
        </body>
    );
};

export default AccountPage;
