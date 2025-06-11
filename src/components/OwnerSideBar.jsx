import React from "react";
import { NavLink } from "react-router-dom";

const OwnerSidebar = () => {
  return (
    <>
      <div className="alert  alert-success fw-bold main-color text-center">
        <p>{localStorage.getItem("owner-name")}</p>
      </div>
      <ul className="nav flex-column ">
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/profile">
            <i className="fas fa-user  alert-success main-color "></i>
            <span className=" fw-bold main-color"> Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/my-property">
            <i className="fas fa-home  alert-success main-color  "></i>
            <span className=" fw-bold main-color"> My Properties</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/add-property">
            <i className="fas fa-plus-circle  alert-success main-color "></i>{" "}
            <span className=" fw-bold main-color">Add Property</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/requests">
            <i className="fas fa-handshake  alert-success main-color "></i>{" "}
            <span className=" fw-bold main-color">Rent-out</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/owner/messages">
            <i className="fas fa-comments  alert-success main-color "></i>{" "}
            <span className=" fw-bold main-color">Messages</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">
            <i className="fa fa-sign-out-alt  alert-success main-color "></i>{" "}
            <span className=" fw-bold main-color">Logout</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default OwnerSidebar;
