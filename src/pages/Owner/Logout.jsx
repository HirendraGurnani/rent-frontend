import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("owner-token");
    localStorage.removeItem("owner-name");
  return (
    <Navigate to='/owner/login' />
  )
}

export default Logout