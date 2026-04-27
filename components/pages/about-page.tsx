"use client";

import { useSitePreferences } from "@/lib/providers/site-preferences";

export function AboutPageContent() {
  const { dict, language } = useSitePreferences();

  const intro = {
    en: "Aethos Solutions is a small, practical and technical team. We focus on real business problems, not unnecessary complexity.",
    es: "Aethos Solutions es un equipo técnico pequeño y práctico. Nos enfocamos en problemas reales de negocio, sin complejidad innecesaria.",
    ro: "Aethos Solutions este o echipă tehnică mică și practică. Ne concentrăm pe probleme reale de business, fără complexitate inutilă."
  }[language];

  const points = {
    en: ["Practical solutions", "Fast delivery", "Clear communication", "Multilingual team", "Business-focused technology"],
    es: ["Soluciones prácticas", "Entrega rápida", "Comunicación clara", "Equipo multilingüe", "Tecnología enfocada en negocio"],
    ro: ["Soluții practice", "Livrare rapidă", "Comunicare clară", "Echipă multilingvă", "Tehnologie orientată spre business"]
  }[language];

  const languagesText = {
    en: "We work with clients in English, Spanish and Romanian.",
    es: "Trabajamos con clientes en inglés, español y rumano.",
    ro: "Lucrăm cu clienți în engleză, spaniolă și română."
  }[language];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-semibold md:text-4xl">{dict.about.title}</h1>
      <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">{intro}</p>
      <p className="mt-2 text-slate-700 dark:text-slate-300">{languagesText}</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Why work with us?</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point} className="glass rounded-xl p-4 text-sm">
              {point}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
