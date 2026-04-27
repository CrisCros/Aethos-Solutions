import type { Metadata } from "next";
import { HomePageContent } from "@/components/pages/home-page";

export const metadata: Metadata = {
  title: "Home | Aethos Solutions",
  description: "Overview of how Aethos Solutions automates workflows, integrates systems, and improves lead management."
};

export default function HomePage() {
  return <HomePageContent />;
}
