import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroOverlay from "./HeroOverlay";


const Main = () => {
  return (
    <div id="main" className="relative h-[calc(100dvh-(var(--navbar-h-mobile)))] md:h-[calc(100dvh-(var(--navbar-h-desktop)))]">
      <HeroImage />
      <HeroOverlay />
      <HeroText />

    </div>
  );
};

export default Main;
