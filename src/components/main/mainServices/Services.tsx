import services from '@/utils/constants/content/services.json';
import constants from '@/utils/constants/constans.json';
import Image from 'next/image';
import NextSectionScrollButton from '@/components/reusable/NextSectionScrollButton';
import LearnMore from '@/components/reusable/LearnMore';

const Services = () => {
  return (
    <div className='SERVICES_MAIN_CONTAINER relative min-h-[100dvh] w-full mx-auto flex flex-col justify-between bg-gray-200 pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)]'>
      <div className='max-w-[1200px] mx-auto p-4'>
        <a
          href='/contact'
          title={`Navigate to Contact page | ${constants.aria_label}`}
          aria-label={`Navigate to Contact page | ${constants.aria_label}`}
        >
          <div className='ABOUT_US_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 border-b-4 border-red-600 w-full md:min-w-[50%] p-4 mb-8'>
            <p className='page_section_headings'>Services</p>
          </div>
        </a>
        <div className='SERVICES_WRAPPER_COMPONENT w-full md:flex gap-8'>
          <div className='SERVICES_INDUSTRIAL_AND_COMMERCIAL_CONTAINER border-b-2 border-gray-400 md:border-none pb-4 md:pb-0'>
            <a
              href='/commercial-services'
              title={`Navigate to Commercial Services page | ${constants.aria_label}`}
              aria-label={`Navigate to Commercial Services page | ${constants.aria_label}`}
              className='SERVICES_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 mb-4'
            >
              <Image
                src='https://www.svgrepo.com/show/87331/factory.svg'
                alt={`${constants.aria_label} | Industrial and Commercial Services Image`}
                title={`${constants.aria_label} | Industrial and Commercial Services Image`}
                height={40}
                width={40}
                className='flex justify-center items-center'
              />
              <p className='text-md sm:text-xl md:text-2xl font-bold'>
                {services.main_services_text.commercial.title}
              </p>
            </a>

            <p className='mb-4' dangerouslySetInnerHTML={{ __html: services.main_services_text.commercial.first_paragraph }} />
            <p dangerouslySetInnerHTML={{ __html: services.main_services_text.commercial.second_paragraph }} />
            <div className='my-4'>
              <LearnMore
                section='About Commercial Services'
                href='/commercial-services'
              />
            </div>
          </div>
          <div className='SERVICES_RESIDENTIAL mt-8 md:mt-0'>
            <a
              href='/residential-services'
              title={`Navigate to Residential Services page | ${constants.aria_label}`}
              aria-label={`Navigate to Residential Services page | ${constants.aria_label}`}
              className='SERVICES_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 mb-4'
            >
              <Image
                src='https://www.svgrepo.com/show/86988/home.svg'
                alt={`${constants.aria_label} | Residential Services Image`}
                title={`${constants.aria_label} | Residential Services Image`}
                height={40}
                width={40}
              />
              <p className='text-md sm:text-xl md:text-2xl font-bold'>
                {services.main_services_text.residential.title}
              </p>
            </a>
            <p className='mb-4' dangerouslySetInnerHTML={{ __html: services.main_services_text.residential.first_paragraph }} />
            <p dangerouslySetInnerHTML={{ __html: services.main_services_text.residential.second_paragraph }} />
            <div className='my-4'>
              <LearnMore
                section='About Residential Services'
                href='/residential-services'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='hidden md:block relative max-w-[1200px] mx-auto w-full'>
        <NextSectionScrollButton
          section='contact'
          title='Contact'
        />
      </div>
    </div>
  );
};

export default Services;
