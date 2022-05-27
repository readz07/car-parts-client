import axios from 'axios';
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

    const shippingStatus = (id) => {
        axios(`http://localhost:5000/shippingstatus/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }).then((res) => {
          refetch();
        });
      };

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
                            <th>Confirm Shipment</th>
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
                                    <td>
                                        {o.paid ? (
                                            !o?.shipping_status ? (
                                                <button
                                                    onClick={() => shippingStatus(o._id)}
                                                    className="btn btn-info mr-5"
                                                >
                                                    Pending
                                                </button>
                                            ) : (
                                                <button                                                    
                                                    className="btn btn-success mr-5"                                                >
                                                    Shipped
                                                </button>
                                            )
                                        ) : (
                                            <>
                                                <button className="btn btn-warning mr-5">Unpaid</button>
                                            </>
                                        )}
                                    </td>

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