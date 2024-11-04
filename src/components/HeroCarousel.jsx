import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image Imports for Carousel
//import SlideImage_1 from "../assets/LandingPageCarouselImage_1.png";
import SlideImage_2 from "../assets/LandingPageCarouselImage_2.png";
import donateImage from "../assets/donateSliderImage.png";
//import sliderImage_4 from "../assets/mt2 copy.png";
import sliderImage_5 from "../assets/pair final.png";





const HeroCarousel = () => {

  var isDonateSlide = false;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: isDonateSlide ? 8000 :5000,
    arrows: false,
    adaptiveHeight: true,
  };

  

  const slides = [
    // {
    //   id: 1,
    //   image: SlideImage_1,
    //   showButton: false,
    //   buttonText: "Learn More",
    //   buttonLink: "/learn-more",
    // },
    {
      id: 2,
      image: SlideImage_2,
      showButton: false,
      buttonText: "Read More",
      buttonLink: "/learn-more",
    },
    {
      id: 3,
      image: donateImage,
      showButton: true,
      buttonText: "Donate",
      buttonLink: "https://donate4twum.vercel.app/",
    },
    // {
    //   id: 3,
    //   image: sliderImage_4,
    //   showButton: false,
    //   buttonText: "",
    //   buttonLink: "",
    // },
    {
      id: 3,
      image: sliderImage_5,
      showButton: false,
      buttonText: "",
      buttonLink: "",
    },

    
  ];

  return (
    <div className="relative w-full bg-[#b92026] mt-28">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full flex items-center justify-center"
          >
          {isDonateSlide = slide.id === 3}
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-auto object-contain"
            />
            {slide.showButton && (
              <div className="absolute bottom-0 w-full flex justify-center mb-4">
                <div className="p-2 sm:p-3 rounded-md text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                  <a
                    href={slide.buttonLink}
                    className="inline-block px-4 py-2 text-5xl sm:px-6 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-3xl lg:px-10 lg:py-5 lg:text-lg bg-green-500 text-white font-canarobold rounded-md hover:bg-green-700 transition"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
