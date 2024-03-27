import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import constants from '@/utils/constants/constans.json';

const Contact = () => {
  return (
    <div className="CONTACTS_MAIN_CONTAINER relative min-h-[100dvh] w-full mx-auto flex flex-col justify-between pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)]">
      <div className="max-w-[1200px] mx-auto p-4">
      <a
          href='/contact'
          title={`Navigate to Contact page | ${constants.aria_label}`}
          aria-label={`Navigate to Contact page | ${constants.aria_label}`}
        >
          <div className='ABOUT_US_ICON_AND_TITLE_CONTAINER flex justify-start items-center gap-4 border-b-4 border-red-600 w-full md:min-w-[50%] p-4 mb-8'>
            <p className='page_section_headings'>Contact Us</p>
          </div>
        </a>
        <div className="CONTACT_INFORMATION_AND_FORM_CONTAINER md:flex md:mt-20 gap-8 mb-8 md:mb-0">
          <div className="CONTACT_INFORMATION_CONTAINER md:max-w-[50%] p-4 rounded-md shadow-lg shadow-gray-400">
            <ContactInformation />
          </div>
          <div className="CONTACT_FORM_CONTAINER min-w-[45%] p-4 rounded-md shadow-lg shadow-gray-400">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
