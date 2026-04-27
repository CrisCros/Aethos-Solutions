"use client";

import { SectionReveal, StaggerGrid, StaggerItem } from "@/components/animations";
import { useSitePreferences } from "@/lib/providers/site-preferences";

export function ServicesPageContent() {
  const { dict } = useSitePreferences();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <SectionReveal>
        <h1 className="text-3xl font-semibold md:text-4xl">{dict.services.title}</h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300">{dict.services.subtitle}</p>
      </SectionReveal>

      <StaggerGrid className="mt-8 grid gap-4 md:grid-cols-2">
        {dict.services.items.map((service) => (
          <StaggerItem key={service.title}>
            <article className="glass rounded-2xl p-5">
              <p className="text-2xl">{service.icon}</p>
              <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-violetBrand-500">{dict.services.labels.problem}:</span> {service.problem}
                </p>
                <p>
                  <span className="font-semibold text-violetBrand-500">{dict.services.labels.build}:</span> {service.build}
                </p>
                <p>
                  <span className="font-semibold text-violetBrand-500">{dict.services.labels.example}:</span> {service.example}
                </p>
                <p>
                  <span className="font-semibold text-violetBrand-500">{dict.services.labels.tools}:</span> {service.tools}
                </p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </main>
  );
}
