import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from '../CheckOut';
const MyPayment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isLoading, error, data: paidOrder, refetch } = useQuery(['paidorder'], () =>
        fetch(`http://localhost:5000/paidorder/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return (<Loading />)
    }
    console.log(paidOrder)    
    const {productPrice, productQuantity} = paidOrder
    const paidPrice = parseFloat(productPrice*productQuantity)
    
    const stripePromise = loadStripe('pk_test_51L3XD6DD9r04HobkypV2GcNnlHhWfSDKQKgVrDQ2HMXnAwotkcOU6Ut2sz81TYDLFPK2mK1UBkZaXkudeTHqWHO400rsNQ3bAV');
    return (
        <div className="grid grid-1 place-items-center">
            <div className='text-center mt-4  text-1xl'><h4>Paid For: {paidOrder.productName}</h4></div>
            <div className='text-center mt-4 mb-4 text-1xl'><h4>Total Payment: ${paidPrice}</h4></div>

            <div className="card md:w-2/3 lg:w-1/2 sm:3/5 xs:w-full shadow-xl mt-4 mb-28">
                <div className="card-body grid grid-1 place-items-center">
                    <div className="card w-96 bg-info text-white">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckOut paidOrder={paidOrder}/>
                            </Elements>
                        </div>
                    </div>

                </div>
            </div>



        </div >
    );
};

export default MyPayment;