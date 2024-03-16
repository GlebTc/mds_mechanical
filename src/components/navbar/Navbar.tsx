import NavbarFixedBar from "./NavbarFixedBar";
import DesktopMenu from "./DesktopMenu";
import Image from "next/image";
import mds_logo from "../../../public/assets/images//mds_logo.webp";
import ScrollNavigationButtons from "./ScrollNavigationButtons";
import constants from "@/utils/constans.json";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className={`NAVBAR_MAIN_CONTAINER h-[var(--navbar-h-mobile)] md:h-[var(--navbar-h-desktop)] flex flex-col w-full`}
    >
      <NavbarFixedBar />
      <ScrollNavigationButtons />
      <div
        className={`NAVBAR_LOGO_AND_MENU_CONTAINER  bg-gray-400 h-full w-full flex justify-center md:justify-between items-center px-2 lg:px-20 pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)] z-[40]`}
      >
        <div className={`NAVBAR_LOGO_CONTAINER] w-[190px]`}>
          <a href="/">
            <Image
              src={mds_logo}
              alt={`${constants.aria_label} | MDS Logo`}
              className="object-contain"
            />
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
