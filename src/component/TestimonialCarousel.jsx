import SliderReact from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "James Smith",
      image: "/assets/images/person_1-min.jpg",
      text: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...`,
      position: "Designer, Co-founder",
    },
    {
      name: "Mike Houston",
      image: "/assets/images/person_2-min.jpg",
      text: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...`,
      position: "Designer, Co-founder",
    },
    {
      name: "Cameron Webster",
      image: "/assets/images/person_3-min.jpg",
      text: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...`,
      position: "Designer, Co-founder",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };

  return (
    <div className="container mt-3">
      <SliderReact {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="item" key={index}>
            <div className="testimonial">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{ width: "100px" }}
                className="img-fluid rounded-circle mb-4"
              />
              <div className="rate mb-2">
                {[...Array(5)].map((t, i) => (
                  <span key={i} className="icon-star me-1 text-warning"></span>
                ))}
              </div>
              <h3 className="h5 text-primary mb-4">{testimonial.name}</h3>
              <blockquote>
                <p className="w-100">&ldquo;{testimonial.text}&rdquo;</p>
              </blockquote>
              <p className="text-black-50">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </SliderReact>
    </div>
  );
};

export default TestimonialCarousel;
