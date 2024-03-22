import { Metadata } from 'next';
import services from '@/utils/constants/content/services.json';
import constants from '@/utils/constants/constans.json';
import Image from 'next/image';
import Link from 'next/link';
import NextSectionScrollButton from '@/components/reusable/NextSectionScrollButton';
import LearnMore from '@/components/reusable/LearnMore';

export const metadata: Metadata = {
  title: 'Residential Services',
};

const ResidentialServices = () => {
  return (
    <div className='SERVICES_MAIN_CONTAINER relative h-full w-full mx-auto flex flex-col justify-between bg-gray-200 '>
      <div className='max-w-[1200px] mx-auto p-4 mb-8'>
        <h2 className='text-2xl font-bold border-b-4 border-red-600 w-full md:w-[25%] mb-12'>
          Who We Serve
        </h2>
        <div className='SERVICES_WRAPPER_COMPONENT w-full md:flex gap-8'>
          <div className='SERVICES_RESIDENTIAL mt-8 md:mt-0'>
            <div className='SERVICES_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 mb-4'>
              <Image
                src='https://www.svgrepo.com/show/86988/home.svg'
                alt={`${constants.aria_label} | Residentail Services Image`}
                title={`${constants.aria_label} | Residentail Services Image`}
                height={40}
                width={40}
              />
              <p className='text-md sm:text-xl md:text-2xl font-bold'>
                {services.main_services_text.residential.title}
              </p>
            </div>
            <p className='mb-4'>
              {services.main_services_text.residential.first_paragraph}
            </p>
            <p>{services.main_services_text.residential.second_paragraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialServices;
