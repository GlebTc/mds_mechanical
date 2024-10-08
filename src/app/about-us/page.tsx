import { Metadata } from 'next';
import Image from 'next/image';
import page_about_one from '../../../public/assets/images/page_about_one.webp';
import main_about_two from '../../../public/assets/images/main_about_two.webp';
import about from '@/utils/constants/content/about_us.json';
import constants from '@/utils/constants/constans.json';


export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about MDS Mechanical Services, our team, and our commitment to providing top-quality HVAC, heating, gas, air conditioning, and electrical services in Hamilton and the Niagara Region.',
  keywords: [
    "About MDS Mechanical Services",
    "HVAC Hamilton",
    "HVAC Hamilton Ontario",
    "air conditioning system",
    "heating system",
    "air conditioning",
    "air conditioning installations"
  ],
  twitter: {
    title: 'About Us - MDS Mechanical Services | HVAC Hamilton & Niagara Region',
    card: 'summary_large_image',
    description:
      'Learn more about MDS Mechanical Services, our team, and our commitment to providing top-quality HVAC, heating, gas, air conditioning, and electrical services in Hamilton and the Niagara Region.',
  },
  openGraph: {
    title: 'About Us - MDS Mechanical Services | HVAC Hamilton & Niagara Region',
    description:
      'Learn more about MDS Mechanical Services, our team, and our commitment to providing top-quality HVAC, heating, gas, air conditioning, and electrical services in Hamilton and the Niagara Region.',
    url: 'https://www.mdsmechanicalinc.ca/about-us',
    type: 'website',
  },
};

const AboutUs = () => {
  return (
    <div className='ABOUT_US_MAIN_CONTAINER relative h-full w-full mx-auto flex flex-col justify-between bg-gray-200 '>
      <div className='ABOUT_US_WRAPPER_CONTAINER max-w-[1200px] mx-auto px-4 mb-8'>
        <div className='ABOUT_US_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 border-b-4 border-red-600 w-full md:min-w-[50%] p-4 mb-8'>
          
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
              src={main_about_two}
              priority
              title={`About Page Image| Residential Boiler | ${constants.aria_label}`}
              alt={`About Page Image| Residential Boiler | ${constants.aria_label}`}
              className='rounded-md shadow-md shadow-gray-500 mb-4 max-h-[280px] md:max-h-[400px] lg:max-h-[300px] xl:max-h-[350px] object-cover object-center hidden md:block'
            />
            <Image
              src={page_about_one}
              priority
              title={`About Page Image| Commercial and Industrial Air Handling Unit | ${constants.aria_label}`}
              alt={`About Page Image| Commercial and Industrial Air Handling Unit | ${constants.aria_label}`}
              placeholder='blur'
              className='max-h-[280px] sm:max-h-[450px] lg:max-h-[300px] xl:max-h-[350px] object-cover rounded-md shadow-md shadow-gray-500'
            />
          </div>
          <div className='md:max-w-[50%] lg:max-w-[60%]'>
            <p className='mb-4 lg:text-md xl:text-lg'>
              {about.about_us_page_text.first_paragraph}
            </p>
            <p className='lg:text-md xl:text-lg'>
              {about.about_us_page_text.second_paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
