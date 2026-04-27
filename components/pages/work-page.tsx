"use client";

import { ProjectCard } from "@/components/cards/project-card";
import { SectionReveal, StaggerGrid, StaggerItem } from "@/components/animations";
import { useSitePreferences } from "@/lib/providers/site-preferences";

export function WorkPageContent() {
  const { dict } = useSitePreferences();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <SectionReveal>
        <h1 className="text-3xl font-semibold md:text-4xl">{dict.work.title}</h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300">{dict.work.subtitle}</p>
      </SectionReveal>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-5">
          <p className="text-sm font-semibold">{dict.work.dashboardTitle}</p>
          <div className="mt-4 grid gap-2 text-sm">
            {dict.work.dashboardMetrics.map((metric) => (
              <div key={metric} className="rounded-lg border border-violetBrand-300/30 p-3">
                {metric}
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-5">
          <p className="text-sm font-semibold">{dict.work.workflowTitle}</p>
          <div className="mt-4 grid gap-2 text-sm">
            {dict.work.workflowSteps.map((step, index) => (
              <div key={step} className="rounded-lg border border-violetBrand-300/30 p-3">
                {index < dict.work.workflowSteps.length - 1 ? `${step} →` : step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <StaggerGrid className="mt-8 grid gap-4 md:grid-cols-2">
        {dict.work.projects.map((project) => (
          <StaggerItem key={project.title}>
            <ProjectCard
              title={project.title}
              problem={project.problem}
              solution={project.solution}
              tools={project.tools}
              benefit={project.benefit}
              labels={dict.work.labels}
            />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </main>
  );
}
