import { Metadata } from 'next';
import Image from 'next/image';
import main_about from '../../../public/assets/images/main_about.webp';
import main_about_two from '../../../public/assets/images/main_about_two.webp';
import about from '@/utils/constants/content/about_us.json';
import NextSectionScrollButton from '@/components/reusable/NextSectionScrollButton';
import LearnMore from '@/components/reusable/LearnMore';
import constants from '@/utils/constants/constans.json';

export const metadata: Metadata = {
  title: 'About Us',
};

const AboutUs = () => {
  return (
    <div className='ABOUT_US_MAIN_CONTAINER relative h-full w-full mx-auto flex flex-col justify-between bg-gray-200 '>
      <div className='ABOUT_US_WRAPPER_CONTAINER max-w-[1200px] mx-auto px-4 mb-8'>
        <div className='ABOUT_US_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 border-b-4 border-red-600 w-fit md:min-w-[50%] p-4 mb-8'>
          <Image
            src='https://www.svgrepo.com/show/42439/about-us.svg'
            alt={`${constants.aria_label} | Residentail Services Icon Image`}
            title={`${constants.aria_label} | Residentail Services Icon Image`}
            height={40}
            width={40}
          />
          <p className='page_section_headings'>About Us</p>
        </div>
        <div className='ABOUT_IMAGES_AND_CONTENT_CONTAINER md:flex justify-center gap-8 mb-8'>
          <div className='ABOUT_IMAGES_CONTAINER flex flex-col justify-start'>
            <Image
              src={main_about}
              title={`About Page Image| Residential Boiler | ${constants.aria_label}`}
              alt={`About Page Image| Residential Boiler | ${constants.aria_label}`}
              className='rounded-md shadow-md shadow-gray-500 mb-4'
            />
            <Image
              src={main_about_two}
              title={`About Page Image| Commercial and Industrial Air Handling Unit | ${constants.aria_label}`}
              alt={`About Page Image| Commercial and Industrial Air Handling Unit | ${constants.aria_label}`}
              placeholder='blur'
              className='rounded-md shadow-md shadow-gray-500 hidden md:block'
            />
          </div>
          <div className='md:max-w-[50%] lg:max-w-[60%]'>
            <p className='mb-4 lg:text-md xl:text-lg'>
              {about.main_about_us_text.first_paragraph}
            </p>
            <p className='lg:text-md xl:text-lg'>
              {about.main_about_us_text.second_paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
