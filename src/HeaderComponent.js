import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {createClient} from "@supabase/supabase-js";

const HeaderComponent = () => {
    const supabaseUrl = process.env["REACT_APP_SUPABASE_API_ENDPOINT"]
    const supabaseKey = process.env["REACT_APP_SUPABASE_API_SECRET_KEY"]
    const supabase = createClient(supabaseUrl, supabaseKey)
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const navigate = useNavigate()
    const sendToUserTaskPage = () => {
        navigate(`/task-hub/:${user.id}`)
    }
    const sendToUserGroupPage = () => {
        navigate(`/group-nav/:${user.id}`)
    }
    async function signUserOut() {
        const { error } = await supabase.auth.signOut()

        localStorage.removeItem("currentUserId")
        localStorage.removeItem("currentUser")
        localStorage.removeItem("currentSession")
        console.log("Signed Out")
        navigate("/loginpage")
    }

    return (<div className="bg-gray-200">

            <div
                className="flex flex-col md:flex-row justify-between items-center px-20 md:h-28 p-4 border-b-2 border-gray-300">
                <div className="font-bold text-2xl"><Link to="/">HELP<span
                    className="text-purple-600">SEEK</span></Link></div>
                <div className="flex">


                    <ul className="menu-horizontal space-x-4">

                        {user ? <p></p> : <li><Link to="/loginpage" className="font-bold text-purple-600 border-2 border-purple-600 py-2 px-4 rounded-full hover:text-purple-700 hover:border-purple-700">Log In</Link></li>}
                        {user ? <p></p> : <li><Link to="/signuppage" className="font-bold text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700">Sign Up</Link></li>}
                        <li onClick={sendToUserTaskPage} className="text-purple-600 font-bold">TASKS</li>
                        <li onClick={sendToUserGroupPage}className="text-purple-600 font-bold">GROUPS</li>
                        {user ? <li onClick={signUserOut} className="text-purple-600 font-bold">SIGN OUT</li> : <p></p>}

                    </ul>
                </div>
            </div>
        </div>
        );};
export default HeaderComponent;