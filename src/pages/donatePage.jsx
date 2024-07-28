import React from 'react'

const donatePage = () => {
  return (
    <div className="min-h-screen bg-white pt-32">
      <header className="bg-[#BA2026] h-32 flex items-center px-4">
        <h1 className="text-white font-bold text-4xl">Donate to the Campaign</h1>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/src/assets/georgeSignImage.png')] bg-cover bg-center px-4">
        <div className="bg-opacity-0 p-8 rounded-lg w-full max-w-4xl mx-auto">
          <p className="mb-6 text-left text-black font-canarobook">
          We can't do it without your help. Help us win by making a donation today to George’s campaign. Together we will make real change.
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
            <div className="flex flex-col space-y-4">
              <div className="w-full">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="occupation">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
              <div className="w-full">
                <label className="block text-[#BA2026] font-bold mb-2" htmlFor="amount">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="bg-white border border-gray-300 rounded p-2 w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-[#009845] text-white font-canarobold rounded p-2 w-1/4">
                Donate
              </button>
            </div>
          </form>
          <p className="mb-6 text-left text-black font-canarobold">
          Contribution rules :
          </p>
          <ul className="mt-6 space-y-2 list-decimal pl-4 text-black font-canarobook">
            <li>I am at least eighteen years old.</li>
            <li>This contribution is made from my own funds, and funds are not being provided to me by another person or entity for the purpose of making this contribution.
            </li>
            <li>I am a Ghanaian citizen or lawfully admitted permanent resident (i.e., Ghana card holder).</li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default donatePage
