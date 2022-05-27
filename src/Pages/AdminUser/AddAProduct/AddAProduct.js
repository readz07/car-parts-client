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

        <div className="grid grid-1 place-center place-items-center">
            <div className='text-center mt-4 mb-4 text-5xl font-bold'><h1>Add Product From Here</h1></div>

            <div className="card md:w-2/3 lg:w-1/2 sm:3/5 xs:w-full bg-base-100 shadow-xl mt-4 mb-28">
                <div className="card-body">

                    <form onSubmit={handleAddingProduct}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" placeholder='Type Product Name Here' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price Per Unit</span>
                            </label>
                            <input type="number" name='price' placeholder='Type Price' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Minimum Quantity</span>
                            </label>
                            <input type="number" name="quantity" required placeholder='Type quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Link</span>
                            </label>
                            <input type="text" name="image" required placeholder='Give image link' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descritption</span>
                            </label>
                            <textarea type="text" name="description" required placeholder='Type description here' className="input input-bordered text-area" />
                        </div>


                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Products</button>
                        </div>
                    </form>
                </div>
            </div>



        </div >
    );
};

export default AddAProduct;