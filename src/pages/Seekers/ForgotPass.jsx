import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as YUP from "yup";
import Slider from "../../component/Slider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ForgotPass = () => {
  const navigate = useNavigate();

  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState(""); // <-- Store email here

  // Schema for requesting OTP (only email)
  const otpRequestSchema = YUP.object({
    email: YUP.string()
      .email("Invalid email format")
      .required("Email is required to send OTP"),
  });

  // Schema for verifying OTP and changing password
  const resetPasswordSchema = YUP.object({
    otp: YUP.string()
      .required("OTP is required")
      .length(4, "OTP must be 4 digits"),
    newpassword: YUP.string().required("New password is required"),
    confnewpassword: YUP.string()
      .required("Confirm password is required")
      .oneOf([YUP.ref("newpassword"), null], "Passwords must match"),
  });

  // Formik for OTP request form
  const otpFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: otpRequestSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setErrMsg("");
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/seekerprofile/getotp`,
          values
        );
        if (res.data.success) {
          toast.success("OTP sent to your email");
          setOtpSent(true);
          setEmail(values.email); // Save email for next step
        } else {
          setErrMsg(res.data.message || "Failed to send OTP");
        }
      } catch (error) {
        setErrMsg(error.response?.data?.message || "Server error");
      }
      setLoading(false);
    },
  });

  // Formik for OTP verification + reset password
  const verifyFrm = useFormik({
    initialValues: {
      otp: "",
      newpassword: "",
      confnewpassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (formData) => {
      setLoading(true);
      setErrMsg("");
      try {
        const response = await axios.put(
          `${import.meta.env.VITE_API_URL}/seekerprofile/verifyotp`,
          {
            email, // Use the email from state
            otp: formData.otp,
            newpassword: formData.newpassword,
            confnewpassword: formData.confnewpassword,
          }
        );
        if (response.data.success === true) {
          toast.success("Password changed successfully, please login");
          setOtpSent(false);
          navigate("/seeker/login");
        } else {
          setErrMsg(
            response.data.message || "Invalid OTP or email, please try again"
          );
        }
      } catch (error) {
        setErrMsg("Server error during OTP verification");
      }
      setLoading(false);
    },
  });

  return (
    <>
      <Slider data={<h1 className="text-white">Forgot Password</h1>} />
      <ToastContainer />
      <div
        className="container"
        style={{ marginBottom: "100px", marginTop: "100px" }}
      >
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#075e54" }}
              >
                <h3 className="text-light">Forgot Password</h3>
                <small className="text-light">
                  Create new account{" "}
                  <NavLink to="/seeker/signup">Click here</NavLink>
                </small>
              </div>
              <div className="card-body">
                {!otpSent ? (
                  // Step 1: Request OTP form
                  <form onSubmit={otpFormik.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email">Email Id &emsp;</label>
                      {otpFormik.touched.email && otpFormik.errors.email && (
                        <small className="text-danger">
                          {otpFormik.errors.email}
                        </small>
                      )}
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={otpFormik.handleChange}
                        onBlur={otpFormik.handleBlur}
                        value={otpFormik.values.email}
                        className={
                          "form-control" +
                          (otpFormik.touched.email && otpFormik.errors.email
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Enter your email"
                      />
                      {errMsg && (
                        <small className="text-danger">{errMsg}</small>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? "Sending OTP..." : "Get OTP"}
                    </button>
                    <p className="text-center mt-2">
                      <NavLink to="/seeker/login">Back to Login</NavLink>
                    </p>
                  </form>
                ) : (
                  // Step 2: Verify OTP & Change password form
                  <form onSubmit={verifyFrm.handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="email">Email Id &emsp;</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        readOnly
                        className="form-control-plaintext"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="otp">Enter OTP &emsp;</label>
                      {verifyFrm.touched.otp && verifyFrm.errors.otp && (
                        <small className="text-danger">
                          {verifyFrm.errors.otp}
                        </small>
                      )}
                      <input
                        type="text"
                        id="otp"
                        name="otp"
                        onChange={verifyFrm.handleChange}
                        onBlur={verifyFrm.handleBlur}
                        value={verifyFrm.values.otp}
                        className={
                          "form-control" +
                          (verifyFrm.touched.otp && verifyFrm.errors.otp
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Enter the OTP"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="newpassword">New Password &emsp;</label>
                      {verifyFrm.touched.newpassword &&
                        verifyFrm.errors.newpassword && (
                          <small className="text-danger">
                            {verifyFrm.errors.newpassword}
                          </small>
                        )}
                      <input
                        type="password"
                        id="newpassword"
                        name="newpassword"
                        onChange={verifyFrm.handleChange}
                        onBlur={verifyFrm.handleBlur}
                        value={verifyFrm.values.newpassword}
                        className={
                          "form-control" +
                          (verifyFrm.touched.newpassword &&
                          verifyFrm.errors.newpassword
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Enter new password"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confnewpassword">
                        Confirm Password &emsp;
                      </label>
                      {verifyFrm.touched.confnewpassword &&
                        verifyFrm.errors.confnewpassword && (
                          <small className="text-danger">
                            {verifyFrm.errors.confnewpassword}
                          </small>
                        )}
                      <input
                        type="password"
                        id="confnewpassword"
                        name="confnewpassword"
                        onChange={verifyFrm.handleChange}
                        onBlur={verifyFrm.handleBlur}
                        value={verifyFrm.values.confnewpassword}
                        className={
                          "form-control" +
                          (verifyFrm.touched.confnewpassword &&
                          verifyFrm.errors.confnewpassword
                            ? " is-invalid"
                            : "")
                        }
                        placeholder="Confirm new password"
                      />
                    </div>
                    {errMsg && <small className="text-danger">{errMsg}</small>}
                    <button
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loading}
                    >
                      {loading ? "Changing Password..." : "Change Password"}
                    </button>
                    <p className="text-center mt-2">
                      <NavLink to="/seeker/login">Back to Login</NavLink>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
