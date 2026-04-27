import type { Metadata } from "next";
import { WorkPageContent } from "@/components/pages/work-page";

export const metadata: Metadata = {
  title: "Work | Aethos Solutions",
  description: "Example projects and case-style solutions for automation, reporting, lead systems, and integrations."
};

export default function WorkPage() {
  return <WorkPageContent />;
}
