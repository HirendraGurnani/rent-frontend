import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Home.css";
import PropertyProp from "../component/PropertyProp";
import Slider from "../component/Slider";
import TestimonialCarousel from "../component/TestimonialCarousel";
import RealEstateAgent from "../component/RealEstateAgent";
import Agent from "../component/Agent";

const Home = () => {
  const [allProperty, setAllProperty] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/property`)
      .then((result) => {
        setAllProperty(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Slider data={<h1 className="text-white">Home</h1>} />

      <div className="section py-5">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="fw-bold main-color">Popular Properties</h2>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <NavLink
                to="#"
                className="btn btn-custom text-light rounded-5 py-3 px-4 ms-2 btn-hover"
              >
                View all properties
              </NavLink>
            </div>
          </div>

          <div className="row">
            {console.log(allProperty)}
            {allProperty.map((item, index) => (
              <PropertyProp item={item} index={index} key={item._id || index} />
            ))}
          </div>
        </div>
      </div>
      <section className="features-1">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="box-feature">
                <span className="flaticon-house"></span>
                <h3 className="mb-3">Our Properties</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, accusamus.
                </p>
                <p>
                  <a href="#" className="learn-more">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="box-feature">
                <span className="flaticon-building"></span>
                <h3 className="mb-3">Property for Sale</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, accusamus.
                </p>
                <p>
                  <a href="#" className="learn-more">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="box-feature">
                <span className="flaticon-house-3"></span>
                <h3 className="mb-3">Real Estate Agent</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, accusamus.
                </p>
                <p>
                  <a href="#" className="learn-more">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="box-feature">
                <span className="flaticon-house-1"></span>
                <h3 className="mb-3">House for Sale</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, accusamus.
                </p>
                <p>
                  <a href="#" className="learn-more">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialCarousel />
      <RealEstateAgent />
      <Agent />
    </>
  );
};

export default Home;
