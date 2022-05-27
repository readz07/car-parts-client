import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import DeleteOrdersModal from './DeleteOrdersModal';


const ManageOrders = () => {
    const [ordersDelete, setOrdersDelete] = useState([])
    const navigate = useNavigate()
    const { isLoading, error, data: allOrders, refetch } = useQuery('allorders', () =>
        fetch(`http://localhost:5000/allorders`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            console.log(res)
            if (res.status === 401 || res.status === 403) {
                // navigate('/')
                console.log(res.status)
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
            <h1>Manage All Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Name</th>
                            
                            <th>Delete Orders</th>
                            <th>Confirm Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map((o, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{o.productName}</td>
                                    
                                    <td>{!o.paid && <label onClick={() => setOrdersDelete(o)}
                                        htmlFor="order-delete-modal"
                                        className="btn modal-button btn-sm btn-error"
                                    >Delete Order</label>}</td>
                                    <td>{o.paid && <Link to={`/dashboard/mypayment/${o._id}`}><button className='btn btn-primary btn-sm'>Processing</button></Link>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {ordersDelete && (
                <DeleteOrdersModal
                    key={ordersDelete._id}
                    ordersDelete={ordersDelete}
                    refetch={refetch}
                    setOrdersDelete={setOrdersDelete}
                ></DeleteOrdersModal>
            )}
        </div>
    );
};

export default ManageOrders;