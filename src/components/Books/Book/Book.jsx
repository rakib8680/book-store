import React from 'react';

const Book = ({ book }) => {
    console.log(book)
    const { image, isbn13, price, title, subtitle, url } = book
    return (
        <>
            {/* <img className='mx-auto' src={image} />
            <h1>{title}</h1> */}
            <div className="card w-full glass">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Book;