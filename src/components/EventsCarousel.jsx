import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const  EventsCarousel = ({slides}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
  };


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
