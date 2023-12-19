import React, { useState } from 'react';
import { createLink } from '../../http/roamapsLinksApi';

const AdminLinks = () => {
    const [linkData, setLinkData] = useState({  pages_ID: '', link_title: '', url: '' });
    const [isFormOpen, setFormOpen] = useState(false);

    const handleInputChange = (event) => {
        setLinkData({ ...linkData, [event.target.name]: event.target.value });
    };

    const handleCreateLink = async (event) => {
        event.preventDefault();
        try {
            const newLink = await createLink(linkData);
            console.log('Новая ссылка успешно создана:', newLink);
        } catch (error) {
            console.error('Ошибка при создании ссылки:', error);
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
        }
    };

    return (
        <div>
            <button style={styles.button} onClick={() => setFormOpen(!isFormOpen)}>
                {isFormOpen ? 'Закрыть форму' : 'Добавить ссылку в дорожную карту'}
            </button>

            {isFormOpen && (
                <form style={styles.form} onSubmit={handleCreateLink}>
                    <label>
                        ID страницы:
                        <input type="number" name="pages_ID" onChange={handleInputChange} />
                    </label>
                    <label>
                        Название ссылки:
                        <input type="text" name="link_title" onChange={handleInputChange} />
                    </label>
                    <label>
                        URL:
                        <input type="text" name="url" onChange={handleInputChange} />
                    </label>
                    <button type="submit">Добавить ссылку</button>
                </form>
            )}
        </div>
    );
};

export default AdminLinks;
