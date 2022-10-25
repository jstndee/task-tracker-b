import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const HeaderComponent = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const navigate = useNavigate()
    const sendToUserTaskPage = () => {
        navigate(`/task-hub/:${user.id}`)
    }
    const sendToUserGroupPage = () => {
        navigate(`/group-nav/:${user.id}`)
    }
    return (<div className="bg-gray-200">

            <div
                className="flex flex-col md:flex-row justify-between items-center px-20 md:h-28 p-4 border-b-2 border-gray-300">
                <div className="font-bold text-2xl"><Link to="/">HELP<span
                    className="text-purple-600">SEEK</span></Link></div>
                <div className="flex">


                    <ul className="menu-horizontal space-x-4">
                        <li onClick={sendToUserTaskPage} className="font-bold text-purple-600 border-2 border-purple-600 py-2 px-4 rounded-full hover:text-purple-700 hover:border-purple-700">Tasks</li>
                        <li><Link to="/loginpage"
                                  className="font-bold text-purple-600 border-2 border-purple-600 py-2 px-4 rounded-full hover:text-purple-700 hover:border-purple-700">Log
                            In</Link>
                        </li>
                        <li><Link to="/signuppage"
                                  className="font-bold text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700">Sign
                            Up</Link></li>
                        <li onClick={sendToUserGroupPage}>GROUPS</li>
                        <li>SIGN OUT</li>

                    </ul>
                </div>
            </div>
        </div>
        );};
export default HeaderComponent;