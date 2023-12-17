import Account from './pages/Account.js';
import {LOGIN_ROUTE,AUTORIZE_ROUTE,MAIN_ROUTE, ACCOUNT_ROUTE, ROADMAPS_ROUTE, BACKEND_ROUTE, FRONTEND_ROUTE, ADVICES_ROUTE, QUIZES_ROUTE, QUIZ_ROUTE,TESTRESULTS_ROUTE, USERRATING_ROUTE} from "./utils/consts";
import Advices from './pages/Advices';
import Autorization from './pages/Autorization';
import Backend_roadmap from './pages/Backend_roadmap';
import Quizes from './pages/Quiz-main';
import Quiz from './pages/Quiz';
import Roadmaps_menu from './pages/Roadmaps_menu';
import Main from './pages/Main';
import Frontend_roadmap from './pages/Frontend_roadmap';
import TestResultsPage from './pages/TestResultsPage'
import UserRankingPage from './pages/UserRankingPage.js';

export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: Admin
    // },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
   
]



export const publicRoutes = [
    
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: AUTORIZE_ROUTE,
        Component: Autorization
    },
    {
        path: LOGIN_ROUTE,
        Component: Autorization
    },
    {
        path: ADVICES_ROUTE,
        Component: Advices
    },
    {
        path: ROADMAPS_ROUTE,
        Component: Roadmaps_menu
    },
    {
        path: FRONTEND_ROUTE,
        Component:Frontend_roadmap
    },
    {
        path: BACKEND_ROUTE,
        Component: Backend_roadmap
    },
    {
        path: QUIZES_ROUTE,
        Component:Quizes
    },
    {
        path: QUIZ_ROUTE,
        Component: Quiz
    },
    {
        path:TESTRESULTS_ROUTE,
        Component: TestResultsPage
    },
    {
        path: USERRATING_ROUTE,
        Component: UserRankingPage
    },
]