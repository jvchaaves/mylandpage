import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";
import { localizedProjects, type Project } from "@/lib/projects";
import { Section, SectionHeading } from "@/components/ui/section";
import { t, path, type Lang } from "@/lib/i18n";

/** Primeiro parágrafo da descrição; o resto fica para a página do projeto. */
function summary(description: string) {
  return description.split("\n\n")[0];
}

function FeaturedCard({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <Link
      href={path(lang, `/projects/${project.slug}`)}
      className="group block h-full"
    >
      <article className="flex h-full flex-col border border-line bg-surface p-7 transition-colors duration-200 hover:border-line-strong sm:p-8">
        <header className="mb-4 flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
            {project.name}
          </h3>
          <ArrowUpRight
            size={18}
            className="mt-1 shrink-0 text-ink-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </header>

        <p className="mb-4 text-sm leading-relaxed text-ink">
          {project.tagline}
        </p>

        <p className="line-clamp-3 text-sm leading-relaxed text-ink-secondary">
          {summary(project.description)}
        </p>

        <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-7">
          {project.tech.slice(0, 5).map((tech) => (
            <li key={tech.name} className="font-mono text-xs text-ink-muted">
              {tech.name}
            </li>
          ))}
          {project.tech.length > 5 && (
            <li className="font-mono text-xs text-ink-muted">
              +{project.tech.length - 5}
            </li>
          )}
        </ul>
      </article>
    </Link>
  );
}

function ProjectRow({ project, lang }: { project: Project; lang: Lang }) {
  return (
    <Link
      href={path(lang, `/projects/${project.slug}`)}
      className="group grid grid-cols-[1fr_auto] items-center gap-6 border-t border-line py-6"
    >
      <div>
        <h3 className="text-base font-medium text-ink transition-colors duration-200 group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
          {project.tagline}
        </p>
      </div>
      <ArrowUpRight
        size={16}
        className="shrink-0 text-ink-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </Link>
  );
}

export default function Projects({ lang }: { lang: Lang }) {
  const copy = t(lang).projects;
  const all = localizedProjects(lang);
  const featured = all.filter((p) => p.featured);
  const others = all.filter((p) => !p.featured);

  return (
    <Section id="projetos">
      <SectionHeading
        label={copy.label}
        title={copy.title}
        description={copy.description}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {featured.map((project, i) => (
          <div
            key={project.slug}
            /* número ímpar de destaques: o último ocupa a linha inteira
               em vez de deixar uma lacuna */
            className={
              i === featured.length - 1 && featured.length % 2 === 1
                ? "lg:col-span-2"
                : ""
            }
          >
            <FeaturedCard project={project} lang={lang} />
          </div>
        ))}
      </div>

      <div className="mt-16">
        <p className="mb-2 font-mono text-label uppercase text-ink-muted">
          {copy.others}
        </p>
        {others.map((project) => (
          <ProjectRow key={project.slug} project={project} lang={lang} />
        ))}
      </div>
    </Section>
  );
}
