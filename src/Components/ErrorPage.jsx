import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col uppercase gap-2 bg-[#fafafa] text-[#363636] h-screen w-full items-center justify-center'>
            <h1 className='text-8xl font-extrabold'>404</h1>
            <h1 className='text-4xl font-extrabold'>Page Not found!!</h1>
            <Link
                to="/"
                className="
    border-2 
    font-semibold 
    mt-2 
    px-4 py-2 
    rounded-full 
    border-[#363636]
    text-[#363636]
    hover:text-white 
    hover:bg-[#363636] 
    transform 
    transition 
    duration-300 
    ease-in-out 
    hover:scale-105
  "
            >
                Go To Home
            </Link>

        </div>
    );
};

export default ErrorPage;