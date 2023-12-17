import React, { useState } from 'react';
import { registration} from '../../http/userApi';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();
  const [name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [job, setJob] = useState('');
  const [linked_in, setLinkedin] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleJobChange = (e) => setJob(e.target.value);
  const handleLinkedChange = (e) => setLinkedin(e.target.value);

  const handleRegistration = async () => {
    try {
      const userData = await registration(name, last_name, email, password, job, linked_in);
      console.log('Пользователь зарегистрирован:', userData);
      navigate('/auth');
    } catch (error) {
      console.error('Ошибка регистрации:', error.message);
    }
  };

  return (
    <section className="create__account" id="create">
      <div className="create__container">
        <h2 className="create__title">Create an account</h2>
        <div className="input__container">
          <input type="text" className="input_field" placeholder="Name" onChange={handleFirstNameChange} />
          <input type="text" className="input_field" placeholder="Surname" onChange={handleLastNameChange} />
          <input type="email" className="input_field" placeholder="Email" onChange={handleEmailChange} />
          <input type="email" className="input_field" placeholder="Job" onChange={handleJobChange} />
          <input type="email" className="input_field" placeholder="LinkedIn" onChange={handleLinkedChange} />
          <input type="text" className="input_field" placeholder="Password" onChange={handlePasswordChange} />
        </div>
        <button className="submit__button" onClick={handleRegistration}>
         Submit
        </button>
        <img src="images/create_people.svg" alt="" className="people__img" />
      </div>
    </section>
  );
};

export default CreateAccount;