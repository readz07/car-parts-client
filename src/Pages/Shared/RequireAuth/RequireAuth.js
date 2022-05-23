import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    //use auth state
    const [user, loading, error] = useAuthState(auth);
    //use location
    const location = useLocation();
    if (loading) {     
        return <>     
        <Loading></Loading>
        </>
    }
    if(!user){
        
        return <Navigate to="/signin" state={{ from: location }} replace />;
      }
    return children;
};

export default RequireAuth;