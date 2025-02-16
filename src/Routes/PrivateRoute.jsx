import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Providers/AuthProviders';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(authContext);

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;
