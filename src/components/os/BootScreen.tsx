"use client";

import { useEffect, useState } from "react";

/**
 * Boot do Mac OS X: fundo cinza claro, maçã cinza no centro e o indicador
 * circular girando. Curto de propósito — ninguém quer esperar um portfólio
 * ligar.
 */
export default function BootScreen({ onPronto }: { onPronto: () => void }) {
  const [saindo, setSaindo] = useState(false);

  useEffect(() => {
    const fim = window.setTimeout(() => setSaindo(true), 1000);
    const pronto = window.setTimeout(onPronto, 1450);
    return () => {
      window.clearTimeout(fim);
      window.clearTimeout(pronto);
    };
  }, [onPronto]);

  return (
    <div
      className="absolute inset-0 z-[3000] flex flex-col items-center justify-center bg-[#d8d8d8]"
      style={{ opacity: saindo ? 0 : 1, transition: "opacity 420ms ease" }}
    >
      <svg viewBox="0 0 14 17" className="h-20 w-16 text-[#4a4a4a]" aria-hidden>
        <path
          fill="currentColor"
          d="M11.2 9c0-2 1.6-3 1.7-3.1-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7C3.1 4.3 1.8 5.1 1.1 6.3c-1.3 2.3-.3 5.7.9 7.5.6.9 1.4 2 2.4 2 .9 0 1.3-.6 2.4-.6 1.1 0 1.4.6 2.4.6s1.7-.9 2.3-1.8c.7-1 1-2.1 1-2.1s-2-.8-2-2.9ZM9.3 3.1c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.2 1.2-.5.6-.9 1.5-.8 2.3.9.1 1.7-.4 2.2-1.1Z"
        />
      </svg>

      {/* Spinner de 12 traços, cada um com o próprio atraso. */}
      <div className="relative mt-8 h-6 w-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-[7px] w-[2px] -translate-x-1/2 rounded-full bg-[#5a5a5a]"
            style={{
              transform: `rotate(${i * 30}deg) translateY(-9px)`,
              animation: `os-spin 1s linear ${i * 0.083}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`@keyframes os-spin { 0%,100% { opacity: .18 } 10% { opacity: .95 } }`}</style>
    </div>
  );
}
