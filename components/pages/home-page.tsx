"use client";

import { Hero } from "@/components/sections/hero";
import { WorkflowVisual } from "@/components/sections/workflow-visual";
import { CTASection } from "@/components/sections/cta-section";
import { SectionReveal, StaggerGrid, StaggerItem } from "@/components/animations";
import { useSitePreferences } from "@/lib/providers/site-preferences";

export function HomePageContent() {
  const { dict } = useSitePreferences();

  return (
    <main>
      <Hero title={dict.home.title} subtitle={dict.home.subtitle} ctaBook={dict.cta.book} ctaWork={dict.cta.seeWork} />
      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <SectionReveal>
          <WorkflowVisual />
        </SectionReveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <SectionReveal>
          <h2 className="text-2xl font-semibold">{dict.home.problemsTitle}</h2>
        </SectionReveal>
        <StaggerGrid className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.problems.map((item) => (
            <StaggerItem key={item}>
              <div className="glass rounded-xl p-4 text-sm">{item}</div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <SectionReveal>
          <h2 className="text-2xl font-semibold">{dict.home.solutionsTitle}</h2>
        </SectionReveal>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.solutions.map((item) => (
            <div key={item} className="glass rounded-xl p-4 text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <h2 className="text-2xl font-semibold">{dict.home.howTitle}</h2>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">{dict.home.howText}</p>
      </section>

      <CTASection title={dict.cta.final} subtitle={dict.home.subtitle} primaryLabel={dict.cta.book} secondaryLabel={dict.cta.seeWork} />
    </main>
  );
}
