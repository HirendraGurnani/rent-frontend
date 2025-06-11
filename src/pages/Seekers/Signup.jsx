import React, { useState } from "react";
import { useFormik } from "formik";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios"; // Corrected import
import seekerSchema from "../../schema/SeekerSignupSchema";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constant/API_URL";
import Slider from "../../component/Slider";

const Signup = () => {
  let [allState, setAllState] = useState([]);
  let [allCity, setAllCity] = useState([]);
  let [allLocation, setAllLocation] = useState([])
  useEffect(() => {
    axios.get(`${API_URL}/city/state`).then(response => {
      setAllState(response.data)
      // console.log(response.data)
    })
  }, [])
  let getAllCity = (e) => {
    let s = e.target.value;
    // console.log(s);

    axios.get(`${API_URL}/city/city/${s}`).then((response) => {
      setAllCity(response.data);
      setAllLocation(response.data)
    });
  };



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let navigate = useNavigate();


  const signupFrm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      gender: "",
      address: "",
      state: "",
      city: "",
      password: "",
      repassword: "",
    },
    validationSchema: seekerSchema,// Enable Yup validation
    onSubmit: (formData) => {
      // console.log(formData);
      // return;
      axios.post(`${API_URL}/seeker`, formData)
        .then((response) => {
          toast.success("Seeker Registered Successfully", { onClose: () => navigate("/seeker/login") });
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });


  return (
    <>
       <Slider data={<h1 className="text-white"> Sing up Here</h1>} />
    <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
      <ToastContainer />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header" style={{ backgroundColor: "#075e54" }}>
              <h3 className="text-light">Seeker SignUp</h3>
            </div>
            <div className="card-body">
              <form onSubmit={signupFrm.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${signupFrm.errors.name && signupFrm.touched.name ? "is-invalid" : " "}`}
                    placeholder="Enter name"
                    value={signupFrm.values.name}
                    onChange={signupFrm.handleChange}
                    onBlur={signupFrm.handleBlur}
                  // required
                  />
                  {signupFrm.errors.name && signupFrm.touched.name && (
                    <small className='text-danger'>{signupFrm.errors.name}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={`form-control ${signupFrm.errors.email && signupFrm.touched.email ? "is-invalid" : " "}`}
                    placeholder="Enter email"
                    value={signupFrm.values.email}
                    onChange={signupFrm.handleChange}
                    onBlur={signupFrm.handleBlur}
                  // required
                  />
                  {signupFrm.errors.email && signupFrm.touched.email && (
                    <small className='text-danger'>{signupFrm.errors.email}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className={`form-control ${signupFrm.errors.phone && signupFrm.touched.phone ? "is-invalid" : " "}`}
                    placeholder="Enter number"
                    value={signupFrm.values.phone}
                    onChange={signupFrm.handleChange}
                    onBlur={signupFrm.handleBlur}
                  // required
                  />
                  {signupFrm.errors.phone && signupFrm.touched.phone && (
                    <small className='text-danger'>{signupFrm.errors.phone}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label>Gender</label>
                  <select
                    name="gender"
                    className={`form-control ${signupFrm.errors.gender && signupFrm.touched.gender ? " is-invalid" : ""}`}
                    value={signupFrm.values.gender}
                    onChange={signupFrm.handleChange}
                    onBlur={signupFrm.handleBlur}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>

                  {signupFrm.errors.gender && signupFrm.touched.gender && (
                    <div className="invalid-feedback">{signupFrm.errors.gender}</div>
                  )}
                </div>


                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className={`form-control ${signupFrm.errors.address && signupFrm.touched.address ? "is-invalid" : " "}`}
                    placeholder="Enter address"
                    value={signupFrm.values.address}
                    onChange={signupFrm.handleChange}
                    onBlur={signupFrm.handleBlur}
                  // required
                  />
                  {signupFrm.errors.address && signupFrm.touched.address && (
                    <small className='text-danger'>{signupFrm.errors.address}</small>
                  )}
                </div>


               




                <div className="mb-3">
                  <label htmlFor="state">State</label>
                  <select

                    name="state"
                    className={`form-control ${signupFrm.errors.state && signupFrm.touched.state ? 'is-invalid' : ''}`}
                    onChange={(e) => {
                      getAllCity(e);
                      signupFrm.handleChange(e);
                    }}
                    onBlur={signupFrm.handleBlur}
                    value={signupFrm.values.state}
                  >
                    <option value="">Select State</option> {/* Default option */}
                    {allState.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {signupFrm.errors.state && signupFrm.touched.state && (
                    <small className="text-danger">{signupFrm.errors.state}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="city">City</label>
                  <select
                    name="city"
                    className={`form-control ${signupFrm.errors.city && signupFrm.touched.city ? "is-invalid" : ""
                      }`}
                    onChange={signupFrm.handleChange}
                    onBlur={signupFrm.handleBlur}
                    value={signupFrm.values.city}
                  >
                    <option value="" disabled>Select City</option>
                    {allCity.map((item, index) => (
                      <option key={index} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {signupFrm.errors.city && signupFrm.touched.city && (
                    <small className="text-danger">{signupFrm.errors.city}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={`form-control ${signupFrm.errors.password && signupFrm.touched.password ? "is-invalid" : ""}`}
                    placeholder="Enter password"
                    value={signupFrm.values.password}
                    onChange={signupFrm.handleChange}
                    onBlur={signupFrm.handleBlur}
                  // required
                  />
                  {signupFrm.errors.password && signupFrm.touched.password && (
                    <small className='text-danger'>{signupFrm.errors.password}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Re-Password</label>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    className={`form-control ${signupFrm.errors.repassword && signupFrm.touched.repassword ? "is-invalid" : " "}`}
                    placeholder="Enter repassword"
                    value={signupFrm.values.repassword}
                    onChange={signupFrm.handleChange}
                    onBlur={signupFrm.handleBlur}
                  // required
                  />
                  {signupFrm.errors.repassword && signupFrm.touched.repassword && (
                    <small className='text-danger'>{signupFrm.errors.repassword}</small>
                  )}
                </div>

                <button type="submit" className="btn btn-custom text-light btn-block rounded-5">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
