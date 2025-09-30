import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col uppercase gap-2 bg-[#fafafa] text-[#363636] h-screen w-full items-center justify-center'>
            <h1 className='text-8xl font-extrabold'>404</h1>
            <h1 className='text-4xl font-extrabold'>Page Not found!!</h1>
        </div>
    );
};

export default ErrorPage;