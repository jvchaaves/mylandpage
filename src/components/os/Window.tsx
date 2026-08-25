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
 * Janela do System 7: barra de título listrada quando ativa, close box
 * quadrado à esquerda e arraste pelo título. Sem minimizar nem redimensionar —
 * o System 7 tinha ambos, mas eles não carregam conteúdo nenhum aqui.
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
      const x = Math.max(0, event.clientX - arrasto.current.dx);
      const y = Math.max(20, event.clientY - arrasto.current.dy); // nunca sob a menu bar
      onMove(x, y);
    },
    [onMove],
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

  const iniciarArrasto = (event: React.MouseEvent) => {
    onFocus();
    arrasto.current = {
      dx: event.clientX - state.x,
      dy: event.clientY - state.y,
    };
  };

  return (
    <div
      className="os-window absolute"
      style={{
        left: state.x,
        top: state.y,
        width: state.width,
        zIndex: state.z,
        opacity: fechando ? 0 : 1,
        transition: fechando ? "opacity 90ms linear" : undefined,
      }}
      onMouseDown={onFocus}
      role="dialog"
      aria-label={state.title}
    >
      <div
        onMouseDown={iniciarArrasto}
        className={`flex h-[18px] items-center border-b border-black px-1 ${
          ativa ? "os-titlebar-active" : "bg-white"
        }`}
      >
        {ativa && (
          <button
            aria-label={`Fechar ${state.title}`}
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => {
              setFechando(true);
              window.setTimeout(onClose, 90);
            }}
            className="h-[11px] w-[11px] border border-black bg-white active:bg-black"
          />
        )}

        <span
          className={`os-chrome mx-auto px-2 text-[9px] leading-none ${
            ativa ? "bg-white" : "bg-white text-neutral-500"
          }`}
        >
          {state.title}
        </span>

        {/* espelha a largura do close box para o título ficar de fato centralizado */}
        <span className="h-[11px] w-[11px]" aria-hidden />
      </div>

      <div className="os-scroll max-h-[70vh] overflow-auto bg-white">{children}</div>
    </div>
  );
}
