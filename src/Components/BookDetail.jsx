import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa6";
import { IoWarningOutline } from "react-icons/io5";
import { useEffect } from "react";

const BookDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    if (!book) {
        return <p className="flex items-end gap-2 text-[#ff4d4d] p-6 text-3xl"><IoWarningOutline /> Book not found</p>;
    }

    const {
        bookName,
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

    const handleMarkAsRead = () => {
        

    };

    const handleAddToWishlist = () => {

    };

    return (
        <div className="w-full px-[10%] py-10">
            <div className="bg-gray-200 p-10 rounded-xl flex gap-10 flex-col lg:flex-row shadow-md items-center lg:items-end">
                <div className="flex-shrink-0 w-[300px]">
                    <img
                        className="rounded-lg object-cover w-full h-[400px]"
                        src={image}
                        alt={bookName}
                    />
                </div>

                <div className="flex flex-col justify-between ">
                    <div>
                        <h1 className="text-3xl font-bold">{bookName}</h1>
                        <p className="text-gray-600">by {author}</p>
                        <div className="flex gap-2 mt-3 flex-wrap">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-sm bg-[#6562eb] text-white px-2 py-1 rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <p className="mt-4 text-gray-700">{review}</p>
                    </div>

                    <div className="mt-6 flex justify-between items-center text-sm">
                        <p>
                            <span className="font-semibold">Category:</span> {category}
                        </p>
                        <p>
                            <span className="font-semibold">Pages:</span> {totalPages}
                        </p>
                        <p>
                            <span className="font-semibold">Publisher:</span> {publisher},{" "}
                            {yearOfPublishing}
                        </p>
                        <p className="flex items-center gap-1 text-[#00b600] font-semibold">
                            {rating} <FaRegStar />
                        </p>
                    </div>
                    <div className='w-full flex gap-3 mt-4'>
                        <button onClick={handleMarkAsRead} className="
            block text-center
            border-2 border-[#00b600] 
            rounded-lg px-6 py-2 
            text-[#00b600] font-medium
            transition-all duration-300 
            hover:bg-[#00b600] hover:text-white 
            hover:shadow-lg 
            active:scale-95
          ">Mark as Read</button>

                        <button onClick={handleAddToWishlist} className="
            block text-center
            border-2 border-[#00b600] 
            rounded-lg  px-6 py-2 
            text-[#00b600] font-medium
            transition-all duration-300 
            hover:bg-[#00b600] hover:text-white 
            hover:shadow-lg 
            active:scale-95
          " >Add to Wishlist</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
