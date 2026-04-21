export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  howItWorks: string;
  architecture: string[];
  tech: { name: string; category: string }[];
  features: string[];
  github: string;
  role: string;
  icon: string;
  featured: boolean;
  images: string[];
  metrics?: string;
}

export const projects: Project[] = [
  {
    slug: "lembreme",
    name: "LembreMe",
    tagline: "Assistente pessoal autônomo com agentes de IA multimodal",
    description:
      "LembreMe é um assistente pessoal autônomo construído sobre uma arquitetura ReAct (Reasoning + Acting) com agentes de IA multimodal. O sistema processa múltiplos tipos de input — áudio (transcrição via Whisper), imagens (OCR), texto (NLP) e URLs — para gerenciar finanças pessoais, tarefas, lembretes, metas e notas do usuário de forma inteligente.\n\nA arquitetura é composta por 4 containers Docker rodando em uma instância AWS EC2: um gateway Node.js para recepção e pré-processamento, um agente Python FastAPI como core ReAct com LangChain, um scheduler para verificação contínua de lembretes, e Redis para cache de sessões. O padrão Repository é utilizado para abstração de dados, com LangChain tools especializadas por domínio (finanças, tarefas, lembretes, metas, notas).\n\nO sistema oferece planos Free, Premium e Ultra, com relatórios semanais automáticos gerados via Pandas e matplotlib, notificações inteligentes baseadas em prioridade, e auto-conclusão de metas financeiras quando os critérios são atingidos.",
    howItWorks:
      "O gateway Node.js recebe o input do usuário e realiza o pré-processamento: se for áudio, transcreve com Whisper; se for imagem, extrai texto via OCR; se for URL, faz scraping do conteúdo. O input processado é então enviado ao agente Python FastAPI, que implementa o loop ReAct com LangChain.\n\nO agente analisa a intenção do usuário e seleciona as ferramentas apropriadas — ferramentas de finanças para registrar transações e gerar relatórios, ferramentas de tarefas para criar e gerenciar to-dos, ferramentas de lembretes para agendar notificações, ferramentas de metas para acompanhar progresso, e ferramentas de notas para armazenamento livre. Todos os dados são persistidos no Supabase.\n\nO scheduler roda continuamente verificando lembretes pendentes e tarefas próximas do prazo, disparando notificações por prioridade. Relatórios semanais são gerados automaticamente com análise de gastos, progresso de metas e produtividade, retornando tudo em linguagem natural ao usuário.",
    architecture: [
      "Gateway Node.js — recepção e pré-processamento de inputs",
      "Agente Python FastAPI — core ReAct com LangChain",
      "Scheduler — verificação contínua de lembretes e tarefas",
      "Redis — cache e gerenciamento de sessões",
      "Supabase — persistência e autenticação",
    ],
    tech: [
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "LangChain", category: "AI/ML" },
      { name: "GPT-4o-mini", category: "AI/ML" },
      { name: "Whisper", category: "AI/ML" },
      { name: "Supabase", category: "Database" },
      { name: "Redis", category: "Infrastructure" },
      { name: "Docker", category: "Infrastructure" },
      { name: "AWS EC2", category: "Infrastructure" },
      { name: "Node.js", category: "Backend" },
      { name: "Pandas", category: "Data" },
      { name: "matplotlib", category: "Data" },
    ],
    features: [
      "Processamento multimodal (áudio, imagem, texto, URLs)",
      "Gestão financeira com relatórios automáticos",
      "Sistema de tarefas com notificações por prioridade",
      "Metas pessoais e financeiras com auto-conclusão",
      "Relatório semanal automático",
      "Planos Free/Premium/Ultra",
    ],
    github: "https://github.com/LembeMe/LembreMe",
    role: "Autor principal — 93% dos commits (158/170)",
    icon: "Brain",
    featured: true,
    images: [
      "/projects/lembreme/architecture.png",
      "/projects/lembreme/demo.png",
      "/projects/lembreme/features.png",
    ],
    metrics: "93% dos commits • 4 microsserviços • Deploy AWS",
  },
  {
    slug: "lembreme-copilot",
    name: "LembreMe Copilot",
    tagline: "Copiloto inteligente para reuniões em tempo real",
    description:
      "LembreMe Copilot é um copiloto inteligente para reuniões que opera em tempo real. Utiliza transcrição ao vivo via faster-whisper ASR através de WebSocket, com detecção automática de tarefas, lembretes e insights extraídos da conversa em andamento.\n\nO sistema oferece Q&A contextual sobre o conteúdo da reunião, permitindo que o usuário faça perguntas sobre o que foi discutido e receba respostas relevantes. Respostas podem ser entregues via text-to-speech para uma experiência hands-free durante a reunião.\n\nA aplicação desktop foi construída com Electron e React, apresentando um dashboard completo para gerenciamento de sessões e um overlay do copilot que pode ser posicionado sobre qualquer aplicação de videoconferência.",
    howItWorks:
      "O áudio é capturado pelo navegador ou aplicação Electron e transmitido via WebSocket para o backend. O FFmpeg converte o stream de áudio para formato PCM16, que é então processado pelo worker Python ASR dedicado utilizando faster-whisper com Silero VAD (Voice Activity Detection) para transcrição precisa.\n\nO motor de detecção analisa o texto transcrito em tempo real para identificar action items — tarefas mencionadas, lembretes implícitos, decisões tomadas e insights relevantes. O GPT-4o-mini gera análises e insights adicionais baseados no contexto acumulado da reunião.\n\nOs resultados são transmitidos de volta ao frontend em tempo real via WebSocket, atualizando o dashboard e o overlay do copilot. Todas as sessões e itens detectados são persistidos no Supabase para consulta posterior.",
    architecture: [
      "Frontend React/Electron — dashboard e copilot overlay",
      "Backend Node.js — API REST + WebSocket server",
      "Worker Python — ASR dedicado com faster-whisper",
      "Supabase — persistência de sessões e itens detectados",
    ],
    tech: [
      { name: "TypeScript", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "Electron", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "Tailwind", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "WebSocket", category: "Backend" },
      { name: "faster-whisper", category: "AI/ML" },
      { name: "Silero VAD", category: "AI/ML" },
      { name: "GPT-4o-mini", category: "AI/ML" },
      { name: "OpenAI TTS", category: "AI/ML" },
      { name: "FFmpeg", category: "Infrastructure" },
      { name: "Supabase", category: "Database" },
    ],
    features: [
      "Transcrição de áudio em tempo real",
      "Detecção automática de tarefas e lembretes",
      "Q&A contextual sobre conteúdo da reunião",
      "Text-to-Speech para respostas",
      "App desktop via Electron",
      "Dashboard de sessões",
    ],
    github: "https://github.com/dudumontenegro/LembreMe-Copilot1",
    role: "Autor principal — 85% dos commits (33/39)",
    icon: "Mic",
    featured: true,
    images: [
      "/projects/lembreme-copilot/screenshot-1.png",
      "/projects/lembreme-copilot/screenshot-2.png",
      "/projects/lembreme-copilot/screenshot-3.png",
    ],
    metrics: "85% dos commits • Real-time ASR • Desktop App",
  },
  {
    slug: "pixelmind",
    name: "PixelMind",
    tagline: "Editor de vídeo inteligente com IA — 1º lugar hackathon",
    description:
      "PixelMind é um editor de vídeo inteligente que permite edição através de comandos em linguagem natural. O projeto conquistou o 1º lugar entre 6 equipes no hackathon TRILHA, uma iniciativa do TRIL Lab (Laboratório de Tecnologias para Raciocínio, Interação e Linguagem) da UFPB.\n\nO sistema combina transcrição automática com Whisper, análise semântica com Gemini, corte inteligente com FFmpeg e redução de ruído espectral avançada. O usuário pode simplesmente digitar comandos como \"remova a parte onde falo sobre X\" e o sistema identifica e executa a edição automaticamente.\n\nDesenvolvido em apenas um mês, o projeto demonstra a viabilidade de interfaces de edição de vídeo baseadas em linguagem natural, tornando a edição acessível a usuários sem experiência técnica em ferramentas tradicionais.",
    howItWorks:
      "O usuário faz upload de um vídeo e o backend extrai o áudio utilizando FFmpeg. O Whisper transcreve o áudio gerando timestamps precisos para cada segmento. Em seguida, o Gemini 1.5 Flash realiza análise semântica do conteúdo transcrito, criando um mapa semântico do vídeo.\n\nQuando o usuário digita um comando em linguagem natural (por exemplo, \"remova a parte sobre X\"), o Gemini interpreta o comando e identifica os segmentos relevantes na transcrição. O FFmpeg então executa os cortes no vídeo com precisão baseada nos timestamps.\n\nPara melhoria de qualidade, um microsserviço Python com FastAPI aplica redução de ruído espectral utilizando librosa e noisereduce, processando o áudio para remover ruídos de fundo. O vídeo processado é então retornado ao usuário com todas as edições aplicadas.",
    architecture: [
      "Frontend Next.js 15 — interface moderna com React 19",
      "Backend Express — upload, transcrição e orquestração",
      "Microsserviço Python FastAPI — redução de ruído espectral",
      "FFmpeg — processamento de áudio e vídeo",
    ],
    tech: [
      { name: "Next.js 15", category: "Frontend" },
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind", category: "Frontend" },
      { name: "Express", category: "Backend" },
      { name: "Gemini 1.5 Flash", category: "AI/ML" },
      { name: "Whisper", category: "AI/ML" },
      { name: "FFmpeg", category: "Infrastructure" },
      { name: "FastAPI", category: "Backend" },
      { name: "librosa", category: "AI/ML" },
      { name: "noisereduce", category: "AI/ML" },
      { name: "Radix UI", category: "Frontend" },
    ],
    features: [
      "Edição de vídeo por comandos em linguagem natural",
      "Transcrição automática com timestamps",
      "Análise semântica do conteúdo",
      "Redução de ruído espectral avançada",
      "Filtros e melhorias de vídeo",
      "Geração de embeddings para similaridade",
    ],
    github: "https://github.com/TrilhaUFPB/PixelMind",
    role: "Arquiteto Backend — Hackathon Winner",
    icon: "Video",
    featured: true,
    images: [
      "/projects/pixelmind/screenshot-1.png",
      "/projects/pixelmind/screenshot-2.png",
      "/projects/pixelmind/screenshot-3.png",
    ],
    metrics: "1º lugar • 6 equipes • Desenvolvido em 1 mês",
  },
  {
    slug: "hipocrites-ai",
    name: "hipocrites.AI",
    tagline: "Sistema de orquestração de pré-consultas médicas com IA",
    description:
      "hipocrites.AI é um sistema de saúde com IA para orquestração de pré-consultas médicas utilizando Large Language Models. O sistema automatiza a triagem de pacientes, agendamento e notificações para médicos através de agentes de IA especializados.\n\nO sistema utiliza prompts especializados para contexto médico, garantindo que as interações sejam precisas e relevantes para o domínio da saúde. A camada de orquestração gerencia o fluxo completo desde o primeiro contato do paciente até a notificação do profissional de saúde.\n\nTodo o sistema é containerizado com Docker, facilitando o deploy e a escalabilidade em diferentes ambientes de infraestrutura hospitalar.",
    howItWorks:
      "O paciente interage com o sistema e o LLM com system prompts médicos especializados processa a consulta, coletando informações relevantes sobre sintomas, histórico e urgência. A camada de orquestração analisa as informações e realiza a triagem automatizada.\n\nO sistema de agendamento inteligente considera a disponibilidade dos profissionais, a urgência do caso e a especialidade necessária para sugerir os melhores horários. As notificações são enviadas aos profissionais de saúde via scheduler com todas as informações pré-processadas.\n\nO resultado é uma redução significativa no tempo de pré-consulta e uma melhor preparação dos profissionais antes do atendimento efetivo.",
    architecture: [
      "Orquestrador de agentes com LLM",
      "Sistema de prompts médicos especializados",
      "Scheduler de notificações",
      "Docker containerization",
    ],
    tech: [
      { name: "Python", category: "Backend" },
      { name: "LLM Orchestration", category: "AI/ML" },
      { name: "Docker", category: "Infrastructure" },
      { name: "System Prompts", category: "AI/ML" },
    ],
    features: [
      "Triagem automatizada de pacientes",
      "Agendamento inteligente",
      "Notificação de médicos via IA",
      "Prompts especializados para contexto médico",
    ],
    github: "https://github.com/jvchaaves/hipocrites.AI",
    role: "",
    icon: "HeartPulse",
    featured: false,
    images: [
      "/projects/hipocrites-ai/screenshot-1.png",
      "/projects/hipocrites-ai/screenshot-2.png",
    ],
  },
  {
    slug: "tutoria",
    name: "TutorIA",
    tagline: "Plataforma de tutoria educacional com IA multiagente",
    description:
      "TutorIA é uma plataforma de tutoria educacional com IA que resolve questões de provas usando OCR + RAG com embeddings vetoriais, e corrige redações utilizando os critérios do ENEM com um sistema multiagente especializado. A plataforma inclui sistema de pagamentos via Stripe.\n\nA arquitetura é composta por 5 microsserviços: AIService (FastAPI para OCR, RAG e resolução), UserSPDBJS (Node.js para gestão de usuários), StripeWebHook (pagamentos), WPPService (interface conversacional) e Redis para cache de estado.\n\nPara redações, o sistema ENEMCorrector utiliza agentes especializados por competência do ENEM, gerando PDFs com correções detalhadas e formatação LaTeX para fórmulas e expressões matemáticas nas resoluções de questões.",
    howItWorks:
      "O estudante envia uma imagem de uma questão e o sistema realiza OCR para extrair o texto. O módulo RAG busca questões similares do ENEM via embeddings pgvector no Supabase, e o LLM gera uma resolução passo a passo contextualizada com as questões mais relevantes encontradas.\n\nPara correção de redações, a imagem é processada via OCR e o texto extraído é enviado ao sistema multiagente ENEMCorrector. Cada agente é especializado em uma das competências do ENEM, avaliando aspectos como domínio da norma culta, compreensão do tema, argumentação, coesão e proposta de intervenção.\n\nO resultado final é compilado em um PDF com correções detalhadas, notas por competência e sugestões de melhoria, com formatação LaTeX quando necessário. O sistema de pagamentos Stripe gerencia os planos de acesso dos estudantes.",
    architecture: [
      "AIService FastAPI — OCR, RAG e resolução (porta 9000)",
      "UserSPDBJS Node.js — gestão de usuários (porta 9001)",
      "StripeWebHook — pagamentos (porta 9002)",
      "WPPService — interface conversacional (porta 9003)",
      "Redis — cache de estado",
    ],
    tech: [
      { name: "FastAPI", category: "Backend" },
      { name: "OpenAI GPT", category: "AI/ML" },
      { name: "pgvector", category: "Database" },
      { name: "Stripe", category: "Payments" },
      { name: "Docker", category: "Infrastructure" },
      { name: "Redis", category: "Infrastructure" },
      { name: "Supabase", category: "Database" },
      { name: "Node.js", category: "Backend" },
      { name: "TypeScript", category: "Backend" },
      { name: "LaTeX", category: "Tools" },
    ],
    features: [
      "Resolução de questões via OCR + RAG",
      "Correção de redações nos moldes ENEM",
      "Sistema multiagente especializado",
      "Pagamentos com Stripe",
      "Métricas de performance automatizadas",
      "Geração de PDF com correções",
    ],
    github: "https://github.com/adriel1ft/TutorIA-wwebjs",
    role: "",
    icon: "GraduationCap",
    featured: false,
    images: [
      "/projects/tutoria/screenshot-1.png",
      "/projects/tutoria/screenshot-2.png",
    ],
  },
  {
    slug: "lotep-data-pipeline",
    name: "LOTEP — Data Pipeline",
    tagline: "Pipeline de engenharia de dados com Airflow e Kafka",
    description:
      "LOTEP Data Pipeline é um pipeline de engenharia de dados para o setor de loterias brasileiro. O framework ELT modular suporta três tipos de extratores: PostgreSQL (com watermark incremental), filesystem (CSV/Excel por data) e Kafka (batch de 1000 mensagens).\n\nA orquestração é realizada pelo Apache Airflow com DAGs especializadas por domínio. O loader PostgreSQL suporta três modos de carga: append (inserção simples), replace (substituição completa) e upsert (atualização via staging tables para garantir idempotência).\n\nO sistema conta com 18 processadores de domínio especializados para transformação de dados, todos modelados com SQLAlchemy em 18 tabelas distintas. Validação via contratos de dados garante a qualidade em cada etapa do pipeline.",
    howItWorks:
      "Uma DAG do Airflow é acionada e dispara o processo de extração. Os extratores modulares são selecionados conforme a fonte: o extrator PostgreSQL usa watermark incremental para buscar apenas dados novos, o extrator de filesystem processa arquivos CSV e Excel organizados por data, e o extrator Kafka consome mensagens em batches de 1000.\n\nOs dados extraídos são carregados no PostgreSQL via um dos três modos disponíveis. O modo upsert utiliza staging tables temporárias para garantir idempotência — os dados são primeiro inseridos na staging, depois mesclados com a tabela final via merge.\n\nApós a carga, os 18 processadores de domínio aplicam transformações especializadas — normalização, agregação, cálculos derivados e validações de negócio. Contratos de dados em cada etapa verificam schema, tipos e regras de negócio antes de permitir que os dados avancem no pipeline.",
    architecture: [
      "Apache Airflow — orquestração de DAGs",
      "Extratores modulares — Postgres, filesystem, Kafka",
      "Loader PostgreSQL — append, replace, upsert",
      "18 Processadores de domínio — transformação especializada",
      "SQLAlchemy — modelagem de 18 tabelas",
    ],
    tech: [
      { name: "Apache Airflow", category: "Data" },
      { name: "SQLAlchemy", category: "Data" },
      { name: "Kafka", category: "Data" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Pandas", category: "Data" },
      { name: "Docker", category: "Infrastructure" },
      { name: "Python", category: "Backend" },
    ],
    features: [
      "3 tipos de extratores (DB, filesystem, streaming)",
      "Carga com upsert via staging tables",
      "18 processadores de domínio",
      "Orquestração completa via Airflow DAGs",
      "Validação via contratos de dados",
    ],
    github: "https://github.com/aria/lotep",
    role: "",
    icon: "Database",
    featured: false,
    images: [
      "/projects/lotep-data-pipeline/screenshot-1.png",
      "/projects/lotep-data-pipeline/screenshot-2.png",
    ],
  },
  {
    slug: "plataforma-editorial-ia",
    name: "EditoraBP.AI",
    tagline: "Resolução automática de provas de concursos para editoras, do PDF ao gabarito comentado",
    description:
      "Sistema full-stack para produção editorial de gabaritos comentados de concursos públicos. O pipeline vai do upload do PDF até a exportação final: OCR extrai questões e alternativas, um agente classificador identifica disciplina e tema via OpenAI JSON Schema strict com enum de 289 temas em 6 disciplinas canônicas (Enfermagem, Legislação do SUS, Português, Informática, Raciocínio Lógico, EBSERH), e um segundo agente gera o comentário contextualizado com RAG.\n\nA restrição por enum no nível de geração de tokens — não por prompt — elimina alucinações na classificação. Um sistema de mapeamento converte 14 categorias legadas para as 6 canônicas, garantindo backward compatibility com provas anteriores sem reprocessamento.\n\nO painel de revisão permite que professores aprovem, editem ou rejeitem cada questão antes da publicação. A exportação é dual: modo externo (DOCX/XLSX/PDF/PPTX com markdown renderizado) para a editora, e modo interno (JSON/CSV sem markdown) para reimportação em sistemas. CI/CD via GitHub Actions com 206/206 testes passando.",
    howItWorks:
      "O operador faz upload do PDF da prova e o pipeline de OCR extrai enunciados, alternativas e metadados de cada questão. O agente classificador recebe a questão e retorna disciplina + tema via response_format JSON Schema strict, onde o enum de temas é gerado dinamicamente a partir do banco — a IA não pode devolver um valor fora do vocabulário controlado.\n\nO agente de comentários busca questões similares via embeddings no pgvector e gera um gabarito comentado com explicação passo a passo e referência à fonte. Na última linha do comentário a IA inclui `Referência: ...`, extraída pelo exporter via regex para renderização separada.\n\nO professor acessa o painel e vê a fila de questões pendentes filtradas por disciplina. Pode aprovar individualmente, usar o atalho de aprovação admin para lotes, ou editar o comentário inline. Após aprovação, exporta no formato adequado ao destino — documento polido para a gráfica ou dados estruturados para integração com outros sistemas.",
    architecture: [
      "Backend FastAPI — pipeline de OCR, classificação e geração",
      "OpenAI JSON Schema strict — enum de 289 temas para classificação sem alucinação",
      "pgvector + RAG — busca vetorial de questões similares por disciplina",
      "Frontend React 19 — painel de revisão editorial com fila por disciplina",
      "Supabase PostgreSQL — taxonomia canônica com hierarquia pai/filho via pai_id",
    ],
    tech: [
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "OpenAI GPT-4o", category: "AI/ML" },
      { name: "pgvector", category: "Database" },
      { name: "Supabase", category: "Database" },
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "Tailwind", category: "Frontend" },
      { name: "GitHub Actions", category: "DevOps" },
    ],
    features: [
      "Classificação por JSON Schema strict enum — sem alucinação de tema",
      "RAG com pgvector para gabaritos contextualizados",
      "Exportação dual: documento (editora) vs dados estruturados (sistemas)",
      "Taxonomia canônica de 289 temas em 6 disciplinas no DB",
      "Painel de revisão com aprovação individual e em lote",
      "206/206 testes, CI/CD via GitHub Actions",
    ],
    github: "https://github.com/jvchaaves",
    role: "",
    icon: "FileQuestion",
    featured: false,
    images: [
      "/projects/plataforma-editorial-ia/screenshot-1.png",
      "/projects/plataforma-editorial-ia/screenshot-2.png",
    ],
  },
  {
    slug: "dashboard-saude-digital",
    name: "Copilot Médico",
    tagline: "Copiloto de IA para médicos — triagem automatizada, resumos por paciente e gestão de pré-consultas",
    description:
      "Interface web completa para o sistema de orquestração de pré-consultas médicas com IA. Oferece um painel para médicos acompanharem triagens automatizadas, visualizarem o histórico de pré-consultas processadas e gerenciarem notificações geradas pelos agentes de IA.\n\nO frontend se comunica com o backend de orquestração hipocrites.AI, exibindo em tempo real o status dos pacientes em triagem, o resumo das informações coletadas pelos agentes e os horários sugeridos pelo sistema de agendamento inteligente.\n\nO design prioriza clareza e eficiência para uso em ambientes clínicos, com visualizações de urgência, filtros por especialidade e acesso rápido às notificações pendentes.",
    howItWorks:
      "O médico acessa o dashboard e visualiza a fila de pré-consultas processadas pelos agentes de IA. Cada card apresenta o resumo da triagem — sintomas relatados, urgência estimada, histórico relevante e horário sugerido.\n\nO sistema se atualiza automaticamente conforme novos pacientes interagem com o agente de pré-consulta, exibindo notificações em tempo real. O médico pode aprovar, reagendar ou redirecionar cada caso com poucos cliques.\n\nFiltros por especialidade, urgência e período permitem gerenciar o fluxo de atendimentos de forma eficiente, reduzindo o tempo de preparação antes de cada consulta.",
    architecture: [
      "Frontend React — interface de gestão e visualização",
      "Integração com API hipocrites.AI",
      "Atualização em tempo real via polling",
      "Tailwind CSS — design system clínico",
    ],
    tech: [
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
    ],
    features: [
      "Fila de triagens em tempo real",
      "Resumos gerados por IA por paciente",
      "Gestão de notificações médicas",
      "Filtros por urgência e especialidade",
      "Aprovação e reagendamento de consultas",
    ],
    github: "https://github.com/jvchaaves",
    role: "",
    icon: "Heart",
    featured: false,
    images: [
      "/projects/dashboard-saude-digital/screenshot-1.png",
      "/projects/dashboard-saude-digital/screenshot-2.png",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
