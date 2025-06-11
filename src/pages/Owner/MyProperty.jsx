import React, { useEffect, useState } from "react";

import axios from "axios";
import Slider from "../../components/Slider";
import OwnerSidebar from "../../components/OwnerSidebar";

const MyProperty = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/property/owner`, {
        headers: { Authorization: localStorage.getItem("owner-token") },
      })
      .then((response) => {
        setProperty(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the properties!", error);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Slider data={<h1 className="text-white">Profile</h1>} />
      <div className="container my-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-12 col-md-3 mb-4">
            <OwnerSidebar />
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9">
            <h4 className="mb-4">My Property</h4>

            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead style={{ backgroundColor: "#fff", color: "#225253" }}>
                  <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Property Type</th>
                    <th>Location</th>
                    <th>Rent</th>
                    <th>Deposit</th>
                  </tr>
                </thead>
                <tbody>
                  {property.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center">
                        No properties found.
                      </td>
                    </tr>
                  ) : (
                    property.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.property_type}</td>
                        <td>{item.address}</td>
                        <td>₹{item.rent}</td>
                        <td>₹{item.deposit}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProperty;
