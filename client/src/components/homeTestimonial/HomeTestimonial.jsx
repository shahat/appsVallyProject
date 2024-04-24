import React from "react";
import SectionHeading from "../reuseable/sectionHeading/SectionHeading";
import Slider from "react-slick";
import "./homeTestimonial.scss";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
// Arrow components
function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div className=" order-3 d-block w-50  p-3" style={style}>
      <div className="paginate paginatePrev" onClick={onClick}>
        <span className="paginateIcon">
          <FaAngleRight />
        </span>
      </div>{" "}
    </div>
  );
}
function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="testimonial-prev order-2 d-block w-50 d-flex justify-content-end p-3"
      style={style}
    >
      <div className="paginate paginateNext  " onClick={onClick}>
        <span className="paginateIcon">
          <FaAngleLeft />
        </span>
      </div>
    </div>
  );
}
export default function HomeTestimonial() {
  // Slider settings
  var settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container py-5 px-lg-5">
      <p className="section-title text-secondary justify-content-center">
        <span data-aos="fade-up" />
        Testimonial
        <span />
      </p>
      <SectionHeading content="What Say Our Clients!" />
      <Slider
        {...settings}
        className="testimonial-slider d-flex  flex-wrap "
        data-aos="fade-up"
      >
        {[1, 2, 3, 4].map((item, index) => (
          <div
            key={index}
            className="testimonial-item bg-light rounded my-4 mx-2 slider-item"
          >
            <p className="fs-5">
              <i className="fa fa-quote-left fa-4x  mt-n4 me-3" />
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit sed stet lorem sit clita duo justo.
            </p>
            <div className="d-flex align-items-center">
              <img
                className="img-fluid flex-shrink-0 rounded-circle"
                src={`../../../public/img/testimonial/testimonial-${item}.jpg`}
                style={{ width: 65, height: 65 }}
                alt={`testimonial-${item}`}
              />
              <div className="ps-4">
                <h5 className="mb-1">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
