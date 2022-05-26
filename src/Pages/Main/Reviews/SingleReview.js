import React from 'react';

const SingleReview = ({ r }) => {
    const {rating, image, description} =r 
    return (
        <div class="card w-96 bg-primary text-neutral-content h-100">
            <div class="card-body items-center">
                <h2 class="card-title">Rating: {rating} Star</h2>
                <div class="avatar">
                    <div class="w-24 rounded">
                        <img src={image} alt="person" />
                    </div>
                </div>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default SingleReview;