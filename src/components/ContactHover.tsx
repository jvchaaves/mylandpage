"use client";

import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import type { Canal } from "@/lib/contatos";

const ICONES = { mail: Mail, github: Github, linkedin: Linkedin } as const;

/**
 * Ícone de contato com prévia do perfil ao passar o mouse. O balão sai do
 * fluxo e nasce acima do gatilho, com a seta apontando para ele.
 */
export default function ContactHover({
  canal,
  tamanho = 20,
}: {
  canal: Canal;
  tamanho?: number;
}) {
  const [aberto, setAberto] = useState(false);
  const Icone = ICONES[canal.icone];
  const externo = !canal.href.startsWith("mailto:");
  const { previa } = canal;

  return (
    <a
      href={canal.href}
      target={externo ? "_blank" : undefined}
      rel={externo ? "noopener noreferrer" : undefined}
      aria-label={canal.label}
      onMouseEnter={() => setAberto(true)}
      onMouseLeave={() => setAberto(false)}
      onFocus={() => setAberto(true)}
      onBlur={() => setAberto(false)}
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-ink-muted transition-colors duration-200 hover:border-line-strong hover:text-accent"
    >
      <div
        className={`pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 w-[260px] -translate-x-1/2 transition-all duration-200 ease-smooth ${
          aberto ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0"
        }`}
        aria-hidden
      >
        <div className="rounded-xl border border-line-strong bg-surface-2 p-4 text-left shadow-2xl">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previa.avatar}
              alt=""
              className={`h-12 w-12 shrink-0 object-cover ${
                previa.avatarQuadrado ? "rounded-lg bg-surface p-0.5" : "rounded-full"
              }`}
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{previa.titulo}</p>
              <p className="truncate text-xs text-ink-muted">{previa.subtitulo}</p>
            </div>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-ink-secondary">{previa.descricao}</p>

          {previa.metricas && (
            <div className="mt-3 flex gap-4 border-t border-line pt-3">
              {previa.metricas.map((metrica) => (
                <p key={metrica.rotulo} className="text-xs text-ink-muted">
                  <span className="font-semibold text-ink">{metrica.valor}</span> {metrica.rotulo}
                </p>
              ))}
            </div>
          )}
        </div>

        <span className="mx-auto -mt-[7px] block h-3 w-3 rotate-45 border-b border-r border-line-strong bg-surface-2" />
      </div>

      <Icone size={tamanho} />
    </a>
  );
}
