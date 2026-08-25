"use client";

import { useState } from "react";

/**
 * Randori: sorteia a posição do próximo treino. É a referência mais direta
 * ao tatame dentro do sistema — e a única janela aqui que não fala de código.
 */

const POSICOES = [
  { nome: "guarda fechada", nota: "paciência e quadril. quem tem pressa perde." },
  { nome: "meia-guarda", nota: "o joelho decide tudo antes da mão chegar." },
  { nome: "cem quilos", nota: "respirar já é vantagem." },
  { nome: "montada", nota: "não perca a base — é tudo que você tem." },
  { nome: "raspagem da borboleta", nota: "timing, nunca força." },
  { nome: "pegada nas costas", nota: "ganchos primeiro, estrangulamento depois." },
  { nome: "guarda De La Riva", nota: "a que mais gosto: parece confusão e é controle." },
  { nome: "raspagem de gancho", nota: "o oponente entrega o peso e você só redireciona." },
];

/** Faixa azul com a ponta preta e as quatro marcas de grau. */
function Faixa() {
  return (
    <svg viewBox="0 0 220 34" className="h-8 w-full" aria-hidden>
      <defs>
        <linearGradient id="g-faixa" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a7fd4" />
          <stop offset="45%" stopColor="#2a5cb0" />
          <stop offset="100%" stopColor="#1c4a94" />
        </linearGradient>
        <linearGradient id="g-faixa2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a8ede" />
          <stop offset="50%" stopColor="#2a5cb0" />
          <stop offset="100%" stopColor="#183f7d" />
        </linearGradient>
      </defs>
      <rect x="0" y="6" width="220" height="22" rx="3" fill="url(#g-faixa2)" />
      <rect x="152" y="6" width="60" height="22" fill="#141414" />
      {[160, 170, 180, 190].map((x) => (
        <rect key={x} x={x} y="10" width="4" height="14" rx="1" fill="#f0f0f0" opacity="0.9" />
      ))}
      <rect x="0" y="6" width="220" height="7" fill="#fff" opacity="0.14" />
    </svg>
  );
}

export default function Randori() {
  const [posicao, setPosicao] = useState(POSICOES[0]);
  const [girando, setGirando] = useState(false);

  const sortear = () => {
    setGirando(true);
    /* Um instante de espera: sortear sem pausa não parece sorteio. */
    window.setTimeout(() => {
      setPosicao(POSICOES[Math.floor(Math.random() * POSICOES.length)]);
      setGirando(false);
    }, 260);
  };

  return (
    <div className="w-full p-5">
      <Faixa />

      <div className="mt-5 rounded-lg border border-black/15 bg-white px-4 py-5 text-center shadow-inner">
        <p className="text-[11px] uppercase tracking-[0.14em] text-black/40">próxima posição</p>
        <p
          className="mt-2 text-[21px] font-semibold tracking-tight transition-opacity duration-150"
          style={{ opacity: girando ? 0.25 : 1 }}
        >
          {posicao.nome}
        </p>
        <p
          className="mt-1.5 text-[12px] text-black/60 transition-opacity duration-150"
          style={{ opacity: girando ? 0 : 1 }}
        >
          {posicao.nota}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button onClick={sortear} className="os-btn os-btn--azul">Sortear</button>
        <p className="text-[11px] leading-[1.5] text-black/45">
          faixa azul desde 2024 · a guarda continua sendo o melhor lugar para
          pensar
        </p>
      </div>
    </div>
  );
}
