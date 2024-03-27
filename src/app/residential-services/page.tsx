import { Metadata } from 'next';
import services from '@/utils/constants/content/services.json';
import constants from '@/utils/constants/constans.json';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Residential Services',
};

const ResidentialServices = () => {
  const contentArray =
    services.residential_services_text.residential_content_array;

  return (
    <div className='RESIDENTIAL_SERVICES_MAIN_CONTAINER relative h-full w-full mx-auto flex flex-col justify-between bg-gray-200 '>
      <div className='RESIDENTIAL_SERVICES_WRAPPER_CONTAINER max-w-[1200px] mx-auto px-4 mb-8'>
        <div className='RESIDENTIAL_SERVICES_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 border-b-4 border-red-600 w-full md:min-w-[50%] p-4'>
          <Image
            src='https://www.svgrepo.com/show/86988/home.svg'
            alt={`${constants.aria_label} | Residentail Services Icon Image`}
            title={`${constants.aria_label} | Residentail Services Icon Image`}
            height={40}
            width={40}
          />
          <p className='page_section_headings'>
            {services.main_services_text.residential.title}
          </p>
        </div>
        <div>
          {contentArray.map((content, index) => {
            return (
              <div
                key={index}
                className='INDIVIDUAL_RESIDENTIAL_SERVICE_CONTAINER flex flex-col'
                id={`${content.section_id}`}
              >
                <p className='text-md sm:text-lg md:text-xl font-bold mt-8'>
                  {content.title}
                </p>
                <p className='text-md sm:text-lg md:text-xl'>
                  {content.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResidentialServices;
