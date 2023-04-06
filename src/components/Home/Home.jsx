import React from 'react';
import Lottie from "lottie-react";
import reader from '../../assets/115398-man-with-book-and-hearts.json'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row  md:mt-20  mb-36'>
            {/* Text Content */}
            <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                <div className='max-w-xl mb-6 lg:mt-8'>
                    <div>
                        <p className='my-badge'>ON SALE!</p>
                    </div>
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-600 sm:text-4xl sm:leading-none'>
                        A reader lives a <br className='hidden md:block' /> thousand lives{' '}
                        <span className='inline-block text-orange-500'>before he dies</span>
                    </h2>
                    <p className='text-base text-slate-600 md:text-lg'>
                        Books are a uniquely portable magic. Books serve to show a man that
                        those original thoughts of his aren’t very new after all. The man
                        who does not read good books is no better than the man who can’t.
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row '>
                    <Link to='/books' className='my-btn md:w-auto md:mr-4 mt-4 md:mt-0'>
                        <div className='inline-flex items-center justify-center w-full h-full '>
                            <p className='mr-3 '>Visit Store</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>

                        </div>
                    </Link>
                    <Link
                        to='/about'
                        className='my-btn-secondary mt-4 md:mt-0'
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            {/* Lottie Animation */}
            <div className='relative lg:w-1/2 '>
                <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
                    <Lottie animationData={reader} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Home;