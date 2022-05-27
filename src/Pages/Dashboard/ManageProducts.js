import React, { useState } from 'react';
import { useQuery } from 'react-query';

import usePartsData from '../../hooks/usePartsData';
import DeleteProduct from './DeleteProduct';

const ManageProducts = () => {
    
    const [productDelete, setProductDelete] = useState([])
    const { isLoading, data: allproducts, refetch } = useQuery('orders', () =>
        fetch(`http://localhost:5000/parts`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            console.log(res)
            
            return res.json()
        }
        )

    )
    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Parts Image</th>
                            <th>Parts Name</th>
                            <th>Total Stock</th>
                            <th>Unit Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allproducts?.map((allproduct, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td><img width='100' src={allproduct.image} alt='product show'/></td>
                                    <td>{allproduct.name}</td>
                                    <td>{allproduct.stock}</td>
                                    <td>{allproduct.price}</td>
                                    
                                    <td>{!allproduct.paid && <label onClick={() => setProductDelete(allproduct)}
                                        htmlFor="product-delete"
                                        className="btn modal-button btn-sm btn-error"
                                    >Delete Order</label>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {productDelete && (
                <DeleteProduct
                    key={productDelete._id}
                    refetch= {refetch}
                    productDelete={productDelete}
                    setProductDelete={setProductDelete}
                ></DeleteProduct>
            )}
        </div>
    );
};

export default ManageProducts;