import React from 'react';

const CreateAccount = () => {
  return (
    <section className="create__account" id="create">
      <div className="create__container">
        <h2 className="create__title">
          Create an account
        </h2>
        <div className="input__container">
          <input type="text" className="input_field" placeholder="First name" />
          <input type="text" className="input_field" placeholder="Last name" />
          <input type="text" className="input_field" placeholder="Email address" />
          <input type="text" className="input_field" placeholder="Password" />
        </div>
        <button className="submit__button">Submit</button>
        <img src="images/create_people.svg" alt="" className="people__img" />
      </div>
    </section>
  );
};

export default CreateAccount;

