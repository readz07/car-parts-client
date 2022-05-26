import axios from 'axios';
import React from 'react';

const DeleteOrdersModal = ({ ordersDelete, refetch,  setOrdersDelete }) => {
    const { _id } = ordersDelete;
    const deleteMyOrder = (id) => {
        axios
            .delete(`http://localhost:5000/orders/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((res) => {
                setOrdersDelete(null);
                refetch();
                console.log(res);
            });
    };
    console.log(_id)
    return (
        <div>
            <input type="checkbox" id="order-delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="order-delete-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold mb-5">
                        Are You sure to delete this product?
                    </h3>
                    <button onClick={() => deleteMyOrder(_id)}

                        className="btn btn-danger">
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteOrdersModal;