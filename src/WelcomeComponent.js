import React from 'react';
import backgroundImage from './images/Sandy_Bus-27_Single-09.jpg';
import backgroundImageTwo from './images/Sandy_Tech-22_Single-09.jpg';
import {Link} from "react-router-dom";

const WelcomeComponent = () => {
    return (<div>
            <div className="flex flex-col justify-center items-center pt-6 space-y-4">
                <div className="">
                    <h1 className="text-purple-600 font-bold text-4xl text-center">Connect with<br/> people just like you
                        </h1>
                </div>

                <div className="text-center">
                    <h2>Find the perfect therapy group for you and become the best version of yourself with Help Seek. The<br/> world’s best betterment and wellness
                        app.</h2>
                </div>

                <div className="">
                    <Link to="/signuppage"
                        className="font-normal text-2xl text-white bg-purple-600 py-2 px-4 rounded hover:bg-teal-700">Sign up
                        today
                    </Link>

                </div>
            </div>
            {/*svg image in thr background*/}
            <div className="flex p-4 h-fit">
                <img src="https://i.postimg.cc/fynj5dpz/human-2099157-480.webp"/>
                <img src="https://i.postimg.cc/CxrF8snq/speech-bubbles-310399-480.webp"/>
                <img src="https://i.postimg.cc/023mCDwL/human-2099157-4802.png"/>

            </div>

        </div>

    );
};
export default WelcomeComponent;
