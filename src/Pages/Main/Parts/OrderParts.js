import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';

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
    const addQuantity = () => {
        const previouQuantiy = 1
        const quantity = minQuantity + previouQuantiy;
        console.log(quantity)

    }
    const lessQuantity = () => {

    }
    return (
        <div class="container mx-auto">
            <div className='text-center mt-4 mb-4 text-5xl font-bold'><h1>Your Order Page:</h1></div>
            <div class="overflow-x-auto w-full h-screen">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Name: {user.displayName}</th>
                            <th>Email: {user.email}</th>
                            <th>Total Stock Quantity: {order.stock}</th>
                            <th><button class="btn btn-accent btn-xs">product details</button></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{order.name}</td>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-24 h-24">
                                            <img src={order.image} alt="product order" />
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>
                                Minimum Order Quantity
                                <br />
                                <span class="">
                                    <button onClick={addQuantity} class="btn btn-accent btn-xs"> + </button>
                                    <span className='m-4'>{order.minQuantity}</span>
                                    <button onClick={lessQuantity} class="btn btn-accent btn-xs"> - </button>
                                </span>
                            </td>

                            <th>
                                <button class="btn btn-warning btn-xs">Pay Now</button>
                            </th>
                        </tr>
                    </tbody>
                   


                </table>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default OrderParts;