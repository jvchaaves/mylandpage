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
      period: "Jun 2026 — Presente",
      title: "Desenvolvedor Full-Stack e AI Engineer",
      org: "LAVID · UFPB",
      description:
        "Desenvolvimento do V4H, plataforma de telessaúde da Wisecare utilizada no SUS, integrada ao prontuário AGHUse, ao CNES e à autenticação via Keycloak. Construí o processamento e a persistência das transcrições das consultas e uma camada de IA sobre elas: busca com citações, identificação de fatos clínicos por participante e rascunhos de evolução SOAP. Atuo no backend em Node e TypeScript (Express, TypeORM, InversifyJS, BullMQ e RabbitMQ, Socket.IO) e no frontend React com Redux-Saga, e estou reconstruindo a camada de sessões e videochamadas para substituir a dependência do Jitsi por uma solução própria.",
      tags: ["TypeScript", "Node.js", "React", "PostgreSQL", "RabbitMQ", "LLMs", "Docker"],
    },
    {
      period: "Mar 2025 — Presente",
      title: "Pesquisador",
      org: "TRIL Lab · UFPB",
      description:
        "Pesquisa, desenvolvimento e inovação em parceria com empresas, com foco em agentes baseados em LLMs, OCR e visão computacional. Projetos: Editora BP (mai 2026 — presente), plataforma de IA para produção de provas comentadas, com fluxo de 10 etapas em LangGraph, RAG sobre fontes curadas e revisão por especialistas, que reduziu a primeira versão de uma prova de 1 a 2 dias para cerca de 10 minutos e o custo por questão em 10 vezes; e TutorIA (dez 2025 — mar 2026), tutoria para o ENEM no WhatsApp, com resolução de questões por foto, correção de redação e dúvidas com RAG.",
      tags: ["LLMs", "LangGraph", "RAG", "FastAPI", "OCR", "Python"],
    },
    {
      period: "Nov 2025 — Presente",
      title: "Pesquisador em Visão Computacional",
      org: "TAIL",
      description:
        "Na Technology and Artificial Intelligence League, primeira liga acadêmica de IA da Paraíba, entrei como trainee e hoje integro a diretoria de Visão Computacional/Sports. Em equipe, desenvolvo um sistema de scouting automatizado para o basquete 3x3 que extrai métricas de jogadores de vídeos de transmissão, adaptando para meia quadra um pipeline de 5x5 (detecção, segmentação, keypoints de quadra e pose) e avaliando a generalização dos modelos. Projeto em andamento.",
      tags: ["Computer Vision", "PyTorch", "Python", "YOLO"],
    },
  ],
  past: [
    {
      period: "Nov 2025 — Jun 2026",
      title: "Pesquisador, engenharia de dados",
      org: "ARIA · UFPB",
      description:
        "No projeto da LOTEP (Loteria do Estado da Paraíba), construí o pipeline de ingestão que detecta planilhas novas de todos os operadores legalizados do estado, identifica o padrão correspondente ou infere e registra um novo automaticamente, e executa auditoria e limpeza vetorizada até a carga em um data warehouse PostgreSQL. Metadados em JSON, validações antifraude, arquitetura event-driven em Kafka e gateway FastAPI validado por JSON, em conformidade com a LGPD. Reduziu de 6 horas para 40 minutos o preparo dos dados consumidos pelo time de dados.",
      tags: ["Kafka", "FastAPI", "PostgreSQL", "Python", "LGPD"],
    },
    {
      period: "Jun 2025 — Dez 2025",
      title: "AI Engineer (estágio)",
      org: "Zoox Smart Data",
      description:
        "Gerador de agentes inteligentes que resolveu um gargalo do CrewAI: em vez de escrever código, o usuário define papel, objetivo e contexto do agente por uma interface interativa, e a aplicação gera o código e a configuração prontos para uso.",
      tags: ["CrewAI", "Python", "LLMs"],
    },
    {
      period: "Nov 2024 — Jun 2025",
      title: "Participante (turma 2025.1)",
      org: "Trilha · UFPB",
      description:
        "Programa gratuito de programação, projetos e mentoria da UFPB, feito por estudantes, com aulas de Python, web e dados.",
      highlight:
        "1º lugar entre 6 equipes no hackathon do programa, com o PixelMind",
    },
  ],
};

const en: { current: Role[]; past: Role[] } = {
  current: [
    {
      period: "Jun 2026 — Present",
      title: "Full-Stack Developer and AI Engineer",
      org: "LAVID · UFPB",
      description:
        "Building V4H, Wisecare's telehealth platform used by SUS, Brazil's public health system, integrated with the AGHUse health record, CNES, the national registry of health facilities, and Keycloak authentication. I built the processing and persistence of consultation transcripts and an AI layer on top of them: citation-grounded search, clinical fact extraction per participant and SOAP progress-note drafts. I work on the Node and TypeScript backend (Express, TypeORM, InversifyJS, BullMQ and RabbitMQ, Socket.IO) and on the React frontend with Redux-Saga, and I am rebuilding session and video-call management to replace the Jitsi dependency with an in-house solution.",
      tags: ["TypeScript", "Node.js", "React", "PostgreSQL", "RabbitMQ", "LLMs", "Docker"],
    },
    {
      period: "Mar 2025 — Present",
      title: "Researcher",
      org: "TRIL Lab · UFPB",
      description:
        "Research, development and innovation with industry partners, focused on LLM-based agents, OCR and computer vision. Projects: Editora BP (May 2026 — present), an AI platform for producing annotated exams, with a 10-step LangGraph workflow, RAG over curated sources and expert review, which cut the first draft of an exam from one or two days to about ten minutes and the cost per question by 10x; and TutorIA (Dec 2025 — Mar 2026), ENEM tutoring on WhatsApp that solves questions from photos, grades essays and answers doubts with RAG.",
      tags: ["LLMs", "LangGraph", "RAG", "FastAPI", "OCR", "Python"],
    },
    {
      period: "Nov 2025 — Present",
      title: "Computer Vision Researcher",
      org: "TAIL",
      description:
        "At the Technology and Artificial Intelligence League, the first academic AI league in Paraíba, I joined as a trainee and now take part in the Computer Vision/Sports directorate. With the team, I develop an automated scouting system for 3x3 basketball that extracts player metrics from broadcast footage, adapting a 5x5 pipeline (detection, segmentation, court keypoints and pose) to half-court play and evaluating how well the models generalize. In progress.",
      tags: ["Computer Vision", "PyTorch", "Python", "YOLO"],
    },
  ],
  past: [
    {
      period: "Nov 2025 — Jun 2026",
      title: "Researcher, data engineering",
      org: "ARIA · UFPB",
      description:
        "On the LOTEP project (Paraíba State Lottery), I built the ingestion pipeline that detects new spreadsheets from every licensed operator in the state, matches them to a known layout or infers and registers a new one automatically, and runs vectorized auditing and cleaning up to the load into a PostgreSQL data warehouse. JSON metadata, anti-fraud validation, an event-driven architecture on Kafka and a FastAPI gateway validated by JSON, compliant with the Brazilian data protection law. It cut the data preparation consumed by the data team from 6 hours to 40 minutes.",
      tags: ["Kafka", "FastAPI", "PostgreSQL", "Python", "LGPD"],
    },
    {
      period: "Jun 2025 — Dec 2025",
      title: "AI Engineer (internship)",
      org: "Zoox Smart Data",
      description:
        "Agent generator that solved a bottleneck in CrewAI: instead of writing code, the user defines the agent's role, goal and context through an interactive interface, and the application generates ready-to-use code and configuration.",
      tags: ["CrewAI", "Python", "LLMs"],
    },
    {
      period: "Nov 2024 — Jun 2025",
      title: "Participant (cohort 2025.1)",
      org: "Trilha · UFPB",
      description:
        "Free programming, projects and mentoring program at UFPB, run by students, with classes in Python, web and data.",
      highlight: "First place among six teams in the program hackathon, with PixelMind",
    },
  ],
};

export const experience: Record<Lang, { current: Role[]; past: Role[] }> = {
  pt,
  en,
};
