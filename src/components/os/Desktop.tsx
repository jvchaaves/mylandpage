"use client";

import { useCallback, useState } from "react";
import BootScreen from "@/components/os/BootScreen";
import MenuBar from "@/components/os/MenuBar";
import Window, { type WindowState } from "@/components/os/Window";
import DesktopIcon from "@/components/os/DesktopIcon";
import Terminal from "@/components/os/Terminal";
import { SobreEsteMac, Projetos, CurriculoPDF, BlocoDeNotas } from "@/components/os/apps";
import { DiscoIcon, PastaIcon, DocumentoIcon, TerminalIcon, NotasIcon, LixeiraIcon } from "@/components/os/icons";

type AppId = "sobre" | "projetos" | "curriculo" | "notas" | "terminal";

const APPS: Record<AppId, { titulo: string; largura: number; conteudo: React.ReactNode }> = {
  sobre: { titulo: "Sobre este Macintosh", largura: 400, conteudo: <SobreEsteMac /> },
  projetos: { titulo: "Projetos", largura: 460, conteudo: <Projetos /> },
  curriculo: { titulo: "Currículo", largura: 540, conteudo: <CurriculoPDF /> },
  notas: { titulo: "Bloco de Notas", largura: 340, conteudo: <BlocoDeNotas /> },
  terminal: { titulo: "Terminal", largura: 536, conteudo: <Terminal /> },
};

const ICONES: { id: AppId; label: string; Glyph: () => JSX.Element }[] = [
  { id: "sobre", label: "Macintosh HD", Glyph: DiscoIcon },
  { id: "projetos", label: "Projetos", Glyph: PastaIcon },
  { id: "curriculo", label: "Currículo.pdf", Glyph: DocumentoIcon },
  { id: "notas", label: "Bloco de Notas", Glyph: NotasIcon },
  { id: "terminal", label: "Terminal", Glyph: TerminalIcon },
];

export default function Desktop() {
  /* Abre com a "Sobre este Macintosh", como um Mac recém-ligado. */
  const [janelas, setJanelas] = useState<WindowState[]>([
    { id: "sobre", title: APPS.sobre.titulo, x: 96, y: 68, width: APPS.sobre.largura, z: 1 },
  ]);
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const [topo, setTopo] = useState(1);
  const [ligado, setLigado] = useState(false);

  const focar = useCallback(
    (id: string) => {
      setTopo((z) => {
        const proximo = z + 1;
        setJanelas((atual) =>
          atual.map((j) => (j.id === id ? { ...j, z: proximo } : j)),
        );
        return proximo;
      });
    },
    [],
  );

  const abrir = useCallback(
    (id: AppId) => {
      const app = APPS[id];
      setJanelas((atual) => {
        if (atual.some((j) => j.id === id)) return atual;
        /* Cascata: cada janela nova nasce deslocada da anterior. */
        const deslocamento = atual.length * 22;
        return [
          ...atual,
          {
            id,
            title: app.titulo,
            x: 96 + deslocamento,
            y: 68 + deslocamento,
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
      className="os-root os-desktop-pattern relative h-screen w-full overflow-hidden"
      onClick={() => setSelecionado(null)}
    >
      {/* Arrastar janelas em tela de telefone não funciona; melhor dizer isso
          do que entregar um desktop quebrado. */}
      <div className="absolute inset-0 z-[2000] flex items-center justify-center bg-white p-8 sm:hidden">
        <div className="os-window max-w-[280px] p-4 text-center">
          <p className="os-chrome mb-3 text-[10px]">João OS 7.1</p>
          <p className="text-[11px] leading-[1.6]">
            Este Macintosh precisa de uma tela maior. Abra em um computador — ou
            volte para o site, que funciona em qualquer tamanho.
          </p>
          <a className="os-button os-button--default mt-4 inline-block text-[10px]" href="/">
            Ir para o site
          </a>
        </div>
      </div>
      {!ligado && <BootScreen onPronto={() => setLigado(true)} />}

      <MenuBar onSobre={() => abrir("sobre")} onBater={() => setJanelas([])} />

      <div className="absolute right-6 top-8 flex flex-col items-center gap-4">
        {ICONES.map(({ id, label, Glyph }) => (
          <DesktopIcon
            key={id}
            label={label}
            selecionado={selecionado === id}
            onSelect={() => setSelecionado(id)}
            onOpen={() => abrir(id)}
          >
            <Glyph />
          </DesktopIcon>
        ))}

        <div className="mt-6">
          <DesktopIcon
            label="Lixo"
            selecionado={selecionado === "lixo"}
            onSelect={() => setSelecionado("lixo")}
            onOpen={() => undefined}
          >
            <LixeiraIcon />
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
            setJanelas((atual) =>
              atual.map((j) => (j.id === janela.id ? { ...j, x, y } : j)),
            )
          }
        >
          {APPS[janela.id as AppId].conteudo}
        </Window>
      ))}

      <p className="os-chrome pointer-events-none absolute bottom-3 left-3 border border-black bg-white px-2 py-1 text-[8px]">
        clique duplo nos ícones
      </p>
    </div>
  );
}
