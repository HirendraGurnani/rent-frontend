import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const SeekerProtectedRoute = () => {
    let navigate = useNavigate();
    useEffect (()=>{
        if(! localStorage.getItem("access-token")){
            navigate("/seeker/login")
        }
    },[])
  return (
    <Outlet/>
  )
}

export default SeekerProtectedRoute