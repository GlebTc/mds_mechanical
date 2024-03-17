import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

const Contact = () => {
  return (
    <div className="CONTACTS_MAIN_CONTAINER relative min-h-[100dvh] w-full mx-auto flex flex-col justify-between pt-[var(--emerg-bar-h-mobile)] md:pt-[var(--emerg-bar-h-desktop)]">
      <div className="max-w-[1200px] mx-auto p-4">
        <h2 className="text-2xl font-bold border-b-4 border-red-600 w-full md:w-[25%] mb-12">
          Contact Us
        </h2>
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
