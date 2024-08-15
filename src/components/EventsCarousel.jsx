import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image Imports for Carousel
import asset1 from "../assets/G2.png";
import asset2 from "../assets/G3.png";

const EventsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
  };

  const slides = [
    {
      id: 1,
      image: asset1,
      showButton: false,
    },
    {
      id: 2,
      image: asset2,
      showButton: true,
    },
    {
      id: 3,
      image: asset1,
      showButton: true,
    },
  ];

  return (
    <div className="relative left-36 md:left-0 w-1/2 md:w-full mt-28   rounded-lg ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full flex items-center justify-center"
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full  object-contain h-80  rounded-lg px-2 "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventsCarousel;
