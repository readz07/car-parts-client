import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';

const OrderParts = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams()
    const [order, setOrder] = useState({});
    const [newQuantity, setNewQuantity] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])
    const { _id, name, image, description, stock, price, minQuantity } = order;
    // add quantity
    const handleAddQuantity = () => {
        const previouQuantiy = 1
        const quantity = minQuantity + previouQuantiy;
        console.log(quantity)

    }

    // less quantity
    const lessQuantity = () => {

    }
    // navigation
    const navigate = useNavigate()
    // submit form
    const handleOrder = event =>{
        event.preventDefault();
        const confirmOrder = {
            email: user.email,
            name: user.displayName,
            phone: event.target.phone.value,
            address:event.target.address.value,
            prodcutId : _id,
            productName: name,
            productPrice: price,
            productQuantity: minQuantity,
            productImage: image,
            productDetail: description
        }
       
        axios.post('http://localhost:5000/order', confirmOrder)
    .then(response=>{
        const{data} = response;
        if(data.insertedId){
            toast('Your order has sent to que');
            event.target.reset()
            navigate('/orderconfirm')
        }
    })
    }
    return (
        <div class="grid grid-1 place-center place-items-center">
            <div className='text-center mt-4 mb-4 text-5xl font-bold'><h1>Your Order Page:</h1></div>
            <ToastContainer />
            <div class="card md:w-2/3 lg:w-96 sm:3/5 xs:w-full bg-base-100 shadow-xl mt-4 mb-28">
                <div class="card-body">
                    <div class="card-actions justify-center">                        
                        <label for="my-modal-3" class="btn modal-button btn-accent">Product Detail</label>
                    </div>                  
                    <form onSubmit={handleOrder}>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" value={user?.email} readOnly disabled class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" value={user?.displayName} readOnly disabled class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>
                        <input type="text" name="phone" required placeholder='Type phone number here' class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <input type="text" name="address" required placeholder='Type address here' class="input input-bordered text-area" />
                    </div>                   
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-bold">Product Price</span>
                        </label>
                        <input type="text" value={price} readOnly disabled class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-bold">Total Product Stock</span>
                        </label>
                        <input type="text" value={stock} readOnly disabled class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text font-bold">Product Mnimum Order Quantity</span>
                        </label>
                        <input type="text" value={minQuantity} readOnly disabled class="input input-bordered" />
                        <label class="label">
                            <span class="label-text font-bold btn btn-accent text-white">Add Quantity</span>
                            <span class="label-text font-bold btn btn-accent text-white">Less Quantity</span>
                        </label>
                    </div>                   
                    <div class="form-control mt-6">
                        <button type='submit' class="btn btn-primary">Confirm Order</button>
                    </div>
                    </form>
                </div>
            </div>
            

            {/* modal for prodcut detail */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="card w-full mt-4 bg-base-100 shadow-xl">
                        <figure><img src={image} alt="parts" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Parts Name: {name}
                            </h2>
                            <p>{description}</p>
                            <div class="card-actions justify-center">
                                <div class="badge badge-outline">Price: {price}</div>
                                <div class="badge badge-outline">Stock: {stock}</div>
                                <div class="badge badge-outline">Minmum Order Quantity: {minQuantity}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderParts;