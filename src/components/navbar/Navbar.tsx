import NavbarFixedBar from "./NavbarFixedBar";
import DesktopMenu from "./Desktop/DesktopMenu";
import Image from "next/image";
import mds_logo from "../../../public/assets/images//mds_logo.webp";

import constants from "@/utils/constants/constans.json";
import menuItems from "@/utils/constants/menuItems.json";

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
          className={`NAVBAR_LOGO_CONTAINER w-[180px] md:w-[100px] lg:w-[200px]`}
        >
          <a
            href="/"
            title={`Navigate to ${menuItems[0].title} page | ${constants.aria_label}`}
            aria-label={`Navigate to ${menuItems[0].title} page | ${constants.aria_label}`}
          >
            <div>
              <Image
                src={mds_logo}
                alt={`${constants.aria_label} | MDS Logo`}
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
