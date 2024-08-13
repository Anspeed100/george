import React from 'react';
import GeorgePointingImageCut from '../assets/GeorgePointingCut.png';

const TakeActionRegisterForm = () => {
  return (
    <div className="min-h-screen bg-white pt-32 relative">
      <header className="bg-[#BA2026] h-32 flex items-center px-4">
        <h1 className="text-white font-bold text-4xl">Take Action!! </h1>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen bg-[#000] bg-cover bg-center px-4">
        <div className="p-8 rounded-lg w-full max-w-4xl mx-auto relative z-10">
          <p className="mb-6 text-left text-white font-canarobook">
            Be a part of the Team George Volunteers who believe in #Breakingthe2 to create Common Prosperity for all and make Ghana Great.
          </p>
          <form className="space-y-4 w-full pb-12">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full mb-4 md:mb-0">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full mb-4 md:mb-0">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="ghanaCard">
                  Ghana Card Number
                </label>
                <input
                  type="text"
                  name="ghanaCard"
                  id="ghanaCard"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full mb-4 md:mb-0">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="contactNumber">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="address">
                  Residential Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full mb-4 md:mb-0">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="region">
                  Region
                </label>
                <input
                  type="text"
                  name="region"
                  id="region"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="constituency">
                  Constituency
                </label>
                <input
                  type="text"
                  name="constituency"
                  id="constituency"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="district">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  id="district"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
            </div>
            <div className="w-full mb-6 text-center">
                <p className="text-white font-canarobook">
                  Be a part of the Team George Volunteers who believe in #Breakingthe2 to create Common Prosperity for all and make Ghana Great.
                </p>
              </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-[#009845] text-white font-canarobold rounded p-2 w-1/4">
                JOIN
              </button>
            </div>
          </form>

        </div>
        <img
          src={GeorgePointingImageCut}
          alt=""
          className="absolute bottom-0 left-0 object-contain w-full max-w-lg md:max-w-xl lg:max-w-xl"
        />
      </div>
    </div>
  );
};

export default TakeActionRegisterForm;