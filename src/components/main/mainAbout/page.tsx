import Image from "next/image";
import main_about from "../../../../public/assets/images/main_about.webp";
import constants from "@/utils/constans.json";

const About = () => {
  return (
    <div className="h-full p-4 w-full mx-auto md:flex md:items-center lg:items-start justify-center gap-4">
      <div className="mb-4 md:max-w-[50%] lg:max-w-[40%] h-[100%]">
        <Image src={main_about} alt="Main About" placeholder="blur" />
      </div>
      <div className="md:w-[45%]">
        <h2 className="text-2xl font-bold border-b-4 border-red-600 w-[80%] mb-4">
          About Us
        </h2>
        <p className="mb-4">{constants.about_us_constants.first_paragraph}</p>
        <p>{constants.about_us_constants.second_paragraph}</p>
        <div className="flex justify-center mt-4">
          <button
            className="z-[30] bg-red-600 mb-16 px-2 py-1 rounded-md font-bold text-white text-xl hover:bg-red-700 duration-300"
            aria-label={`${constants.aria_label} | Learn More | About Us`}
            title="Learn More | About Us"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
