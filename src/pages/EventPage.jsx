import { React } from "react";
import { motion } from "framer-motion";

export default function EventsPage() {
  const roadmapData = [
    {
      title: "Q1 2024",
      description: "Initial project setup and requirement gathering.",
      imgSrc: "https://via.placeholder.com/150",
      backgroundColor: "bg-red-100",
    },
    {
      title: "Q2 2024",
      description: "Design and development of core features.",
      imgSrc: "https://via.placeholder.com/150",
      backgroundColor: "bg-green-100",
    },
    {
      title: "Q3 2024",
      description: "Testing and bug fixing.",
      imgSrc: "https://via.placeholder.com/150",
      backgroundColor: "bg-blue-100",
    },
    {
      title: "Q4 2024",
      description: "Deployment and monitoring.",
      imgSrc: "https://via.placeholder.com/150",
      backgroundColor: "bg-yellow-100",
    },
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
              {/* Red line and node */}
              <div className="relative flex flex-col items-center">
                {/* <div className="h-32 w-1 bg-red-500"></div> */}
                <div
                  className={`absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 ${item.backgroundColor} rounded-full`}
                ></div>
              </div>
              {/* Connector Line */}
              <div className={`w-8 h-1 ${item.backgroundColor}`}></div>
              {/* Card */}
              <div
                className={`flex flex-col md:flex-row items-center shadow-md rounded-lg p-6 w-full ${item.backgroundColor}`}
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-md"
                />
                <div className="flex flex-col items-center text-center md:text-left flex-grow">
                  <h2 className="text-2xl sm:text-xl font-canarobold">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 font-canarobook">
                    {item.description}
                  </p>
                  <button className="mt-4 bg-[#009845] text-white font-canarobold py-2 px-4 rounded hover:bg-green-600">
                    View Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
