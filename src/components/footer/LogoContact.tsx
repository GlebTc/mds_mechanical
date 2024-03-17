import Image from "next/image";
import logo from "../../../public/assets/images/mds_logo.webp";
import constants from "@/utils/constants/constans.json";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const LogoContact = () => {
  return (
    <div className="LOGO_AND_CONTACT_CONTAINER p-4">
      <div className="LOGO_CONTAINER max-w-[50%] mx-auto mb-4">
        <a href="/">
          <Image src={logo} alt="MDS Logo" />
        </a>
      </div>
      <div className="CONTACT_CONTAINER flex flex-col gap-2">
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
            emergency 24/7 <span> {constants.emergency_phone}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogoContact;
