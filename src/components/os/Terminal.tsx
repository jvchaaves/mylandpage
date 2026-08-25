"use client";

import { useEffect, useRef, useState } from "react";
import { getAllProjects } from "@/lib/projects";

const AJUDA = [
  "comandos disponíveis:",
  "  whoami     quem está do outro lado",
  "  ls         lista os projetos",
  "  cat <nome> abre um projeto",
  "  stack      linguagens e ferramentas",
  "  cv         trajetória resumida",
  "  contato    onde me achar",
  "  clear      limpa a tela",
];


export default function Terminal() {
  const [linhas, setLinhas] = useState<string[]>([
    "João OS X 10.4 — bash",
    "digite 'help' para começar.",
    "",
  ]);
  const [entrada, setEntrada] = useState("");
  const fim = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fim.current?.scrollIntoView({ block: "end" });
  }, [linhas]);

  const executar = (bruto: string) => {
    const cmd = bruto.trim();
    const [nome, ...resto] = cmd.split(/\s+/);
    const arg = resto.join(" ").toLowerCase();
    const projetos = getAllProjects();
    const eco = [`joao@macintosh ~ % ${cmd}`];

    if (!cmd) return setLinhas((atual) => [...atual, "joao@macintosh ~ %"]);

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
        case "ls":
          return projetos.map((p) => `${p.slug.padEnd(26)} ${p.tagline.slice(0, 44)}…`);
        case "cat": {
          const alvo = projetos.find((p) => p.slug === arg);
          if (!alvo) return [`cat: ${arg || "?"}: arquivo não encontrado`, "use 'ls' para ver os nomes."];
          window.setTimeout(() => {
            window.location.href = `/projects/${alvo.slug}`;
          }, 700);
          return [`abrindo ${alvo.name}…`];
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
        case "clear":
          return [];
        case "exit":
          window.setTimeout(() => (window.location.href = "/"), 400);
          return ["até mais."];
        default:
          return [`${nome}: comando não encontrado. tente 'help'.`];
      }
    })();

    if (nome.toLowerCase() === "clear") return setLinhas([]);
    setLinhas((atual) => [...atual, ...eco, ...saida, ""]);
  };

  return (
    <div
      className="min-h-[300px] w-full bg-[#0d0f12] p-3 font-mono text-[12px] leading-[1.55] text-[#e8e8e8]"
      onClick={() => input.current?.focus()}
    >
      {linhas.map((linha, i) => (
        <p key={i} className="whitespace-pre-wrap break-words">
          {linha}
        </p>
      ))}

      <div className="flex gap-1">
        <span className="shrink-0">joao@macintosh ~ %</span>
        <input
          ref={input}
          value={entrada}
          autoFocus
          spellCheck={false}
          onChange={(event) => setEntrada(event.target.value)}
          onKeyDown={(event) => {
            if (event.key !== "Enter") return;
            executar(entrada);
            setEntrada("");
          }}
          className="w-full flex-1 bg-transparent text-white outline-none"
          aria-label="linha de comando"
        />
      </div>
      <div ref={fim} />
    </div>
  );
}
