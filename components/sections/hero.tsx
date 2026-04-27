import Link from "next/link";

export function Hero({ title, subtitle, ctaBook, ctaWork }: { title: string; subtitle: string; ctaBook: string; ctaWork: string }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-12 md:grid-cols-2 md:px-6 md:pt-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violetBrand-500">Aethos Solutions</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-4 text-base text-slate-700 dark:text-slate-300">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-xl bg-violetBrand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violetBrand-500">
            {ctaBook}
          </Link>
          <Link href="/work" className="rounded-xl border border-violetBrand-300/50 px-5 py-3 text-sm font-semibold">
            {ctaWork}
          </Link>
        </div>
      </div>
      <div className="glass rounded-2xl p-5">
        <p className="text-sm font-semibold">Automation Control Panel</p>
        <div className="mt-4 grid gap-3 text-sm">
          <div className="rounded-lg border border-violetBrand-300/30 p-3">22 new leads captured today</div>
          <div className="rounded-lg border border-violetBrand-300/30 p-3">Follow-up automation response time: 4 min</div>
          <div className="rounded-lg border border-violetBrand-300/30 p-3">CRM sync health: 99.8%</div>
        </div>
      </div>
    </section>
  );
}
