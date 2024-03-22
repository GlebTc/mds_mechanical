import Image from "next/image";
import logo from "../../../public/assets/images/mds_logo_transparent_white.webp";
import constants from "@/utils/constants/constans.json";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const LogoContact = () => {
  return (
    <div className="LOGO_AND_CONTACT_CONTAINER p-4">
      <div className="LOGO_CONTAINER max-w-[50%] mx-auto mb-4">
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
        <a
          className="flex justify-center items-center gap-2"
          href={`tel:${constants.phone}`}
          title={`Phone Contact | ${constants.phone} | ${constants.aria_label}`}
          aria-label={`Phone Contact | ${constants.phone} | ${constants.aria_label}`}
        >
          <FaPhone />
          <span> {constants.phone}</span>
        </a>

        <a
          className="flex justify-center items-center gap-2"
          href={`mailto:${constants.email}`}
          title={`Email Contact | ${constants.email} | ${constants.aria_label}`}
          aria-label={`Email Contact | ${constants.email} | ${constants.aria_label}`}
        >
          <IoMdMail />
          <span> {constants.email}</span>
        </a>
        <a
          className="NAVBAR_EMERGENCY_CONTACT_CONTAINER flex justify-center items-center gap-2 bg-red-600 font-bold uppercase px-2 rounded-md animate-pulse text-center w-fit mx-auto mt-2"
          href={`tel:${constants.emergency_phone}`}
          title={`Emergency | 24/7 | Phone Contact | ${constants.emergency_phone} | ${constants.aria_label}`}
          aria-label={`Emergency | 24/7 | Phone Contact | ${constants.emergency_phone} | ${constants.aria_label}`}
        >
          <p>
            emergency 24/7 <span> {constants.emergency_phone}</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default LogoContact;
