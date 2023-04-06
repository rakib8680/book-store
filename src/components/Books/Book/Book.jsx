import React from 'react';

const Book = ({ book }) => {
    console.log(book)
    const { image, isbn13, price, title, subtitle, url } = book
    return (
        <div className='book-div'>
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
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>Price : {price}</p>
            </div>
        </div>
    );
};

export default Book;