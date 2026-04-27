import { CTAButton } from "@/components/buttons";
import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { WorkflowDiagram } from "@/components/workflow-diagram";
import { siteConfig } from "@/lib/site";

const pains = [
  "Losing clients because follow-up is inconsistent",
  "Managing leads manually across WhatsApp, Excel, and email",
  "Repeating the same tasks every day and losing productive hours"
];

const benefits = ["Save time", "Get more clients", "Reduce errors", "Keep your current tools"];

export default function HomePage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <main>
      <Section className="pt-12 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-600">Aethos Solutions</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Automate your business and stop wasting time on manual tasks
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              We connect your tools and automate your workflow so you can focus on growing your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="#contact">{siteConfig.ctaLabel}</CTAButton>
              <CTAButton href="#how-it-works" variant="secondary">
                See how it works
              </CTAButton>
            </div>
          </div>
          <WorkflowDiagram />
        </div>
      </Section>

      <Section
        title="Why manual operations hurt growth"
        subtitle="If your team relies on chat, spreadsheets, and inboxes for daily client management, opportunities slip away."
        className="bg-white"
      >
        <ul className="grid gap-3 md:grid-cols-3">
          {pains.map((pain) => (
            <li key={pain} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700">
              {pain}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="What we automate for your team"
        subtitle="Aethos Solutions designs practical automation systems for service businesses and agencies."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm leading-relaxed text-slate-700">
            <p>Automate lead capture from forms and inbound messages.</p>
            <p>Send instant follow-ups by email or WhatsApp without manual effort.</p>
            <p>Connect your CRM, forms, and communication channels in one reliable flow.</p>
          </div>
          <WorkflowDiagram />
        </div>
      </Section>

      <Section
        id="how-it-works"
        title="How it works"
        subtitle="A simple process that removes manual client management from your daily operations."
        className="bg-white"
      >
        <WorkflowDiagram />
      </Section>

      <Section title="Real-world example" subtitle="A practical outcome from a small business workflow redesign.">
        <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6 text-sm leading-relaxed text-slate-700">
          A clinic reduced manual work by 40% and improved client follow-up after automating form capture,
          reminders, and CRM updates.
        </div>
      </Section>

      <Section title="Benefits" subtitle="A focused automation setup with measurable impact." className="bg-white">
        <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-medium text-slate-800">
              {benefit}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" className="pt-14 md:pt-20">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="section-title">Start saving time today</h2>
            <p className="section-subtitle">
              Book a free call and we will map your current process, identify bottlenecks, and propose a clear
              automation plan.
            </p>
            <div className="mt-6">
              <CTAButton href={calendlyUrl ?? "#contact"}>{siteConfig.ctaLabel}</CTAButton>
            </div>
            {calendlyUrl && (
              <p className="mt-3 text-xs text-slate-500">Optional: direct scheduling enabled through Calendly.</p>
            )}
          </div>
          <ContactForm />
        </div>
      </Section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-6">
          <p>{siteConfig.name}</p>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-600">
            {siteConfig.email}
          </a>
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
