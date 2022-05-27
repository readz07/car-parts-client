import React from 'react';

const SingleReview = ({ r }) => {
    const {rating, image, description} =r 
    return (
        <div className="card w-96 bg-primary text-neutral-content h-100">
            <div className="card-body items-center">
                <h2 className="card-title">Rating: {rating} Star</h2>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={image} alt="person" />
                    </div>
                </div>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default SingleReview;