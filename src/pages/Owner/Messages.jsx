import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
import axios from "axios";
import OwnerSidebar from "../../components/OwnerSidebar";

const Messages = () => {
  const [allMsg, setAllMsg] = useState([]);
  //   const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/contact`)
      .then((response) => {
        setAllMsg(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("Failed to fetch messages:", err);
      });
  }, []);

  return (
    <div
      className="container my-4"
      style={{ minHeight: "750px", paddingTop: "120px" }}
    >
      <div className="row">
        <div className="col-md-3">
          <OwnerSidebar />
        </div>
        <div className="col-md-8 offset-md-1">
          <h4>My Messages</h4>
          <table className="table table-bordered table-hover table-secondary">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Property Details</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {allMsg.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No messages found.
                  </td>
                </tr>
              ) : (
                allMsg.map((item, index) => (
                  <tr key={item._id || index}>
                    <td>{index + 1}</td>
                    <td>{item ? item.username : ""}</td>
                    <td>{item ? item.email : ""}</td>
                    {/* <td>{item.seeker_id ? item.seeker_id.contact : ''}</td> */}
                    <td>{item.message}</td>
                    <td>{item.pid.title}</td>
                    <td>{item.pid.address}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;
