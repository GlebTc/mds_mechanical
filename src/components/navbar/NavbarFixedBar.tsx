"use client";
import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { IoMdMail, IoMdMenu } from "react-icons/io";
import constants from "@/utils/constants/constans.json";
import NavMobileMenu from "./Mobile/NavMobileMenu";

const NavbarFixedBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div
      className={`NAVBAR_FIXED_TOP_BAR fixed w-full h-[var(--emerg-bar-h-mobile)] md:h-[var(--emerg-bar-h-desktop)] bg-black flex flex-col md:flex-row justify-center items-center p-2 gap-2 md:gap-4 lg:gap-8 text-white z-[30]`}
    >
      <div
        className="absolute top-4 right-4 bg-gray-400 text-black rounded-md p-1 shadow-lg shadow-gray-400 md:hidden cursor-pointer"
        onClick={handleMobileMenu}
      >
        <IoMdMenu size={25} />
      </div>
      <a
        title={`Call ${constants.aria_label} at ${constants.phone}`}
        aria-label={`Call ${constants.aria_label} at ${constants.phone}`}
        href={`tel:${constants.phone}`}
        className="flex justify-center items-center gap-2 hover:bg-gray-400 px-2 py-1 rounded-lg hover:text-black duration-500"
      >
        <FaPhone />
        <span> {constants.phone}</span>
      </a>

      <a
        title={`Email ${constants.aria_label} at ${constants.email}`}
        aria-label={`Email ${constants.aria_label} at ${constants.email}`}
        href={`mailto:${constants.email}`}
        className="flex justify-center items-center gap-2 hover:bg-gray-400 px-2 py-1 rounded-lg hover:text-black duration-500"
      >
        <IoMdMail />
        <span> {constants.email}</span>
      </a>
      <a
        title={`Emergency 24/7 Call ${constants.aria_label} at ${constants.emergency_phone}`}
        aria-label={`Emergency 24/7 Call ${constants.aria_label} at ${constants.emergency_phone}`}
        href={`tel:${constants.emergency_phone}`}
        className="NAVBAR_EMERGENCY_CONTACT_CONTAINER flex justify-center items-center gap-2 bg-red-600 font-bold uppercase px-2 py-1 rounded-md animate-pulse text-center hover:text-black duration-500 mt-2 md:mt-0"
      >
        <p>
          emergency 24/7 <span> {constants.emergency_phone}</span>
        </p>
      </a>
      {mobileMenu && (
        <NavMobileMenu
          mobileMenu={mobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
      )}
    </div>
  );
};

export default NavbarFixedBar;
