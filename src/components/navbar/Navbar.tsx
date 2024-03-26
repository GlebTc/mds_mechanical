import NavbarFixedBar from './NavbarFixedBar';
import DesktopMenu from './Desktop/DesktopMenu';
import Image from 'next/image';
import logo from '../../../public/assets/images/mds_logo_transparent_white.webp';
import orac_logo from '../../../public/assets/images/orac_logo_transparent.webp';
import tssa_logo from '../../../public/assets/images/tssa_logo_transparent.webp';
import constants from '@/utils/constants/constans.json';

const Navbar = () => {
  return (
    <nav
      id='navbar'
      className={`NAVBAR_MAIN_CONTAINER h-[var(--navbar-h-mobile)] md:h-[var(--navbar-h-desktop)] flex flex-col w-full`}
    >
      <NavbarFixedBar />

      <div
        className={`NAVBAR_LOGO_AND_MENU_CONTAINER  bg-gray-400 h-full w-full flex justify-center md:justify-around items-center px-2 pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)] z-[25] text-[15px] lg:text-[18px]`}
      >
        <div
          className={`NAVBAR_LOGO_CONTAINER w-full md:w-fit flex justify-center md:justify-start`}
        >
          <a
            href='https://orac.ca/'
            title={`Navigate to ORAC Home Page | ${constants.aria_label}`}
            aria-label={`Navigate to ORAC Home Page | ${constants.aria_label}`}
            className='min-w-[80px] flex justify-center items-center'
          >
            <Image
              src={orac_logo}
              title={`ORAC Logo | ${constants.aria_label} | Navigate to Home`}
              alt={`ORAC Logo | ${constants.aria_label} | Navigate to Home`}
              width={70}
              height={70}
              quality={20}
              priority
            />
          </a>
          <a
            href='/'
            title={`Navigate back to Home Page | ${constants.aria_label}`}
            aria-label={`Navigate back to Home Page | ${constants.aria_label}`}
            className='w-[180px] flex justify-center items-center'
          >
            <div>
              <Image
                src={logo}
                title={`Footer Logo | ${constants.aria_label} | Navigate to Home`}
                alt={`Footer Logo | ${constants.aria_label} | Navigate to Home`}
                className='object-contain'
                priority
              />
            </div>
          </a>
          <a
            href='https://www.tssa.org/'
            title={`Navigate to TSSA Home Page | ${constants.aria_label}`}
            aria-label={`Navigate to TSSA Home Page | ${constants.aria_label}`}
            className='min-w-[80px] flex justify-center items-center'
          >
            <Image
              src={tssa_logo}
              title={`TSSA Logo | ${constants.aria_label} | Navigate to Home`}
              alt={`TSSA Logo | ${constants.aria_label} | Navigate to Home`}
              width={70}
              height={70}
              quality={20}
              priority
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
