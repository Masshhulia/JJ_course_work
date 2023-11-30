import React, { useState } from 'react';
import { login } from '../../http/userApi';
import { useNavigate } from 'react-router-dom';

const AuthorizationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login(email, password);
      console.log('Пользователь вошел:', userData);
      navigate('/account');
      // По желанию, вы можете перенаправить на другую страницу или выполнить другие действия после успешной авторизации
    } catch (error) {
      console.error('Ошибка авторизации:', error.message);
      // Добавьте вывод ошибки на экран или другие действия при неудачной авторизации
    }
  };

  return (
    <section className="autorize">
      <div className="autorize__container">
        <div className="autorize_text">
          <h2 className="enter__data">Enter your data</h2>
        </div>
        <div className="form__container">
          <form onSubmit={handleSubmit} className="form">
            <input type="text" className="input_field" placeholder="Login/Email" onChange={handleEmailChange} />
            <input type="password" className="input_field" placeholder="Password" onChange={handlePasswordChange} />
            <button type="submit" className="submit__button2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthorizationForm;

