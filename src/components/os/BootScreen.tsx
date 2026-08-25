"use client";

import { useEffect, useState } from "react";

/**
 * O Happy Mac: o rosto que aparecia quando o sistema encontrava um disco de
 * inicialização válido. Era o primeiro sinal de que a máquina estava viva.
 */
function HappyMac() {
  return (
    <svg viewBox="0 0 48 56" className="h-[112px] w-[96px]" aria-hidden>
      <rect x="2" y="2" width="44" height="52" rx="4" fill="#fff" stroke="#000" strokeWidth="2" />
      <rect x="7" y="7" width="34" height="26" fill="#fff" stroke="#000" strokeWidth="1.5" />
      {/* olhos e sorriso, na mesma grade grosseira do original */}
      <rect x="15" y="15" width="3" height="4" fill="#000" />
      <rect x="30" y="15" width="3" height="4" fill="#000" />
      <path d="M16 24q8 6 16 0" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="square" />
      <rect x="8" y="38" width="16" height="9" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M28 44h11" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export default function BootScreen({ onPronto }: { onPronto: () => void }) {
  const [saindo, setSaindo] = useState(false);

  useEffect(() => {
    const fim = window.setTimeout(() => setSaindo(true), 1100);
    const pronto = window.setTimeout(onPronto, 1500);
    return () => {
      window.clearTimeout(fim);
      window.clearTimeout(pronto);
    };
  }, [onPronto]);

  return (
    <div
      className="absolute inset-0 z-[3000] flex flex-col items-center justify-center bg-white"
      style={{ opacity: saindo ? 0 : 1, transition: "opacity 380ms linear" }}
    >
      <HappyMac />
      <p className="os-chrome mt-6 text-[10px]">Bem-vindo ao Macintosh</p>
    </div>
  );
}
