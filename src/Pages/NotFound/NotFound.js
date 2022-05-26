import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../../src/assets/notfoundimage/404.jpg'
const NotFound = () => {
    return (
        <div class="card grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-items-center my-12 glass">
            <div class="card-body">
                <h2 class="card-title text-4xl text-center">You Might Get Lost. Go Back To</h2>
                
                <div class="card-actions justify-center">
                    <Link to='/' class="btn btn-primary">Home Here</Link>
                </div>
            <figure><img src={notFoundImg} alt="not found" /></figure>
            </div>
        </div>
    );
};

export default NotFound;