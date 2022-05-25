import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const MyOrders = () => {

    const [user] = useAuthState(auth)
    const email = user.email
    const navigate = useNavigate()
    const { isLoading, error, data: pendingOrders, refetch } = useQuery('orders', () =>
        fetch(`http://localhost:5000/orders?email=${email}`,{
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>{
            console.log(res)
            if(res.status===401 || res.status === 403){
                navigate('/') 
            }
            return res.json()
        }
        )
        
    )
    if(isLoading){
        return (<Loading/>)
    }

    // const [confirmOrder, setConfirmOrder] = useState([])
    // useEffect(() => {
    //     const getOrders = async() =>{
    //         const email = user.email
    //         const url = `http://localhost:5000/orders?email=${email}`
    //         const {data} = await axios.get(url)
    //         setConfirmOrder(data)
    //     }
    //     getOrders();
    // }, [user])

    return (
        <div>
            Orders: {pendingOrders?.length}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
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
                               pendingOrders?.map((o, index)=>
                                <tr>
                                <th>{index+1}</th>
                                <td>{o.productName}</td>
                                <td>Transaction ID</td>
                                <td><button className='btn btn-error'>Delete Order</button></td>
                                <td><button className='btn btn-primary'>Pay Now</button></td>
                            </tr>    
                               )
                           }               
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;