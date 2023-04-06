import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import Book from './Book/Book';

const Books = () => {

    // spinner implements 
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }
    

    const { books } = useLoaderData();

    return (
        <div className='my-container'>
            <h1>Total books : {books.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-5 mt-5 p-5'>
                {
                    books.map(book => <Book book={book} key={book.isbn13}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;