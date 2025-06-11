import Slider from "../components/Slider";
import React from "react";
import SliderReact from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Services = () => {
  return (
    <>
      <Slider data={<h1 className="text-white">Services</h1>} />
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="box-feature mb-4">
              <span className="flaticon-house mb-4 d-block"></span>
              <h3 className="text-black mb-3 font-weight-bold">
                Quality Properties
              </h3>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className="learn-more">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="box-feature mb-4">
              <span className="flaticon-house-2 mb-4 d-block-3"></span>
              <h3 className="text-black mb-3 font-weight-bold">
                Top Rated Agent
              </h3>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className="learn-more">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="box-feature mb-4">
              <span className="flaticon-building mb-4 d-block"></span>
              <h3 className="text-black mb-3 font-weight-bold">
                Property for Sale
              </h3>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className="learn-more">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="box-feature mb-4">
              <span className="flaticon-house-3 mb-4 d-block-1"></span>
              <h3 className="text-black mb-3 font-weight-bold">
                House for Sale
              </h3>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className="learn-more">
                  Read more
                </a>
              </p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="box-feature mb-4">
              <span className="flaticon-house-4 mb-4 d-block"></span>
              <h3 className="text-black mb-3 font-weight-bold">
                Quality Properties
              </h3>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className="learn-more">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="box-feature mb-4">
              <span className="flaticon-building mb-4 d-block-3"></span>
              <h3 className="text-black mb-3 font-weight-bold">
                Top Rated Agent
              </h3>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className="learn-more">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="box-feature mb-4">
              <span className="flaticon-house mb-4 d-block"></span>
              <h3 className="text-black mb-3 font-weight-bold">
                Property for Sale
              </h3>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className="learn-more">
                  Read more
                </a>
              </p>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="box-feature mb-4">
              <span className="flaticon-house-1 mb-4 d-block-1"></span>
              <h3 className="text-black mb-3 font-weight-bold">
                House for Sale
              </h3>
              <p className="text-black-50">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <a href="#" className="learn-more">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
              Customer Says
            </h2>
          </div>
          <div className="col-md-6 text-md-end">
            <div id="testimonial-nav">
              {/* Custom arrows handled by react-slick settings */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
