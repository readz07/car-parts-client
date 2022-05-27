import axios from 'axios';
import React from 'react';

const DeleteProduct = ({productDelete, setProductDelete, refetch}) => {
    const {_id} = productDelete
    
    const deleteProducts = (id) =>{
        axios.delete(`https://cryptic-springs-54649.herokuapp.com/partsdelete/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        .then((res) => {
            setProductDelete(null);
            refetch();
            console.log(res);
        });
    }
    return (
        <div>
            <input type="checkbox" id="product-delete" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="product-delete"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold mb-5">
                        Are You sure to delete this product?
                    </h3>
                    <button onClick={() => deleteProducts(_id)}

                        className="btn btn-danger">
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;