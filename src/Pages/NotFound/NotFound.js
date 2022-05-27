import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../../src/assets/notfoundimage/404.jpg'
const NotFound = () => {
    return (
        <div className="card grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-items-center my-12 glass">
            <div className="card-body">
                <h2 className="card-title text-4xl text-center">You Might Get Lost. Go Back To</h2>
                
                <div className="card-actions justify-center">
                    <Link to='/' className="btn btn-primary">Home Here</Link>
                </div>
            <figure><img src={notFoundImg} alt="not found" /></figure>
            </div>
        </div>
    );
};

export default NotFound;