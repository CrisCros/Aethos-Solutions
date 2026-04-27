import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/contact-page";

export const metadata: Metadata = {
  title: "Contact | Aethos Solutions",
  description: "Tell us what process you want to automate. Contact Aethos Solutions by form, email, or call booking."
};

export default function ContactPage() {
  return <ContactPageContent calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL} />;
}
