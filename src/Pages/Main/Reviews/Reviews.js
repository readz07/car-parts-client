import React, { useEffect, useState } from 'react';
import useReviews from '../../../hooks/useReviews';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <>
        <h1 className='text-center font-bold text-5xl text-primary mt-12'>Reviews From Our Clients</h1>
        
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 place-items-center gap-2 my-12'>
            

            <>
                {reviews.map(r => <SingleReview r={r} key={r._id}></SingleReview>)}
            </>

        </div>
        </>
    );
};

export default Reviews;