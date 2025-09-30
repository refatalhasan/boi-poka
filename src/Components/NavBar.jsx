import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    const linkClasses = ({ isActive }) =>
        `px-5 py-2 rounded-full font-semibold transition-colors duration-300 
   ${isActive
            ? "bg-blue-500 text-white shadow-lg transform"  // Active link style
            : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"  // Inactive link style
        }`;

    return (
        <div className='flex items-center justify-around h-25 border-b-2 border-blue-500'>
            <h1 className="text-4xl text-blue-500 font-extrabold">Boipoka</h1>
            <ul className='flex gap-3'>
                <NavLink to="/" className={linkClasses}>
                    Home
                </NavLink>
                <NavLink to="/dashboard" className={linkClasses}>
                    Book Lists
                </NavLink>
                <NavLink to="/pages" className={linkClasses}>
                    Pages to read
                </NavLink>
            </ul>
            {/* <div className='flex gap-3'>
                <button className="btn rounded-md font-bold border-none bg-[#00e400]">Sign In</button>
                <button className="btn rounded-md font-bold border-none bg-[#00c3ff]">Sign Up</button>
            </div> */}
        </div>
    );
};

export default NavBar;