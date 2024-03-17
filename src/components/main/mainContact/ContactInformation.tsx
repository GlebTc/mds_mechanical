import Image from "next/image";
import logo from "../../../../public/assets/images/mds_logo.webp";
import contact_us from "../../../../public/assets/images/contact_us.webp";
import constants from "@/utils/constants/constans.json";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div className="LOGO_AND_CONTACT_CONTAINER p-4">
      <div className="LOGO_CONTAINER mx-auto mb-4">
        <a
          href="/"
          title={`Navigate back to Home Page | ${constants.aria_label}`}
          aria-label={`Navigate back to Home Page | ${constants.aria_label}`}
        >
          <Image
            src={logo}
            title={`Footer Logo | ${constants.aria_label} | Navigate to Home`}
            alt={`Footer Logo | ${constants.aria_label} | Navigate to Home`}
          />
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
        <div className="NAVBAR_EMERGENCY_CONTACT_CONTAINER flex justify-center items-center gap-2 bg-red-600 font-bold uppercase px-2 rounded-md animate-pulse text-center w-fit mx-auto mt-2">
          <p>
            emergency 24/7 <span> {constants.emergency_phone}</span>
          </p>
        </div>
      </div>
      <div className="CONTACT_US_IMAGE_CONTAINER max-w-[70%] mx-auto mt-8 text-center">
        <p className="bg-yellow-300 p-8">Would be nice to have image here</p>
      </div>
    </div>
  );
};

export default ContactInformation;
