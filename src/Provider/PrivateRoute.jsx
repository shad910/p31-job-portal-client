import React, { Children } from 'react';
import useAuth from '../Hooks/UseAuth';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Shared/Loading';


const PrivateRoute = ({ children }) => {

    const { loading, user } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate to="/auth/login" state={location.pathname} replace={true} />;
};

export default PrivateRoute;