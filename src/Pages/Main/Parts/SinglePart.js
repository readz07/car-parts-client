import React from 'react';
import { useNavigate } from 'react-router-dom';

const SinglePart = ({part}) => {
    const{_id, name, description, minQuantity, price, stock, color, image } = part
    const navigate = useNavigate()
    const handleOrder = (id) => {  
        localStorage.setItem(id, parseInt(minQuantity))     
        navigate(`/orderparts/${id}`)
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className='w-96'/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0,120)}</p>
                
                <div className="card-actions justify-end">
                    <button onClick={()=>handleOrder(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SinglePart;