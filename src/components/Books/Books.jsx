import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book/Book';

const Books = () => {

    const { books } = useLoaderData();
    // console.log(books);

    return (
        <div className='my-container'>
            <h1>Total books : {books.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5'>
                {
                    books.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;