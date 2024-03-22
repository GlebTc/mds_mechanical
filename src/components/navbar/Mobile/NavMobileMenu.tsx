import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../../../../public/assets/images/mds_logo_transparent_white.webp';
import menuItems from '@/utils/constants/menuItems.json';
import constants from '@/utils/constants/constans.json';
import { usePathname } from 'next/navigation';

const NavMobileMenu = ({
  mobileMenu,
  handleMobileMenu,
}: {
  mobileMenu: any;
  handleMobileMenu: any;
}) => {
  const pathname = usePathname();
  return (
    <div className='z-[40]'>
      <div
        className={
          mobileMenu
            ? 'MOBILE_MENU_OVERLAY md:hidden fixed left-0 top-0 w-full h-screen bg-black/60'
            : 'hidden'
        }
      ></div>
      <div
        className={
          mobileMenu
            ? 'MOBILE_MENU md:hidden fixed right-0 top-0 w-[75%] sm:w-[50%] md:w-[45%] h-screen bg-gray-400 ease-in duration-1000'
            : 'MOBILE_MENU md:hidden fixed right-[-100%] top-0 w-[75%] sm:w-[50%] md:w-[45%] h-screen bg-slate-300 ease-in duration-1000'
        }
      >
        <div className='MOBILE_MENU_CLOSE_BUTTON_AND_HEADER_CONTAINER h-[80px] flex justify-between items-center px-5 border-b-2 border-black'>
          <div className='absolute top-4 right-4 bg-gray-400 text-black rounded-md p-1 shadow-md shadow-gray-600 md:hidden cursor-pointer'>
            <AiOutlineClose
              size={25}
              onClick={handleMobileMenu}
            />
          </div>
          <div className='LOGO_IMAGE_AND_NAME_CONTAINER flex flex-wrap justify-center items-center px-4'>
            <a
              href='/'
              title={`Navigate back to Home Page | ${constants.aria_label}`}
              aria-label={`Navigate back to Home Page | ${constants.aria_label}`}
            >
              <Image
                src={logo}
                title={`Mobile Navbar Logo | ${constants.aria_label} | Navigate to Home`}
                alt={`Mobile Navbar Logo | ${constants.aria_label} | Navigate to Home`}
                width={180}
                height={100}
                quality={20}
              />
            </a>
          </div>
        </div>
        <div className='MOBILE_MENU_ITEMS_CONTAINER p-5'>
          <ul className='flex flex-col gap-4 justify-around items-start text-black'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex justify-center items-center h-full
          ${
            pathname !== item.href
              ? 'p-2 hover:bg-gray-300 hover:text-black duration-500 rounded-lg uppercase'
              : ''
          }
          `}
                onClick={handleMobileMenu}
              >
                <Link
                  href={item.href}
                  title={`Navigate to ${item.title} page | ${constants.aria_label}`}
                  aria-label={`Navigate to ${item.title} page | ${constants.aria_label}`}
                  className={`${
                    pathname === item.href
                      ? 'p-2 custom_orange duration-500 rounded-lg uppercase h-[100%]'
                      : ''
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMobileMenu;
