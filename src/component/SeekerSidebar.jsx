import React from 'react'
import { NavLink } from 'react-router-dom'

const OwnerSideBar = () => {
  return (
    

      <div className='col-md-3'>
    
        <div className="alert  alert-success fw-bold main-color text-center">
          
          <p>{localStorage.getItem("name")}</p>
        </div>
        <ul className="nav flex-column ">
          <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/profile">
              <i className="fas fa-user  alert-success main-color "></i><span className=' fw-bold main-color'> Profile</span>
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/edit-profile">
              <i className="fas fa-user-edit  alert-success main-color "></i><span className=' fw-bold main-color'> Edit Profile</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/view-property">
              <i className="fas fa-home  alert-success main-color  "></i><span className=' fw-bold main-color'> Properties</span>
            </NavLink>
          </li>
        

           <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/messages">
              <i className="fas fa-comments  alert-success main-color "></i> <span className=' fw-bold main-color'>View-Messages</span> 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/seeker/update-password">
              <i className="fas fa-plus  alert-success main-color "></i> <span className=' fw-bold main-color'>Update Password</span> 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              <i className="fa fa-sign-out-alt  alert-success main-color "></i> <span className=' fw-bold main-color'>Logout</span> 
            </NavLink>
          </li>
        </ul>
      </div>
     
    
  )
}

export default OwnerSideBar
