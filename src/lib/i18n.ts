export type Lang = "pt" | "en";

export const languages: Lang[] = ["pt", "en"];

/** Segmento de texto: `em` marca o trecho em destaque dentro do parágrafo. */
export interface Segment {
  t: string;
  em?: boolean;
}

export const dict = {
  pt: {
    htmlLang: "pt-BR",
    meta: {
      title: "João Vitor Chaves",
      description:
        "Desenvolvedor full-stack no LAVID/UFPB, no V4H, plataforma de telessaúde utilizada no SUS, e pesquisador em IA aplicada no TRIL Lab. Graduando em Ciência de Dados e Inteligência Artificial na UFPB.",
    },
    skipLink: "Pular para o conteúdo",
    macCorner: "Abrir a versão Mac OS",
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
    },
    theme: { toggle: "Alternar entre tema claro e escuro" },
    hero: {
      location: "João Pessoa, Brasil",
      intro:
        "Estudante de tecnologia, interessado em desenvolvimento de software e inteligência artificial. Gosto de aprender construindo, experimentar novas ideias e transformar conhecimento em projetos que resolvem problemas reais. Também sou apaixonado por esportes, competição e pelo processo de sempre buscar evoluir.",
      now: [
        {
          org: "LAVID · UFPB",
          role: "Desenvolvedor Full-Stack no V4H, telessaúde no SUS",
        },
        { org: "TAIL", role: "Diretoria de Visão Computacional / Sports" },
        {
          org: "TRIL Lab · UFPB",
          role: "Pesquisador em LLMs, visão computacional e OCR",
        },
      ],
      seeProjects: "Ver projetos",
      resume: "Currículo",
    },
    about: {
      label: "Sobre",
      title: "Quem sou",
      portraitAlt: "Retrato de João Vitor Chaves",
      paragraphs: [
        [
          { t: "Sou graduando em " },
          { t: "Ciência de Dados e Inteligência Artificial na UFPB", em: true },
          {
            t: " e gosto principalmente de construir coisas que saem do papel. Meu interesse está tanto em entender como a inteligência artificial funciona quanto em descobrir como transformá-la em software que realmente possa ser usado por alguém.",
          },
        ],
        [
          { t: "Hoje faço parte do " },
          { t: "LAVID/UFPB", em: true },
          { t: ", onde trabalho como desenvolvedor full-stack no " },
          { t: "V4H", em: true },
          {
            t: ", plataforma de telessaúde da Wisecare utilizada no SUS. É onde tenho contato com desafios que vão além de simplesmente fazer uma aplicação funcionar: trabalho com um sistema real em produção, informações de saúde e integrações com serviços públicos, como o ",
          },
          { t: "CNES", em: true },
          { t: "." },
        ],
        [
          { t: "Também faço pesquisa no " },
          { t: "TRIL Lab", em: true },
          {
            t: ", participando de projetos desenvolvidos em parceria com empresas. É nesse ambiente que exploro áreas que mais me interessam dentro de IA, como ",
          },
          { t: "agentes baseados em LLMs, visão computacional e OCR", em: true },
          {
            t: ", tentando entender não só como essas tecnologias funcionam, mas onde elas realmente fazem sentido.",
          },
        ],
        [
          { t: "Outra parte importante da minha trajetória é a " },
          { t: "TAIL", em: true },
          {
            t: ", primeira liga acadêmica de Inteligência Artificial da Paraíba. Faço parte da diretoria de ",
          },
          { t: "Visão Computacional/Sports", em: true },
          {
            t: ", onde conduzo projetos da área e ajudo na formação de novos membros. Essa frente também aproxima duas coisas que fazem parte de quem eu sou: ",
          },
          { t: "tecnologia e esportes", em: true },
          { t: "." },
        ],
      ],
      closing:
        "No fim, é isso que mais me move: aprender construindo, testar ideias e entender como tecnologia pode ser aplicada a problemas reais.",
      toolsLabel: "Ferramentas",
      stackAreas: {
        ai: "IA & ML",
        backend: "Backend",
        frontend: "Frontend",
        data: "Dados & Infra",
      },
    },
    experience: {
      label: "Experiência",
      title: "Trajetória",
      now: "Agora",
      before: "Antes",
      more: "Ler mais",
      less: "Recolher",
    },
    projects: {
      label: "Projetos",
      title: "Seleção de trabalhos",
      description:
        "Sistemas que construí do zero, a maioria como autor principal, envolvendo agentes de IA, processamento multimodal e engenharia de dados.",
      others: "Outros projetos",
    },
    contact: {
      label: "Contato",
      title: "Vamos conversar",
      copy: "Copiar endereço",
      copied: "Copiado",
    },
    project: {
      back: "Voltar",
      about: "Sobre o projeto",
      howItWorks: "Como funciona",
      architecture: "Arquitetura",
      features: "Funcionalidades",
      tech: "Tecnologias",
      privateRepo: "Repositório privado",
      code: "Código no GitHub",
      previous: "Anterior",
      next: "Próximo",
      all: "Todos os projetos",
      notFound: "Projeto não encontrado",
    },
    cv: {
      title: "Currículo",
      download: "Baixar PDF",
      print: "Salvar em PDF",
      role: "Desenvolvedor Full-Stack e pesquisador em IA aplicada",
      summaryLabel: "Resumo",
      summary:
        "Graduando em Ciência de Dados e Inteligência Artificial na UFPB. Desenvolvedor full-stack no LAVID/UFPB, atuando no V4H, plataforma de telessaúde da Wisecare utilizada no SUS, com sistema em produção, dados de saúde e integrações com serviços públicos. Pesquisador no TRIL Lab em projetos de P&D com empresas, com foco em agentes baseados em LLMs, visão computacional e OCR.",
      experienceLabel: "Experiência",
      projectsLabel: "Projetos selecionados",
      toolsLabel: "Ferramentas",
      educationLabel: "Formação e idiomas",
      education:
        "Bacharelado em Ciência de Dados e Inteligência Artificial pela Universidade Federal da Paraíba (em andamento).",
      languages: "Português (nativo) e inglês.",
    },
    notFound: {
      code: "Erro 404",
      title: "Caiu na guarda",
      body: "Essa página não está aqui. No tatame, quando a posição não aparece, ninguém insiste na força: volta para a guarda, recompõe a pegada e tenta por outro caminho.",
      home: "Voltar ao início",
      projects: "Ver projetos",
    },
  },

  en: {
    htmlLang: "en",
    meta: {
      title: "João Vitor Chaves",
      description:
        "Full-stack developer at LAVID/UFPB, working on V4H, a telehealth platform used by Brazil's public health system, and a researcher in applied AI at TRIL Lab. Undergraduate in Data Science and Artificial Intelligence at UFPB.",
    },
    skipLink: "Skip to content",
    macCorner: "Open the Mac OS version",
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    theme: { toggle: "Switch between light and dark theme" },
    hero: {
      location: "João Pessoa, Brazil",
      intro:
        "Technology student, interested in software development and artificial intelligence. I learn by building, enjoy experimenting with new ideas, and like turning knowledge into projects that solve real problems. I am also passionate about sports, competition, and the process of always getting better.",
      now: [
        {
          org: "LAVID · UFPB",
          role: "Full-Stack Developer on V4H, telehealth for the public system",
        },
        { org: "TAIL", role: "Computer Vision / Sports board member" },
        {
          org: "TRIL Lab · UFPB",
          role: "Researcher in LLMs, computer vision and OCR",
        },
      ],
      seeProjects: "See projects",
      resume: "Resume",
    },
    about: {
      label: "About",
      title: "Who I am",
      portraitAlt: "Portrait of João Vitor Chaves",
      paragraphs: [
        [
          { t: "I am an undergraduate in " },
          {
            t: "Data Science and Artificial Intelligence at UFPB",
            em: true,
          },
          {
            t: ", and what I enjoy most is building things that leave the drawing board. I am interested both in understanding how artificial intelligence works and in figuring out how to turn it into software someone can actually use.",
          },
        ],
        [
          { t: "I am currently part of " },
          { t: "LAVID/UFPB", em: true },
          { t: ", where I work as a full-stack developer on " },
          { t: "V4H", em: true },
          {
            t: ", Wisecare's telehealth platform used by SUS, Brazil's public health system. It is where I face problems that go beyond making an application run: a real system in production, health information, and integrations with public services such as ",
          },
          { t: "CNES", em: true },
          { t: ", the national registry of health facilities." },
        ],
        [
          { t: "I also do research at " },
          { t: "TRIL Lab", em: true },
          {
            t: ", taking part in projects developed with industry partners. That is where I explore the areas of AI that interest me the most, such as ",
          },
          { t: "LLM-based agents, computer vision and OCR", em: true },
          {
            t: ", trying to understand not only how these technologies work, but where they actually make sense.",
          },
        ],
        [
          { t: "Another important part of my path is " },
          { t: "TAIL", em: true },
          {
            t: ", the first academic AI league in Paraíba. I am on the board of ",
          },
          { t: "Computer Vision and Sports", em: true },
          {
            t: ", where I lead the projects in that area and help train new members. It also brings together two things that are part of who I am: ",
          },
          { t: "technology and sports", em: true },
          { t: "." },
        ],
      ],
      closing:
        "In the end, that is what drives me: learning by building, testing ideas, and understanding how technology can be applied to real problems.",
      toolsLabel: "Tools",
      stackAreas: {
        ai: "AI & ML",
        backend: "Backend",
        frontend: "Frontend",
        data: "Data & Infra",
      },
    },
    experience: {
      label: "Experience",
      title: "Career",
      now: "Now",
      before: "Before",
      more: "Read more",
      less: "Collapse",
    },
    projects: {
      label: "Projects",
      title: "Selected work",
      description:
        "Systems I built from scratch, most of them as lead developer, involving AI agents, multimodal processing and data engineering.",
      others: "Other projects",
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      copy: "Copy address",
      copied: "Copied",
    },
    project: {
      back: "Back",
      about: "About the project",
      howItWorks: "How it works",
      architecture: "Architecture",
      features: "Features",
      tech: "Tech stack",
      privateRepo: "Private repository",
      code: "Code on GitHub",
      previous: "Previous",
      next: "Next",
      all: "All projects",
      notFound: "Project not found",
    },
    cv: {
      title: "Resume",
      download: "Download PDF",
      print: "Save as PDF",
      role: "Full-Stack Developer and applied AI researcher",
      summaryLabel: "Summary",
      summary:
        "Undergraduate in Data Science and Artificial Intelligence at UFPB. Full-stack developer at LAVID/UFPB, working on V4H, Wisecare's telehealth platform used by Brazil's public health system, with a live production system, health data and integrations with public services. Researcher at TRIL Lab on R&D projects with industry partners, focused on LLM-based agents, computer vision and OCR.",
      experienceLabel: "Experience",
      projectsLabel: "Selected projects",
      toolsLabel: "Tools",
      educationLabel: "Education and languages",
      education:
        "BSc in Data Science and Artificial Intelligence, Universidade Federal da Paraíba (in progress).",
      languages: "Portuguese (native) and English.",
    },
    notFound: {
      code: "Error 404",
      title: "Swept off the mat",
      body: "This page is not here. On the mat, when a position is not there, you do not force it: you recover guard, fix your grips and look for another way in.",
      home: "Back to home",
      projects: "See projects",
    },
  },
} as const;

export function t(lang: Lang) {
  return dict[lang];
}

/** Prefixa a rota com /en quando o idioma é inglês. */
export function path(lang: Lang, route: string) {
  if (lang === "pt") return route;
  return route === "/" ? "/en" : `/en${route}`;
}
