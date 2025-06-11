import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import SeekerSideBar from "../../components/SeekerSidebar";

const Profile = () => {
  const [seeker, setSeeker] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/seekerprofile`, {
        headers: { Authorization: localStorage.getItem("access-token") },
      })
      .then((response) => {
        setSeeker(response.data.result[0]);
        // console.log(response.data.result[0]);
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
      <Slider data={<h1 className="text-white">Profile</h1>} />

      <div
        className="container"
        style={{ marginBottom: "100px", marginTop: "100px" }}
      >
        <div className="row">
          <SeekerSideBar />
          <div className="col-md-6 ">
            <h4>My Personal Information</h4>
            <table className="table ">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{seeker.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{seeker.email}</td>
                </tr>
                 <tr>
                  <th>Gender</th>
                  <td>{seeker.gender}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{seeker.phone}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{seeker.address}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{seeker.city}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
