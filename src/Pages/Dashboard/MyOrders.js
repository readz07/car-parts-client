import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import DeleteModal from './DeleteModal';

const MyOrders = () => {
    const [orderDelete, setOrderDelete] = useState([])
    const [user] = useAuthState(auth)
    const email = user.email
    const navigate = useNavigate()
    const { isLoading, error, data: pendingOrders, refetch } = useQuery('orders', () =>
        fetch(`https://cryptic-springs-54649.herokuapp.com/orders?email=${email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            console.log(res)
            if (res.status === 401 || res.status === 403) {
                navigate('/')
            }
            return res.json()
        }
        )

    )
    if (isLoading) {
        return (<Loading />)
    }

   

    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            <th>Transaction ID</th>
                            <th>Delete Orders</th>
                            <th>Confirm Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingOrders?.map((o, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{o.productName}</td>
                                    <td>{o.transactionId? o.transactionId: 'Not Paid'}</td>
                                    <td>{!o.paid && <label onClick={() => setOrderDelete(o)}
                                        htmlFor="my-order-delete"
                                        className="btn modal-button btn-sm btn-error"
                                    >Delete Order</label>}</td>
                                    <td>{!o.paid && <Link to={`/dashboard/mypayment/${o._id}`}><button className='btn btn-primary btn-sm'>Pay Now</button></Link>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {orderDelete && (
                <DeleteModal
                    key={orderDelete._id}
                    orderDelete={orderDelete}
                    refetch={refetch}
                    setOrderDelete={setOrderDelete}
                ></DeleteModal>
            )}
        </div>
    );
};

export default MyOrders;