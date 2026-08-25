import { getAllProjects } from "@/lib/projects";
import { experience } from "@/lib/experience";

/* Réplica da "Sobre este Macintosh" — as especificações são as da pessoa. */
export function SobreEsteMac() {
  const specs = [
    { label: "Sistema", valor: "João OS 7.1" },
    { label: "Processador", valor: "Ciência de Dados e IA · UFPB" },
    { label: "Memória", valor: "TypeScript · Python · React · FastAPI" },
    { label: "Localização", valor: "João Pessoa, Paraíba" },
    { label: "Faixa", valor: "azul · jiu-jitsu" },
  ];

  return (
    <div className="w-[380px] p-4">
      <div className="flex items-start gap-4 border-b border-black pb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon.png" alt="" width={52} height={52} className="shrink-0" />
        <div>
          <p className="text-[13px] leading-tight">João Vitor Chaves</p>
          <p className="mt-1 text-[10px] text-neutral-600">
            Versão 7.1 — construído em João Pessoa
          </p>
        </div>
      </div>

      <dl className="mt-3 space-y-1">
        {specs.map((spec) => (
          <div key={spec.label} className="flex gap-2">
            <dt className="w-[88px] shrink-0 text-[10px] text-neutral-600">{spec.label}</dt>
            <dd className="text-[10px]">{spec.valor}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 border-t border-black pt-3">
        <p className="text-[10px] leading-[1.7]">
          Trabalho no LAVID/UFPB, no V4H — plataforma de telessaúde usada no SUS —
          e pesquiso IA aplicada no TRIL Lab. Gosto de construir do zero e de
          entender como as coisas quebram.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <a className="os-button text-[10px]" href="mailto:joaovitorchavesdesouza@gmail.com">
          E-mail
        </a>
        <a className="os-button text-[10px]" href="https://github.com/jvchaaves" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="os-button os-button--default text-[10px]" href="/">
          Sair para o site
        </a>
      </div>
    </div>
  );
}

/* Finder em list view: uma linha por projeto, abrindo a página real. */
export function Projetos() {
  const projetos = getAllProjects();

  return (
    <div className="w-[460px]">
      <div className="flex items-center justify-between border-b border-black px-3 py-1 text-[10px]">
        <span>{projetos.length} itens</span>
        <span className="text-neutral-600">42,7 MB disponíveis</span>
      </div>

      <div className="grid grid-cols-[1fr_60px_96px] gap-2 border-b border-black px-3 py-1 text-[9px] text-neutral-600">
        <span>Nome</span>
        <span className="text-right">Tamanho</span>
        <span>Tipo</span>
      </div>

      <ul>
        {projetos.map((projeto) => (
          <li key={projeto.slug} className="border-b border-dotted border-neutral-400 last:border-0">
            <a
              href={`/projects/${projeto.slug}`}
              className="grid grid-cols-[1fr_60px_96px] items-center gap-2 px-3 py-[5px] text-[10px] hover:bg-black hover:text-white"
            >
              <span className="truncate">{projeto.name}</span>
              <span className="text-right tabular-nums">
                {Math.round(projeto.description.length / 7)}K
              </span>
              <span className="truncate text-neutral-600">
                {projeto.tech[0]?.category ?? "documento"}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Trajetória em texto corrido, com atalho para o currículo completo. */
export function Curriculo() {
  const { current, past } = experience.pt;

  return (
    <div className="w-[420px] p-4">
      <p className="mb-3 border-b border-black pb-2 text-[11px]">Trajetória</p>

      {[
        { titulo: "Agora", lista: current },
        { titulo: "Antes", lista: past },
      ].map((bloco) => (
        <div key={bloco.titulo} className="mb-4 last:mb-0">
          <p className="mb-2 text-[9px] uppercase tracking-wider text-neutral-600">
            {bloco.titulo}
          </p>
          <ul className="space-y-2">
            {bloco.lista.map((papel) => (
              <li key={papel.title + papel.period} className="text-[10px] leading-[1.6]">
                <span className="text-neutral-600">{papel.period}</span>
                <br />
                {papel.title} — {papel.org}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <a className="os-button mt-2 inline-block text-[10px]" href="/cv">
        Abrir currículo completo
      </a>
    </div>
  );
}

/* Bloco de Notas: o acessório de mesa clássico, aqui com o lado pessoal. */
export function BlocoDeNotas() {
  const notas = [
    "acordo cedo, mas só funciono de verdade depois do segundo café.",
    "aprendo construindo. leio a documentação depois que já quebrei.",
    "treino jiu-jitsu. faixa azul. a guarda é o melhor lugar para pensar.",
    "gosto de problema com dado bagunçado — o limpo já foi resolvido.",
    "prefiro terminar do que deixar bonito pela metade.",
  ];

  return (
    <div className="w-[340px]">
      <div className="border-b border-black px-3 py-1 text-[9px] text-neutral-600">
        página 1 de 1
      </div>
      <ul className="p-3">
        {notas.map((nota) => (
          <li
            key={nota}
            className="border-b border-dotted border-neutral-400 py-2 text-[10px] leading-[1.6] last:border-0"
          >
            {nota}
          </li>
        ))}
      </ul>
    </div>
  );
}
