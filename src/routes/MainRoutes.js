import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
import {Navigate} from 'react-router-dom'
// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const MainRoutes = [
    {
    path: '/*',
    element: <MinimalLayout />,
    children: [
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        }
    ]
    },
    
    {
    path: '/dashboard',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        }
        ,
        // {
        //     path: 'sample-page',
        //     element: <SamplePage />
        // },
        // {
        //     path: 'shadow',
        //     element: <Shadow />
        // },
        // {
        //     path: 'typography',
        //     element: <Typography />
        // },
        // {
        //     path: 'icons/ant',
        //     element: <AntIcons />
        // }
    ]
}];

export default MainRoutes;
