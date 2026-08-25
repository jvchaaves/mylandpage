"use client";

import { useRef, useState } from "react";

export interface DockApp {
  id: string;
  label: string;
  Icone: (props: { className?: string }) => JSX.Element;
}

/**
 * Dock com magnificação: o ícone sob o cursor cresce e os vizinhos crescem
 * menos, em degradê. Era a assinatura do Mac OS X — sem isso o dock vira
 * só uma fileira de botões.
 */
export default function Dock({
  apps,
  abertos,
  onAbrir,
  Lixeira,
}: {
  apps: DockApp[];
  abertos: string[];
  onAbrir: (id: string) => void;
  Lixeira: (props: { className?: string }) => JSX.Element;
}) {
  const [foco, setFoco] = useState<number | null>(null);
  const [tip, setTip] = useState<string | null>(null);
  const barra = useRef<HTMLDivElement>(null);

  const escala = (indice: number) => {
    if (foco === null) return 1;
    const distancia = Math.abs(indice - foco);
    if (distancia === 0) return 1.55;
    if (distancia === 1) return 1.28;
    if (distancia === 2) return 1.1;
    return 1;
  };

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-2 z-[900] flex justify-center">
      <div
        ref={barra}
        onMouseLeave={() => {
          setFoco(null);
          setTip(null);
        }}
        className="os-dock pointer-events-auto flex items-end gap-1 px-2 pb-1 pt-2"
      >
        {apps.map((app, indice) => (
          <button
            key={app.id}
            onMouseEnter={() => {
              setFoco(indice);
              setTip(app.id);
            }}
            onClick={() => onAbrir(app.id)}
            aria-label={app.label}
            className={`os-dock-item relative flex flex-col items-center ${
              abertos.includes(app.id) ? "os-dock-aberto" : ""
            }`}
            style={{ transform: `scale(${escala(indice)}) translateY(${foco === indice ? -6 : 0}px)` }}
          >
            {tip === app.id && (
              <span className="os-dock-tip absolute -top-9 whitespace-nowrap px-2 py-[2px] text-[12px]">
                {app.label}
              </span>
            )}
            <app.Icone className="os-icone-img h-12 w-12" />
            {/* Reflexo no "chão" do dock: cópia espelhada, esmaecida. */}
            <app.Icone className="os-dock-reflexo h-12 w-12" />
          </button>
        ))}

        {/* Separador e lixeira, sempre no fim do dock. */}
        <span className="mx-1 h-11 w-px self-center bg-white/45" aria-hidden />
        <span
          onMouseEnter={() => {
            setFoco(apps.length + 1);
            setTip("lixo");
          }}
          className="os-dock-item flex flex-col items-center"
          style={{ transform: `scale(${escala(apps.length + 1)})` }}
        >
          {tip === "lixo" && (
            <span className="os-dock-tip absolute -top-9 whitespace-nowrap px-2 py-[2px] text-[12px]">
              Lixo
            </span>
          )}
          <Lixeira className="os-icone-img h-12 w-12" />
        </span>
      </div>
    </div>
  );
}
