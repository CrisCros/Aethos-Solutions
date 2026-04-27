import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { SitePreferencesProvider } from "@/lib/providers/site-preferences";
import { SiteShell } from "@/components/layout/site-shell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aethos-solutions.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.name} | Business automation and digital systems`,
  description: "We reduce manual work, connect your tools, automate follow-ups and build systems your team can use.",
  openGraph: {
    title: `${siteConfig.name} | Business automation and digital systems`,
    description: "Automation, integrations, internal tools, websites and growth workflows for SMBs.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <SitePreferencesProvider>
          <SiteShell>{children}</SiteShell>
        </SitePreferencesProvider>
      </body>
    </html>
  );
}
