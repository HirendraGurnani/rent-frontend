import React from 'react'
import { useEffect } from 'react';
import { Outlet,useNavigate } from 'react-router-dom';

const OwnerProtectedRoute = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("owner-token")) {
            navigate("/owner/login")
        }
    }, [])
    return (
        <Outlet />
    )
}

export default OwnerProtectedRoute