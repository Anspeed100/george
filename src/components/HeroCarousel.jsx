import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image Imports for Carousel
import SlideImage_1 from '../assets/LandingPageCarouselImage_1.png';
import SlideImage_2 from '../assets/LandingPageCarouselImage_2.png';

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
      image: SlideImage_1,
      showButton: true,
      buttonText: 'Learn More',
      buttonLink: '/learn-more',
    },
    {
      id: 2,
      image: SlideImage_2,
      showButton: false,
      buttonText: 'Learn More',
      buttonLink: '/learn-more',
    },
  ];

  return (
    <div className="relative w-full mt-24">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full flex items-center justify-center">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-auto object-contain"
            />
            {slide.showButton && (
              <div className="absolute bottom-0 mb-10 bg-black bg-opacity-50 p-5 rounded-md text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <a
                  href={slide.buttonLink}
                  className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition"
                >
                  {slide.buttonText}
                </a>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
