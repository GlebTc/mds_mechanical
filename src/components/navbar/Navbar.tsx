import NavbarFixedBar from "./NavbarFixedBar";

const Navbar = () => {
  const componentName = "Navbar";
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER h-[var(--navbar-h)] flex flex-col`}
    >
      <NavbarFixedBar componentName={componentName} />
      <div
        className={`${componentName}_LOGO_AND_MENU_CONTAINER bg-gray-400 h-full w-full flex justify-between items-center px-4`}
      >
        <div className={`${componentName}_LOGO_CONTAINER] `}>Logo Here</div>
        <div className={`${componentName}_DESKTOP_MENU_CONTAINER`}>Menu</div>
      </div>
    </div>
  );
};

export default Navbar;
