"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  pulse?: boolean;
};

export function CTAButton({ href, children, variant = "primary", pulse = false }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-violet-600 text-white hover:bg-violet-500 focus-visible:ring-violet-300"
      : "border border-white/20 bg-white/5 text-slate-100 hover:border-violet-300 hover:text-violet-200 focus-visible:ring-white/30";

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex">
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 ${styles} ${
          pulse ? "animate-cta-pulse" : ""
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
