import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
// const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
// const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
const LoginPage = Loadable(lazy(() => import('pages/auth/login')));
const RegisterPage = Loadable(lazy(() => import('pages/auth/register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        // {
        //     path: '/pages/login/login3',
        //     element: <AuthLogin3 />
        // },
        // {
        //     path: '/pages/register/register3',
        //     element: <AuthRegister3 />
        // },
        {
            path: '/auth/login',
            element: <LoginPage />
        },
        {
            path: '/auth/register',
            element: <RegisterPage />
        }
    ]
};

export default AuthenticationRoutes;
