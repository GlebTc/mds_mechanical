import { Metadata } from "next"
import Contact from "@/components/main/mainContact/Contact"

export const metadata: Metadata = {
  title: "Contact Us",
}

const ContactPage = () => {
  return (
    <div>
      <Contact />
    </div>
  )
}

export default ContactPage