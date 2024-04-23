import Image from 'next/image';
import main_about_two from '../../../../public/assets/images/main_about_two.webp';
import main_about from '../../../../public/assets/images/main_about.webp';
import about from '@/utils/constants/content/about_us.json';
import NextSectionScrollButton from '@/components/reusable/NextSectionScrollButton';
import LearnMore from '@/components/reusable/LearnMore';
import constants from '@/utils/constants/constans.json';

const About = () => {
  return (
    <div className='ABOUT_MAIN_CONTAINER relative min-h-[100dvh] px-4 w-full max-w-[1200px] mx-auto flex flex-col justify-between pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)]'>
      <div className='max-w-[1200px] mx-auto relative'>
        <a
          href='/about-us'
          title={`Navigate to About Us page | ${constants.aria_label}`}
          aria-label={`Navigate to About Us page | ${constants.aria_label}`}
        >
          <div className='ABOUT_US_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 border-b-4 border-red-600 w-full md:min-w-[50%] p-4 mb-8'>
            <p className='page_section_headings'>About Us</p>
          </div>
        </a>
        <div className='ABOUT_IMAGES_AND_CONTENT_CONTAINER md:flex justify-center gap-8'>
          <div className='ABOUT_IMAGES_CONTAINER flex gap-4 md:flex-col justify-start mb-4'>
            <Image
              src={main_about_two}
              title={`About Page Image| Commercial and Industrial Air Handling Unit | ${constants.aria_label}`}
              alt={`About Page Image| Commercial and Industrial Air Handling Unit | ${constants.aria_label}`}
              className='hidden md:block max-h-[280px] md:max-h-[400px] lg:max-h-[300px] xl:max-h-[350px] object-cover object-center rounded-md shadow-md shadow-gray-500'
            />
            <Image
              src={main_about}
              title={`About Page Image| Commercial and Industrial Air Handling Unit | ${constants.aria_label}`}
              alt={`About Page Image| Commercial and Industrial Air Handling Unit | ${constants.aria_label}`}
              className='max-h-[280px] sm:max-h-[450px] lg:max-h-[300px] xl:max-h-[350px] object-cover sm:object-bottom rounded-md shadow-md shadow-gray-500'
            />
          </div>
          <div className='md:max-w-[50%] lg:max-w-[60%]'>
            <p className='mb-4 lg:text-md xl:text-lg text-justify'>
              {about.main_about_us_text.first_paragraph}
            </p>
            <p className='lg:text-md xl:text-lg'>
              {about.main_about_us_text.second_paragraph}
            </p>
            <div className='flex justify-center my-4 text-justify'>
              <LearnMore
                section='About Us'
                href='about-us'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <NextSectionScrollButton
          section='services'
          title='Services'
        />
      </div>
    </div>
  );
};

export default About;
