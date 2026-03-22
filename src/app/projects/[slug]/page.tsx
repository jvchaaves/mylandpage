import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Check,
  Layers,
  Cpu,
  Code2,
  Image as ImageIcon,
} from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { AnimatedPage, AnimatedSection } from "@/components/ProjectDetail";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Projeto no encontrado" };
  }
  return {
    title: `${project.name} | Portflio`,
    description: project.tagline,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Group tech by category
  const techByCategory = project.tech.reduce(
    (acc, t) => {
      const cat = t.category || "Outros";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(t.name);
      return acc;
    },
    {} as Record<string, string[]>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <AnimatedPage>
        <div className="mx-auto max-w-4xl px-6 py-12 md:px-12">
          {/* Back link */}
          <AnimatedSection index={0}>
            <Link
              href="/#projetos"
              className="group mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-emerald-400"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Voltar
            </Link>
          </AnimatedSection>

          {/* Header */}
          <AnimatedSection index={1} className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10">
                <Code2 className="h-7 w-7 text-emerald-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold md:text-4xl">
                  {project.name}
                </h1>
                <p className="mt-1 text-lg text-gray-400">{project.tagline}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {project.role && (
                <span className="rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400 border border-emerald-500/20">
                  {project.role}
                </span>
              )}
              {project.metrics && (
                <span className="rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 border border-white/10">
                  {project.metrics}
                </span>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 border border-white/10 transition-all duration-200 hover:border-emerald-500/30 hover:text-emerald-400"
                >
                  GitHub
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </AnimatedSection>

          {/* Divider helper */}
          {/* Sobre o Projeto */}
          <AnimatedSection index={2} className="mb-12">
            <SectionTitle icon={<Layers className="h-5 w-5" />} title="Sobre o Projeto" />
            <div className="prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </AnimatedSection>

          {/* Como Funciona */}
          {project.howItWorks && (
            <AnimatedSection index={3} className="mb-12">
              <SectionTitle icon={<Cpu className="h-5 w-5" />} title="Como Funciona" />
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.howItWorks}
              </p>
            </AnimatedSection>
          )}

          {/* Arquitetura */}
          {project.architecture && project.architecture.length > 0 && (
            <AnimatedSection index={4} className="mb-12">
              <SectionTitle icon={<Layers className="h-5 w-5" />} title="Arquitetura" />
              <div className="grid gap-4 sm:grid-cols-2">
                {project.architecture.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-white/5 bg-[#111111] p-5 transition-colors duration-200 hover:border-emerald-500/20"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-bold text-emerald-400">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Funcionalidades */}
          {project.features && project.features.length > 0 && (
            <AnimatedSection index={5} className="mb-12">
              <SectionTitle icon={<Check className="h-5 w-5" />} title="Funcionalidades" />
              <div className="grid gap-3 sm:grid-cols-2">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-[#111111] p-4 transition-colors duration-200 hover:border-emerald-500/20"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <p className="text-sm text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Tecnologias */}
          <AnimatedSection index={6} className="mb-12">
            <SectionTitle icon={<Code2 className="h-5 w-5" />} title="Tecnologias" />
            <div className="space-y-6">
              {Object.entries(techByCategory).map(([category, techs]) => (
                <div key={category}>
                  <h4 className="mb-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-sm text-gray-300 transition-colors duration-200 hover:border-emerald-500/20 hover:text-emerald-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Galeria */}
          <AnimatedSection index={7} className="mb-12">
            <SectionTitle icon={<ImageIcon className="h-5 w-5" />} title="Galeria" />
            {project.images && project.images.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.images.map((src, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-white/5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111111] py-16">
                <ImageIcon className="mb-4 h-10 w-10 text-gray-600" />
                <p className="text-sm text-gray-500">Screenshots em breve</p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </AnimatedPage>
    </div>
  );
}

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
        {icon}
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="ml-2 h-px flex-1 bg-white/5" />
    </div>
  );
}
