import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const NavMobileMenu = ({
  mobileMenu,
  handleMobileMenu,
}: {
  mobileMenu: any;
  handleMobileMenu: any;
}) => {
  return (
    <>
      <div
        className={
          mobileMenu
            ? "MOBILE_MENU_OVERLAY md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 z-[100]"
            : "hidden"
        }
      ></div>
      <div
        className={
          mobileMenu
            ? "MOBILE_MENU md:hidden fixed z-[100] right-0 top-0 w-[75%] sm:w-[50%] md:w-[45%] h-screen bg-gray-400 ease-in duration-1000"
            : "MOBILE_MENU md:hidden fixed z-[100] right-[-100%] top-0 w-[75%] sm:w-[50%] md:w-[45%] h-screen bg-slate-300 ease-in duration-1000"
        }
      >
        <div className="MOBILE_MENU_CLOSE_BUTTON_AND_HEADER_CONTAINER h-[80px] flex justify-between items-center px-5 border-b-2 border-black text-white">
          <div className="absolute top-4 right-4 bg-gray-400 text-black rounded-md p-1 shadow-lg shadow-gray-400 md:hidden">
            <AiOutlineClose size={25} onClick={handleMobileMenu} />
          </div>
          <div className="LOGO_IMAGE_AND_NAME_CONTAINER flex flex-wrap justify-center items-center px-4">
            {/* <Image
              src={mike_logo}
              alt="Mike's logo"
              width={100}
              height={100}
              quality={100}
            /> */}
          </div>
        </div>
        <div className="MOBILE_MENU_ITEMS_CONTAINER p-5 text-white font-[700]">
          {/* <ul className="flex flex-col gap-4 justify-around items-start">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex justify-center items-center
          ${
            pathname !== item.path
              ? "p-2 hover:bg-white hover:text-black duration-500 rounded-lg uppercase"
              : ""
          }
          `}
                onClick={handleMobileMenu}
              >
                <Link
                  href={item.path}
                  aria-label={`${item.alt} | Sun Quest Tanning Spa | Hamilton, Ontario`}
                  className={`${
                    pathname === item.path
                      ? "p-2 custom_orange duration-500 rounded-lg uppercase"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
};

export default NavMobileMenu;
