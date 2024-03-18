import { FaChevronCircleDown } from "react-icons/fa";
import Link from "next/link";
import constants from "@/utils/constants/constans.json";

const NextSectionScrollButton = ({
  title,
  section,
}: {
  title: string;
  section: string;
}) => {
  return (
    <a
      href={`#${section}`}
      title={`Navigate to ${title} section | ${constants.aria_label}`}
      aria-label={`Navigate to ${title} section | ${constants.aria_label}`}
      className={`bg-red-600/80 px-4 py-1 text-white flex justify-center gap-2 items-center rounded-md animate-bounce absolute bottom-4 left-4 font-bold text-lg z-[20]`}
    >
      <FaChevronCircleDown size={25} />
      {title}
    </a>
  );
};

export default NextSectionScrollButton;
