import constants from "@/utils/constans.json";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-200 pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)] px-4">
      <h2 className="text-2xl font-bold border-b-4 border-red-600 w-full md:w-[25%] mb-12 mt-6">
        Who We Serve
      </h2>
      <div className="SERVICES_WRAPPER_COMPONENT w-full px-10 md:flex gap-8">
        <div className="SERVICES_INDUSTRIAL_AND_COMMERCIAL_CONTAINER">
          <Image
            src="https://www.svgrepo.com/show/87331/factory.svg"
            alt={`${constants.aria_label} | Industrial and Commercial Services Image`}
            height={40}
            width={40}
            className="flex justify-center items-center"
          />
          <h3>Industrial and Commercial</h3>

          <p>
            MDS Mechanical offers a wide range of Commercial HVAC services
            including boiler room retrofits, commercial water heater and storage
            tank replacements, hydronic in-floor heating and snow melt systems,
            radiant tube heater installations and much more.
          </p>
          <p>
            Our adherence to building rules and regulations as well as the
            guidelines that come along with the equipment they may help you
            choose is what makes us truly reliable.
          </p>
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
          <Image
            src="https://www.svgrepo.com/show/86988/home.svg"
            alt={`${constants.aria_label} | Residentail Services Image`}
            height={40}
            width={40}
          />
          <h3>Residential</h3>

          <p>
            We can help you maximize the life of your equipment with regular
            cleaning and service to ensure maximum efficiency. Our
            highly-trained technicians ensure that you, as a customer, are given
            the best possible service regarding heating and hot water systems.
          </p>
          <p>
            The comfort they can provide is essential for a good quality of
            life, it allows you to escape from the difficulties that extreme
            changes in weather can induce.
          </p>
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
  );
};

export default Services;
