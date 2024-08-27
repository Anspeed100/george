import { React, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";


const launchImages = require.context('../assets/LaunchImages', true);
const launchImageList = launchImages.keys().map(image => launchImages(image));

const amShowImages = require.context('../assets/AMShowImages',true);
const amShowImagesList = amShowImages.keys().map(image => amShowImages(image))

const tucImages = require.context('../assets/TUCImages',true);
const tucImagesList = tucImages.keys().map(image => tucImages(image))

export default function EventsPage() {

  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (imageSlides) => {
    setSelectedImages(imageSlides);
    setCurrentIndex(0);
    setIsModalOpen(true);
  };
  const modalRef = useRef(null);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const roadmapData = [
    {
      id: 1,
      title: "THE REVEAL",
      description: "On January 29th, 2024, I stepped forward and made the momentous announcement of my candidacy for the office of President. The overwhelming turnout of young people at that event filled me with hope and conviction. It demonstrated that despite the challenges we face, the spirit of Ghana is still vibrant and unbroken. The future of our nation extends far beyond the confines of partisan politics; it lies in the hands of the youth, who are eager to shape a new, united path for Ghana.",
      imgSrc: "https://via.placeholder.com/150",
      backgroundColor: "bg-[#BA2026]",
      gallery: true,
      imageSlideFolders: launchImageList
    },
    {
      id: 2,
      title: "AM Exclusive Show with Benjamin Akakpo",
      description: "On Thursday, February 15th, 2024, at 8:45 AM, I appeared on the AM Show on @JoyNewsOnTV to introduce myself and share my vision for Ghana. Together, let's unite and break the cycle of the two-party system.",
      imgSrc: "https://via.placeholder.com/150",
      backgroundColor: "bg-[#009845]",
      gallery: true,
      imageSlideFolders: amShowImagesList
    },
    {
      id: 3,
      title: "TUC Event",
      description: "On Wednesday, March 27th, I met with Dr. Anthony Yaw Baah, Secretary-General of the Trades Union Congress of Ghana, to discuss the policies I plan to implement when elected President. I emphasized the importance of creating a supportive environment for local businesses to thrive. Our conversation was constructive, and I look forward to continued discussions to build a robust framework for business growth in our country.",
      imgSrc: "../assets/TUCImages/IMG_1956.webp",
      backgroundColor: "bg-[#B8AE59]",
      gallery: true,
      imageSlideFolders: tucImagesList
    },
    // {
    //   id: 4,
    //   title: "Q4 2024",
    //   description: "Deployment and monitoring.",
    //   imgSrc: "https://via.placeholder.com/150",
    //   backgroundColor: "bg-yellow-100",
    //   gallery: true,
    //   imageSlides: ""
    // },
    // {
    //   id: 5,
    //   title: "Q4 2024",
    //   description: "Deployment and monitoring.",
    //   imgSrc: "https://via.placeholder.com/150",
    //   backgroundColor: "bg-purple-100",
    //   gallery: true,
    //   imageSlides: ""
    // },
  ];


  return (
    <div className="min-h-screen bg-white pt-32">
      <header className="bg-[#BA2026] h-24 sm:h-32 flex items-center px-4 sm:px-8">
        <h1 className="text-white font-bold text-4xl">Roadmap</h1>
      </header>
      <div className="relative mt-8 sm:mt-16">
        <div className="flex flex-col items-center mb-5">
          {roadmapData.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center w-11/12 md:w-3/4 lg:w-1/2 pb-8  border-l-[4px] border-[#BA2026]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative flex flex-col items-center">
                <div
                  className={`absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 ${item.backgroundColor} rounded-full`}
                ></div>
              </div>
              <div className={`w-8 h-1 ${item.backgroundColor}`}></div>
              <div
                className={`flex flex-col md:flex-row items-center shadow-md rounded-lg p-6 w-full ${item.backgroundColor}`}
              >
                {/* <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-md"
                />  */}
                <div className="flex flex-col items-center pl-5 text-center md:text-left flex-grow">
                  <h2 className="text-4xl sm:text-3xl text-center font-canarobold text-white">
                    {item.title}
                  </h2>
                  <p className="text-white font-canarobook">
                    {item.description}
                  </p>
                  <button
                    className="mt-4 bg-[#009845] text-white font-canarobold py-2 px-4 rounded hover:bg-green-600"
                    onClick={() => openGallery(item.imageSlideFolders)}
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClickOutside}
        >
<div className="bg-none p-6 rounded-lg shadow-lg relative w-full max-w-4xl flex flex-col items-center">
  <button
    className="absolute top-2 right-2 font-bold text-4xl text-white"
    onClick={closeModal}
  >
    &times;
  </button>
  <div className="flex justify-center items-center" {...swipeHandlers}>
    <button
      className="absolute left-0 text-white font-bold text-4xl p-2 bg-[#BA2026] rounded-full"
      onClick={prevSlide}
    >
      &#10094;
    </button>
    <AnimatePresence wait>
      <motion.img
        key={selectedImages[currentIndex]}
        src={selectedImages[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-120 h-120 object-contain m-2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
    <button
      className="absolute right-0 text-white font-bold text-4xl p-2 bg-[#BA2026] rounded-full"
      onClick={nextSlide}
    >
      &#10095;
    </button>
  </div>
  {/* Carousel Dots */}
  <div className="flex justify-center mt-4">
    {selectedImages.map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 mx-1 rounded-full ${
          currentIndex === index ? "bg-[#BA2026]" : "bg-gray-400"
        }`}
        onClick={() => goToSlide(index)}
      ></div>
    ))}
  </div>
</div>

        </motion.div>
      )}
    </div>
  );
}
