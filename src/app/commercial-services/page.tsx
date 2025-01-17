import { Metadata } from 'next';
import services from '@/utils/constants/content/services.json';
import constants from '@/utils/constants/constans.json';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Commercial & Industrial Services - MDS Mechanical Services',
  description:
    'Explore the range of commercial and industrial services offered by MDS Mechanical Services. We provide top-quality HVAC, heating, gas, air conditioning, and electrical solutions for businesses in Hamilton and the Niagara Region.',
  keywords: [
    'MDS Mechanical Services',
    'Commercial Services',
    'Industrial Services',
    'HVAC',
    'Heating',
    'Gas',
    'Air Conditioning',
    'Electrical',
    'Hamilton',
    'Niagara Region',
    'Ontario',
  ],
  twitter: {
    title: 'Commercial & Industrial Services - MDS Mechanical Services',
    card: 'summary_large_image',
    description:
      'Explore the range of commercial and industrial services offered by MDS Mechanical Services. We provide top-quality HVAC, heating, gas, air conditioning, and electrical solutions for businesses in Hamilton and the Niagara Region.',
  },
  openGraph: {
    title: 'Commercial & Industrial Services - MDS Mechanical Services',
    description:
      'Explore the range of commercial and industrial services offered by MDS Mechanical Services. We provide top-quality HVAC, heating, gas, air conditioning, and electrical solutions for businesses in Hamilton and the Niagara Region.',
    url: 'https://www.mdsmechanicalinc.ca/commercial-services',
    type: 'website',
  },
};

const CommercialServices = () => {
  const contentArray =
    services.commercial_services_text.commercial_content_array;
  
  return (
    <div className='COMMERCIAL_SERVICES_MAIN_CONTAINER relative h-full w-full mx-auto flex flex-col justify-between bg-gray-200 '>
      <div className='COMMERCIAL_SERVICES_WRAPPER_CONTAINER max-w-[1200px] mx-auto px-4 mb-8'>
        <div className='COMMERCIAL_SERVICES_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 border-b-4 border-red-600 w-full md:min-w-[50%] p-4'>
          <Image
            src='https://www.svgrepo.com/show/87331/factory.svg'
            alt={`${constants.aria_label} | Commercial Services Icon Image`}
            title={`${constants.aria_label} | Commercial Services Icon Image`}
            height={40}
            width={40}
          />
          <p className='page_section_headings'>
            {services.main_services_text.commercial.title}
          </p>
        </div>
        <div>
          {contentArray.map((content, index) => {
            return (
              <div
                key={index}
                className='INDIVIDUAL_COMMERCIAL_SERVICE_CONTAINER flex flex-col'
                id={`${content.section_id}`}
              >
                <p className='text-md sm:text-lg md:text-xl font-bold mt-8'>
                  {content.title}
                </p>
                <p
                  className='text-md sm:text-lg md:text-xl'
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommercialServices;
