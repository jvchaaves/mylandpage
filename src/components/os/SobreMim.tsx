"use client";

/**
 * Cartão de contato no espírito do Address Book: avatar à esquerda, campos
 * rotulados à direita. É o app que responde "quem é essa pessoa e como falo
 * com ela" sem precisar sair para o site.
 */

const CAMPOS = [
  { rotulo: "trabalho", valor: "Desenvolvedor full-stack · LAVID/UFPB", link: null },
  { rotulo: "pesquisa", valor: "IA aplicada · TRIL Lab", link: null },
  { rotulo: "formação", valor: "Ciência de Dados e IA · UFPB", link: null },
  { rotulo: "e-mail", valor: "joaovitorchavesdesouza@gmail.com", link: "mailto:joaovitorchavesdesouza@gmail.com" },
  { rotulo: "github", valor: "github.com/jvchaaves", link: "https://github.com/jvchaaves" },
  { rotulo: "linkedin", valor: "in/jvchaaves", link: "https://linkedin.com/in/jvchaaves" },
  { rotulo: "onde", valor: "João Pessoa, Paraíba", link: null },
];

export default function SobreMim() {
  return (
    <div className="w-full">
      <div className="flex gap-4 border-b border-black/12 bg-gradient-to-b from-[#fbfbfb] to-[#eef1f4] p-4">
        {/* O avatar em pixel art, o mesmo do favicon: é ele que identifica
            o site. Fundo próprio porque o PNG é transparente. */}
        <div className="grid h-[92px] w-[92px] shrink-0 place-items-center rounded-lg border border-black/20 bg-gradient-to-b from-[#f2f6fb] to-[#dbe6f4] shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="João Vitor Chaves" className="h-[84px] w-[84px]" />
        </div>
        <div className="min-w-0 pt-1">
          <p className="text-[19px] font-semibold leading-tight tracking-tight">João Vitor Chaves</p>
          <p className="mt-0.5 text-[12px] text-black/55">desenvolvedor full-stack e IA aplicada</p>
          <p className="mt-2 text-[12px] leading-[1.55] text-black/75">
            Construo do zero e gosto de entender como as coisas quebram — de
            agentes e pipelines de dados a sistemas que precisam aguentar
            produção.
          </p>
        </div>
      </div>

      <dl className="divide-y divide-black/[0.07]">
        {CAMPOS.map((campo) => (
          <div key={campo.rotulo} className="flex gap-3 px-4 py-[7px]">
            <dt className="w-[74px] shrink-0 text-right text-[11px] text-black/45">{campo.rotulo}</dt>
            <dd className="min-w-0 truncate text-[12px]">
              {campo.link ? (
                <a href={campo.link} target="_blank" rel="noreferrer" className="text-[#1e5cb3] hover:underline">
                  {campo.valor}
                </a>
              ) : (
                campo.valor
              )}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-2 border-t border-black/12 bg-gradient-to-b from-[#f7f7f7] to-[#e9e9e9] px-4 py-2.5">
        <a className="os-btn" href="mailto:joaovitorchavesdesouza@gmail.com">Enviar e-mail</a>
        <a className="os-btn" href="/cv">Ver currículo</a>
        <a className="os-btn os-btn--azul ml-auto" href="/">Ir para o site</a>
      </div>
    </div>
  );
}
