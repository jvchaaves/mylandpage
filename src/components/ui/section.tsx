import type { ReactNode } from "react";

/**
 * Cabeçalho editorial: rótulo pequeno em mono + título display.
 * Usado por todas as seções para manter uma única hierarquia.
 */
export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 sm:mb-16">
      <p className="mb-4 font-mono text-label uppercase text-ink-muted">
        {label}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-secondary">
          {description}
        </p>
      )}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-line px-6 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}
