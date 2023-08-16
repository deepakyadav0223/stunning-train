import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
// project import
// import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const CheckClass = Loadable(lazy(() => import('pages/check-class/CheckClass')));
const BookedClass = Loadable(lazy(() => import('pages/booked-class/BookedClass')));
// ==============================|| ROUTING RENDER ||============================== //
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';
// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
import {Navigate} from 'react-router-dom'



export default function ThemeRoutes() {
    // return useRoutes([ MainRoutes]);

    return useRoutes([
        {
            element: <MinimalLayout />,
            children: [
                {
                    path: '/login',
                    element: <AuthLogin />
                },
            ]
        },

     {
        path: '/dashboard',
        element: <MainLayout />,
        children: [
            
                {
                    path: "",
                    element: <DashboardDefault />
                },
                {
                    path:"bookClass",
                    element: < SamplePage />
                },

                {
                    path:"checkClass",
                    element: < CheckClass />
                },
                {
                    path:"bookedClasses",
                    element: <BookedClass />
                }

                

           ]
        },

        

        {
                    path: '/*',
                    element: <Navigate to="/login" replace={true} />
        },

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
            
        
        


     ])
}
