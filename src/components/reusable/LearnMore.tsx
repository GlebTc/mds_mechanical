import Link from "next/link";
import constants from "@/utils/constants/constans.json";

const LearnMore = ({ section, href }: { section: string, href: string }) => {
  return (
    <Link
      className="req-button z-[15] bg-red-600 px-2 py-1 rounded-md font-bold text-white text-xl hover:bg-red-700 duration-300"
      href={href}
      title={`Learn More | Navigate to ${section} page | ${constants.aria_label}`}
      aria-label={`Learn More | Navigate to ${section} page | ${constants.aria_label}`}
    >
      More {section}
    </Link>
  );
};

export default LearnMore;
