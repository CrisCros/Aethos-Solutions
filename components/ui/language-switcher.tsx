"use client";

import { languages } from "@/lib/i18n";
import { useSitePreferences } from "@/lib/providers/site-preferences";

export function LanguageSwitcher() {
  const { language, setLanguage } = useSitePreferences();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as (typeof languages)[number])}
      aria-label="Language selector"
      className="glass rounded-lg px-2 py-2 text-xs font-semibold uppercase text-slate-700 outline-none dark:text-slate-100"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}
