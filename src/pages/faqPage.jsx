import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useLocation } from "react-router-dom";
import QuoteComponent from "../components/QuoteComponent";
import { faqData } from "../faqdata";


const FAQ = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const faqIndex = searchParams.get("faq");
    if (faqIndex !== null && faqIndex < faqData.length) {
      openModal(faqData[faqIndex]);
    }
  }, [location]);

  const openModal = (faq) => {
    setSelectedFaq(faq);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedFaq(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      <header className="bg-[#BA2026] h-32 flex items-center px-4">
        <h1 className="text-white font-bold text-4xl">
          Frequently Asked Questions (FAQ)
        </h1>
      </header>
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md cursor-pointer ${faq.backgroundColor} flex items-center justify-center`}
            onClick={() => openModal(faq)}
            style={{ height: "200px" }} // Ensures all cards are the same height
          >
            <h2
              className={`text-xl font-canarobold uppercase text-center ${faq.textColor}`}
            >
              {faq.question}
            </h2>
          </div>
        ))}
      </div>

      {selectedFaq && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="FAQ Modal"
          className="flex items-center justify-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="bg-white z-50 rounded-lg p-6 w-11/12 max-w-2xl relative">
            <h2 className="text-2xl font-canarobold mb-4">
              {selectedFaq.question}
            </h2>
            <div className="h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-red-500">
              <div
                className="text-gray-600 font-canarobook"
                dangerouslySetInnerHTML={{ __html: selectedFaq.answer }}
              />
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-600 text-white font-canarobold rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
      <QuoteComponent
        backgroundColor={"#000"}
        quoteText="Dear friends, it is time for you and me to make true the statement by our first President, Osagyefo Dr. Kwame Nkrumah that “The Black Man Is Capable Of Managing His Own Affairs.”"
        textColor={"#fff"}
        quoteColor={"#fff"}
        authorText="- George Twum-Barimah-Adu"
      />
    </div>
  );
};

export default FAQ;
