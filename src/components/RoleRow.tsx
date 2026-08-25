"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Role } from "@/lib/experience";
import { t, type Lang } from "@/lib/i18n";

/**
 * Descrições longas cortadas em duas linhas: oito cargos seguidos de texto
 * corrido não são lidos. O detalhe continua ali para quem se interessar.
 */
const LIMITE = 170;

export default function RoleRow({ role, lang }: { role: Role; lang: Lang }) {
  const copy = t(lang).experience;
  const longa = role.description.length > LIMITE;
  const [aberta, setAberta] = useState(false);

  return (
    <article className="grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-[11rem_1fr] md:gap-10">
      <p className="pt-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
        {role.period}
      </p>

      <div>
        <h3 className="text-lg font-semibold text-ink">{role.title}</h3>
        <p className="mt-0.5 text-sm text-accent">{role.org}</p>

        <p
          className={`mt-3 max-w-prose text-sm leading-relaxed text-ink-secondary ${
            longa && !aberta ? "line-clamp-2" : ""
          }`}
        >
          {role.description}
        </p>

        {longa && (
          <button
            onClick={() => setAberta((v) => !v)}
            aria-expanded={aberta}
            className="mt-2 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors duration-200 hover:text-accent"
          >
            {aberta ? copy.less : copy.more}
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-200 ${aberta ? "rotate-180" : ""}`}
            />
          </button>
        )}

        {role.highlight && (
          <p className="mt-3 inline-flex rounded border border-line-strong px-2.5 py-1 text-xs text-ink-secondary">
            {role.highlight}
          </p>
        )}

        {role.tags && (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
            {role.tags.map((tag) => (
              <li key={tag} className="font-mono text-xs text-ink-muted">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
