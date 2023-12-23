import React from 'react';
import { Link } from 'react-router-dom';   

const NotFound = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src='images/404.svg' alt="Not Found" /> 
                <Link to="/main" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#EEDCFC', borderRadius: '5px', textDecoration: 'none', color: '#000' }}>Go Home</Link></div>
        </div>
    );
}

export default NotFound;
