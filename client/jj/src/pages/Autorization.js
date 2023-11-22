import React, { Fragment } from 'react'
import '../style.css';
import AuthorizationForm from '../components/AutorizationForm/AutoruzationForm';
import Header from '../components/Header/Header';

const Autorization = () =>{
    return(
        <Fragment>
            <Header/>
            <AuthorizationForm/>
        </Fragment>
       
    );
}

export default Autorization;