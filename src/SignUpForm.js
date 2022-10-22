import React from 'react';
import {useState} from "react";
import {useRef} from "react";
import {Link} from "react-router-dom";
import image from "./images/linkedin-svgrepo-com.svg";
import {createClient} from "@supabase/supabase-js";


const SignUpForm = () => {

    const supabaseUrl = process.env["REACT_APP_SUPABASE_API_ENDPOINT"]
    const supabaseKey = process.env["REACT_APP_SUPABASE_API_SECRET_KEY"]
    const supabase = createClient(supabaseUrl, supabaseKey)

    const emailInput = useRef();
    const passInput = useRef()

    const handleSignUp = async (e) => {
        e.preventDefault()

        let {user, error} = await supabase.auth.signUp({
            email: emailInput.current.value,
            password: passInput.current.value})


        console.log(user)
        console.log(error)
        //console.log(emailInput.current.value)
        //console.log(passInput.current.value)
        //console.log(supabase)
    }


    const handleLSignInWithLinkedin = async () => {
        let {user,error} = await supabase.auth.signInWithOAuth({

            provider: "linkedin"
        })
//after log in save credentials and more
        console.log(user)
        console.log(error)
    }
    const handleSignInWithGoogle = async () => {
        let {user,error} = await supabase.auth.signInWithOAuth({

            provider: "google"
        })
//after log in save credentials and more
    }




    return (<div>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl">
                <h1 className="text-4xl text-center text-teal-600 font-medium">Sign Up</h1>
                <p className="text-orange-400 text-center">Hi, Sign Up Below 👋</p>

                <div className="my-5">
                    <button
                        className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-xl text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="Google Logo"/> <span>Sign up with Google</span>
                    </button>
                </div>
                <div className="my-5">
                    <button
                        className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-xl text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img src={image} className="w-7 h-7" alt="linkedIn logo"/> <span>Sign up with LinkedIn</span>
                    </button>
                </div>
                <form onSubmit={handleSignUp}className="my-10">
                    <div className="flex flex-col space-y-5">

                        <label htmlFor="email">

                            <input id="email" name="email" type="email"
                                   className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                                   placeholder="Enter email address" ref={emailInput}/>
                        </label>
                        <label htmlFor="password">

                            <input id="password" name="password" type="password"
                                   className="w-full py-3 border border-slate-200 rounded-xl px-3 focus:outline-none focus:border-slate-500 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
                                   placeholder="Enter your password" ref={passInput}/>
                        </label>
                        <div className="flex flex-row justify-between">
                            <div>
                                <label htmlFor="remember" className="text-teal-600">

                                </label>
                            </div>
                            <div>

                            </div>
                        </div>
                        <button
                            className="w-full py-3 font-medium text-white bg-teal-600 hover:bg-teal-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor"
                                 strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                            </svg>
                            <span>Sign Up</span>
                        </button>
                        <p className="text-center">Already a signed up? <Link to="/loginpage"
                                                                          className="text-orange-400 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg
                            xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg></span></Link></p>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SignUpForm



