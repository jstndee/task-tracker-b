import React, {useEffect, useState} from 'react';
import {createClient} from "@supabase/supabase-js";
import {Link, useNavigate} from "react-router-dom";

const DaisyUiTopNav = () => {

    const supabaseUrl = process.env["REACT_APP_SUPABASE_API_ENDPOINT"]
    const supabaseKey = process.env["REACT_APP_SUPABASE_API_SECRET_KEY"]
    const supabase = createClient(supabaseUrl, supabaseKey)
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const currentUsername = (localStorage.getItem("currentUserUsername"))
    const navigate = useNavigate()
    const [taskTabActive, setTaskTabActive] = useState()
    const [signedInUsername, setSignedInUsername] = useState("")


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
        localStorage.removeItem("currentUserUsername")
        console.log("Signed Out")
        navigate("/loginpage")
    }

    const getUserName = async () => {
        let { data: username, error } = await supabase
            .from('profiles')
            .select('username')
            .eq("id", user.id)


        setSignedInUsername(username[0].username)

        console.log(signedInUsername)
    }
    useEffect(() => {
        const test = async () =>{
            await getUserName()
        }
        test()
    })

    return (
        <div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {user ? <p></p> : <li><Link to="/loginpage" className="font-bold text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700">Log In</Link></li>}
                        {user ? <p></p> : <li><Link to="/signuppage" className="font-bold text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700">Sign Up</Link></li>}
                        {user ? <li onClick={sendToUserTaskPage} className="text-purple-600 font-bold cursor-pointer">TASKS</li> : <p></p> }
                        {user ? <li onClick={sendToUserGroupPage}className="text-purple-600 font-bold cursor-pointer">GROUPS</li>: <p></p>}
                        {user ? <li onClick={signUserOut} className="text-purple-600 font-bold cursor-pointer">SIGN OUT</li> : <p></p>}

                    </ul>
                </div>
                <div className="font-bold text-2xl"><Link to="/">HELP<span
                    className="text-purple-600">SEEK</span></Link></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 tabs">
                    {user ? <p></p> : <li><Link to="/loginpage" className="font-bold text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700">Log In</Link></li>}
                    {user ? <p></p> : <li><Link to="/signuppage" className="font-bold text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700 ml-5">Sign Up</Link></li>}
                    {user ? <li onClick={sendToUserTaskPage} className={"text-purple-600 font-bold cursor-pointer mr-5 tab tab-active"}>Tasks</li> : <p></p> }
                    {user ? <li onClick={sendToUserGroupPage}className={"text-purple-600 font-bold cursor-pointer mr-5 tab tab-active"}>Groups</li>: <p></p>}
                    {user ? <li onClick={signUserOut} className="text-purple-600 font-bold cursor-pointer mr-5 tab tab-active">Sign Out</li> : <p></p>}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <p onClick={getUserName} className="">Signed in as {signedInUsername}</p>:<p></p>}
            </div>
        </div>

        </div>
    );
};

export default DaisyUiTopNav;