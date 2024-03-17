"use client";
import { useState, useEffect } from "react";
import { FaAnglesUp, FaAngleDown } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import menuItems from "@/utils/constants/menuItems.json";
import constants from "@/utils/constants/constans.json";

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
    <div>
      <a
        href={`tel:${constants.phone}`}
        title={`Phone Contact | ${constants.phone} | ${constants.aria_label}`}
        aria-label={`Phone Contact | ${constants.phone} | ${constants.aria_label}`}
        className={`${
          isFixed ? "fixed" : "hidden"
        } bottom-16 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg cursor-pointer hover:bg-red-700 duration-300 z-[40]`}
      >
        <FaPhone size={25} />
      </a>
      <a
        href={`mailto:${constants.email}`}
        title={`Email Contact | ${constants.email} | ${constants.aria_label}`}
        aria-label={`Email Contact | ${constants.email} | ${constants.aria_label}`}
        className={`${
          isFixed ? "fixed" : "hidden"
        } bottom-28 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg cursor-pointer hover:bg-red-700 duration-300 z-[40]`}
      >
        <IoMdMail size={25} />
      </a>
      <a
        href="#"
        title={`Navigate back to Home Page | ${constants.aria_label}`}
        aria-label={`Navigate back to Home Page | ${constants.aria_label}`}
        className={`${
          isFixed ? "fixed" : "hidden"
        } bottom-4 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg cursor-pointer hover:bg-red-700 duration-300 z-[40]`}
      >
        <FaAnglesUp size={25} />
      </a>
      <a
        href="#about"
        title={`Navigate to Contact Us section | ${constants.aria_label}`}
        aria-label={`Navigate to Contact Us section | ${constants.aria_label}`}
        className={`${
          isFixed ? "hidden" : "fixed md:hidden"
        } bottom-4 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg cursor-pointer hover:bg-red-700 duration-300 animate-bounce z-[40]`}
      >
        <FaAngleDown size={25} />
      </a>
    </div>
  );
};

export default ScrollNavigationButtons;
