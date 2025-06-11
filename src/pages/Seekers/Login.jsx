import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import loginSchema from '../../schema/SeekerLoginSchema';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Spinner } from "react-bootstrap";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Slider from '../../component/Slider';

const Login = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loginFrm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setLoading(true);
      axios.post(`${import.meta.env.VITE_API_URL}/seekerauth`, values)
        .then((response) => {
          if (response.data.success === true) {
            if (localStorage.getItem("owner-token")) {
              localStorage.removeItem("owner-token")
              localStorage.removeItem('owner-name')
            }
            // console.log(response.data);return
            
            localStorage.setItem("access-token", response.data.token);
            localStorage.setItem("name", response.data.name);
            localStorage.setItem("seeker_id", response.data.sid);
            navigate("/seeker/profile");
          } else {
            if (response.data.errType === 1) {
              setErrMsg("This Email Id and Password is Incorrect!");
            }
            if (response.data.errType === 2) {
              setErrMsg("This Password is Incorrect!");
            }
            if (response.data.errType === 3) {
              setErrMsg("You are Deactive now.... Please Contact our Support Team !");
            }
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log("Login Error", error);
        });
    },
  });

  return (
    <>
    <Slider data={<h1 className="text-white">Login Here</h1>} />
    <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header" style={{ backgroundColor: "#075e54" }}>
              <h3 className="text-light">Login</h3>
              <small className="text-light">
                Create new account <NavLink to="/seeker/signup">Click here</NavLink>
              </small>
            </div>
            <div className="card-body">
              <form onSubmit={loginFrm.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`form-control ${loginFrm.errors.email && loginFrm.touched.email ? 'is-invalid' : ''}`}
                    placeholder="Enter email"
                    value={loginFrm.values.email}
                    onChange={loginFrm.handleChange}
                    onBlur={loginFrm.handleBlur}
                  />
                  {loginFrm.errors.email && loginFrm.touched.email && (
                    <small className="text-danger">{loginFrm.errors.email}</small>
                  )}
                </div>

                {/* Password Field with Toggle */}
                <div className="mb-3" style={{ position: "relative" }}>
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className={`form-control ${loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : ''}`}
                    placeholder="Enter password"
                    value={loginFrm.values.password}
                    onChange={loginFrm.handleChange}
                    onBlur={loginFrm.handleBlur}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "60%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {loginFrm.errors.password && loginFrm.touched.password && (
                    <small className="text-danger">{loginFrm.errors.password}</small>
                  )}
                </div>

                <button type="submit" className="btn btn-custom text-white btn-block" disabled={loading}>
                  {loading ? <Spinner as="span" animation="border" size="sm" /> : ""} Login
                </button>

                {errMsg && <p className="text-danger mt-2">{errMsg}</p>}

                <p className="forgot-password text-right mt-2">
                  Forgot <NavLink to="/seeker/forgot-password">password?</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
