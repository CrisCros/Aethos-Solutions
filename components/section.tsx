import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-14 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
