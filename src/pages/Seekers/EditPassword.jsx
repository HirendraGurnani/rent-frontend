import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SeekerSideBar from "../../components/SeekerSidebar";
import Slider from "../../components/Slider";
import EditPasswordSchema from "../../schema/EditPasswordSchema";

const EditPassword = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const UpdateFrm = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: EditPasswordSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/seekerprofile/editpassword`,
          values,
          {
            headers: {
              Authorization: localStorage.getItem("access-token"),
            },
          }
        )
        .then((res) => {
          if (res.data.success === true) {
            toast.success("Password updated successfully!");
            resetForm();
            setErrMsg("");
            navigate("/seeker/profile");
          } else if (res.data.errType === 1) {
            setErrMsg("Your old password is incorrect.");
          } else {
            setErrMsg("Something went wrong. Please try again.");
          }
        })
        .catch((err) => {
          console.error("Password update failed", err);
          toast.error("Failed to update password.");
        });
    },
  });

  return (
    <>
      <Slider data={<h1 className="text-white">Profile</h1>} />
      <ToastContainer />
      <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
        <div className="row">
          <SeekerSideBar />
          <div className="col-md-6">
            <h4>Edit Password</h4>

            {errMsg && (
              <div className="alert alert-danger col-md-8 offset-md-3">{errMsg}</div>
            )}

            <form onSubmit={UpdateFrm.handleSubmit}>
              <div className="row">
                <div className="mb-3 col-md-8 offset-md-3">
                  <label htmlFor="oldPassword" className="form-label">
                    Old Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="oldPassword"
                    name="oldPassword"
                    onChange={UpdateFrm.handleChange}
                    onBlur={UpdateFrm.handleBlur}
                    value={UpdateFrm.values.oldPassword}
                    placeholder="Enter your old password"
                  />
                  {UpdateFrm.touched.oldPassword && UpdateFrm.errors.oldPassword && (
                    <small className="text-danger">{UpdateFrm.errors.oldPassword}</small>
                  )}
                </div>

                <div className="mb-3 col-md-8 offset-md-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                    onChange={UpdateFrm.handleChange}
                    onBlur={UpdateFrm.handleBlur}
                    value={UpdateFrm.values.newPassword}
                    placeholder="Enter your new password"
                  />
                  {UpdateFrm.touched.newPassword && UpdateFrm.errors.newPassword && (
                    <div className="text-danger">{UpdateFrm.errors.newPassword}</div>
                  )}
                </div>

                <div className="mb-3 col-md-8 offset-md-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={UpdateFrm.handleChange}
                    onBlur={UpdateFrm.handleBlur}
                    value={UpdateFrm.values.confirmPassword}
                    placeholder="Confirm your new password"
                  />
                  {UpdateFrm.touched.confirmPassword && UpdateFrm.errors.confirmPassword && (
                    <div className="text-danger">{UpdateFrm.errors.confirmPassword}</div>
                  )}
                </div>
              </div>

              <div className="mb-3 col-md-8 offset-md-3">
                <button type="submit" className="btn btn-primary">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPassword;
