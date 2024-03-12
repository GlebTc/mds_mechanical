import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import constants from "@/utils/constans.json";

const NavbarFixedBar = ({ componentName }: { componentName: string }) => {
  return (
    <div
      className={`${componentName}_FIXED_TOP_BAR relative w-full h-fit bg-black flex flex-col md:flex-row justify-center items-center p-2 gap-4 md:gap-8 text-white`}
    >
      <div className="flex justify-center items-center gap-2">
        <FaPhone />
        <span> {constants.phone}</span>
      </div>
      <div className="flex justify-center items-center gap-2 bg-red-600 font-bold uppercase px-2 rounded-md animate-pulse">
        <p>emergency 24/7</p>
        <span> {constants.phone}</span>
      </div>
      <div className="flex justify-center items-center gap-2">
        <IoMdMail />
        <span> {constants.email}</span>
      </div>
    </div>
  );
};

export default NavbarFixedBar;
