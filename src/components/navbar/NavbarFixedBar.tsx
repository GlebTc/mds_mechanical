import { FaPhone } from "react-icons/fa";
import { IoMdMail, IoMdMenu } from "react-icons/io";
import constants from "@/utils/constans.json";

const NavbarFixedBar = () => {
  return (
    <div
      className={`NAVBAR_FIXED_TOP_BAR fixed w-full h-[var(--emerg-bar-h-mobile)] md:h-[var(--emerg-bar-h-desktop)] bg-black flex flex-col md:flex-row justify-center items-center p-2 gap-2 md:gap-8 text-white z-[50]`}
    >
      <div className="absolute top-3 right-3 bg-gray-400 text-black rounded-md p-1 shadow-lg shadow-gray-400 md:hidden">
        <IoMdMenu size={25} />
      </div>
      <div className="flex justify-center items-center gap-2">
        <FaPhone />
        <span> {constants.phone}</span>
      </div>

      <div className="flex justify-center items-center gap-2">
        <IoMdMail />
        <span> {constants.email}</span>
      </div>
      <div className="NAVBAR_EMERGENCY_CONTACT_CONTAINER flex justify-center items-center gap-2 bg-red-600 font-bold uppercase px-2 rounded-md animate-pulse text-center">
        <p>
          emergency 24/7 <span> {constants.phone}</span>
        </p>
      </div>
    </div>
  );
};

export default NavbarFixedBar;
