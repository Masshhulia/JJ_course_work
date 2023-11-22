import React from 'react';

const AuthorizationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику обработки отправки формы
  };

  return (
    <section className="autorize">
      <div className="autorize__container">
        <div className="autorize_text">
          <h2 className="enter__data">Enter your data</h2>
        </div>
        <div className="form__container">
          <form onSubmit={handleSubmit} className="form">
            <input type="text" className="input_field" placeholder="Login/Email" />
            <input type="password" className="input_field" placeholder="Password" />
            <button type="submit" className="submit__button2">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthorizationForm;
