import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import SeekerSideBar from "../../components/SeekerSidebar";
import { useFormik } from "formik";
import EditProfileSchema from "../../schema/EditProfileSchema";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();

  const [seeker, setSeeker] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    gender: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/seekerprofile`, {
        headers: { Authorization: localStorage.getItem("access-token") },
      })
      .then((response) => {
        setSeeker(response.data.result[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  let UpdateFrm = useFormik({
    enableReinitialize: true,
    initialValues: seeker,
    validationSchema: EditProfileSchema,
    onSubmit: (values) => {
      axios
        .put(`${import.meta.env.VITE_API_URL}/seekerprofile`, values, {
          headers: { Authorization: localStorage.getItem("access-token") },
        })
        .then((response) => {
          navigate("/seeker/profile");
          console.log("Profile updated successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
        });
    },
  });

  return (
    <>
      <Slider data={<h1 className="text-white">Edit Profile</h1>} />

      <div
        className="container"
        style={{ marginBottom: "100px", marginTop: "100px" }}
      >
        <div className="row">
          <SeekerSideBar />
          <div className="col-md-6 ">
            <h4>Edit Your Information</h4>
            <form onSubmit={UpdateFrm.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  onChange={UpdateFrm.handleChange}
                  value={UpdateFrm.values.name}
                  name="name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              {UpdateFrm.errors.name && UpdateFrm.touched.name && (
                    <small className="text-danger">{UpdateFrm.errors.name}</small>
                  )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  onChange={UpdateFrm.handleChange}
                  value={UpdateFrm.values.email}
                  name="email"
                  type="text"
                  className="form-control"
                  readOnly
                  id="email"
                  placeholder="Enter your email"
                />

                {UpdateFrm.touched.email && UpdateFrm.errors.email && (
                  <div className="text-danger">{UpdateFrm.errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  onChange={UpdateFrm.handleChange}
                  value={UpdateFrm.values.phone}
                  name="phone"
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
                {UpdateFrm.touched.phone && UpdateFrm.errors.phone && (
                  <div className="text-danger">{UpdateFrm.errors.phone}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  onChange={UpdateFrm.handleChange}
                  value={UpdateFrm.values.address}
                  name="address"
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                />
                {UpdateFrm.touched.address && UpdateFrm.errors.address && (
                  <div className="text-danger">{UpdateFrm.errors.address}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  onChange={UpdateFrm.handleChange}
                  value={UpdateFrm.values.city}
                  name="city"
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter your city"
                />

                {UpdateFrm.touched.city && UpdateFrm.errors.city && (
                  <div className="text-danger">{UpdateFrm.errors.city}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={UpdateFrm.handleChange}
                    radioDefault1={UpdateFrm.values.gender === "male"}
                  />

                  <label className="form-label" htmlFor="gender-male">
                    Male
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={UpdateFrm.handleChange}
                    radioDefault1={UpdateFrm.values.gender === "female"}
                  />

                  <label className="form-label" htmlFor="gender-female">
                    Female
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Update Information
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
