import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="flex flex-col min-h-screen text-[#3a3a3a] bg-[#fcfcfc]">
            <NavBar />
            <div className="flex-grow min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
