import { Metadata } from 'next';
import ContactForm from '@/components/main/mainContact/ContactForm';
import ContactInformation from '@/components/main/mainContact/ContactInformation';
import constants from '@/utils/constants/constans.json';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us',
};

const ContactPage = () => {
  return (
    <div className='CONTACT_US_MAIN_CONTAINER relative h-full w-full mx-auto flex flex-col justify-between bg-gray-200 '>
      <div className='CONTACT_US_WRAPPER_CONTAINER max-w-[1200px] mx-auto px-4 mb-8'>
        <div className='CONTACT_US_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 border-b-4 border-red-600 w-full md:min-w-[50%] p-4'>
          <Image
            src='https://www.svgrepo.com/show/448999/contact-us.svg'
            alt={`${constants.aria_label} | Contact Us Icon Image`}
            title={`${constants.aria_label} | Contact Us Icon Image`}
            height={40}
            width={40}
          />
          <p className='page_section_headings'>
            Contact Us
          </p>
        </div>
        <div className='CONTACT_INFORMATION_AND_FORM_CONTAINER md:flex gap-8 mt-8'>
          <div className='CONTACT_FORM_CONTAINER min-w-[45%] p-4 rounded-md shadow-lg shadow-gray-400'>
            <ContactForm />
          </div>
          <div className='CONTACT_INFORMATION_CONTAINER md:max-w-[50%] p-4 rounded-md shadow-lg shadow-gray-400'>
            <ContactInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
