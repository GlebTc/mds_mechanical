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
        <NextSectionScrollButton title="About" section="about" />
      </div>
    </div>
  );
};

export default Main;
