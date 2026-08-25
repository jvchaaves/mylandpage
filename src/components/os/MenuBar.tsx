"use client";

import { useEffect, useState } from "react";

/** Maçã listrada do Macintosh clássico, desenhada em traço para ficar 1-bit. */
function MacaGlyph() {
  return (
    <svg viewBox="0 0 14 16" className="os-glyph h-[13px] w-[12px]" aria-hidden>
      <path
        fill="currentColor"
        d="M9.6 0c.1 1-.3 1.9-.9 2.5-.6.7-1.6 1.2-2.5 1.1-.1-1 .4-2 .9-2.6C7.8.3 8.8-.1 9.6 0Zm3 11.7c-.5 1.1-.7 1.6-1.3 2.6-.9 1.3-2.1 3-3.6 3-1.4 0-1.7-.9-3.5-.9s-2.2.9-3.5.9C-.8 17.4-2 15.9-2.9 14.6-5.4 11-5.7 6.8-4.1 4.5c1.1-1.6 2.9-2.6 4.6-2.6 1.7 0 2.8 1 4.2 1 1.4 0 2.2-1 4.2-1 1.5 0 3.1.8 4.2 2.2-3.7 2-3.1 7.3.5 8.6Z"
        transform="translate(1.5 0) scale(0.72)"
      />
    </svg>
  );
}

const MENUS = ["Arquivo", "Editar", "Visualizar"];

export default function MenuBar({
  onSobre,
  onBater,
}: {
  onSobre: () => void;
  onBater: () => void;
}) {
  const [aberto, setAberto] = useState<string | null>(null);
  const [relogio, setRelogio] = useState("");

  useEffect(() => {
    const tick = () => {
      const agora = new Date();
      setRelogio(
        agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      );
    };
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const fechar = () => setAberto(null);
    document.addEventListener("click", fechar);
    return () => document.removeEventListener("click", fechar);
  }, [aberto]);

  return (
    <div className="os-chrome os-menubar relative z-[1000] flex h-[20px] items-center gap-1 border-b border-black bg-white px-2 text-[9px] leading-none">
      <div className="relative">
        <button
          data-open={aberto === "maca"}
          onClick={(event) => {
            event.stopPropagation();
            setAberto(aberto === "maca" ? null : "maca");
          }}
          className="os-menu-item flex items-center px-2 py-[3px]"
          aria-label="Menu Apple"
        >
          <MacaGlyph />
        </button>

        {aberto === "maca" && (
          <div className="os-window absolute left-0 top-[20px] w-[190px] py-1">
            <button
              onClick={onSobre}
              className="os-menu-item block w-full px-3 py-[3px] text-left text-[10px]"
            >
              Sobre este Macintosh…
            </button>
            <div className="my-1 border-t border-dotted border-black" />
            <p className="px-3 py-[3px] text-[10px] text-neutral-400">Painel de Controle</p>
            <p className="px-3 py-[3px] text-[10px] text-neutral-400">Bloco de Notas</p>
          </div>
        )}
      </div>

      {MENUS.map((menu) => (
        <span key={menu} className="px-2 py-[3px] text-neutral-400">
          {menu}
        </span>
      ))}

      <div className="relative">
        <button
          data-open={aberto === "especial"}
          onClick={(event) => {
            event.stopPropagation();
            setAberto(aberto === "especial" ? null : "especial");
          }}
          className="os-menu-item px-2 py-[3px]"
        >
          Especial
        </button>

        {aberto === "especial" && (
          <div className="os-window absolute left-0 top-[20px] w-[168px] py-1">
            <button
              onClick={onBater}
              className="os-menu-item block w-full px-3 py-[3px] text-left text-[9px]"
            >
              Bater — fecha tudo
            </button>
            <div className="my-1 border-t border-dotted border-black" />
            <a
              href="/"
              className="os-menu-item block w-full px-3 py-[3px] text-left text-[9px]"
            >
              Desligar e voltar ao site
            </a>
          </div>
        )}
      </div>

      <span className="ml-auto px-1 tabular-nums">{relogio}</span>
    </div>
  );
}
