"use client";

import { useEffect, useState } from "react";

/** Maçã do Mac OS X: silhueta sólida, sem as listras do modelo antigo. */
function Maca({ className = "h-[15px] w-[13px]" }) {
  return (
    <svg viewBox="0 0 14 17" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M11.2 9c0-2 1.6-3 1.7-3.1-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7C3.1 4.3 1.8 5.1 1.1 6.3c-1.3 2.3-.3 5.7.9 7.5.6.9 1.4 2 2.4 2 .9 0 1.3-.6 2.4-.6 1.1 0 1.4.6 2.4.6s1.7-.9 2.3-1.8c.7-1 1-2.1 1-2.1s-2-.8-2-2.9ZM9.3 3.1c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.2 1.2-.5.6-.9 1.5-.8 2.3.9.1 1.7-.4 2.2-1.1Z"
      />
    </svg>
  );
}

const MENUS = ["Arquivo", "Editar", "Visualizar", "Janela"];

export default function MenuBar({
  appAtivo,
  onSobre,
  onFecharTudo,
}: {
  appAtivo: string;
  onSobre: () => void;
  onFecharTudo: () => void;
}) {
  const [aberto, setAberto] = useState<string | null>(null);
  const [relogio, setRelogio] = useState("");

  useEffect(() => {
    const tick = () => {
      const agora = new Date();
      const dia = agora.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" });
      const hora = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
      setRelogio(`${dia.replace(".", "")} ${hora}`);
    };
    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const fechar = () => setAberto(null);
    document.addEventListener("click", fechar);
    return () => document.removeEventListener("click", fechar);
  }, [aberto]);

  return (
    <div className="os-menubar relative z-[1000] flex h-[22px] items-center gap-1 px-2 text-[13px]">
      <div className="relative">
        <button
          data-open={aberto === "maca"}
          onClick={(event) => {
            event.stopPropagation();
            setAberto(aberto === "maca" ? null : "maca");
          }}
          className="os-menu-item flex items-center px-2 py-[2px]"
          aria-label="Menu Apple"
        >
          <Maca />
        </button>

        {aberto === "maca" && (
          <div className="os-menu-drop absolute left-0 top-[22px] w-[214px] py-1 text-[13px]">
            <button onClick={onSobre} className="os-menu-item block w-full px-3 py-[3px] text-left">
              Sobre este Mac
            </button>
            <div className="my-1 border-t border-black/10" />
            <button onClick={onFecharTudo} className="os-menu-item block w-full px-3 py-[3px] text-left">
              Forçar encerrar tudo…
            </button>
            <a href="/" className="os-menu-item block w-full px-3 py-[3px] text-left">
              Sair para o site
            </a>
          </div>
        )}
      </div>

      <span className="px-2 py-[2px] font-bold">{appAtivo}</span>
      {MENUS.map((menu) => (
        <span key={menu} className="px-2 py-[2px] text-black/45">
          {menu}
        </span>
      ))}

      <span className="ml-auto flex items-center gap-3 pr-1">
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-black/55" aria-hidden>
          <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M11 11l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span className="tabular-nums">{relogio}</span>
      </span>
    </div>
  );
}
