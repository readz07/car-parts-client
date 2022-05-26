import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
        navigate('/signin')
      };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/myportfolio">My Portfolio</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
        {user ? <button onClick={handleSignOut} class="btn btn-active btn-ghost">Sign Out</button> : <li><Link to='./signin'>Sign In</Link></li>}
        {!user && <li><Link to='./signup'>Sign Up</Link></li>}
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h3>Car Parts</h3>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <button className="btn btn-primary text-white font-bold">I am {user?.displayName}</button>
                }                
            </div>
        </div>
    );
};

export default Header;