"use client";

import { useSitePreferences } from "@/lib/providers/site-preferences";

export function AboutPageContent() {
  const { dict } = useSitePreferences();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-semibold md:text-4xl">{dict.about.title}</h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">{dict.about.subtitle}</p>
      <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">{dict.about.intro}</p>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {dict.about.details.map((detail) => (
          <article key={detail} className="glass rounded-xl p-5 text-sm">
            {detail}
          </article>
        ))}
      </section>
    </main>
  );
}
