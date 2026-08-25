import { perfilGitHub } from "@/lib/github";
import type { Lang } from "@/lib/i18n";

export const EMAIL = "joaovitorchavesdesouza@gmail.com";

export interface Previa {
  avatar: string;
  /** true quando o avatar é uma arte quadrada em vez de foto */
  avatarQuadrado?: boolean;
  titulo: string;
  subtitulo: string;
  descricao: string;
  metricas?: { valor: string; rotulo: string }[];
}

export type NomeIcone = "mail" | "github" | "linkedin";

export interface Canal {
  icone: NomeIcone;
  label: string;
  valor: string;
  href: string;
  previa: Previa;
}

/** Uma única fonte para o hero e para a seção de contato. */
export async function canais(lang: Lang): Promise<Canal[]> {
  const gh = await perfilGitHub();
  const pt = lang === "pt";

  return [
    {
      icone: "github",
      label: "GitHub",
      valor: `github.com/${gh.login}`,
      href: `https://github.com/${gh.login}`,
      previa: {
        avatar: gh.avatar,
        titulo: gh.nome,
        subtitulo: `@${gh.login}`,
        descricao:
          gh.bio ??
          (pt
            ? "Onde ficam os projetos: agentes, pipelines de dados e experimentos."
            : "Where the projects live: agents, data pipelines and experiments."),
        metricas: [
          { valor: String(gh.repos), rotulo: pt ? "repositórios" : "repos" },
          { valor: String(gh.seguidores), rotulo: pt ? "seguidores" : "followers" },
          { valor: String(gh.seguindo), rotulo: pt ? "seguindo" : "following" },
        ],
      },
    },
    {
      icone: "linkedin",
      label: "LinkedIn",
      valor: "linkedin.com/in/jvchaaves",
      href: "https://linkedin.com/in/jvchaaves",
      previa: {
        avatar: "/retrato.jpg",
        titulo: "João Vitor Chaves",
        subtitulo: "@jvchaaves",
        descricao: pt
          ? "Desenvolvedor full-stack no LAVID/UFPB e pesquisador em IA aplicada no TRIL Lab."
          : "Full-stack developer at LAVID/UFPB and applied AI researcher at TRIL Lab.",
        metricas: [{ valor: "UFPB", rotulo: pt ? "graduando" : "undergraduate" }],
      },
    },
    {
      icone: "mail",
      label: "Email",
      valor: EMAIL,
      href: `mailto:${EMAIL}`,
      previa: {
        avatar: "/icon.png",
        avatarQuadrado: true,
        titulo: "João Vitor Chaves",
        subtitulo: EMAIL,
        descricao: pt
          ? "Abre no seu cliente de e-mail. Costumo responder no mesmo dia."
          : "Opens in your mail client. I usually reply the same day.",
      },
    },
  ];
}
