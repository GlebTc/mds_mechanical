"use client";
import { useState, useEffect } from "react";
import heroMessages from "@/utils/constans.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HeroText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle previous slide
  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroMessages.hero_messages.length - 1 : prevIndex - 1
    );
  };

  // Function to handle next slide
  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroMessages.hero_messages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroMessages.hero_messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-0 top-0 z-[20] h-full w-[100vw] flex items-end justify-center">
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
        {heroMessages.hero_messages.map((_, index) => (
          <button
            aria-label="Advantages Slider Navigation Dot"
            title="Navigation Dot"
            key={index}
            className={`w-4 h-4 rounded-full bg-white border border-gray-300 ${
              index === currentIndex ? "bg-red-500" : ""
            }`}
            onClick={() => {
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
      {heroMessages.hero_messages.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col justify-start items-center h-full px-10 pt-40 md:justify-center md:pt-0">
            <div
              className={`transition-opacity duration-500 delay-1000 text-center mb-8 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                {item.title}
              </h2>
            </div>
            <div
              className={`transition-opacity duration-500 delay-[1500ms] text-center ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-red-300 text-lg sm:text-2xl md:text-3xl font-bold">
                {item.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
      <button className="z-[30] bg-red-600 mb-60 md:mb-52 px-2 py-1 rounded-md font-bold text-white text-xl">Request a Quote</button>
    </div>
  );
};

export default HeroText;
