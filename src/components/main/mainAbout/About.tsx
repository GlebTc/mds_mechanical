import Image from "next/image";
import main_about from "../../../../public/assets/images/main_about.webp";
import main_about_two from "../../../../public/assets/images/main_about_two.webp";
import about from '@/utils/constants/content/about_us.json'
import constants from '@/utils/constants/constans.json'
import Link from "next/link";
import NextSectionScrollButton from "@/components/reusable/NextSectionScrollButton";

const About = () => {
  return (
    <div className="ABOUT_MAIN_CONTAINER relative min-h-[100dvh] px-4 w-full max-w-[1200px] mx-auto flex flex-col justify-between pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)]">
      <div className="max-w-[1200px] mx-auto relative">
        <h2 className="text-2xl font-bold border-b-4 border-red-600 w-full md:w-[25%] mb-12 mt-2">
          About Us
        </h2>
        <div className="md:flex gap-8">
          <div className="ABOUT_IMAGES_CONTAINER flex flex-col justify-start md:w-[55%] lg:w-[40%]">
            <Image
              src={main_about}
              alt="Main About"
              placeholder="blur"
              className="rounded-md shadow-md shadow-gray-500 mb-4"
            />
            <Image
              src={main_about_two}
              alt="Main About Two"
              placeholder="blur"
              className="rounded-md shadow-md shadow-gray-500 hidden md:block"
            />
          </div>
          <div className="md:w-[45%]">
            <p className="mb-4 lg:text-md xl:text-lg">
              {about.main_about_us_text.first_paragraph}
            </p>
            <p className="lg:text-md xl:text-lg">
              {about.main_about_us_text.second_paragraph}
            </p>
            <div className="flex justify-center mt-4">
              <Link href="/about-us">
                <button
                  className="z-[30] bg-red-600 mb-16 px-4 py-2 rounded-md font-bold text-white text-xl hover:bg-red-700 duration-300"
                  aria-label={`${constants.aria_label} | Learn More | About Us`}
                  title="Learn More | About Us"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <NextSectionScrollButton section="services" title="Services" />
      </div>
    </div>
  );
};

export default About;
