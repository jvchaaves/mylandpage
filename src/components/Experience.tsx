import { Section, SectionHeading } from "@/components/ui/section";
import RoleRow from "@/components/RoleRow";
import { experience } from "@/lib/experience";
import { t, type Lang } from "@/lib/i18n";

export default function Experience({ lang }: { lang: Lang }) {
  const copy = t(lang).experience;
  const { current, past } = experience[lang];

  return (
    <Section id="experiencia">
      <SectionHeading label={copy.label} title={copy.title} />

      <div className="mb-14">
        <p className="mb-2 font-mono text-label uppercase text-ink-muted">
          {copy.now}
        </p>
        {current.map((role) => (
          <RoleRow key={role.title} role={role} lang={lang} />
        ))}
      </div>

      <div>
        <p className="mb-2 font-mono text-label uppercase text-ink-muted">
          {copy.before}
        </p>
        {past.map((role) => (
          <RoleRow key={role.title + role.period} role={role} lang={lang} />
        ))}
      </div>
    </Section>
  );
}
