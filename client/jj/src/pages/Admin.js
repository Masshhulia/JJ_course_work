import React from 'react';
import UserList from '../components/AdminComponents/UserList';
import Header from '../components/Header/Header';
import AddTest from '../components/AdminComponents/AddTest';
import AdminLinks from '../components/AdminComponents/AdminLinks';
import QetAllQuestions from '../components/AdminComponents/GetAllQuestions'
import AddQuestion from '../components/AdminComponents/AddQuestion';

const Admin = () => {
    const styles = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            backgroundColor: '#f4f4f4',
            padding: '1px',
        },
        section: {
            width: '80%', // Вы можете изменить это значение в соответствии с вашими потребностями
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding: '20px',
            margin: '120px 0',
        },
        h1: {
            fontSize: '2em',
            borderBottom: '1px solid #ddd',
            paddingBottom: '10px',
        },
    };

    return (
        <main style={styles.main}>
            <Header />
            <section style={styles.section}>
                <h1 style={styles.h1}>Страница админа</h1>
                <UserList />
                <AddTest/>
                <AdminLinks/>
                <QetAllQuestions/>
                <AddQuestion/>
            </section>
        </main>
    );
};

export default Admin;
