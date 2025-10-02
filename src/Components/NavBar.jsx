import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    const linkClasses = ({ isActive }) =>
        `px-6 flex flex-col items-center justify-center font-semibold transition-colors duration-300 relative
  ${isActive
            ? "text-[#5754E8] after:content-[''] after:block after:h-[2px] after:w-full after:bg-[currentColor]" // active link style
            : "text-gray-500 hover:text-[#5754E8] after:content-[''] after:block after:h-[2px] after:w-0 after:bg-[currentColor] after:transition-all after:duration-300 hover:after:w-full"
        }`;



    return (
        <div className='flex items-center justify-around h-25 bg-[#191E24]'>
            <h1 className="text-4xl text-[#5754E8] font-extrabold">Boipoka</h1>
            <ul className='flex gap-3 '>
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
        </div>
    );
};

export default NavBar;