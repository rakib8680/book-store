import React from 'react';
import { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const BookDetails = () => {

    // spinner implements 
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <LoadingSpinner></LoadingSpinner>
    }


    // load data 
    const bookDetails = useLoaderData()
    const { image, title, desc, authors, publisher, year, rating, url, price } = bookDetails

    const [fold, setFold] = useState(true)




    return (
        <div className='my-container'>
            {/* Container Box */}
            <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto items-center'>
                {/* Image Container */}
                <div className=' lg:w-1/2 h-full'>
                    <img
                        src={image}
                        alt='book cover'
                        className='object-cover w-full  lg:h-full'
                    />
                </div>
                {/* Details Container */}
                <div className=' p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2 space-y-1'>
                    <div>
                        <p className='my-badge'>Brand new</p>
                    </div>
                    <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
                        {title}
                    </h5>
                    <div className='py-10 text-slate-600 font-semibold space-y-2'>
                        <p className=' '>Authors: {authors.substring(0, 50)}</p>
                        <p className=' '>Publisher: {publisher}</p>
                        <p className=' '>Year: {year}</p>
                        <p className='mb-5 '>Rating: {rating}</p>
                        {
                            fold ? <p className=' text-gray-500'>{desc.substring(0, 100)}... <span className='text-sky-500 cursor-pointer' onClick={() => setFold(!fold)}>Read More</span></p>
                                :
                                <p className=' text-gray-500'>{desc} <span className='text-sky-500 cursor-pointer' onClick={() => setFold(!fold)}>Read Less</span></p>
                        }
                    </div>

                    <div className='flex gap-5 mt-8 items-center'>
                        <a href={url} target='_blank' className='my-btn'>
                            Buy Now
                        </a>
                        <p className='items-center text-xl md:text-3xl font-extrabold'>
                            Price: <span className=' text-yellow-300 bg-sky-800 p-2'>{price}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;