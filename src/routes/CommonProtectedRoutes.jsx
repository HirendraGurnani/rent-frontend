import React from 'react'
import { useEffect } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';

const CommonProtectedRoute = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("owner-token") || !localStorage.getItem("access-token") ) {
            navigate("/")
        }
    }, [])
    return (
        <Outlet />
    )
}

export default CommonProtectedRoute