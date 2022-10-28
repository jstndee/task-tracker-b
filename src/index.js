import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WelcomeComponent from "./WelcomeComponent";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";
import MainTaskPageB from "./MainTaskPageB";
import AboutUsPageB from "./AboutUsPageB";
import ContactUsPageC from "./ContactUsPageC";
import MeetTheTeam from "./MeetTheTeam";
import TaskHub from "./TaskHub";
import GroupNav from "./GroupNav";
import UpdatedLandPageB from "./UpdatedLandPageB";
import UpdatedContactUs from "./UpdatedContactUs";
import Dashboard from "./Dashboard";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <UpdatedLandPageB/>
            },
            {
                path: "/signuppage",
                element: <SignUpPage/>
            },
            {
                path: "/loginpage",
                element: <LogInPage/>
            },

            {
                path: "/about",
                element: <AboutUsPageB/>
            },
            {
                path: "/contact",
                element: <UpdatedContactUs/>
            },
            {
                path: "/team",
                element: <MeetTheTeam/>
            },
            {
                path: "/task-hub/:id",
                element: <TaskHub/>
            },
            {
                path: "/group-nav/:id",
                element: <GroupNav/>
            }
            ,
            {
                path: "/dashboard",
                element: <Dashboard/>
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>

    </React.StrictMode>
);


