import React, { useState, useEffect } from 'react';
import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom"; 


const BookList = ({ book }) => {

        useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    

    const {
        bookName,
        bookId,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = book;

    const [loaded, setLoaded] = useState(false);

    return (
        <div className="bg-gray-200 flex gap-4 p-6 rounded-lg items-end">
            <div className="relative w-[240px] h-[220px]">

                {!loaded && (
                    <div className="absolute inset-0 bg-[#d3d3d3] animate-pulse rounded-md"></div>
                )}

                <img src={image} alt={bookName} className={`rounded-md object-cover w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setLoaded(true)}
                    loading="lazy" />
            </div>

            <div className='w-full'>
                <h3 className="text-xl font-semibold">{bookName}</h3>
                <p className="text-sm text-gray-600">by: {author}</p>
                <div className='flex gap-2 mt-4'>
                    {
                        tags.map(tag => <p className='text-sm bg-[#6562eb] text-white px-2 py-1 rounded'>{tag}</p>)
                    }
                </div>
                <hr className='text-gray-300 border-1 my-2 w-full' />
                <div className='flex justify-between'>
                    <p className='font-semibold  text-[#5e5e5e]'>{category}</p>
                    <p className='flex items-center gap-1 text-[#00b600]'>{rating}<FaRegStar /></p>
                </div>
                 <Link
          to={`/books/${bookId}`}
          className="
            block text-center
            w-full 
            border-2 border-[#00b600] 
            rounded-lg mt-3 py-2 
            text-[#00b600] font-medium
            transition-all duration-300 
            hover:bg-[#00b600] hover:text-white 
            hover:shadow-lg 
            active:scale-95
          "
        >
          See Details
        </Link>
            </div>
        </div>
    );
};

export default BookList;
