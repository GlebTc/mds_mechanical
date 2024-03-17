import services from "@/utils/constants/content/services.json";
import constants from "@/utils/constants/constans.json";
import Image from "next/image";
import Link from "next/link";
import NextSectionScrollButton from "@/components/reusable/NextSectionScrollButton";

const Services = () => {
  return (
    <div className="SERVICES_MAIN_CONTAINER relative min-h-[100dvh] w-full mx-auto flex flex-col justify-between bg-gray-200 pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)]">
      <div className="max-w-[1200px] mx-auto p-4">
        <h2 className="text-2xl font-bold border-b-4 border-red-600 w-full md:w-[25%] mb-12">
          Who We Serve
        </h2>
        <div className="SERVICES_WRAPPER_COMPONENT w-full md:flex gap-8">
          <div className="SERVICES_INDUSTRIAL_AND_COMMERCIAL_CONTAINER">
            <div className="SERVICES_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 mb-4">
              <Image
                src="https://www.svgrepo.com/show/87331/factory.svg"
                alt={`${constants.aria_label} | Industrial and Commercial Services Image`}
                height={40}
                width={40}
                className="flex justify-center items-center"
              />

              <p className="text-md sm:text-xl md:text-2xl font-bold">
                {services.main_services_text.commercial.title}
              </p>
            </div>

            <p className="mb-4">
              {services.main_services_text.commercial.first_paragraph}
            </p>
            <p>{services.main_services_text.commercial.second_paragraph}</p>
            <Link
              href="/commercial-services"
              aria-label={`${constants.aria_label} | Industrial and Commerical Services Page Link`}
            >
              <button
                className="z-[30] bg-red-600 mb-16 px-4 py-2 rounded-md font-bold text-white text-xl hover:bg-red-700 duration-300 mt-8"
                aria-label={`${constants.aria_label} | Learn More | Industrial and Commercial Services`}
                title="Learn More | Industrial and Commercial Services"
              >
                Learn More
              </button>
            </Link>
          </div>
          <div className="SERVICES_RESIDENTIAL">
            <div className="SERVICES_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 mb-4">
              <Image
                src="https://www.svgrepo.com/show/86988/home.svg"
                alt={`${constants.aria_label} | Residentail Services Image`}
                height={40}
                width={40}
              />
              <p className="text-md sm:text-xl md:text-2xl font-bold">
                {services.main_services_text.residential.title}
              </p>
            </div>
            <p className="mb-4">
              {services.main_services_text.residential.first_paragraph}
            </p>
            <p>{services.main_services_text.residential.second_paragraph}</p>
            <Link
              href="/residential-services"
              aria-label={`${constants.aria_label} | Residential Services Page Link`}
            >
              <button
                className="z-[30] bg-red-600 mb-16 px-4 py-2 rounded-md font-bold text-white text-xl hover:bg-red-700 duration-300 mt-8"
                aria-label={`${constants.aria_label} | Learn More | Residential Services`}
                title="Learn More | Residential Services"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block relative max-w-[1200px] mx-auto w-full">
        <NextSectionScrollButton section="contact" title="Contact" />
      </div>
    </div>
  );
};

export default Services;
