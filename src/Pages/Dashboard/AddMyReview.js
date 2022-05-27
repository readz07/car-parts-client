import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddMyReview = () => {
    const handleReview = event => {
        event.preventDefault();
        
        const review ={
            rating: event.target.rating.value,
            image: event.target.image.value,
            description: event.target.description.value,
            
        }
        
        

    
        axios.post('http://localhost:5000/reviews', review)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Product has been added')
                    event.target.reset()
                }
            })

    }        
    
    return (
        <div className="grid grid-1 place-items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Add Your Review Here</h2>
                    <form onSubmit={handleReview}>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>                            
                            <input type="number" required name="rating" placeholder="Type rating here" className="input w-full max-w-xs input-bordered input-md" />
                        </div>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Insert Square Image</span>
                            </label>                            
                            <input type="text" required name="image" placeholder="Image Link" className="input w-full max-w-xs input-bordered input-md" />
                        </div>
                        <div className="form-control my-3">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>                            
                            <textarea required className="textarea input w-full max-w-xs input-bordered" name="description" placeholder="Description"></textarea>
                        </div>
                        
                        
                        
                        <div className="card-actions justify-end">
                            <button type='submit' className="btn btn-primary">Add Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMyReview;