import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let location = useLocation();  
    let from = location.state?.from?.pathname || "/";
    let errorMsg;
    if (error) {
        errorMsg =
            <div>
                <p>Error: {error.message}</p>
            </div>
        
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        navigate(from, { replace: true }) 
    }
    return (
        
            <>
            <p className='text-red-500'>{errorMsg}</p>
            <button className='btn btn-accent text-white w-full' onClick={() => signInWithGoogle()}>Use Google</button>
            </>
        
    );
};

export default SocialSignIn;