"use client";
import { useState, useEffect } from "react";
import constants from "@/utils/constans.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HeroText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const quoteButtonMB: number = 20;

  // Function to handle previous slide
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? constants.hero_messages.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next slide
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === constants.hero_messages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === constants.hero_messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-[20] h-full w-full flex flex-col justify-start items-center">
      {/* *************** Navigation Buttons *************** */}
      <button
        aria-label="Advantages Slider Previous Slide"
        title="Previous Slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ease-in-out duration-300 z-[30] hover:bg-gray-400"
        onClick={handlePrevSlide}
      >
        <FaChevronLeft />
      </button>
      <button
        aria-label="Advantages Slider Next Slide"
        title="Next Slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full ease-in-out duration-300 z-[30] hover:bg-gray-400"
        onClick={handleNextSlide}
      >
        <FaChevronRight />
      </button>
      {/**************** Navigation Dots **************/}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-[30]">
        {constants.hero_messages.map((_, index) => (
          <button
            aria-label="Advantages Slider Navigation Dot"
            title="Navigation Dot"
            key={index}
            className={`w-4 h-4 rounded-full bg-white border border-gray-300 ${
              index === currentIndex ? "bg-red-500 duration-300" : ""
            }`}
            onClick={() => {
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
      {/**************** Hero Messages ***************/}
      <div className="relative w-full h-[75%]">
        {constants.hero_messages.map((item, index) => (
          <div
            key={index}
            className={`HERO_MESSAGES_CONTAINER absolute top-0 left-0 w-full p-12 h-[100%] flex flex-col justify-center transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`transition-opacity duration-500 delay-1000 text-center mb-4 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                {item.title}
              </h1>
            </div>
            <div
              className={`transition-opacity duration-500 delay-[1500ms] text-center ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-red-300 text-xl sm:text-3xl md:text-4xl font-bold">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="raq-button z-[30] bg-red-600 px-2 py-1 rounded-md font-bold text-white text-xl hover:bg-red-700 duration-300 md:mb-20"
        aria-label={`${constants.aria_label} | Request a Quote`}
        title="Request a Quote"
      >
        Request a Quote
      </button>
    </div>
  );
};

export default HeroText;
