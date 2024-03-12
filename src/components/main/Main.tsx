import HeroImage from "./mainHero/HeroImage";
import HeroText from "./mainHero/HeroText";
import HeroOverlay from "./mainHero/HeroOverlay";
import HeroAboutNavButton from "./mainHero/HeroAboutNavButton";

const Main = () => {
  return (
    <div>
      <section className="relative h-[calc(100vh-(var(--navbar-h)))]">
        <HeroImage />
        <HeroOverlay />
        <HeroText />
        <HeroAboutNavButton />
      </section>
      <section id="about"></section>
    </div>
  );
};

export default Main;
