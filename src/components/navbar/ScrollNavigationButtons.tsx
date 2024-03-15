"use client";
import { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import { FaChevronCircleDown, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const ScrollNavigationButtons = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const aboutButton = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", aboutButton);
  }, []);

  return (
    <>
      <div className={``}>
        <a
          href="tel:+1234567890"
          className={`${
            isFixed ? "fixed" : "hidden"
          } bottom-16 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg z-50 cursor-pointer hover:bg-red-700 duration-300`}
        >
          <FaPhone size={25} />
        </a>
        <a
          href="mailto:test@test.com"
          className={`${
            isFixed ? "fixed" : "hidden"
          } bottom-28 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg z-50 cursor-pointer hover:bg-red-700 duration-300`}
        >
          <IoMdMail size={25} />
        </a>
        <a
          href="#navbar"
          className={`${
            isFixed ? "fixed" : "hidden"
          } bottom-4 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg z-50 cursor-pointer hover:bg-red-700 duration-300`}
        >
          <FaAnglesUp size={25} />
        </a>
      </div>
      <a
        href="#about"
        className={`${
          isFixed ? "hidden" : "fixed"
        } bottom-5 right-32 bg-red-600/70 px-2 py-1 text-white z-[30] flex justify-center gap-2 items-center rounded-md animate-bounce`}
      >
        <FaChevronCircleDown size={25}/>
        <button className="font-bold text-lg">About Us</button>
      </a>
      
    </>
  );
};

export default ScrollNavigationButtons;
