"use client";

import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";
import { useSitePreferences } from "@/lib/providers/site-preferences";

export function ContactPageContent({ calendlyUrl }: { calendlyUrl?: string }) {
  const { dict } = useSitePreferences();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-semibold md:text-4xl">{dict.contact.title}</h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">{dict.contact.subtitle}</p>

      <div className="mt-8 grid items-start gap-6 md:grid-cols-2">
        <ContactForm />
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-semibold">{dict.cta.final}</h2>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">Email: {siteConfig.email}</p>
          {calendlyUrl && (
            <a href={calendlyUrl} className="mt-5 inline-flex rounded-lg bg-violetBrand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violetBrand-500">
              Calendly
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
