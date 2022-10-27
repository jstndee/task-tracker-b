import React from 'react';
import {Link} from "react-router-dom";

const UpdatedLandPageB = () => {
    return (
        <div>

            <section className="py-20 bg-gray-200">
                <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
                    <div className="relative">
                        <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl text-purple-600"> Connect with people just like you.</h2>
                        <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">Find groups that aim to help you tackle your struggles and become the best version of your self.</p>
                    </div>
                    <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                        <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                            <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt=""/>
                        </div>
                        <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                            <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase"></p>
                            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl text-purple-600">Stay on track for your personal goals</h3>
                            <p className="mt-5 text-lg text-gray-700 text md:text-left">It can be hard taking on problems on your own, but your group has your back. Hold each other accountable and achieve your goals together.</p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                        <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                            <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt=""/>
                        </div>
                        <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                            <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase"></p>
                            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl text-purple-600">1000+ Groups to choose from</h3>
                            <p className="mt-5 text-lg text-gray-700 text md:text-left">There's a myriad of ways to solve a problem. That's why if one group isn't a proper fit, join one of the countless other groups to aid you in your wellness journey.</p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
                        <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                            <button className="text-2xl ml-20 border-2 rounded-md px-2 py-2 border-black bg-white text-purple-600"><Link to={"signuppage"}>Sign up today</Link></button>
                        </div>
                        <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                            <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Easy to customize</p>
                            <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Make It Your Own</h3>
                            <p className="mt-5 text-lg text-gray-700 text md:text-left">All templates and components are fully customizable. You can use these templates to tell your personal story and convey your message.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default UpdatedLandPageB;