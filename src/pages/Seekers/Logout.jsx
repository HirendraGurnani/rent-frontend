import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("name");
    localStorage.removeItem("seeker_id");
  return (
    <Navigate to='/seeker/login' />
  )
}

export default Logout