"use client";

import Link from "next/link";
import { SectionReveal, StaggerGrid, StaggerItem } from "@/components/animations";
import { CTASection } from "@/components/sections/cta-section";
import { useSitePreferences } from "@/lib/providers/site-preferences";

export function HomePageContent() {
  const { dict } = useSitePreferences();

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-12 md:grid-cols-2 md:px-6 md:pt-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violetBrand-500">Aethos Solutions</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{dict.home.hero.headline}</h1>
          <p className="mt-4 text-base text-slate-700 dark:text-slate-300">{dict.home.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-violetBrand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violetBrand-500">
              {dict.cta.book}
            </Link>
            <Link href="/work" className="rounded-xl border border-violetBrand-300/50 px-5 py-3 text-sm font-semibold">
              {dict.cta.seeExamples}
            </Link>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <p className="text-sm font-semibold text-violetBrand-500">{dict.home.hero.workflowTitle}</p>
          <div className="mt-4 grid gap-3">
            {dict.home.hero.workflowSteps.map((step, index) => (
              <div key={step} className="rounded-xl border border-violetBrand-300/30 p-3 text-sm">
                <span className="mr-2 font-semibold text-violetBrand-500">{index + 1}.</span>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <SectionReveal>
          <h2 className="text-2xl font-semibold">{dict.home.problems.title}</h2>
        </SectionReveal>
        <StaggerGrid className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.problems.items.map((item) => (
            <StaggerItem key={item.title}>
              <article className="glass rounded-xl p-5">
                <p className="text-2xl">{item.icon}</p>
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.text}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <SectionReveal>
          <h2 className="text-2xl font-semibold">{dict.home.solutions.title}</h2>
        </SectionReveal>
        <StaggerGrid className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.solutions.items.map((item) => (
            <StaggerItem key={item.title}>
              <article className="glass rounded-xl p-5">
                <p className="text-2xl">{item.icon}</p>
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.text}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <h2 className="text-2xl font-semibold">{dict.home.beforeAfter.title}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="glass rounded-2xl p-6">
            <p className="text-lg font-semibold">{dict.home.beforeAfter.beforeTitle}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {dict.home.beforeAfter.beforeItems.map((item) => (
                <span key={item} className="rounded-full border border-violetBrand-300/40 px-3 py-1 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </article>
          <article className="glass rounded-2xl p-6">
            <p className="text-lg font-semibold">{dict.home.beforeAfter.afterTitle}</p>
            <div className="mt-4 grid gap-2 text-sm">
              {dict.home.beforeAfter.afterFlow.map((step, index) => (
                <div key={step} className="rounded-lg border border-violetBrand-300/30 p-3">
                  {index < dict.home.beforeAfter.afterFlow.length - 1 ? `${step} →` : step}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <h2 className="text-2xl font-semibold">{dict.home.process.title}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {dict.home.process.steps.map((step, index) => (
            <article key={step} className="glass rounded-xl p-5">
              <p className="text-sm font-semibold text-violetBrand-500">{index + 1}</p>
              <p className="mt-2 text-sm">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection title={dict.cta.final} subtitle={dict.home.hero.subtitle} primaryLabel={dict.cta.book} secondaryLabel={dict.cta.seeExamples} />
    </main>
  );
}
