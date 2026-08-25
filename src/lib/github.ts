export interface PerfilGitHub {
  login: string;
  nome: string;
  bio: string | null;
  avatar: string;
  seguidores: number;
  seguindo: number;
  repos: number;
}

/** Valores do último build conhecido: se a API falhar, o card ainda aparece. */
const RESERVA: PerfilGitHub = {
  login: "jvchaaves",
  nome: "João Vitor Chaves",
  bio: null,
  avatar: "https://avatars.githubusercontent.com/u/169618922?v=4",
  seguidores: 19,
  seguindo: 5,
  repos: 9,
};

/**
 * Busca o perfil no build e revalida uma vez por dia. A API pública do GitHub
 * limita a 60 chamadas por hora por IP, o que é folgado para isso — mas a
 * reserva existe porque um deploy não pode quebrar por causa de rate limit.
 */
export async function perfilGitHub(): Promise<PerfilGitHub> {
  try {
    const resposta = await fetch("https://api.github.com/users/jvchaaves", {
      next: { revalidate: 86_400 },
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!resposta.ok) return RESERVA;

    const dados = await resposta.json();
    return {
      login: dados.login ?? RESERVA.login,
      nome: dados.name ?? RESERVA.nome,
      bio: dados.bio ?? null,
      avatar: dados.avatar_url ?? RESERVA.avatar,
      seguidores: dados.followers ?? RESERVA.seguidores,
      seguindo: dados.following ?? RESERVA.seguindo,
      repos: dados.public_repos ?? RESERVA.repos,
    };
  } catch {
    return RESERVA;
  }
}
