"use client";

import { useEffect, useRef, useState } from "react";

const CORES = [
  "#000000", "#7f7f7f", "#c3c3c3", "#ffffff",
  "#e14b3c", "#f0762e", "#f5c431", "#8dc63f",
  "#3fa845", "#35b6c0", "#3f8fe0", "#3b4fc4",
  "#8d4fd0", "#d04fa8", "#a9713e", "#5b3a1e",
];

type Ferramenta = "lapis" | "pincel" | "borracha" | "balde";

const ESPESSURA: Record<Ferramenta, number> = {
  lapis: 2,
  pincel: 10,
  borracha: 18,
  balde: 0,
};

export default function Paint() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const desenhando = useRef(false);
  const [cor, setCor] = useState(CORES[0]);
  const [ferramenta, setFerramenta] = useState<Ferramenta>("lapis");

  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx || !canvas.current) return;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
  }, []);

  const ponto = (event: React.MouseEvent) => {
    const caixa = canvas.current!.getBoundingClientRect();
    return {
      x: (event.clientX - caixa.left) * (canvas.current!.width / caixa.width),
      y: (event.clientY - caixa.top) * (canvas.current!.height / caixa.height),
    };
  };

  const traçar = (event: React.MouseEvent) => {
    if (!desenhando.current || ferramenta === "balde") return;
    const ctx = canvas.current!.getContext("2d")!;
    const { x, y } = ponto(event);
    ctx.lineTo(x, y);
    ctx.strokeStyle = ferramenta === "borracha" ? "#fff" : cor;
    ctx.lineWidth = ESPESSURA[ferramenta];
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  };

  const começar = (event: React.MouseEvent) => {
    const ctx = canvas.current!.getContext("2d")!;
    const { x, y } = ponto(event);

    if (ferramenta === "balde") {
      /* Balde simplificado: pinta a tela inteira, como o "preencher tudo". */
      ctx.fillStyle = cor;
      ctx.fillRect(0, 0, canvas.current!.width, canvas.current!.height);
      return;
    }

    desenhando.current = true;
    ctx.beginPath();
    ctx.moveTo(x, y);
    traçar(event);
  };

  const limpar = () => {
    const ctx = canvas.current!.getContext("2d")!;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.current!.width, canvas.current!.height);
  };

  const Ferramenta = ({ id, children }: { id: Ferramenta; children: React.ReactNode }) => (
    <button
      onClick={() => setFerramenta(id)}
      aria-label={id}
      aria-pressed={ferramenta === id}
      className={`grid h-8 w-8 place-items-center rounded-md border ${
        ferramenta === id
          ? "border-[#1e5cb3] bg-gradient-to-b from-[#7fb2f0] to-[#3b7dd8] text-white"
          : "border-black/20 bg-gradient-to-b from-white to-[#e8e8e8]"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="w-full select-none">
      <div className="flex gap-3 p-2">
        <div className="flex flex-col gap-1.5">
          <Ferramenta id="lapis">
            <svg viewBox="0 0 16 16" className="h-4 w-4"><path d="M2 14l1-4L11 2l3 3-8 8Z" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
          </Ferramenta>
          <Ferramenta id="pincel">
            <svg viewBox="0 0 16 16" className="h-4 w-4"><path d="M4 12c0-2 2-2 2-4l4-6 3 3-6 4c-2 0-2 2-3 3Z" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
          </Ferramenta>
          <Ferramenta id="borracha">
            <svg viewBox="0 0 16 16" className="h-4 w-4"><rect x="2" y="8" width="12" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M5 8l4-5 5 4-3 3" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>
          </Ferramenta>
          <Ferramenta id="balde">
            <svg viewBox="0 0 16 16" className="h-4 w-4"><path d="M3 7l5-5 5 5-5 5Z" fill="none" stroke="currentColor" strokeWidth="1.4" /><path d="M13 10c1 2 1 3 0 3s-1-1 0-3Z" fill="currentColor" /></svg>
          </Ferramenta>
          <button onClick={limpar} className="os-btn mt-1 px-0 text-[11px]" aria-label="limpar">
            limpar
          </button>
        </div>

        <canvas
          ref={canvas}
          width={880}
          height={560}
          onMouseDown={começar}
          onMouseMove={traçar}
          onMouseUp={() => (desenhando.current = false)}
          onMouseLeave={() => (desenhando.current = false)}
          className="h-[300px] w-full cursor-crosshair rounded border border-black/30 bg-white shadow-inner"
        />
      </div>

      <div className="flex items-center gap-2 border-t border-black/10 bg-gradient-to-b from-[#f4f4f4] to-[#e6e6e6] px-2 py-1.5">
        <div className="flex flex-wrap gap-[3px]">
          {CORES.map((c) => (
            <button
              key={c}
              onClick={() => setCor(c)}
              aria-label={`cor ${c}`}
              className={`h-[18px] w-[18px] rounded-[3px] border ${
                cor === c ? "border-[#1e5cb3] ring-1 ring-[#7fb2f0]" : "border-black/25"
              }`}
              style={{ background: c }}
            />
          ))}
        </div>
        <span className="ml-auto text-[11px] text-black/55">{ferramenta}</span>
      </div>
    </div>
  );
}
