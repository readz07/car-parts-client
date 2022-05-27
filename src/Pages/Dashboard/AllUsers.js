import React from 'react';
import { useQuery } from 'react-query';
import SingleUser from './SingleUser';

const AllUsers = () => {
    const { isLoading, error, data: users, refetch } = useQuery('allusers', () =>
        fetch(`https://cryptic-springs-54649.herokuapp.com/allusers`,{
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>res.json())
    )
    
    
    return (
        <div>
            Total Users: {users?.length}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th>Make Admin</th>
                            
                        </tr>
                    </thead>
                    <tbody>                       
                           {
                               users?.map((user, index)=>
                                <SingleUser key={user._id} user={user}  index={index} refetch={refetch}></SingleUser>
                               )
                           }               
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;