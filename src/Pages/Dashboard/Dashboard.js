
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdminRoles from '../../hooks/useAdminRoles';
import Loading from '../Shared/Loading/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, loading] = useAdminRoles(user);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-4 mx-12">
                    <h1 className='text-4xl font-bold mb-8'>Dashboard</h1>
                    <Outlet />
                    <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-300 text-base-content">

                        {!admin && <><li><Link to='/dashboard'>My Orders</Link></li>
                            <li><Link to='/dashboard/addmyreview'>Add A Review</Link></li>
                        </>}

                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        { admin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/addaproduct'>Add A Product</Link></li>
                                <li><Link to='/dashboard/manageorders'>Manage Ordres</Link></li>
                                <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;