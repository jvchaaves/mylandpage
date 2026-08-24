import ProjectPage from "@/components/pages/ProjectPage";
import { getAllProjects, getLocalizedProject } from "@/lib/projects";
import { dict } from "@/lib/i18n";

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = getLocalizedProject(params.slug, "en");

  if (!project) {
    return { title: dict.en.project.notFound };
  }

  return {
    title: `${project.name} | João Vitor Chaves`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} | João Vitor Chaves`,
      description: project.tagline,
      locale: "en_US",
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ProjectPage slug={params.slug} lang="en" />;
}
