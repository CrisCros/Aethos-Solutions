import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aethos-solutions.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} | Automate your business workflow`,
  description:
    "Aethos Solutions helps SMBs automate lead capture, follow-ups, and tool integration so teams save time and stop losing clients.",
  openGraph: {
    title: `${siteConfig.name} | Automate your business workflow`,
    description:
      "Connect CRM, forms, email, and WhatsApp to reduce manual work and improve follow-up speed.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
