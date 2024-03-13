import HeroImage from "./mainHero/HeroImage";
import HeroText from "./mainHero/HeroText";
import HeroOverlay from "./mainHero/HeroOverlay";
import HeroAboutNavButton from "./mainHero/HeroAboutNavButton";

const Main = () => {
  return (
      <div className="relative h-[calc(100vh-(var(--navbar-h)))]">
        <HeroImage />
        <HeroOverlay />
        <HeroText />
        <HeroAboutNavButton />
      </div>
  );
};

export default Main;
