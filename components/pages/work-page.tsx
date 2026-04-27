"use client";

import { ProjectCard } from "@/components/cards/project-card";
import { SectionReveal, StaggerGrid, StaggerItem } from "@/components/animations";
import { useSitePreferences } from "@/lib/providers/site-preferences";

export function WorkPageContent() {
  const { dict, language } = useSitePreferences();

  const labels = {
    en: { problem: "Problem", solution: "Solution", tools: "Tools", result: "Result" },
    es: { problem: "Problema", solution: "Solución", tools: "Herramientas", result: "Resultado" },
    ro: { problem: "Problemă", solution: "Soluție", tools: "Tool-uri", result: "Rezultat" }
  }[language];

  const projects = {
    en: [
      ["Clinic appointment follow-up automation", "Manual reminders caused no-shows and admin overload.", "Automated reminders via email + WhatsApp with status sync.", "n8n, Google Calendar, WhatsApp API", "Fewer missed appointments and faster team workflow."],
      ["Real estate lead management system", "Leads from portals were scattered across inboxes.", "Unified lead intake + instant assignment + follow-up sequences.", "Make, HubSpot, Gmail", "Better response speed and cleaner pipeline visibility."],
      ["Service company quote request automation", "Quote requests sat too long before sales follow-up.", "Auto-qualified requests, notified sales, created task queue.", "Zapier, Airtable, Slack", "Higher quote conversion and less operational delay."],
      ["Internal dashboard for business reporting", "Management had no single source for KPIs.", "Connected data sources into one internal reporting dashboard.", "Next.js, PostgreSQL, Charts", "Clear weekly reporting and faster decisions."],
      ["Website + CRM integration", "Website forms were disconnected from CRM and email.", "Integrated forms with CRM and automated nurture flow.", "Next.js, CRM API, Mailer", "No lead leakage and more consistent follow-up."]
    ],
    es: [
      ["Automatización de seguimiento en clínica", "Recordatorios manuales causaban ausencias.", "Recordatorios automáticos por email y WhatsApp.", "n8n, Google Calendar, WhatsApp API", "Menos ausencias y mejor flujo operativo."],
      ["Sistema de leads inmobiliarios", "Leads dispersos en varios canales.", "Captura unificada + asignación instantánea.", "Make, HubSpot, Gmail", "Más velocidad de respuesta."],
      ["Automatización de solicitudes de presupuesto", "Solicitudes sin seguimiento rápido.", "Calificación automática y notificación a ventas.", "Zapier, Airtable, Slack", "Mejor conversión de presupuestos."],
      ["Dashboard interno de reporting", "No había fuente única de KPIs.", "Conexión de fuentes en panel único.", "Next.js, PostgreSQL, Charts", "Reportes claros y decisiones más rápidas."],
      ["Integración web + CRM", "Formularios web desconectados del CRM.", "Integración completa con flujo de nurturing.", "Next.js, CRM API, Mailer", "Sin pérdida de leads."]
    ],
    ro: [
      ["Automatizare follow-up programări clinică", "Reminder-ele manuale duceau la neprezentări.", "Reminder automat prin email și WhatsApp.", "n8n, Google Calendar, WhatsApp API", "Mai puține programări ratate."],
      ["Sistem lead-uri imobiliare", "Lead-urile erau împrăștiate în inbox-uri.", "Captură unificată + asignare instant.", "Make, HubSpot, Gmail", "Răspuns mai rapid către clienți."],
      ["Automatizare cereri ofertă", "Cereri fără follow-up la timp.", "Calificare automată și notificare echipă vânzări.", "Zapier, Airtable, Slack", "Conversie mai bună la oferte."],
      ["Dashboard intern pentru raportare", "Managementul nu avea sursă unică de KPI.", "Conectare surse de date într-un dashboard.", "Next.js, PostgreSQL, Charts", "Raportare clară săptămânală."],
      ["Integrare website + CRM", "Formularele site-ului nu intrau în CRM.", "Integrare completă + nurturing automat.", "Next.js, CRM API, Mailer", "Fără pierdere de lead-uri."]
    ]
  }[language];

  const dashboardTitle = {
    en: "Sample dashboard preview",
    es: "Vista previa de dashboard",
    ro: "Previzualizare dashboard"
  }[language];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <SectionReveal>
        <h1 className="text-3xl font-semibold md:text-4xl">{dict.work.title}</h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300">{dict.work.subtitle}</p>
      </SectionReveal>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="glass rounded-2xl p-5">
          <p className="text-sm font-semibold">{dashboardTitle}</p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="rounded-lg border border-violetBrand-300/30 p-3">Leads: 124</div>
            <div className="rounded-lg border border-violetBrand-300/30 p-3">First response: 6m</div>
            <div className="rounded-lg border border-violetBrand-300/30 p-3">Follow-up completion: 92%</div>
          </div>
        </div>
        <div className="glass rounded-2xl p-5 text-sm">Form → Validation → CRM Entry → Team Notification → Follow-up → Report</div>
      </section>

      <StaggerGrid className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project[0]}>
            <ProjectCard title={project[0]} problem={project[1]} solution={project[2]} tools={project[3]} result={project[4]} labels={labels} />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </main>
  );
}
