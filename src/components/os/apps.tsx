import { getAllProjects } from "@/lib/projects";
import { PastaIcon, DocumentoIcon } from "@/components/os/icons";

/* "Sobre este Mac" com as especificações trocadas pelas da pessoa. */
export function SobreEsteMac() {
  const specs = [
    { label: "Sistema", valor: "João OS X 10.4" },
    { label: "Processador", valor: "Ciência de Dados e IA · UFPB" },
    { label: "Memória", valor: "TypeScript · Python · React · FastAPI" },
    { label: "Localização", valor: "João Pessoa, Paraíba" },
  ];

  return (
    <div className="w-full px-6 py-5 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icon.png" alt="" width={72} height={72} className="mx-auto" />
      <p className="mt-3 text-[22px] font-semibold tracking-tight">João Vitor Chaves</p>
      <p className="text-[12px] text-black/55">Versão 10.4 — construído em João Pessoa</p>

      <dl className="mx-auto mt-5 max-w-[320px] space-y-1.5 text-left">
        {specs.map((spec) => (
          <div key={spec.label} className="flex gap-3 border-b border-black/[0.06] pb-1.5 last:border-0">
            <dt className="w-[86px] shrink-0 text-right text-[11px] text-black/50">{spec.label}</dt>
            <dd className="text-[11px]">{spec.valor}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 text-left text-[12px] leading-[1.65] text-black/75">
        Trabalho no LAVID/UFPB, no V4H — plataforma de telessaúde usada no SUS —
        e pesquiso IA aplicada no TRIL Lab. Gosto de construir do zero e de
        entender como as coisas quebram.
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <a className="os-btn" href="mailto:joaovitorchavesdesouza@gmail.com">E-mail</a>
        <a className="os-btn" href="https://github.com/jvchaaves" target="_blank" rel="noreferrer">GitHub</a>
        <a className="os-btn" href="https://linkedin.com/in/jvchaaves" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="os-btn os-btn--azul" href="/">Sair para o site</a>
      </div>
    </div>
  );
}

/* Finder em list view. As colunas e a faixa azul de seleção são a assinatura. */
export function Projetos() {
  const projetos = getAllProjects();

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 border-b border-black/15 bg-gradient-to-b from-[#f7f7f7] to-[#e9e9e9] px-3 py-1.5">
        <PastaIcon className="h-4 w-4" />
        <span className="text-[12px] font-semibold">Projetos</span>
        <span className="ml-auto text-[11px] text-black/50">{projetos.length} itens</span>
      </div>

      <div className="grid grid-cols-[1fr_70px_110px] gap-2 border-b border-black/15 bg-gradient-to-b from-[#fbfbfb] to-[#efefef] px-3 py-1 text-[11px] text-black/55">
        <span>Nome</span>
        <span className="text-right">Tamanho</span>
        <span>Tipo</span>
      </div>

      <ul className="max-h-[320px] overflow-auto">
        {projetos.map((projeto, i) => (
          <li key={projeto.slug}>
            <a
              href={`/projects/${projeto.slug}`}
              className={`grid grid-cols-[1fr_70px_110px] items-center gap-2 px-3 py-[5px] text-[12px] hover:bg-[#3b7dd8] hover:text-white ${
                i % 2 ? "bg-[#f2f6fb]" : ""
              }`}
            >
              <span className="flex items-center gap-2 truncate">
                <DocumentoIcon className="h-4 w-4 shrink-0" />
                {projeto.name}
              </span>
              <span className="text-right tabular-nums">
                {Math.round(projeto.description.length / 7)} KB
              </span>
              <span className="truncate opacity-70">{projeto.tech[0]?.category ?? "documento"}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Preview: o PDF do currículo aberto dentro do sistema. */
export function CurriculoPDF() {
  const arquivo = "/curriculo-joao-vitor-chaves.pdf";
  const embutido = `${arquivo}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-2 border-b border-black/15 bg-gradient-to-b from-[#f7f7f7] to-[#e9e9e9] px-3 py-1.5">
        <span className="text-[12px]">curriculo-joao-vitor-chaves.pdf</span>
        <span className="flex gap-2">
          <a className="os-btn" href={arquivo} target="_blank" rel="noreferrer">Abrir à parte</a>
          <a className="os-btn os-btn--azul" href={arquivo} download>Baixar</a>
        </span>
      </div>

      <object data={embutido} type="application/pdf" className="block h-[470px] w-full bg-white">
        <div className="p-4 text-[12px] leading-[1.7]">
          Este Mac não conseguiu abrir o PDF aqui dentro.{" "}
          <a className="text-[#1e5cb3] underline" href={arquivo} target="_blank" rel="noreferrer">
            Abra em outra janela
          </a>{" "}
          ou{" "}
          <a className="text-[#1e5cb3] underline" href="/cv">veja a versão em página</a>.
        </div>
      </object>
    </div>
  );
}

/* Stickies: o post-it amarelo do Mac OS X, com o lado pessoal. */
export function Notas() {
  const notas = [
    "aprendo construindo. leio a documentação depois de já ter quebrado.",
    "leio o código dos outros antes de escrever o meu. quase sempre já existe.",
    "gosto de problema com dado bagunçado. o limpo já foi resolvido por alguém.",
    "prefiro entregar terminado a deixar bonito pela metade.",
    "abandonar uma abordagem cedo é barato. insistir na errada é que custa caro.",
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#fdf6a9] to-[#f7e97a] p-4">
      <ul className="space-y-2.5">
        {notas.map((nota) => (
          <li
            key={nota}
            className="border-b border-black/10 pb-2 text-[12px] leading-[1.6] text-[#4a4322] last:border-0"
          >
            {nota}
          </li>
        ))}
      </ul>
    </div>
  );
}
