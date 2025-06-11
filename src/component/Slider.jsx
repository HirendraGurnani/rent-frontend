import React from 'react';


const Slider = (props) => {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade position-relative"
      data-bs-ride="carousel"
      data-bs-interval="2000"
    >
      {/* Carousel Inner */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div
            className="img overlay d-block w-100"
            style={{
              backgroundImage: "url('/assets/images/hero_bg_3.jpg')",
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <div
            className="img overlay d-block w-100"
            style={{
              backgroundImage: "url('/assets/images/hero_bg_2.jpg')",
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {/* Slide 3 */}
        <div className="carousel-item">
          <div
            className="img overlay d-block w-100"
            style={{
              backgroundImage: "url('/assets/images/hero_bg_1.jpg')",
              height: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>


      {/* Search Section */}
      <div className="container">
      <div className="container position-absolute top-50 start-50 translate-middle text-white text-center z-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9 col-md-10 col-sm-12">
            <h1 className="display-4 mb-4">
              {props.data}
            </h1>
            <div className="d-flex justify-content-center align-items-center col-md-8 offset-md-2 mb-3">
              <input
                type="text"
                className="form-control rounded-5 px-4"
                placeholder="Your ZIP code or City. e.g. New York"
              />
              <button type="submit" className="btn btn-custom text-light rounded-5 py-3 px-4 ms-2 btn-hover">
                Search
              </button>
         </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;