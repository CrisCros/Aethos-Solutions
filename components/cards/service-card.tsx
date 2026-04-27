import { ReactNode } from "react";

export function ServiceCard({ icon, title, description, useCase, benefit }: { icon: ReactNode; title: string; description: string; useCase: string; benefit: string }) {
  return (
    <article className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-glow">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-violetBrand-500">Example use case</p>
      <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{useCase}</p>
      <p className="mt-3 rounded-lg bg-violetBrand-500/10 px-3 py-2 text-sm text-violetBrand-700 dark:text-violetBrand-300">{benefit}</p>
    </article>
  );
}
