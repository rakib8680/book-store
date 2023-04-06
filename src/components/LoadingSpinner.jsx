import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-72px)]'>
            <p className='md:text-7xl text-3xl font-thin'>L</p>
            <div className='md:w-10 md:h-10 w-6 h-6 border-4 md:border-8 border-dotted rounded-full animate-spin mt-5 border-orange-400 relative -top-2 md:top-0'></div>
            <p className='md:text-7xl text-3xl font-thin'>ading....</p>
        </div>
    )
}

export default LoadingSpinner
