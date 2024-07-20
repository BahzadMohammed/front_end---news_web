import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children, role }) =>
{
    const { user } = useAuth();


    if (!user)
    {
        return <Navigate to="/login" replace />;
    }

    // if (role && user.role !== role)
    // {
    //     console.log(">>role: ",role)
    //     return <Navigate to="*" replace />;
    // }

    console.log(">>children: ",children)
    return children;
};

export default ProtectedRoute;

