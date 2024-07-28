import React from 'react'

const takeActionRegisterForm = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <header className="bg-[#BA2026] h-32 flex items-center px-4">
        <h1 className="text-white font-bold text-4xl">Take Action!! </h1>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/src/assets/georgeSignImage.png')] bg-cover bg-center px-4">
        <div className="bg-opacity-0 p-8 rounded-lg w-full max-w-4xl mx-auto">
          <p className="mb-6 text-left text-black font-canarobook">
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
            <div className="flex justify-center">
              <button type="submit" className="bg-[#009845] text-white font-canarobold rounded p-2 w-1/4">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default takeActionRegisterForm;
