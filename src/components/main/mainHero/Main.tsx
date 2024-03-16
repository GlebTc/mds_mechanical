import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroOverlay from "./HeroOverlay";

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
      <div className="hidden md:block">
        <NextSectionScrollButton section="about" title="About Us" />
      </div>
    </div>
  );
};

export default Main;
