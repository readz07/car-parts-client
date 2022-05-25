import React from 'react';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const { isLoading, error, data: users, refetch } = useQuery('allusers', () =>
        fetch(`http://localhost:5000/allusers`,{
            method: 'GET',
            headers:{
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>res.json())
    )
    
    return (
        <div>
            Total Users: {users?.length}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>
                        </tr>
                    </thead>
                    <tbody>                       
                           {
                               users?.map((u, index)=>
                                <tr>
                                <th>{index+1}</th>
                                <td>{u.displayname}</td>
                                <td>{u.email}</td>                               
                            </tr>    
                               )
                           }               
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;