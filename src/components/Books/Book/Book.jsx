import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { image, isbn13, price, title, subtitle, url } = book
    return (
        <Link to={`../book/${isbn13}`} className='book-div'>
            {/* <img className='mx-auto' src={image} />
            <h1>{title}</h1> */}
            <div className="book-card">
                <figure className="px-2 w-auto">
                    <img src={image} className="book-card-img" />
                </figure>
                <div className="items-center text-center px-2">
                    {/* <h2 className="text-lg pb-3 font-semibold" >{title}</h2> */}

                </div>
            </div>

            <div className='book-fade-effect'>
                <h1 className='text-lg font-semibold text-slate-100'>{title}</h1>
                <h3 className='text-sm font-light'>{subtitle.substring(0,45)}...</h3>
                <p className='text-2xl font-extrabold mt-auto'>Price : <span className='text-yellow-300'>{price}</span></p>
            </div>
        </Link>
    );
};

export default Book;