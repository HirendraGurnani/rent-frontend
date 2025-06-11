import React, { useEffect, useState } from "react";
import axios from "axios";
import OwnerSideBar from "../../components/OwnerSidebar";
// import Slider from "../../components/Slider";
import Slider from "../../components/Slider";

const MyAccount = () => {
  const [owner, setOwner] = useState({});

  useEffect(() => {

    axios
      .get(`${import.meta.env.VITE_API_URL}/ownerprofile`, {
        headers: { Authorization: localStorage.getItem("owner-token") },

      })
      .then((response) => {
        setOwner(response.data.result[0]);
        // console.log(response.data.result[0])
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Slider data={<h1 className="text-white">MyProfile</h1>} />


    <div
      className="container"
      style={{ marginBottom: "100px", marginTop: "100px" }}
    >
      <div className="row">
      <div className="col-md-3"><OwnerSideBar /></div>
      

      {/* Main Content */}
      <div className="col-md-5 main-color">
        <h4>My Personal Information</h4>
        <table className="table table-bordered table-striped table-hover">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{owner.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{owner.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{owner.phone}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{owner.address}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{owner.city}</td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
    </div>
    </>

  );
};

export default MyAccount;