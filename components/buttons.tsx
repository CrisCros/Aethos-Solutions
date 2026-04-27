import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function CTAButton({ href, children, variant = "primary" }: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-primary-500 text-white hover:bg-primary-600"
      : "border border-slate-300 bg-white text-slate-700 hover:border-primary-500 hover:text-primary-600";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
