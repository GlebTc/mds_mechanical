import NavbarFixedBar from "./NavbarFixedBar";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const componentName = "Navbar";
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-[var(--navbar-h)] flex flex-col w-full`}
    >
      <NavbarFixedBar componentName={componentName} />
      <div
        className={`${componentName}_LOGO_AND_MENU_CONTAINER  bg-gray-400 h-full w-full flex justify-center md:justify-between items-center px-4`}
      >
        <div className={`${componentName}_LOGO_CONTAINER] `}>Logo Here</div>
        <nav className={`${componentName}_DESKTOP_MENU_CONTAINER hidden md:block`}>
            <DesktopMenu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
