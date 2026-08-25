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

/**
 * Janela do System 7. A barra de título é listrada quando a janela está ativa
 * e lisa quando não está — era assim que se sabia quem tinha o foco, sem cor
 * nenhuma para ajudar. As caixas de fechar e de zoom só aparecem na ativa.
 */
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
        Math.max(0, event.clientX - arrasto.current.dx),
        Math.max(21, event.clientY - arrasto.current.dy), // nunca sob a menu bar
      );
    },
    [onMove],
  );

  useEffect(() => {
    const soltar = () => {
      arrasto.current = null;
      document.body.classList.remove("os-arrastando");
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
      className="os-window absolute"
      style={{
        left: state.x,
        top: state.y,
        width: state.width,
        zIndex: state.z,
        opacity: fechando ? 0 : 1,
        transition: fechando ? "opacity 80ms linear" : undefined,
      }}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={state.title}
    >
      <div
        onMouseDown={(event) => {
          onFocus();
          document.body.classList.add("os-arrastando");
          arrasto.current = { dx: event.clientX - state.x, dy: event.clientY - state.y };
        }}
        className={`flex h-[19px] items-center gap-1 border-b border-black px-1 ${
          ativa ? "os-titlebar-active" : "bg-white"
        }`}
      >
        {ativa ? (
          <button
            aria-label={`Fechar ${state.title}`}
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => {
              setFechando(true);
              window.setTimeout(onClose, 80);
            }}
            className="os-box"
          />
        ) : (
          <span className="w-[11px]" aria-hidden />
        )}

        <span
          className={`os-chrome mx-auto bg-white px-2 text-[9px] leading-none ${
            ativa ? "" : "text-neutral-500"
          }`}
        >
          {state.title}
        </span>

        {ativa ? (
          <span className="os-box os-box--zoom" aria-hidden />
        ) : (
          <span className="w-[11px]" aria-hidden />
        )}
      </div>

      <div className="relative">
        <div className="os-scroll max-h-[68vh] overflow-auto bg-white">{children}</div>
        {/* Canto de redimensionar: decorativo, mas a janela parecia incompleta sem ele. */}
        <span className="os-grow pointer-events-none absolute bottom-0 right-0" aria-hidden />
      </div>
    </div>
  );
}
