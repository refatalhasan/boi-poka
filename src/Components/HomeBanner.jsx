import React from 'react';
import BannerImage from '../assets/books.jpg'

const HomeBanner = () => {
    return (
        <div className='flex flex-col h-fit w-full px-[10%] py-10 items-center justify-center'>
            <div className='flex gap-3 items-end justify-end bg-gray-200 p-10 w-full rounded-xl'>
                <div className='flex w-[65%] p-10'>
                    <h5 className='text-7xl font-extrabold'>Books to freshen up your bookshelf</h5>
                </div>
                <div className='flex w-[45%]'>
                    <img src={BannerImage} className='w-full rounded-lg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;