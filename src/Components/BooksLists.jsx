import React, { useEffect, useState } from 'react';
import BookList from './BookList';

const BooksLists = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 items-center justify-center px-[10%] py-5'>
            {
                books.map(book => <BookList key={book.bookId} book={book}></BookList>)
            }
        </div>
    );
};

export default BooksLists;