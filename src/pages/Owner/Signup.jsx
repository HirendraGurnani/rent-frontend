import React from "react";
import { useFormik } from 'formik';
import ownerSchema from "../../schema/OwnerSignupSchema";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constant/API_URL";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Slider from "../../components/Slider";
const Signup = () => {
  let [allState, setAllState] = useState([]);
  let [allCity, setAllCity] = useState([]);


  useEffect(() => {
    axios.get(`${API_URL}/city/state`).then(response => {
      setAllState(response.data)
      // console.log(response.data)
    })
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  let navigate = useNavigate();
  const signupFrm = useFormik({
    validationSchema: ownerSchema,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      city: "",
      password: "",
      repassword: ""
    },
    // onSubmit:(formData)=>{console.log(formData);

    onSubmit: (formData) => {
      axios.post(`${API_URL}/owner`, formData)
        .then((response) => {
          toast.success("Owner Registered Successfully", { onClose: () => navigate("/owner/login") });

          // console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });
  let getAllCity = (e) => {
    let s = e.target.value;
    // console.log(s);

    axios.get(`${API_URL}/city/city/${s}`).then((response) => {
      setAllCity(response.data);
    });
  };


  return (
<>
   <Slider data={<h1 className="text-white"> Sing up Here</h1>} />
    <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
      <ToastContainer />
      <form onSubmit={signupFrm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header " style={{ backgroundColor: "#075e54" }}>
                <h3 className="text-light"> Owner SignUp</h3>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    className={`form-control ${signupFrm.errors.name && signupFrm.touched.name ? 'is-invalid' : ''}`}
                    placeholder="Enter name"
                    onChange={signupFrm.handleChange}
                  />
                  {signupFrm.errors.name && signupFrm.touched.name && (
                    <small className='text-danger'>{signupFrm.errors.name}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="text"
                    id="email"
                    className={`form-control ${signupFrm.errors.email && signupFrm.touched.email ? 'is-invalid' : ''}`}
                    placeholder="Enter email"
                    onChange={signupFrm.handleChange}
                  />
                  {signupFrm.errors.email && signupFrm.touched.email && (
                    <small className='text-danger'>{signupFrm.errors.email}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    name="phone"
                    type="text"
                    id="phone"
                    className={`form-control ${signupFrm.errors.phone && signupFrm.touched.phone ? 'is-invalid' : ''}`}
                    placeholder="Enter number"
                    onChange={signupFrm.handleChange}
                  />
                  {signupFrm.errors.phone && signupFrm.touched.phone && (
                    <small className='text-danger'>{signupFrm.errors.phone}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    name="address"
                    type="text"
                    id="address"
                    className={`form-control ${signupFrm.errors.address && signupFrm.touched.address ? 'is-invalid' : ''}`}
                    placeholder="Enter address"
                    onChange={signupFrm.handleChange}

                  // value={signupFrm.values.address}
                  />
                  {signupFrm.errors.address && signupFrm.touched.address && (
                    <small className='text-danger'>{signupFrm.errors.address}</small>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="city">City</label>
                  <select
                    name="city"
                    className={`form-control ${signupFrm.errors.city && signupFrm.touched.city ? "is-invalid" : ""
                      }`}
                    onChange={signupFrm.handleChange}
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
                  <label htmlFor="state">State</label>
                  <select

                    name="state"
                    className={`form-control ${signupFrm.errors.state && signupFrm.touched.state ? 'is-invalid' : ''}`}
                    onChange={(e) => {
                      getAllCity(e);
                      signupFrm.handleChange(e);
                    }}
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
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    className={`form-control ${signupFrm.errors.password && signupFrm.touched.password ? 'is-invalid' : ''}`}
                    placeholder="Enter password"
                    onChange={signupFrm.handleChange}

                  />
                  {signupFrm.errors.password && signupFrm.touched.password && (
                    <small className='text-danger'>{signupFrm.errors.password}</small>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="repassword">Re-Password</label>
                  <input
                    name="repassword"
                    type="password"
                    id="repassword"
                    className={`form-control ${signupFrm.errors.repassword && signupFrm.touched.repassword ? 'is-invalid' : ''}`}
                    placeholder="Enter repassword"
                    onChange={signupFrm.handleChange}

                  />
                  {signupFrm.errors.repassword && signupFrm.touched.repassword && (
                    <small className='text-danger'>{signupFrm.errors.repassword}</small>
                  )}
                </div>

                <button type="submit" className="btn btn-custom text-white btn-block rounded-5">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;
