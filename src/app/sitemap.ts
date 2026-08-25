import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

const baseUrl = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllProjects().map((project) => project.slug);

  const routes = [
    "/",
    "/cv",
    ...slugs.map((slug) => `/projects/${slug}`),
  ];

  return routes.flatMap((route) => {
    const pt = `${baseUrl}${route}`;
    const en = `${baseUrl}${route === "/" ? "/en" : `/en${route}`}`;
    const priority = route === "/" ? 1 : 0.7;

    return [
      {
        url: pt,
        changeFrequency: "monthly" as const,
        priority,
        alternates: { languages: { "pt-BR": pt, en } },
      },
      {
        url: en,
        changeFrequency: "monthly" as const,
        priority: priority * 0.9,
        alternates: { languages: { "pt-BR": pt, en } },
      },
    ];
  });
}
