import React from 'react';
import AccountContainer from '../components/AccountsContainer/AccountContainer';

const Account = () =>{
    return (
        <body className="body-acc">
          <div className="wrapper">
            <main className="main">
              <AccountContainer />
            </main>
          </div>
        </body>
      );
}

export default Account;