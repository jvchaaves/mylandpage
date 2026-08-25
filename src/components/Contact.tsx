import { Section, SectionHeading } from "@/components/ui/section";
import CopyEmail from "@/components/CopyEmail";
import ContactHover from "@/components/ContactHover";
import { canais, EMAIL } from "@/lib/contatos";
import { t, type Lang } from "@/lib/i18n";

/**
 * Os canais completos vivem no hero, junto do nome. Aqui embaixo ficam só os
 * ícones — a seção existe para fechar a página e para o link do menu ter
 * destino, não para repetir o que já foi dito lá em cima.
 */
export default async function Contact({ lang }: { lang: Lang }) {
  const copy = t(lang).contact;
  const lista = await canais(lang);

  return (
    <Section id="contato">
      <SectionHeading label={copy.label} title={copy.title} />

      <div className="flex flex-wrap items-center gap-3">
        {lista.map((canal) => (
          <ContactHover key={canal.label} canal={canal} />
        ))}

        <span aria-hidden className="mx-1 h-6 w-px bg-line-strong" />

        <CopyEmail email={EMAIL} copyLabel={copy.copy} copiedLabel={copy.copied} />
      </div>
    </Section>
  );
}
