"use client";

import { useEffect, useRef, useState } from "react";
import { getAllProjects } from "@/lib/projects";

const AJUDA = [
  "comandos disponíveis:",
  "",
  "  whoami        quem está do outro lado",
  "  neofetch      as especificações desta máquina",
  "  ls            lista os projetos",
  "  cat <nome>    abre a página de um projeto",
  "  open <app>    abre um app: projetos, curriculo, notas, paint, sobremim",
  "  stack         linguagens e ferramentas",
  "  contato       onde me achar",
  "  cv            abre o currículo",
  "  echo <texto>  repete o que você escreveu",
  "  cowsay <t>    a vaca fala por você",
  "  fortune       uma frase que eu realmente acredito",
  "  date          data e hora",
  "  uptime        há quanto tempo esta sessão está aberta",
  "  history       o que você já digitou",
  "  clear         limpa a tela",
  "",
  "dica: ↑ e ↓ percorrem o histórico, Tab completa o comando.",
];

const ARTE = [
  "        ,--.     ",
  "       ( oo|     ",
  "       _\\_ /     ",
  "      /  _ \\     ",
  "     ( (_)  )    ",
  "      \\____/     ",
];

const FRASES = [
  "o difícil não é escrever o código, é decidir o que não escrever.",
  "todo sistema que ninguém usa funciona perfeitamente.",
  "dado bagunçado é onde mora o problema interessante.",
  "abandonar uma abordagem cedo é barato; insistir na errada é que custa caro.",
  "se ainda não foi para produção, ainda não terminou.",
];

const APPS_ABRIVEIS = ["projetos", "curriculo", "notas", "paint", "sobremim", "sobre"];

export default function Terminal({ onAbrirApp }: { onAbrirApp?: (id: string) => void }) {
  const [linhas, setLinhas] = useState<string[]>([
    "João OS X 10.4 — bash",
    "digite 'help' para ver o que dá para fazer.",
    "",
  ]);
  const [entrada, setEntrada] = useState("");
  const [historico, setHistorico] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const inicio = useRef(Date.now());
  const fim = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fim.current?.scrollIntoView({ block: "end" });
  }, [linhas]);

  const COMANDOS = [
    "help", "whoami", "neofetch", "ls", "cat", "open", "stack", "contato",
    "cv", "echo", "cowsay", "fortune", "date", "uptime", "history", "clear", "sudo", "exit",
  ];

  const executar = (bruto: string) => {
    const cmd = bruto.trim();
    const [nome, ...resto] = cmd.split(/\s+/);
    const arg = resto.join(" ");
    const projetos = getAllProjects();

    if (!cmd) return setLinhas((a) => [...a, "joao@macintosh ~ %"]);

    setHistorico((h) => [...h, cmd]);
    setCursor(-1);

    if (nome.toLowerCase() === "clear") return setLinhas([]);

    const saida: string[] = (() => {
      switch (nome.toLowerCase()) {
        case "help":
          return AJUDA;

        case "whoami":
          return [
            "joão vitor chaves",
            "desenvolvedor full-stack no LAVID/UFPB (V4H, telessaúde no SUS)",
            "pesquisador em IA aplicada no TRIL Lab",
            "graduando em ciência de dados e IA — UFPB",
          ];

        case "neofetch": {
          const specs = [
            "joao@macintosh",
            "──────────────────────",
            "OS:       João OS X 10.4",
            "Host:     Portfólio (Next.js 14)",
            "Shell:    bash — este aqui",
            `Projetos: ${projetos.length}`,
            "Stack:    TypeScript · Python · React · FastAPI",
            "Local:    João Pessoa, Paraíba",
          ];
          return ARTE.map((linha, i) => `${linha}   ${specs[i] ?? ""}`).concat(
            specs.slice(ARTE.length).map((s) => `${" ".repeat(20)}${s}`),
          );
        }

        case "ls":
          return projetos.map((p) => `${p.slug.padEnd(26)} ${p.tagline.slice(0, 42)}…`);

        case "cat": {
          const alvo = projetos.find((p) => p.slug === arg.toLowerCase());
          if (!alvo) return [`cat: ${arg || "?"}: arquivo não encontrado`, "use 'ls' para ver os nomes."];
          window.setTimeout(() => (window.location.href = `/projects/${alvo.slug}`), 700);
          return [`abrindo ${alvo.name}…`];
        }

        case "open": {
          const alvo = arg.toLowerCase();
          if (!APPS_ABRIVEIS.includes(alvo)) {
            return [`open: ${arg || "?"}: app desconhecido`, `disponíveis: ${APPS_ABRIVEIS.join(", ")}`];
          }
          onAbrirApp?.(alvo === "sobre" ? "sobre" : alvo);
          return [`abrindo ${alvo}…`];
        }

        case "stack":
          return [
            "ia/ml      python · pytorch · langchain · llms · whisper",
            "backend    typescript · node · fastapi · postgresql · redis",
            "frontend   react · next.js · tailwind",
            "dados      docker · airflow · pandas · pgvector",
          ];

        case "contato":
          return [
            "e-mail     joaovitorchavesdesouza@gmail.com",
            "github     github.com/jvchaaves",
            "linkedin   linkedin.com/in/jvchaaves",
          ];

        case "cv":
          window.setTimeout(() => (window.location.href = "/cv"), 700);
          return ["abrindo currículo…"];

        case "echo":
          return [arg];

        case "cowsay": {
          const texto = arg || "moo";
          const traco = "─".repeat(texto.length + 2);
          return [
            ` ┌${traco}┐`,
            ` │ ${texto} │`,
            ` └${traco}┘`,
            "        \\   ^__^",
            "         \\  (oo)\\_______",
            "            (__)\\       )\\/\\",
            "                ||----w |",
            "                ||     ||",
          ];
        }

        case "fortune":
          return [FRASES[Math.floor(Math.random() * FRASES.length)]];

        case "date":
          return [new Date().toLocaleString("pt-BR", { dateStyle: "full", timeStyle: "short" })];

        case "uptime": {
          const seg = Math.floor((Date.now() - inicio.current) / 1000);
          const min = Math.floor(seg / 60);
          return [`sessão aberta há ${min > 0 ? `${min} min e ` : ""}${seg % 60}s`];
        }

        case "history":
          return historico.length
            ? historico.map((h, i) => `${String(i + 1).padStart(4)}  ${h}`)
            : ["nada por enquanto."];

        case "sudo":
          return ["joao não está no arquivo sudoers. este incidente será reportado."];

        case "exit":
          window.setTimeout(() => (window.location.href = "/"), 500);
          return ["até mais."];

        default:
          return [`${nome}: comando não encontrado. tente 'help'.`];
      }
    })();

    setLinhas((a) => [...a, `joao@macintosh ~ % ${cmd}`, ...saida, ""]);
  };

  const aoTeclar = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      executar(entrada);
      setEntrada("");
      return;
    }

    /* Histórico: ↑ volta no tempo, ↓ avança até a linha vazia. */
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!historico.length) return;
      const proximo = cursor < 0 ? historico.length - 1 : Math.max(0, cursor - 1);
      setCursor(proximo);
      setEntrada(historico[proximo]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (cursor < 0) return;
      const proximo = cursor + 1;
      if (proximo >= historico.length) {
        setCursor(-1);
        setEntrada("");
        return;
      }
      setCursor(proximo);
      setEntrada(historico[proximo]);
      return;
    }

    /* Tab completa o comando quando só existe um candidato. */
    if (event.key === "Tab") {
      event.preventDefault();
      const parcial = entrada.trim();
      if (!parcial || parcial.includes(" ")) return;
      const candidatos = COMANDOS.filter((c) => c.startsWith(parcial.toLowerCase()));
      if (candidatos.length === 1) setEntrada(`${candidatos[0]} `);
      else if (candidatos.length > 1) {
        setLinhas((a) => [...a, `joao@macintosh ~ % ${parcial}`, candidatos.join("   "), ""]);
      }
    }
  };

  return (
    <div
      className="min-h-[320px] w-full bg-[#0d0f12] p-3 font-mono text-[12px] leading-[1.55] text-[#e8e8e8]"
      onClick={() => input.current?.focus()}
    >
      {linhas.map((linha, i) => (
        <p key={i} className="whitespace-pre-wrap break-words">
          {linha}
        </p>
      ))}

      <div className="flex gap-1">
        <span className="shrink-0 text-[#7fd48b]">joao@macintosh ~ %</span>
        <input
          ref={input}
          value={entrada}
          autoFocus
          spellCheck={false}
          autoComplete="off"
          onChange={(event) => setEntrada(event.target.value)}
          onKeyDown={aoTeclar}
          className="w-full flex-1 bg-transparent text-[#e8e8e8] outline-none"
          aria-label="linha de comando"
        />
      </div>
      <div ref={fim} />
    </div>
  );
}
