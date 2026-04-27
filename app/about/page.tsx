import type { Metadata } from "next";
import { AboutPageContent } from "@/components/pages/about-page";

export const metadata: Metadata = {
  title: "About | Aethos Solutions",
  description: "Meet the Aethos Solutions team and learn why businesses trust us for practical automation systems."
};

export default function AboutPage() {
  return <AboutPageContent />;
}
