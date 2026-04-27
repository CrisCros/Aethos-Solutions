import Link from "next/link";

export function CTASection({ title, subtitle, primaryLabel, secondaryLabel = "" }: { title: string; subtitle: string; primaryLabel: string; secondaryLabel?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="rounded-3xl border border-violetBrand-300/40 bg-gradient-to-r from-violetBrand-500/20 to-violetBrand-300/5 p-8">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-700 dark:text-slate-200">{subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-xl bg-violetBrand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-violetBrand-500">
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link href="/work" className="rounded-xl border border-violetBrand-300/50 px-5 py-3 text-sm font-semibold">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
