import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

    const [bar, setBar] = useState(false);


    return (
        <div className='bg-gray-100 flex items-center justify-between rounded-b-2xl px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-16'>

            {/* logo section  */}
            <Link to='/' className='inline-flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>

                <h1 className='text-2xl '><span className='font-bold text-orange-500'>Book</span> Store</h1>
            </Link >

            {/* nav link section  */}
            <div className='text-base font-bold text-gray-500 lg:inline-flex gap-10 tracking-wide hidden' >
                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-orange-500' : 'default')}>Home</NavLink>
                <NavLink to='/books' className={({ isActive }) => (isActive ? 'text-orange-500' : 'default')}>Books</NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-orange-500' : 'default')}>About Us</NavLink>
            </div>

            {/* //Mobile Navbar section  */}
            <div className='lg:hidden'>

                {/* Dropdown Open Button */}
                <button
                    onClick={() => setBar(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                {
                    bar && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center gap-3'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                            </svg>
                                            <h1 className='text-2xl '><span className='font-bold text-orange-500'>Book</span> Store</h1>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setBar(false)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-orange-400'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/books'
                                                className='font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-orange-400'
                                            >
                                                Books
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/about'
                                                className='font-medium tracking-wide text-gray-500 transition-colors duration-200 hover:text-orange-400'
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>


    );
};

export default Header;