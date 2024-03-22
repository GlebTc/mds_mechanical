import NavbarFixedBar from "./NavbarFixedBar";
import DesktopMenu from "./Desktop/DesktopMenu";
import Image from "next/image";
import logo from "../../../public/assets/images/mds_logo_transparent_white.webp";
import constants from "@/utils/constants/constans.json";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className={`NAVBAR_MAIN_CONTAINER h-[var(--navbar-h-mobile)] md:h-[var(--navbar-h-desktop)] flex flex-col w-full`}
    >
      <NavbarFixedBar />

      <div
        className={`NAVBAR_LOGO_AND_MENU_CONTAINER  bg-gray-400 h-full w-full flex justify-center md:justify-around items-center px-2 pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)] z-[25] text-[15px] lg:text-[18px]`}
      >
        <div
          className={`NAVBAR_LOGO_CONTAINER w-[180px] md:w-[150px] lg:w-[200px]`}
        >
          <a
            href="/"
            title={`Navigate back to Home Page | ${constants.aria_label}`}
            aria-label={`Navigate back to Home Page | ${constants.aria_label}`}
          >
            <div>
              <Image
                src={logo}
                title={`Footer Logo | ${constants.aria_label} | Navigate to Home`}
                alt={`Footer Logo | ${constants.aria_label} | Navigate to Home`}
                className="object-contain"
              />
            </div>
          </a>
        </div>
        <nav className={`NAVBAR_DESKTOP_MENU_CONTAINER hidden md:block`}>
          <DesktopMenu />
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
