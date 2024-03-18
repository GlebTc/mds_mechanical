import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroOverlay from "./HeroOverlay";
import Link from "next/link";
import { FaChevronCircleDown } from "react-icons/fa";
import NextSectionScrollButton from "@/components/reusable/NextSectionScrollButton";

const Main = () => {
  return (
    <div
      id="main"
      className="relative h-[calc(100dvh-(var(--navbar-h-mobile)))] md:h-[calc(100dvh-(var(--navbar-h-desktop)))]"
    >
      <HeroImage />
      <HeroOverlay />
      <HeroText />
      <div className="hidden md:block relative max-w-[1200px] mx-auto">
      <Link
      href={`#about`}
      title={`Navigate to About Us section`}
      aria-label={`Navigate to About Us section`}
      className={`bg-red-600/80 px-4 py-1 text-white flex justify-center gap-2 items-center rounded-md animate-bounce absolute bottom-4 left-4 font-bold text-lg z-[20]`}
    >
      <FaChevronCircleDown size={25} />
      <p>About Us</p>
    </Link>
      </div>
    </div>
  );
};

export default Main;
