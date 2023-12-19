import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../http/accountApi';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (error) {
                console.error('Ошибка при получении пользователей:', error);
            }
        };

        if (isVisible) {
            fetchUsers();
        }
    }, [isVisible]);

    const styles = {
        button: {
            margin: '10px 0',
            padding: '10px 20px',
            fontSize: '16px',
        },
        user: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px 0',
        },
        userInfo: {
            margin: '5px 0',
        },
    };

    return (
        <div>
            <button style={styles.button} onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Скрыть список пользователей' : 'Показать список пользователей'}
            </button>
            {isVisible && users.map((user, index) => (
                <div key={index} style={styles.user}>
                    <p style={styles.userInfo}>Имя пользователя: {user.name}</p>
                    <p style={styles.userInfo}>Фамилия пользователя: {user.last_name}</p>
                    <p style={styles.userInfo}>Email: {user.email}</p>
                    <p style={styles.userInfo}>Должность: {user.job}</p>
                    <p style={styles.userInfo}>Ссылка на линкедин: {user.linked_in}</p>
                    <p style={styles.userInfo}>Дата регистрации: {user.RegistrationDate}</p>
                </div>
            ))}
        </div>
    );
};

export default UserList;
