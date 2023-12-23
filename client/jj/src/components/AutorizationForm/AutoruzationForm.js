import React, { useContext, useState } from 'react';
import { login } from '../../http/userApi';
import { useNavigate, Link } from 'react-router-dom'; 
import { Context } from '../../index';

const AuthorizationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const {user} = useContext(Context)

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login(email, password);
      console.log('Пользователь вошел:', userData);
      user.setIsAuth(true);
      localStorage.setItem('email', userData.email);
      localStorage.setItem('auth', true);
      navigate('/account');
     
    } catch (error) {
      console.error('Ошибка авторизации:', error.response.data.message);
      setError(error.response.data.message)
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
          {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
          <div className="register_link"> 
            Don't have an account? <Link to="/#create">Register</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorizationForm;
