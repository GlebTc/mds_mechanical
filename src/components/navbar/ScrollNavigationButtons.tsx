"use client";
import { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import menuItems from "@/utils/menuItems.json";
import constants from "@/utils/constans.json";

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
        title={`Call ${constants.aria_label} at ${constants.phone}`}
        aria-label={`Call ${constants.aria_label} at ${constants.phone}`}
        href={`tel:${constants.phone}`}
        className={`${
          isFixed ? "fixed" : "hidden"
        } bottom-16 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg z-50 cursor-pointer hover:bg-red-700 duration-300`}
      >
        <FaPhone size={25} />
      </a>
      <a
        title={`Email ${constants.aria_label} at ${constants.email}`}
        aria-label={`Email ${constants.aria_label} at ${constants.email}`}
        href={`mailto:${constants.email}`}
        className={`${
          isFixed ? "fixed" : "hidden"
        } bottom-28 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg z-50 cursor-pointer hover:bg-red-700 duration-300`}
      >
        <IoMdMail size={25} />
      </a>
      <a
        href="#"
        title={`Return to ${menuItems[0].title} page | ${constants.aria_label}`}
        aria-label={`Return to ${menuItems[0].title} page | ${constants.aria_label}`}
        className={`${
          isFixed ? "fixed" : "hidden"
        } bottom-4 right-4 bg-red-600/80 text-white p-2 rounded-lg shadow-lg z-50 cursor-pointer hover:bg-red-700 duration-300`}
      >
        <FaAnglesUp size={25} />
      </a>
    </div>
  );
};

export default ScrollNavigationButtons;
