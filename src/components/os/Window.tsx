"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface WindowState {
  id: string;
  title: string;
  x: number;
  y: number;
  width: number;
  z: number;
}

/** Glifos do semáforo, que no Aqua só apareciam com o mouse sobre o grupo. */
const GLIFO = {
  fechar: "M3 3l6 6M9 3l-6 6",
  min: "M3 6h6",
  zoom: "M3.5 3.5h5v5h-5z",
} as const;

export default function Window({
  state,
  ativa,
  onFocus,
  onClose,
  onMove,
  children,
}: {
  state: WindowState;
  ativa: boolean;
  onFocus: () => void;
  onClose: () => void;
  onMove: (x: number, y: number) => void;
  children: React.ReactNode;
}) {
  const arrasto = useRef<{ dx: number; dy: number } | null>(null);
  const [fechando, setFechando] = useState(false);

  const aoMover = useCallback(
    (event: MouseEvent) => {
      if (!arrasto.current) return;
      onMove(
        Math.max(-state.width + 120, event.clientX - arrasto.current.dx),
        Math.max(24, event.clientY - arrasto.current.dy),
      );
    },
    [onMove, state.width],
  );

  useEffect(() => {
    const soltar = () => {
      arrasto.current = null;
    };
    window.addEventListener("mousemove", aoMover);
    window.addEventListener("mouseup", soltar);
    return () => {
      window.removeEventListener("mousemove", aoMover);
      window.removeEventListener("mouseup", soltar);
    };
  }, [aoMover]);

  return (
    <div
      className={`os-window os-window--abrindo absolute ${fechando ? "pointer-events-none" : ""}`}
      style={{
        left: state.x,
        top: state.y,
        width: state.width,
        zIndex: state.z,
        opacity: fechando ? 0 : 1,
        transform: fechando ? "scale(0.9)" : undefined,
        transition: fechando ? "opacity 140ms ease, transform 140ms ease" : undefined,
      }}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={state.title}
    >
      <div
        onMouseDown={(event) => {
          onFocus();
          arrasto.current = { dx: event.clientX - state.x, dy: event.clientY - state.y };
        }}
        onDoubleClick={() => undefined}
        className={`os-titlebar flex h-[22px] items-center gap-2 px-2 ${
          ativa ? "" : "os-titlebar--inativa"
        }`}
      >
        <div className="os-traffic-grupo flex items-center gap-[6px]">
          <button
            aria-label={`Fechar ${state.title}`}
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => {
              setFechando(true);
              window.setTimeout(onClose, 140);
            }}
            className={`os-traffic ${ativa ? "os-traffic--fechar" : "os-traffic--off"} grid place-items-center`}
          >
            {ativa && (
              <svg viewBox="0 0 12 12" className="os-traffic-glifo h-2 w-2">
                <path d={GLIFO.fechar} stroke="#4a0f0a" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <span
            className={`os-traffic ${ativa ? "os-traffic--min" : "os-traffic--off"} grid place-items-center`}
            aria-hidden
          >
            {ativa && (
              <svg viewBox="0 0 12 12" className="os-traffic-glifo h-2 w-2">
                <path d={GLIFO.min} stroke="#5a3c05" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </span>

          <span
            className={`os-traffic ${ativa ? "os-traffic--zoom" : "os-traffic--off"} grid place-items-center`}
            aria-hidden
          >
            {ativa && (
              <svg viewBox="0 0 12 12" className="os-traffic-glifo h-2 w-2">
                <path d={GLIFO.zoom} stroke="#0c3d13" strokeWidth="1.4" fill="none" />
              </svg>
            )}
          </span>
        </div>

        <span className="mx-auto pr-12 text-[13px] font-semibold tracking-[-0.01em]">
          {state.title}
        </span>
      </div>

      <div className="os-body os-scroll max-h-[70vh] overflow-auto">{children}</div>
    </div>
  );
}
