import constants from "@/utils/constans.json";

const ServiceArea = () => {
  return (
    <div className="QUICK_LINKS_CONTAINER w-full p-4 flex flex-col justify-start">
      <h2 className="text-2xl font-bold border-b-4 border-red-600 w-full">
        Service Area
      </h2>
      <ul className="grid grid-cols-2">
        {constants.service_locations.map((location, index) => (
          <li
            key={index}
            className="text-lg font-bold hover:text-red-600/70 cursor-pointer"
          >
            <a
              href={`https://en.wikipedia.org/wiki/${location},_Ontario`}
              title={`Learn more about ${location} | ${constants.aria_label}`}
              aria-label={`Learn more about ${location} | ${constants.aria_label}`}
            >
              {location}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceArea;
