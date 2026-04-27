"use client";

import { siteConfig } from "@/lib/site";
import { useSitePreferences } from "@/lib/providers/site-preferences";

export function Footer() {
  const { dict } = useSitePreferences();

  return (
    <footer className="border-t border-slate-200/70 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6 dark:text-slate-400">
        <p>{dict.footer}</p>
        <a href={`mailto:${siteConfig.email}`} className="hover:text-violetBrand-500 dark:hover:text-violetBrand-300">
          {siteConfig.email}
        </a>
      </div>
    </footer>
  );
}
