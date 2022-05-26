import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddAProduct = () => {

    const handleAddingProduct = event => {
        event.preventDefault();
        const addProduct = {
            
            name: event.target.name.value,
            image: event.target.image.value,
            description: event.target.description.value,
            price: parseInt(event.target.price.value),
            minQuantity: parseInt(event.target.quantity.value),
        }
        axios.post('http://localhost:5000/parts', addProduct)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Product has been added')
                    event.target.reset()
                }
            })


    };
    return (

        <div class="grid grid-1 place-center place-items-center">
            <div className='text-center mt-4 mb-4 text-5xl font-bold'><h1>Add Product From Here</h1></div>

            <div class="card md:w-2/3 lg:w-1/2 sm:3/5 xs:w-full bg-base-100 shadow-xl mt-4 mb-28">
                <div class="card-body">

                    <form onSubmit={handleAddingProduct}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" placeholder='Type Product Name Here' required class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Price Per Unit</span>
                            </label>
                            <input type="number" name='price' placeholder='Type Price' required class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Minimum Quantity</span>
                            </label>
                            <input type="number" name="quantity" required placeholder='Type quantity' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Image Link</span>
                            </label>
                            <input type="text" name="image" required placeholder='Give image link' class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Descritption</span>
                            </label>
                            <textarea type="text" name="description" required placeholder='Type description here' class="input input-bordered text-area" />
                        </div>


                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Add Products</button>
                        </div>
                    </form>
                </div>
            </div>



        </div >
    );
};

export default AddAProduct;