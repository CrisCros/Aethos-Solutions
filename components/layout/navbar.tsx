"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useSitePreferences } from "@/lib/providers/site-preferences";

const routes = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "work", href: "/work" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" }
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { dict } = useSitePreferences();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#07070b]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-violetBrand-600 dark:text-violetBrand-300">
          Aethos Solutions
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition hover:text-violetBrand-500 ${pathname === route.href ? "text-violetBrand-600 dark:text-violetBrand-300" : "text-slate-600 dark:text-slate-300"}`}
            >
              {dict.nav[route.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <button type="button" className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
          <span className="text-2xl">☰</span>
        </button>
      </div>

      {open && (
        <div className="glass mx-4 mb-3 rounded-2xl p-4 md:hidden">
          <div className="grid gap-3">
            {routes.map((route) => (
              <Link key={route.href} href={route.href} onClick={() => setOpen(false)} className="text-sm font-medium">
                {dict.nav[route.key]}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
