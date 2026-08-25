import { Link } from "next-view-transitions";
import { ArrowLeft, Download } from "lucide-react";
import { experience } from "@/lib/experience";
import { localizedProjects } from "@/lib/projects";
import PrintButton from "@/components/PrintButton";
import TopControls from "@/components/TopControls";
import { t, path, type Lang } from "@/lib/i18n";

const stack = [
  {
    area: "ai",
    items: "Python · PyTorch · LangChain · LLMs · Computer Vision · Whisper",
  },
  {
    area: "backend",
    items:
      "TypeScript · Node.js · Express · FastAPI · PostgreSQL · Redis · RabbitMQ",
  },
  { area: "frontend", items: "React · Next.js · Redux · Tailwind CSS" },
  { area: "data", items: "Docker · Airflow · pandas · pgvector · Git" },
] as const;

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 border-b border-line pb-2 font-mono text-label uppercase text-ink-muted">
      {children}
    </h2>
  );
}

export default function Cv({ lang }: { lang: Lang }) {
  const copy = t(lang).cv;
  const areas = t(lang).about.stackAreas;
  const { current, past } = experience[lang];
  const featured = localizedProjects(lang).filter((p) => p.featured);

  return (
    <>
      <TopControls lang={lang} />
      <main className="mx-auto max-w-3xl px-6 py-16 print:py-0">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link
            href={path(lang, "/")}
            className="group inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            {t(lang).project.back}
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/curriculo-joao-vitor-chaves.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-ink transition-colors duration-200 hover:border-line-strong hover:text-accent"
            >
              <Download size={15} />
              {copy.download}
            </a>
            <PrintButton label={copy.print} />
          </div>
        </div>

        <header className="mb-12">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            João Vitor Chaves de Souza
          </h1>
          <p className="mt-2 text-base text-ink-secondary">{copy.role}</p>
          <p className="mt-4 font-mono text-xs text-ink-muted">
            {t(lang).hero.location} · joaovitorchavesdesouza@gmail.com ·
            github.com/jvchaaves · linkedin.com/in/jvchaaves
          </p>
        </header>

        <section className="mb-12">
          <Heading>{copy.summaryLabel}</Heading>
          <p className="text-sm leading-relaxed text-ink-secondary">
            {copy.summary}
          </p>
        </section>

        <section className="mb-12">
          <Heading>{copy.experienceLabel}</Heading>
          <div className="space-y-7">
            {[...current, ...past].map((role) => (
              <article key={role.title + role.period}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-sm font-semibold text-ink">
                    {role.title} · {role.org}
                  </h3>
                  <p className="font-mono text-xs text-ink-muted">
                    {role.period}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                  {role.description}
                </p>
                {role.highlight && (
                  <p className="mt-1.5 text-sm text-ink-secondary">
                    {role.highlight}.
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Heading>{copy.projectsLabel}</Heading>
          <div className="space-y-5">
            {featured.map((project) => (
              <article key={project.slug}>
                <h3 className="text-sm font-semibold text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
                  {project.tagline}
                  {project.role ? `. ${project.role}.` : "."}
                </p>
                <p className="mt-1 font-mono text-xs text-ink-muted">
                  {project.tech
                    .slice(0, 6)
                    .map((tech) => tech.name)
                    .join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Heading>{copy.toolsLabel}</Heading>
          <dl className="space-y-2">
            {stack.map(({ area, items }) => (
              <div
                key={area}
                className="flex flex-col gap-1 sm:flex-row sm:gap-4"
              >
                <dt className="w-32 shrink-0 text-sm font-medium text-ink">
                  {areas[area]}
                </dt>
                <dd className="font-mono text-xs leading-relaxed text-ink-muted">
                  {items}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <Heading>{copy.educationLabel}</Heading>
          <p className="text-sm text-ink-secondary">{copy.education}</p>
          <p className="mt-1.5 text-sm text-ink-secondary">{copy.languages}</p>
        </section>
      </main>
    </>
  );
}
