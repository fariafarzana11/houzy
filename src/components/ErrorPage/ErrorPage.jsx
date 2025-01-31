import React from "react";
import { useNavigate } from "react-router-dom"; 

const ErrorPage = () => {
    const navigate = useNavigate(); 
    
    const goToHome = () => {
        navigate("/"); 
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
            <img 
                className="max-w-full max-h-full" 
                src="https://i.pinimg.com/736x/51/0f/49/510f4957de3eb14c591fddb875ae9c94.jpg" 
                alt="Error Page"
            />
            <button className="bg-gray-800 text-white mt-10 p-3 rounded cursor-pointer" onClick={goToHome}>Go To Home</button>
       </div>
    );
}

export default ErrorPage;

