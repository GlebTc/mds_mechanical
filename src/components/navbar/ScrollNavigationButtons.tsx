"use client";
import { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollNavigationButtons = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to the top
  };
  return (
    <a
      onClick={scrollToTop}
      className={`${
        isFixed ? "fixed" : "hidden"
      } bottom-5 right-5 bg-red-600/60 text-white p-2 rounded-lg shadow-lg z-50 cursor-pointer hover:bg-red-700 duration-300`}
    >
      <FaAnglesUp size={25} />
    </a>
  );
};

export default ScrollNavigationButtons;
