import { Metadata } from "next";
import ContactForm from "@/components/main/mainContact/ContactForm";
import ContactInformation from "@/components/main/mainContact/ContactInformation";

export const metadata: Metadata = {
  title: "Contact Us",
};

const ContactPage = () => {
  return (
    <div className="CONTACTS_PAGE_MAIN_CONTAINER relative h-full w-full mx-auto flex flex-col justify-between">
      <div className="max-w-[1200px] mx-auto p-4">
        <h2 className="text-2xl font-bold border-b-4 border-red-600 w-full md:w-[25%] mb-4">
          Contact Us
        </h2>
        <div className="CONTACT_INFORMATION_AND_FORM_CONTAINER md:flex gap-8">
          <div className="CONTACT_FORM_CONTAINER min-w-[45%] p-4 rounded-md shadow-lg shadow-gray-400">
            <ContactForm />
          </div>
          <div className="CONTACT_INFORMATION_CONTAINER md:max-w-[50%] p-4 rounded-md shadow-lg shadow-gray-400">
            <ContactInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
