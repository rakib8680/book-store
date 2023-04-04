import React from 'react';

const Book = ({ book }) => {
    console.log(book)
    const { image, isbn13, price, title, subtitle, url } = book
    return (
        <>
            {/* <img className='mx-auto' src={image} />
            <h1>{title}</h1> */}
            <div className="overflow-hidden  border-slate-400 shadow-sm shadow-orange-300  rounded-md">
                <figure className="px-2 w-auto">
                    <img src={image} className=" object-cover w-full h-56 md:h-64 xl:h-80" />
                </figure>
                <div className="items-center text-center px-2">
                    <h2 className="text-lg pb-3 font-semibold" >{title}</h2>
                    
                </div>
            </div>

            
        </>
    );
};

export default Book;