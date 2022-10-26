import React from 'react';
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (<div className="bg-gray-200">
        <div className="flex items-center justify-center space-x-4 font-bold text-lg text-purple-500
            p-4 primary-content text-base-content">
            <Link to="/about" className="text-purple-600 text-lg hover:text-purple-700">About</Link>
            <Link to="/contact" className="text-purple-600 text-lg hover:text-purple-700">Contact</Link>
            <Link to="/team" className="text-purple-600 text-lg hover:text-teal-purple">Team</Link>

        </div>
        <div className="footer footer-center p-4 primary-content text-base-content">
            <p>Copyright © 2022 - All right reserved by Team-algo</p>
        </div>
    </div>);
};

export default FooterComponent;