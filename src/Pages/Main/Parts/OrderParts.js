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
    const [newQuantity, setNewQuantity] = useState(localStorage.getItem(id));
    const [quantityError, setQuantityError] = useState('')
    
  
    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])
    const { _id, name, image, description, stock, price, minQuantity } = order;
   
   
   
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
            navigate('/dashboard')
        }
    })
    }

    const handleQuantity = (increase) => {
        if (increase && newQuantity > 0) {
          let newQuantityParts = parseInt(newQuantity) + 1;
          setNewQuantity(newQuantityParts);
    
          if (newQuantityParts < minQuantity) {
            setQuantityError(`You have to order minimum ${minQuantity} parts`);
          } else if (newQuantityParts > stock) {
            setQuantityError(
              `You can not order more then available quantity of: ${stock}`
            );
          } else {
            setQuantityError("");
          }
        } else if (!increase && newQuantity > 1) {
          let newQuantityParts = parseInt(newQuantity) - 1;
          setNewQuantity(newQuantityParts);
          if (newQuantityParts < minQuantity) {
            setQuantityError(`You have to order minimum ${minQuantity} items`);
          } else if (newQuantityParts > stock) {
            setQuantityError(
             ` You can not order more then available quantity of: ${stock}`
            );
          } else {
            setQuantityError("");
          }
        }
      };
    return (
        <div className="grid grid-1 place-center place-items-center">
            <div className='text-center mt-4 mb-4 text-5xl font-bold'><h1>Your Order Page:</h1></div>
            <ToastContainer />
            <div className="card md:w-2/3 lg:w-1/2 sm:3/5 xs:w-full bg-base-100 shadow-xl mt-4 mb-28">
                <div className="card-body">
                    <div className="card-actions justify-center">                        
                        <label for="my-modal-3" className="btn modal-button btn-accent">Product Detail</label>
                    </div>                  
                    <form onSubmit={handleOrder}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" value={user?.email} readOnly disabled className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={user?.displayName} readOnly disabled className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name="phone" required placeholder='Type phone number here' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name="address" required placeholder='Type address here' className="input input-bordered text-area" />
                    </div>                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Product Price</span>
                        </label>
                        <input type="text" value={price} readOnly disabled className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Total Product Stock</span>
                        </label>
                        <input type="text" value={stock} readOnly disabled className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Product Mnimum Order Quantity</span>
                        </label>
                        <input type="text" value={newQuantity} readOnly disabled className="input input-bordered" />
                        <p className="text-error font-bold mb-2">{quantityError ? quantityError : ""}</p>
                        <label className="label">
                            <span onClick={()=>handleQuantity(true)}  className="label-text font-bold btn btn-accent text-white">Add Quantity</span>
                            <span onClick={()=>handleQuantity(false)} className="label-text font-bold btn btn-accent text-white">Less Quantity</span>
                        </label>
                    </div>                   
                    <div className="form-control mt-6">
                        <button disabled={quantityError} type='submit' className="btn btn-primary">Confirm Order</button>
                    </div>
                    </form>
                </div>
            </div>
            

            {/* modal for prodcut detail */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card w-full mt-4 bg-base-100 shadow-xl">
                        <figure><img src={image} alt="parts" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Parts Name: {name}
                            </h2>
                            <p>{description}</p>
                            <div className="card-actions justify-center">
                                <div className="badge badge-outline">Price: {price}</div>
                                <div className="badge badge-outline">Stock: {stock}</div>
                                <div className="badge badge-outline">Minmum Order Quantity: {minQuantity}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderParts;