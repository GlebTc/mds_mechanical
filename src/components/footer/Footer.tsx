import LogoContact from "./LogoContact";
import QuickLinks from "./QuickLinks";
import ServiceArea from "./ServiceArea";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="FOOTER_MAIN_CONTAINER bg-gray-400">
      <div className="FOOTER_CONTENT_CONTAINER max-w-[1200px] mx-auto flex flex-col md:flex-row items-start justify-around p-4 h-full">
        <div className="md:w-[35%] lg:w-[35%] md:order-2">
          <LogoContact />
        </div>
        <div className="md:w-[25%] lg:w-[30%] md:order-1 w-full">
          <QuickLinks />
        </div>
        <div className="md:w-[35%] lg:w-[30%] md:order-3 w-full">
          <ServiceArea />
        </div>
      </div>
      <div className="w-full bg-gray-700 p-2">
        <a
          href="https://www.webdevelopmenthamilton.com"
          className="text-[#90cdf4] text-2xl font-bold text-center hover:text-blue-100 w-fit mx-auto"
          aria-label="© 2023 Web Development Hamilton. All rights reserved. | www.webdevelopmenthamilton.com | Web Development Hamilton"
        >
          <h2>
            &copy; {currentYear} Web Development Hamilton. All rights reserved.
          </h2>
        </a>
      </div>
    </div>
  );
};

export default Footer;
