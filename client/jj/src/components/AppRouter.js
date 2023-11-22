import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from "../routes";
import { ROADMAPS_ROUTE } from '../utils/consts';
import { Context } from '..';
import Main from '../pages/Main';
import Autorization from '../pages/Autorization';


const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/main" element={<Main />} />
            <Route path="/auth" element={<Autorization />} />
            <Route path="/" element={<Navigate to={ROADMAPS_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;