import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';
import axios from 'axios';
const OrderConfirm = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    
    const { isLoading, error, data: pendingOrders, refetch } = useQuery('orders', () =>
        fetch( `https://cryptic-springs-54649.herokuapp.com/orders?email=${email}`).then(res =>
            res.json()
        )
    )
    
    // const [confirmOrder, setConfirmOrder] = useState([])
    // useEffect(() => {
    //     const getOrders = async() =>{
    //         const email = user.email
    //         const url = `https://cryptic-springs-54649.herokuapp.com/orders?email=${email}`
    //         const {data} = await axios.get(url)
    //         setConfirmOrder(data)
    //     }
    //     getOrders();
    // }, [user])
    
    return (
        <div>
           Orders: {pendingOrders?.length}
        </div>
    );
};

export default OrderConfirm;