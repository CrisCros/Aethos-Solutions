"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/buttons";
import { ContactForm } from "@/components/contact-form";
import { Reveal, Stagger, StaggerItem } from "@/components/animations";
import { siteConfig } from "@/lib/site";

const pains = [
  { title: "Leads go cold", text: "Slow response times reduce trust and revenue opportunities." },
  { title: "Tool chaos", text: "WhatsApp, forms, sheets, and inboxes break your process visibility." },
  { title: "Manual repetition", text: "Teams spend hours on tasks that software can complete instantly." }
];

const benefits = [
  "Faster response times",
  "Higher conversion rates",
  "Fewer operational mistakes",
  "Clean CRM data",
  "Less admin work",
  "Scalable workflows"
];

const steps = ["Capture", "Route", "Notify", "Follow-up"];

function Glow() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 top-52 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
    </>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(124,58,237,0.22)" }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{text}</p>
    </motion.article>
  );
}

export function LandingPage({ calendlyUrl }: { calendlyUrl?: string }) {
  return (
    <main className="relative overflow-hidden bg-[#0B0B0F] text-white">
      <Glow />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 pt-16 md:grid-cols-2 md:px-6 md:pt-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">Aethos Solutions</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Automation that feels like a real growth engine.
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
            We design connected workflows that capture leads, trigger communication, and move prospects to closed
            deals without manual effort.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="#contact" pulse>
              {siteConfig.ctaLabel}
            </CTAButton>
            <CTAButton href="#how-it-works" variant="secondary">
              See workflow
            </CTAButton>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.14em] text-violet-300">Live workflow preview</p>
            <div className="mt-4 grid gap-3">
              {steps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.25 }}
                  className="rounded-xl border border-white/10 bg-black/30 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-100">{step}</span>
                    <span className="text-xs text-violet-300">Step {i + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-4xl">Why manual operations hurt growth</h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-4 md:grid-cols-3">
            {pains.map((pain) => (
              <StaggerItem key={pain.title}>
                <Card title={pain.title} text={pain.text} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6" id="how-it-works">
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">How it works</h2>
          <p className="mt-3 max-w-2xl text-slate-300">Form → System → Email → Follow-up, visualized as one reliable flow.</p>
        </Reveal>
        <Stagger className="mt-8 grid gap-3 md:grid-cols-4">
          {steps.map((step, i) => (
            <StaggerItem key={step}>
              <motion.div whileHover={{ scale: 1.03 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-xs text-violet-300">0{i + 1}</p>
                <p className="mt-2 text-lg font-medium">{step}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <Reveal>
          <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-b from-violet-500/10 to-transparent p-6">
            <h2 className="text-2xl font-semibold md:text-3xl">Visual proof</h2>
            <p className="mt-2 text-slate-300">A sample dashboard card stack showing live automation outcomes.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                "New leads synced to CRM",
                "Follow-up messages sent automatically",
                "Missed response rate reduced by 42%"
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold md:text-4xl">Benefits</h2>
          </Reveal>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit}>
                <motion.div whileHover={{ y: -3 }} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  {benefit}
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <Reveal>
          <div className="rounded-3xl border border-violet-400/30 bg-gradient-to-r from-violet-700/20 to-purple-500/10 p-8">
            <div className="grid items-start gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">Start saving time this week</h2>
                <p className="mt-3 text-slate-300">Book a free strategy call and get a clear automation roadmap for your team.</p>
                <div className="mt-6">
                  <CTAButton href={calendlyUrl ?? "#contact"} pulse>
                    {siteConfig.ctaLabel}
                  </CTAButton>
                </div>
                {calendlyUrl && <p className="mt-3 text-xs text-slate-400">Direct Calendly scheduling is enabled.</p>}
              </div>
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-white/10 py-8 text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm md:flex-row md:items-center md:justify-between md:px-6">
          <p>{siteConfig.name}</p>
          <a href={`mailto:${siteConfig.email}`} className="transition hover:text-violet-300">
            {siteConfig.email}
          </a>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
