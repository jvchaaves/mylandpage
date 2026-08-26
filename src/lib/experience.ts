import type { Lang } from "@/lib/i18n";

/** Trajetória: fonte única, usada pela home e pela página de currículo. */
export interface Role {
  period: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
  highlight?: string;
}

const pt: { current: Role[]; past: Role[] } = {
  current: [
    {
      period: "Jul 2026 — Presente",
      title: "Desenvolvedor Full-Stack",
      org: "LAVID · UFPB",
      description:
        "Desenvolvimento do V4H, plataforma de telessaúde da Wisecare utilizada no SUS. Atuo no backend em Node e TypeScript (Express, TypeORM, injeção de dependências com InversifyJS, filas com BullMQ e RabbitMQ, tempo real com Socket.IO) e no frontend React com Redux-Saga, além da integração com o CNES e da autenticação via Keycloak.",
      tags: ["TypeScript", "Node.js", "React", "PostgreSQL", "RabbitMQ", "Docker"],
    },
    {
      period: "Ago 2026 — Presente",
      title: "Diretoria de Visão Computacional / Sports",
      org: "TAIL",
      description:
        "Conduzo a frente de visão computacional aplicada a esportes na Technology and Artificial Intelligence League, primeira liga acadêmica de IA da Paraíba: definição dos projetos da área, acompanhamento técnico e formação de novos membros. Na liga desde dez/2025, como trainee.",
      tags: ["Computer Vision", "PyTorch", "Python"],
    },
    {
      period: "Mar 2025 — Presente",
      title: "Pesquisador",
      org: "TRIL Lab · UFPB",
      description:
        "Pesquisa, Desenvolvimento e Inovação em parceria com empresas: ZOOX Smart Data (2025) e Plataforma de Educação Rômulo Passos (atual). Foco em agentes baseados em LLMs, visão computacional, OCR e business intelligence.",
      tags: ["LLMs", "OCR", "Python", "BI"],
    },
  ],
  past: [
    {
      period: "Jan 2026 — Jun 2026",
      title: "Data Engineer",
      org: "LOTEP · Loteria do Estado da Paraíba",
      description:
        "Sistema de engenharia de dados que ingere relatórios heterogêneos de operadores de apostas esportivas por um pipeline configurável: metadados em JSON, limpeza vetorizada e validações antifraude, e carrega os dados em um data warehouse PostgreSQL. O fluxo é orquestrado por arquitetura event-driven em Kafka, com gateway FastAPI validado por JSON e em conformidade com a LGPD.",
      tags: ["Kafka", "FastAPI", "PostgreSQL", "Python", "LGPD"],
    },
    {
      period: "Jan 2026 — Mai 2026",
      title: "Software Engineer",
      org: "Editora BP",
      description:
        "Plataforma de IA que reduziu a produção de provas comentadas de 1 a 2 dias para cerca de 10 minutos. O sistema extrai dados de PDFs automaticamente e usa agentes RAG para gerar comentários ancorados em material curado, com chat interativo e revisão de especialistas (human-in-the-loop) alimentando a melhoria contínua.",
      tags: ["RAG", "Agentes", "Python", "OCR"],
    },
    {
      period: "Nov 2025 — Jul 2026",
      title: "Pesquisador",
      org: "ARIA · UFPB",
      description:
        "Pesquisa em inteligência artificial aplicada, com contribuição em projetos do grupo no Centro de Informática da UFPB.",
    },
    {
      period: "Set 2025 — Mar 2026",
      title: "AI Engineer",
      org: "LembreMe",
      description:
        "Liderei a engenharia de IA do LembreMe, assistente conversacional que unifica lembretes, finanças, metas, tarefas e notas em linguagem natural, com integração de calendário, scraping próprio para buscas de viagens, recomendações contextuais e ligações automatizadas. O núcleo usa LLMs para roteamento de intenção e geração de resposta. No mesmo ecossistema, o módulo de reuniões transcreve em tempo real via Deepgram e extrai tarefas, decisões, insights e perguntas em aberto, entregando notas e resumo executivo assim que a call termina.",
      tags: ["LLMs", "LangChain", "Deepgram", "Python", "FastAPI"],
    },
    {
      period: "Jun 2025 — Nov 2025",
      title: "AI Engineer (estágio)",
      org: "Zoox Smart Data",
      description:
        "Gerador de agentes inteligentes que resolveu um gargalo do CrewAI: em vez de escrever código, o usuário define papel, objetivo e contexto do agente por uma interface interativa, e a aplicação gera o código e a configuração prontos para uso.",
      tags: ["CrewAI", "Python", "LLMs"],
    },
    {
      period: "Nov 2024 — Abr 2025",
      title: "Trainee",
      org: "Trilha · UFPB",
      description:
        "Programa imersivo presencial em Ciência da Computação, com workshops e mentorias em desenvolvimento de software.",
      highlight:
        "1º lugar entre 6 equipes no hackathon do programa, com o PixelMind",
    },
  ],
};

const en: { current: Role[]; past: Role[] } = {
  current: [
    {
      period: "Jul 2026 — Present",
      title: "Full-Stack Developer",
      org: "LAVID · UFPB",
      description:
        "Building V4H, Wisecare's telehealth platform used by SUS, Brazil's public health system. I work on the Node and TypeScript backend (Express, TypeORM, dependency injection with InversifyJS, queues with BullMQ and RabbitMQ, real time with Socket.IO) and on the React frontend with Redux-Saga, plus the integration with CNES, the national registry of health facilities, and authentication through Keycloak.",
      tags: ["TypeScript", "Node.js", "React", "PostgreSQL", "RabbitMQ", "Docker"],
    },
    {
      period: "Aug 2026 — Present",
      title: "Computer Vision / Sports board member",
      org: "TAIL",
      description:
        "I lead the computer vision applied to sports track at the Technology and Artificial Intelligence League, the first academic AI league in Paraíba: defining the projects in that area, following them technically and training new members. Part of the league since December 2025, first as a trainee.",
      tags: ["Computer Vision", "PyTorch", "Python"],
    },
    {
      period: "Mar 2025 — Present",
      title: "Researcher",
      org: "TRIL Lab · UFPB",
      description:
        "Research, development and innovation with industry partners: ZOOX Smart Data (2025) and the Rômulo Passos education platform (current). Focused on LLM-based agents, computer vision, OCR and business intelligence.",
      tags: ["LLMs", "OCR", "Python", "BI"],
    },
  ],
  past: [
    {
      period: "Jan 2026 — Jun 2026",
      title: "Data Engineer",
      org: "LOTEP · Paraíba State Lottery",
      description:
        "Data engineering system that ingests heterogeneous reports from sports betting operators through a configurable pipeline: JSON metadata, vectorized cleaning and anti-fraud validation, loading everything into a PostgreSQL data warehouse. The flow is orchestrated by an event-driven architecture on Kafka, with a FastAPI gateway validated by JSON and compliant with the Brazilian data protection law.",
      tags: ["Kafka", "FastAPI", "PostgreSQL", "Python", "LGPD"],
    },
    {
      period: "Jan 2026 — May 2026",
      title: "Software Engineer",
      org: "Editora BP",
      description:
        "AI platform that cut the production of annotated exams from one or two days to roughly ten minutes. The system extracts data from PDFs automatically and uses RAG agents to write commentary grounded in curated material, with an interactive chat and expert review (human in the loop) feeding continuous improvement.",
      tags: ["RAG", "Agents", "Python", "OCR"],
    },
    {
      period: "Nov 2025 — Jul 2026",
      title: "Researcher",
      org: "ARIA · UFPB",
      description:
        "Research in applied artificial intelligence, contributing to the group's projects at the Informatics Center of UFPB.",
    },
    {
      period: "Sep 2025 — Mar 2026",
      title: "AI Engineer",
      org: "LembreMe",
      description:
        "I led AI engineering at LembreMe, a conversational assistant that brings reminders, personal finance, goals, tasks and notes together in natural language, with calendar integration, in-house scraping for travel search, contextual recommendations and automated phone calls. The core uses LLMs for intent routing and response generation. In the same ecosystem, the meetings module transcribes in real time through Deepgram and extracts tasks, decisions, insights and open questions, delivering notes and an executive summary as soon as the call ends.",
      tags: ["LLMs", "LangChain", "Deepgram", "Python", "FastAPI"],
    },
    {
      period: "Jun 2025 — Nov 2025",
      title: "AI Engineer (internship)",
      org: "Zoox Smart Data",
      description:
        "Agent generator that solved a bottleneck in CrewAI: instead of writing code, the user defines the agent's role, goal and context through an interactive interface, and the application generates production-ready code and configuration.",
      tags: ["CrewAI", "Python", "LLMs"],
    },
    {
      period: "Nov 2024 — Apr 2025",
      title: "Trainee",
      org: "Trilha · UFPB",
      description:
        "Intensive in-person program in Computer Science, with workshops and mentoring in software development.",
      highlight: "First place among six teams in the program hackathon, with PixelMind",
    },
  ],
};

export const experience: Record<Lang, { current: Role[]; past: Role[] }> = {
  pt,
  en,
};
