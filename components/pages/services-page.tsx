"use client";

import { ServiceCard } from "@/components/cards/service-card";
import { BentoGrid } from "@/components/sections/bento-grid";
import { SectionReveal } from "@/components/animations";
import { useSitePreferences } from "@/lib/providers/site-preferences";

export function ServicesPageContent() {
  const { dict, language } = useSitePreferences();

  const services = {
    en: [
      ["⚙️", "Business process automation", "We automate repetitive tasks between teams and tools.", "Auto-assign inbound requests to the right salesperson.", "Less manual work and faster operations."],
      ["📇", "CRM and lead systems", "Capture, score and follow up leads without gaps.", "A lead from your form creates a CRM contact and follow-up tasks.", "Stop losing leads."],
      ["💻", "Web development", "Conversion-focused websites connected to your systems.", "Landing page sends qualified leads directly to sales pipeline.", "Higher conversion rate."],
      ["📊", "Internal dashboards", "Custom dashboards for teams and managers.", "Single panel for sales, ops and campaign metrics.", "Better decisions with real-time data."],
      ["🔌", "API integrations", "Connect tools that do not talk to each other.", "Sync accounting, CRM and messaging tools.", "No duplicated entries."],
      ["🧩", "n8n / Make / Zapier workflows", "Build and maintain robust automations.", "Automated reminders and quote follow-ups.", "Faster response time."],
      ["🛠️", "Maintenance and support", "We monitor and improve systems after launch.", "Fix breakpoints and improve flows monthly.", "Stable long-term performance."]
    ],
    es: [
      ["⚙️", "Automatización de procesos", "Automatizamos tareas repetitivas entre equipos y herramientas.", "Asignación automática de solicitudes entrantes.", "Menos trabajo manual y más velocidad."],
      ["📇", "CRM y gestión de leads", "Captura y seguimiento de leads sin huecos.", "Un lead del formulario crea contacto y tareas en CRM.", "Deja de perder leads."],
      ["💻", "Desarrollo web", "Sitios enfocados en conversión conectados a tus sistemas.", "Landing envía leads calificados al pipeline comercial.", "Mejor tasa de conversión."],
      ["📊", "Dashboards internos", "Paneles personalizados para equipos y dirección.", "Panel único para ventas y operaciones.", "Mejores decisiones con datos reales."],
      ["🔌", "Integraciones API", "Conectamos herramientas que no se comunican.", "Sincronización entre CRM, contabilidad y mensajería.", "Sin duplicar datos."],
      ["🧩", "Automatizaciones n8n / Make / Zapier", "Diseñamos workflows robustos y escalables.", "Recordatorios y seguimientos de presupuestos automáticos.", "Respuesta más rápida."],
      ["🛠️", "Mantenimiento y soporte", "Monitoreamos y mejoramos tras el lanzamiento.", "Ajustes mensuales y resolución de incidencias.", "Rendimiento estable."]
    ],
    ro: [
      ["⚙️", "Automatizare procese", "Automatizăm task-urile repetitive între echipe și tool-uri.", "Distribuire automată a cererilor noi către vânzări.", "Mai puțină muncă manuală."],
      ["📇", "CRM și management lead-uri", "Captură și follow-up fără goluri în proces.", "Lead-ul din formular devine contact + task în CRM.", "Nu mai pierzi lead-uri."],
      ["💻", "Dezvoltare web", "Website-uri orientate pe conversie, conectate la sisteme.", "Site-ul trimite lead-uri direct în pipeline.", "Conversie mai bună."],
      ["📊", "Dashboard-uri interne", "Panouri custom pentru management și echipe.", "Un singur dashboard pentru KPI-uri.", "Decizii mai bune."],
      ["🔌", "Integrări API", "Conectăm aplicații care nu comunică între ele.", "Sincronizare între CRM, contabilitate și mesagerie.", "Fără introducere dublă de date."],
      ["🧩", "Workflow-uri n8n / Make / Zapier", "Implementăm automatizări scalabile.", "Reminder automat pentru oferte trimise.", "Timp de răspuns redus."],
      ["🛠️", "Mentenanță și suport", "Monitorizare și optimizare după lansare.", "Îmbunătățiri continue lunare.", "Performanță stabilă."]
    ]
  }[language];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <SectionReveal>
        <h1 className="text-3xl font-semibold md:text-4xl">{dict.services.title}</h1>
        <p className="mt-3 text-slate-700 dark:text-slate-300">{dict.services.subtitle}</p>
      </SectionReveal>
      <div className="mt-8">
        <BentoGrid>
          {services.map(([icon, title, description, useCase, benefit]) => (
            <ServiceCard key={title} icon={icon} title={title} description={description} useCase={useCase} benefit={benefit} />
          ))}
        </BentoGrid>
      </div>
    </main>
  );
}
