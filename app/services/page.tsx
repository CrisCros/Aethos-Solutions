import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/pages/services-page";

export const metadata: Metadata = {
  title: "Services | Aethos Solutions",
  description: "Business automation, CRM systems, API integrations, internal tools, and support services."
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
