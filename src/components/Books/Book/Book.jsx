import React from 'react';

const Book = ({ book }) => {
    console.log(book)
    const { image, isbn13, price, title, subtitle, url } = book
    return (
        <div className='relative transition duration-300 transform hover:-translate-y-2'>
            {/* <img className='mx-auto' src={image} />
            <h1>{title}</h1> */}
            <div className="overflow-hidden  border-slate-400 shadow-sm shadow-orange-300  rounded-md">
                <figure className="px-2 w-auto">
                    <img src={image} className=" object-cover w-full h-56 md:h-64 xl:h-80" />
                </figure>
                <div className="items-center text-center px-2">
                    {/* <h2 className="text-lg pb-3 font-semibold" >{title}</h2> */}
                    
                </div>
            </div>

            <div className='text-center bg-slate-500 bg-opacity-90 opacity-0 space-y-5  my-auto text-orange-300 font-semibold absolute inset-0 hover:opacity-100 transition duration-500'>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>Price : {price}</p>
            </div>
        </div>
    );
};

export default Book;