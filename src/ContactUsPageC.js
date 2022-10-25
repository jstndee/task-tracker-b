import React from 'react';

const ContactUsPageC = () => {
    return (
        <div>
            <h1 className="mx-auto mt-5 text-center text-2xl font-bold text-purple-600">Contact Us</h1>
            <form className="flex flex-col justify-center items-center space-y-10 mt-24">
                <div>
                    <input type="text"placeholder="Your Name" className="border-b-2 border-gray-500"/>
                    <input type="text"placeholder="Your Email" className="border-b-2 border-gray-500 ml-5"/>
                </div>
                <div>
                    <input type="text" placeholder="Phone Number" className="border-b-2 border-gray-500"/>
                    <input type="text" placeholder="Country" className="border-b-2 border-gray-500 ml-5"/>
                </div>
                <div>
                    <input type="text"placeholder="Company Name" className="border-b-2 border-gray-500"/>
                    <input type="text" placeholder="Interested In" className="border-b-2 border-gray-500 ml-5"/>
                </div>
                <input type="text" placeholder="Message" className="border-b-2 border-gray-500 w-94 w-[24rem]"/>
                <button className="font-bold text-white bg-purple-600 py-2 px-4 rounded-full hover:bg-purple-700"> Submit </button>
            </form>
        </div>
    );
};

export default ContactUsPageC;