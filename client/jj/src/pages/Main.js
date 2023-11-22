import React from 'react';
import '../style.css';
import Header from '../components/Header/Header'; // Импортируйте новый компонент
import MainSection from '../components/Main/MainSection'; // Импортируйте новый компонент
import CreateAccount from '../components/CreateAcc/CreateAccount'; // Импортируйте новый компонент
const Main = () =>{
    return(
        <div>
            <Header /> 
            <MainSection /> 
            <CreateAccount /> 
        </div>
    );
}

export default Main;