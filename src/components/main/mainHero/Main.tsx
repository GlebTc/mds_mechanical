import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroOverlay from "./HeroOverlay";
import HeroAboutNavButton from "./HeroAboutNavButton";

const Main = () => {
  return (
    <div className="relative h-[calc(100dvh-(var(--navbar-h-mobile)))] md:h-[calc(100dvh-(var(--navbar-h-desktop)))]">
      <HeroImage />
      <HeroOverlay />
      <HeroText />
      <HeroAboutNavButton />
    </div>
  );
};

export default Main;
