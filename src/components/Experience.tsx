import { Section, SectionHeading } from "@/components/ui/section";
import { experience, type Role } from "@/lib/experience";
import { t, type Lang } from "@/lib/i18n";

function RoleRow({ role }: { role: Role }) {
  return (
    <article className="grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-[11rem_1fr] md:gap-10">
      <p className="pt-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
        {role.period}
      </p>

      <div>
        <h3 className="text-lg font-semibold text-ink">{role.title}</h3>
        <p className="mt-0.5 text-sm text-accent">{role.org}</p>

        <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-secondary">
          {role.description}
        </p>

        {role.highlight && (
          <p className="mt-3 inline-flex rounded border border-line-strong px-2.5 py-1 text-xs text-ink-secondary">
            {role.highlight}
          </p>
        )}

        {role.tags && (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
            {role.tags.map((tag) => (
              <li key={tag} className="font-mono text-xs text-ink-muted">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

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
          <RoleRow key={role.title} role={role} />
        ))}
      </div>

      <div>
        <p className="mb-2 font-mono text-label uppercase text-ink-muted">
          {copy.before}
        </p>
        {past.map((role) => (
          <RoleRow key={role.title + role.period} role={role} />
        ))}
      </div>
    </Section>
  );
}
