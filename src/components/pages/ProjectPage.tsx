import { notFound } from "next/navigation";
import { Link } from "next-view-transitions";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import TopControls from "@/components/TopControls";
import { localizedProjects } from "@/lib/projects";
import { t, path, type Lang } from "@/lib/i18n";

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-line py-10">
      <p className="mb-5 font-mono text-label uppercase text-ink-muted">
        {label}
      </p>
      {children}
    </div>
  );
}

export default function ProjectPage({
  slug,
  lang,
}: {
  slug: string;
  lang: Lang;
}) {
  const copy = t(lang).project;
  const all = localizedProjects(lang);
  const project = all.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const index = all.findIndex((p) => p.slug === slug);
  const previous = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;

  const techByCategory = project.tech.reduce(
    (acc, tech) => {
      const category = tech.category || "Outros";
      if (!acc[category]) acc[category] = [];
      acc[category].push(tech.name);
      return acc;
    },
    {} as Record<string, string[]>,
  );

  return (
    <>
      <TopControls lang={lang} />
      <main className="min-h-screen px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href={path(lang, "/")}
            className="group inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            {copy.back}
          </Link>

          <div className="mt-12">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink-secondary">
              {project.tagline}
            </p>

            {(project.role || project.github || project.githubPrivate) && (
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {project.role && (
                  <p className="text-sm text-ink-secondary">{project.role}</p>
                )}

                {project.github && !project.githubPrivate && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-accent transition-colors duration-200 hover:text-ink"
                  >
                    {copy.code}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}

                {project.githubPrivate && (
                  <p className="inline-flex items-center gap-1.5 text-sm text-ink-muted">
                    <Lock className="h-3.5 w-3.5" />
                    {copy.privateRepo}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="mt-14">
            <Block label={copy.about}>
              <p className="whitespace-pre-line text-base leading-relaxed text-ink-secondary">
                {project.description}
              </p>
            </Block>
          </div>

          {project.howItWorks && (
            <Block label={copy.howItWorks}>
              <p className="whitespace-pre-line text-base leading-relaxed text-ink-secondary">
                {project.howItWorks}
              </p>
            </Block>
          )}

          {project.architecture?.length > 0 && (
            <Block label={copy.architecture}>
              <ol className="space-y-4">
                {project.architecture.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="pt-0.5 font-mono text-xs text-ink-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-ink-secondary">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {project.features?.length > 0 && (
            <Block label={copy.features}>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-l border-line pl-4 text-sm leading-relaxed text-ink-secondary"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          <Block label={copy.tech}>
            <dl className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              {Object.entries(techByCategory).map(([category, items]) => (
                <div key={category}>
                  <dt className="mb-2 text-sm font-medium text-ink">
                    {category}
                  </dt>
                  <dd className="font-mono text-xs leading-relaxed text-ink-muted">
                    {items.join(" · ")}
                  </dd>
                </div>
              ))}
            </dl>
          </Block>

          <nav
            aria-label={copy.all}
            className="mt-4 grid grid-cols-1 gap-px border-t border-line bg-line sm:grid-cols-2"
          >
            {previous && (
              <Link
                href={path(lang, `/projects/${previous.slug}`)}
                className="group bg-bg py-8 pr-6 sm:pl-0"
              >
                <span className="mb-2 flex items-center gap-1.5 font-mono text-label uppercase text-ink-muted">
                  <ArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-0.5" />
                  {copy.previous}
                </span>
                <span className="block text-base font-medium text-ink transition-colors duration-200 group-hover:text-accent">
                  {previous.name}
                </span>
              </Link>
            )}

            {next && (
              <Link
                href={path(lang, `/projects/${next.slug}`)}
                className="group bg-bg py-8 sm:pl-6 sm:text-right"
              >
                <span className="mb-2 flex items-center gap-1.5 font-mono text-label uppercase text-ink-muted sm:justify-end">
                  {copy.next}
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
                <span className="block text-base font-medium text-ink transition-colors duration-200 group-hover:text-accent">
                  {next.name}
                </span>
              </Link>
            )}
          </nav>

          <div className="border-t border-line pt-8">
            <Link
              href={path(lang, "/")}
              className="group inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors duration-200 hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              {copy.all}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
