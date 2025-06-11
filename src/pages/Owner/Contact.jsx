import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import ContactSchema from "../../schema/ContactSchema";
import axios from "axios";
import { API_URL } from "../../constant/API_URL";
import Slider from "../../components/Slider";
import { useParams } from "react-router-dom";

const Contact = () => {
  let [allCon , setAllCon] = useState([]);
  let { pid, oid } = useParams();
  console.log("pid: "+pid+"\n"+"oid: "+oid);
  // useEffect(()=>{
  //   axios.get(`${import.meta.env.VITE_API_URL}/contact/${oid}`)
  //     .then(response => {
  //       setAllCon(response.data);
  //       console.log(response.data);
  //     })
  // }, [])
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: (values, { resetForm }) => {
      values.pid = pid;
      values.oid = oid;
      axios
        .post(`${API_URL}/contact`, values, {
          headers: {
            Authorization: localStorage.getItem("owner-token"),
          },
        })

        .then((res) => {
          console.log(res.data);

          alert("Message sent!");
          resetForm();
        })
        .catch((err) => {
          alert("Failed to send message.");
          console.error(err);
        });
    },
  });

  return (
    <>
      <Slider data={<h1 className="text-white">Contact us</h1>} />
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-lg-4 mb-5 mb-lg-0 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="contact-info">
              <div className="address mt-2">
                <i className="icon-room"></i>
                <h4 className="mb-2">Location:</h4>
                <p>
                  43 Raymouth Rd. Baltemoer,
                  <br />
                  London 3910
                </p>
              </div>

              <div className="open-hours mt-4">
                <i className="icon-clock-o"></i>
                <h4 className="mb-2">Open Hours:</h4>
                <p>
                  Sunday-Friday:
                  <br />
                  11:00 AM - 2300 PM
                </p>
              </div>

              <div className="email mt-4">
                <i className="icon-envelope"></i>
                <h4 className="mb-2">Email:</h4>
                <p>info@Untree.co</p>
              </div>

              <div className="phone mt-4">
                <i className="icon-phone"></i>
                <h4 className="mb-2">Call:</h4>
                <p>+1 1234 55488 55</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="container col-lg-8 aos-init aos-animate ">
            <div className="row">
              <h2>Contact Us</h2>
              <form onSubmit={formik.handleSubmit} noValidate>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="username"
                    className={`form-control ${
                      formik.touched.username && formik.errors.username
                        ? "is-invalid"
                        : ""
                    }`}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.username && formik.errors.username && (
                    <div className="invalid-feedback">
                      {formik.errors.username}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className={`form-control ${
                      formik.touched.message && formik.errors.message
                        ? "is-invalid"
                        : ""
                    }`}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="invalid-feedback">
                      {formik.errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-custom text-light rounded-5 py-3 px-4 mt-3 mb-3 btn-hover "
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
