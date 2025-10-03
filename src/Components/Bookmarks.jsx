import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../Tools/addToDB';

const Bookmarks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList().map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadList.includes(book.bookId));
        setReadList(readBookList);

        const storedWishList = getStoredWishList().map(id => parseInt(id));
        const wishBookList = allBooks.filter(book => storedWishList.includes(book.bookId));
        setWishList(wishBookList);
    }, [allBooks]);

    const BookList = ({ books, emptyMessage }) => (
        <div className="p-6 w-full h-[calc(80vh-100px)] bg-white overflow-y-auto">
            {books.length > 0 ? (
                <ul className="space-y-4">
                    {books.map(({ bookId, bookName, author, image }) => (
                        <li
                            key={bookId}
                            className="p-4 border rounded-xl shadow-sm flex items-start gap-4 hover:shadow-md transition"
                        >
                            <img
                                src={image}
                                alt={bookName}
                                className="w-20 h-28 object-cover rounded-md flex-shrink-0"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800">{bookName}</h3>
                                <p className="text-sm text-gray-600">by {author}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600 mt-3">{emptyMessage}</p>
            )}
        </div>
    );

    return (
        <div className="w-[80vw] h-[80vh] mx-auto mt-10 flex items-center justify-center">
            <Tabs className="w-full h-full bg-white shadow-xl rounded-2xl overflow-hidden">
                <TabList className="flex space-x-2 border-b border-gray-200 p-2 bg-gray-100">
                    <Tab
                        className="px-6 py-2 text-sm font-medium rounded-t-lg cursor-pointer hover:bg-gray-200 focus:outline-none"
                        selectedClassName="bg-white text-blue-600 border-b-2 border-blue-500"
                    >
                        Read List
                    </Tab>
                    <Tab
                        className="px-6 py-2 text-sm font-medium rounded-t-lg cursor-pointer hover:bg-gray-200 focus:outline-none"
                        selectedClassName="bg-white text-blue-600 border-b-2 border-blue-500"
                    >
                        Wish List
                    </Tab>
                </TabList>

                <TabPanel>
                    <BookList books={readList} emptyMessage="No books in your read list yet." />
                </TabPanel>
                <TabPanel>
                    <BookList books={wishList} emptyMessage="No books in your wish list yet." />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Bookmarks;
