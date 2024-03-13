import { FaChevronCircleDown } from "react-icons/fa";

const HeroAboutNavButton = () => {
  return (
    <a href="#about" className="absolute bottom-5 right-5 bg-red-600/70 px-2 py-1 text-white z-[30] flex justify-center gap-2 items-center rounded-md animate-bounce">
      <FaChevronCircleDown />
      <button>About Us</button>
    </a>
  );
};

export default HeroAboutNavButton;
