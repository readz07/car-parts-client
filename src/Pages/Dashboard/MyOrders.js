import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const MyOrders = () => {
    
    const [user] = useAuthState(auth)
    const email = user.email
    
    const { isLoading, error, data: pendingOrders, refetch } = useQuery('orders', () =>
        fetch( `http://localhost:5000/orders?email=${email}`).then(res =>
            res.json()
        )
    )
    
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
        </div>
    );
};

export default MyOrders;