import React from "react";
import Slider from "../component/Slider";
import TestimonialCarousel from "../component/TestimonialCarousel";

const About = () => {
  return (
    <>
      <Slider data={<h1 className="text-white">About</h1>} />
      <div className="section">
        <div className="container">
          <div className="row text-left mb-5">
            <div className="col-12">
              <h2 className="font-weight-bold heading text-dark mb-4">
                About Us
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                enim pariatur similique debitis vel nisi qui reprehenderit
                totam? Quod maiores.
              </p>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                saepe, explicabo nihil. Est, autem error cumque ipsum
                repellendus veniam sed blanditiis unde ullam maxime veritatis
                perferendis cupiditate, at non esse!
              </p>
              <p className="text-black-50">
                Enim, nisi labore exercitationem facere cupiditate nobis quod
                autem veritatis quis minima expedita. Cumque odio illo iusto
                reiciendis, labore impedit omnis, nihil aut atque, facilis
                necessitatibus asperiores porro qui nam.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                saepe, explicabo nihil. Est, autem error cumque ipsum
                repellendus veniam sed blanditiis unde ullam maxime veritatis
                perferendis cupiditate, at non esse!
              </p>
              <p className="text-black-50">
                Enim, nisi labore exercitationem facere cupiditate nobis quod
                autem veritatis quis minima expedita. Cumque odio illo iusto
                reiciendis, labore impedit omnis, nihil aut atque, facilis
                necessitatibus asperiores porro qui nam.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section pt-0">
        <div className="container">
          <div className="row justify-content-between mb-5">
            <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
              <div className="img-about dots">
                <img
                  src="/assets/images/hero_bg_3.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-home2"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Quality properties</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-person"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Top rated agents</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-security"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Easy and safe</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section pt-0">
        <div className="container">
          <div className="row justify-content-between mb-5">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="img-about dots">
                <img
                  src="/assets/images/hero_bg_2.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-home2"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Quality properties</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-person"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Top rated agents</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>

              <div className="d-flex feature-h">
                <span className="wrap-icon me-3">
                  <span className="icon-security"></span>
                </span>
                <div className="feature-text">
                  <h3 className="heading">Easy and safe</h3>
                  <p className="text-black-50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nostrum iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="/assets/images/img_1.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4 mt-lg-5">
              <img
                src="/assets/images/img_3.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-4">
              <img
                src="/assets/images/img_2.jpg"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row section-counter mt-5">
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              // data-aos="fade-up"
              // data-aos-delay="300"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-dark">2917</span>
                </span>
                <span className="caption text-black-50">
                  # of Buy Properties
                </span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              // data-aos="fade-up"
              // data-aos-delay="400"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-dark">3918</span>
                </span>
                <span className="caption text-black-50">
                  # of Sell Properties
                </span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              // data-aos="fade-up"
              // data-aos-delay="500"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-dark">38928</span>
                </span>
                <span className="caption text-black-50">
                  # of All Properties
                </span>
              </div>
            </div>
            <div
              className="col-6 col-sm-6 col-md-6 col-lg-3"
              // data-aos="fade-up"
              // data-aos-delay="600"
            >
              <div className="counter-wrap mb-5 mb-lg-0">
                <span className="number">
                  <span className="countup text-dark">1291</span>
                </span>
                <span className="caption text-black-50"># of Agents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialCarousel />
    </>
  );
};

export default About;
