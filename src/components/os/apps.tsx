import { getAllProjects } from "@/lib/projects";
import { DocumentoMini } from "@/components/os/icons";

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
              className="os-row grid grid-cols-[1fr_60px_96px] items-center gap-2 px-3 py-[5px] text-[10px]"
            >
              <span className="flex items-center gap-2 truncate">
                <DocumentoMini />
                {projeto.name}
              </span>
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

/* Visualizador de PDF: o currículo de verdade, aberto dentro da janela. */
export function CurriculoPDF() {
  const arquivo = "/curriculo-joao-vitor-chaves.pdf";
  /* A barra do leitor do navegador é cinza e moderna: destoa de tudo aqui.
     Os parâmetros escondem toolbar e painel lateral, sobrando só a página. */
  const embutido = `${arquivo}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

  return (
    <div className="w-[540px]">
      <div className="flex items-center justify-between gap-2 border-b border-black px-2 py-1">
        <span className="text-[10px]">curriculo-joao-vitor-chaves.pdf</span>
        <span className="flex gap-2">
          <a className="os-button text-[10px]" href={arquivo} target="_blank" rel="noreferrer">
            Abrir à parte
          </a>
          <a className="os-button text-[10px]" href={arquivo} download>
            Baixar
          </a>
        </span>
      </div>

      <object data={embutido} type="application/pdf" className="block h-[460px] w-full bg-white">
        {/* Sem leitor embutido — navegador antigo ou móvel */}
        <div className="p-4 text-[10px] leading-[1.7]">
          Este Macintosh não conseguiu abrir o PDF aqui dentro.{" "}
          <a className="underline" href={arquivo} target="_blank" rel="noreferrer">
            Abra em outra janela
          </a>{" "}
          ou{" "}
          <a className="underline" href="/cv">
            veja a versão em página
          </a>
          .
        </div>
      </object>
    </div>
  );
}

/* Bloco de Notas: o acessório de mesa clássico, aqui com o lado pessoal. */
export function BlocoDeNotas() {
  const notas = [
    "aprendo construindo. leio a documentação depois de já ter quebrado.",
    "treino jiu-jitsu. faixa azul — o suficiente para saber o tamanho do que falta.",
    "no tatame e no código o método é o mesmo: posição antes de submissão.",
    "gosto de problema com dado bagunçado. o limpo já foi resolvido por alguém.",
    "prefiro entregar terminado a deixar bonito pela metade.",
    "bater cedo faz parte. o erro é insistir numa posição perdida.",
  ];

  return (
    <div className="w-[360px]">
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
