"use client";

import { useCallback, useState } from "react";
import BootScreen from "@/components/os/BootScreen";
import MenuBar from "@/components/os/MenuBar";
import Dock from "@/components/os/Dock";
import Window, { type WindowState } from "@/components/os/Window";
import DesktopIcon from "@/components/os/DesktopIcon";
import Terminal from "@/components/os/Terminal";
import Paint from "@/components/os/Paint";
import { SobreEsteMac, Projetos, CurriculoPDF, Notas } from "@/components/os/apps";
import {
  DiscoIcon, FinderIcon, PastaIcon, PaintIcon,
  TerminalIcon, DocumentoIcon, PerfilIcon, LixeiraIcon,
} from "@/components/os/icons";

type AppId = "sobre" | "projetos" | "curriculo" | "notas" | "paint" | "terminal";

const APPS: Record<AppId, { titulo: string; largura: number; conteudo: React.ReactNode }> = {
  sobre: { titulo: "Sobre este Mac", largura: 400, conteudo: <SobreEsteMac /> },
  projetos: { titulo: "Projetos", largura: 520, conteudo: <Projetos /> },
  curriculo: { titulo: "Currículo", largura: 560, conteudo: <CurriculoPDF /> },
  notas: { titulo: "Notas", largura: 330, conteudo: <Notas /> },
  paint: { titulo: "Paint", largura: 560, conteudo: <Paint /> },
  terminal: { titulo: "Terminal", largura: 536, conteudo: <Terminal /> },
};

const NA_MESA: { id: AppId; label: string; Icone: (p: { className?: string }) => JSX.Element }[] = [
  { id: "sobre", label: "Macintosh HD", Icone: DiscoIcon },
  { id: "projetos", label: "Projetos", Icone: PastaIcon },
  { id: "curriculo", label: "Currículo.pdf", Icone: DocumentoIcon },
  { id: "paint", label: "Paint", Icone: PaintIcon },
];

const NO_DOCK: { id: AppId; label: string; Icone: (p: { className?: string }) => JSX.Element }[] = [
  { id: "sobre", label: "Sobre este Mac", Icone: PerfilIcon },
  { id: "projetos", label: "Projetos", Icone: FinderIcon },
  { id: "curriculo", label: "Currículo", Icone: DocumentoIcon },
  { id: "notas", label: "Notas", Icone: PastaIcon },
  { id: "paint", label: "Paint", Icone: PaintIcon },
  { id: "terminal", label: "Terminal", Icone: TerminalIcon },
];

export default function Desktop() {
  const [janelas, setJanelas] = useState<WindowState[]>([
    { id: "sobre", title: APPS.sobre.titulo, x: 120, y: 84, width: APPS.sobre.largura, z: 1 },
  ]);
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const [topo, setTopo] = useState(1);
  const [ligado, setLigado] = useState(false);

  const focar = useCallback((id: string) => {
    setTopo((z) => {
      const proximo = z + 1;
      setJanelas((atual) => atual.map((j) => (j.id === id ? { ...j, z: proximo } : j)));
      return proximo;
    });
  }, []);

  const abrir = useCallback(
    (id: string) => {
      const app = APPS[id as AppId];
      if (!app) return;
      setJanelas((atual) => {
        if (atual.some((j) => j.id === id)) return atual;
        const deslocamento = atual.length * 26;
        return [
          ...atual,
          {
            id,
            title: app.titulo,
            x: 120 + deslocamento,
            y: 84 + deslocamento,
            width: app.largura,
            z: topo + 1,
          },
        ];
      });
      focar(id);
    },
    [focar, topo],
  );

  const ativa = janelas.reduce<WindowState | null>(
    (maior, j) => (!maior || j.z > maior.z ? j : maior),
    null,
  );

  return (
    <div
      className="os-root os-wallpaper relative h-screen w-full overflow-hidden"
      onClick={() => setSelecionado(null)}
    >
      <div className="os-stars pointer-events-none absolute inset-0" aria-hidden />
      <div className="os-atmosfera pointer-events-none absolute inset-0" aria-hidden />

      {/* Um gerenciador de janelas não cabe num telefone. */}
      <div className="absolute inset-0 z-[2000] flex items-center justify-center bg-[#0b2a5c] p-8 sm:hidden">
        <div className="os-window max-w-[290px] p-5 text-center">
          <p className="text-[15px] font-semibold">João OS X</p>
          <p className="mt-2 text-[12px] leading-[1.6] text-black/70">
            Este Mac precisa de uma tela maior. Abra em um computador — ou volte
            para o site, que funciona em qualquer tamanho.
          </p>
          <a className="os-btn os-btn--azul mt-4 inline-block" href="/">Ir para o site</a>
        </div>
      </div>

      {!ligado && <BootScreen onPronto={() => setLigado(true)} />}

      <MenuBar
        appAtivo={ativa ? APPS[ativa.id as AppId].titulo : "Finder"}
        onSobre={() => abrir("sobre")}
        onFecharTudo={() => setJanelas([])}
      />

      <div className="absolute right-5 top-8 flex flex-col items-center gap-3">
        {NA_MESA.map(({ id, label, Icone }) => (
          <DesktopIcon
            key={id}
            label={label}
            selecionado={selecionado === id}
            onSelect={() => setSelecionado(id)}
            onOpen={() => abrir(id)}
          >
            <Icone className="os-icone-img h-14 w-14" />
          </DesktopIcon>
        ))}

        <div className="mt-6">
          <DesktopIcon
            label="Lixo"
            selecionado={selecionado === "lixo"}
            onSelect={() => setSelecionado("lixo")}
            onOpen={() => undefined}
          >
            <LixeiraIcon className="os-icone-img h-14 w-14" />
          </DesktopIcon>
        </div>
      </div>

      {janelas.map((janela) => (
        <Window
          key={janela.id}
          state={janela}
          ativa={ativa?.id === janela.id}
          onFocus={() => focar(janela.id)}
          onClose={() => setJanelas((atual) => atual.filter((j) => j.id !== janela.id))}
          onMove={(x, y) =>
            setJanelas((atual) => atual.map((j) => (j.id === janela.id ? { ...j, x, y } : j)))
          }
        >
          {APPS[janela.id as AppId].conteudo}
        </Window>
      ))}

      <Dock
        apps={NO_DOCK}
        abertos={janelas.map((j) => j.id)}
        onAbrir={abrir}
        Lixeira={LixeiraIcon}
      />
    </div>
  );
}
