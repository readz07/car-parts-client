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
        <div class="grid grid-1 place-items-center">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Add Your Review Here</h2>
                    <form onSubmit={handleReview}>
                        <div class="form-control my-3">
                            <label class="label">
                                <span class="label-text">Rating</span>
                            </label>                            
                            <input type="number" required name="rating" placeholder="Type rating here" class="input w-full max-w-xs input-bordered input-md" />
                        </div>
                        <div class="form-control my-3">
                            <label class="label">
                                <span class="label-text">Insert Square Image</span>
                            </label>                            
                            <input type="text" required name="image" placeholder="Image Link" class="input w-full max-w-xs input-bordered input-md" />
                        </div>
                        <div class="form-control my-3">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>                            
                            <textarea required class="textarea input w-full max-w-xs input-bordered" name="description" placeholder="Description"></textarea>
                        </div>
                        
                        
                        
                        <div class="card-actions justify-end">
                            <button type='submit' class="btn btn-primary">Add Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMyReview;