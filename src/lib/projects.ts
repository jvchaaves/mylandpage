import type { Lang } from "@/lib/i18n";
import { projectsEn } from "@/lib/projects-en";

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
  /** Repo privado: mostramos o trabalho, mas sem link que levaria a um 404. */
  githubPrivate?: boolean;
  role: string;
  icon: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "lembreme",
    name: "LembreMe",
    tagline:
      "Assistente pessoal que roda inteiro no WhatsApp: finanças, tarefas, lembretes, metas e rotinas em linguagem natural",
    description:
      "LembreMe é um assistente pessoal que opera inteiramente pelo WhatsApp. A pessoa escreve, manda áudio ou fotografa um comprovante, e o agente interpreta, registra e devolve o que precisa: gastos e receitas (inclusive fixos e parcelados), tarefas, lembretes, metas financeiras e pessoais, notas e buscas de restaurantes por GPS ou cidade.\n\nO núcleo é um agente ReAct em Python com LangChain, com ferramentas separadas por domínio e acesso a dados isolado por Repository Pattern. Um scheduler independente varre lembretes e prazos a cada 60 segundos e dispara notificações por prioridade; no plano Ultra, tarefas críticas não concluídas viram ligação telefônica automática pela API de voz da Vonage.\n\nO produto amadureceu para SaaS com planos Free, Premium e Ultra e limites por recurso. Entre as frentes mais recentes estão as rotinas proativas, que detectam padrões como picos em uma categoria de gasto e agem sem esperar comando, e o envio de mensagens e agendamentos a terceiros, construído com opt-in explícito, allowlist e teto anti-ban.",
    howItWorks:
      "O gateway em Node.js com whatsapp-web.js recebe a mensagem e normaliza a entrada: áudio é transcrito por Whisper ou Google, imagem passa por OCR com Tesseract, e o texto resultante segue por HTTP para o agente Python.\n\nO agente FastAPI roda o loop ReAct com LangChain sobre GPT-4o-mini, com Gemini 1.5 Flash como alternativa, escolhe as ferramentas do domínio certo (finanças, tarefas, lembretes, metas, notas, restaurantes) e persiste tudo no Supabase, com Redis guardando cache, TTL e o estado compartilhado entre os workers do Gunicorn.\n\nEm paralelo, o scheduler com APScheduler verifica lembretes e tarefas próximas do prazo, e os relatórios financeiros semanais são gerados automaticamente com pandas e matplotlib. As buscas de viagem usam scrapers próprios em Playwright e Camoufox sobre Airbnb, Google Hotels, Google Flights e Kayak, executados em paralelo.",
    architecture: [
      "Gateway Node.js com whatsapp-web.js: canal, transcrição de áudio e OCR de imagens",
      "Agente Python FastAPI: loop ReAct com LangChain e ferramentas por domínio",
      "Repository Pattern: acesso a dados isolado da lógica do agente",
      "Scheduler com APScheduler: lembretes, prazos e notificações por prioridade",
      "Redis: cache, TTL e estado compartilhado entre workers Gunicorn",
      "Scrapers Playwright e Camoufox: buscas paralelas de voos e hospedagem",
      "Vonage Voice: ligações automáticas para tarefas críticas no plano Ultra",
      "Supabase PostgreSQL e Docker Compose com quatro containers em AWS EC2",
    ],
    tech: [
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "Node.js", category: "Backend" },
      { name: "whatsapp-web.js", category: "Backend" },
      { name: "LangChain", category: "AI/ML" },
      { name: "GPT-4o-mini", category: "AI/ML" },
      { name: "Gemini 1.5 Flash", category: "AI/ML" },
      { name: "Whisper", category: "AI/ML" },
      { name: "Tesseract OCR", category: "AI/ML" },
      { name: "Playwright", category: "Tools" },
      { name: "Vonage Voice", category: "Tools" },
      { name: "Supabase", category: "Database" },
      { name: "Redis", category: "Infrastructure" },
      { name: "Docker", category: "Infrastructure" },
      { name: "AWS EC2", category: "Infrastructure" },
      { name: "pandas", category: "Data" },
    ],
    features: [
      "Assistente completo dentro do WhatsApp, por texto, áudio ou foto",
      "Finanças com gastos fixos, parcelados e relatório semanal automático",
      "Tarefas e lembretes com scheduler contínuo e notificação por prioridade",
      "Metas financeiras e pessoais com progresso e conclusão automática",
      "Rotinas proativas que reagem a padrões de gasto sem esperar comando",
      "Busca de voos e hospedagem por scraping paralelo",
      "Ligação automática por voz para tarefas críticas no plano Ultra",
      "Mensagens a terceiros com opt-in, allowlist e teto anti-ban",
      "Planos Free, Premium e Ultra com limites por recurso",
    ],
    github: "https://github.com/LembeMe/LembreMe",
    githubPrivate: true,
    role: "Autor principal, arquitetura e desenvolvimento",
    icon: "Brain",
    featured: true,
  },
  {
    slug: "pauta",
    name: "Pauta",
    tagline:
      "Transparência política municipal: o cidadão reporta um problema urbano, acompanha a resolução e se aproxima de quem o representa",
    description:
      "Pauta nasce de uma distância concreta: a maioria das pessoas não sabe quem são seus vereadores nem o que eles propõem, e as reclamações sobre a cidade viram desabafo sem chegar a quem poderia resolver. A plataforma liga as três pontas, cidadão, acontecimento urbano e representante, em um fluxo só.\n\nO cidadão fotografa um problema de infraestrutura e envia com a localização. Uma LLM de visão sugere a categoria automaticamente, com revisão manual como saída segura quando a confiança é baixa. A demanda vira um ponto geolocalizado no mapa e uma publicação no feed do bairro, onde pode ser acompanhada até a resolução, e as atualizações relevantes chegam por notificação interna, push ou e-mail.\n\nA frente de recomendação de candidatos por afinidade de pautas é a parte em construção: o contrato da API e a busca vetorial já estão prontos, e o pipeline de embeddings foi desenvolvido em paralelo pela equipe de recomendação. A abordagem escolhida foi semântica, com embeddings e similaridade de cosseno sobre as propostas apresentadas, no lugar da ideia inicial de classificador tradicional.",
    howItWorks:
      "O front em Next.js envia a denúncia com foto e coordenadas. O backend FastAPI guarda a imagem no Supabase Storage e aciona a LLM de visão da Cloudflare Workers AI para classificar a categoria; se a confiança não for suficiente, o caso vai para revisão manual em vez de receber um palpite. A geometria do ponto é persistida com GeoAlchemy2 em PostgreSQL com PostGIS, e aparece no mapa em react-leaflet e no feed da comunidade.\n\nAs notificações seguem o padrão outbox: o backend grava o evento em uma tabela e um worker Celery o consome, criando a notificação interna e disparando push por Firebase ou e-mail por Resend. Esse desenho evita perder evento quando o serviço externo falha.\n\nNa recomendação, as ementas apresentadas por cada parlamentar viram embeddings agregados em um perfil de atuação, comparados por similaridade de cosseno no pgvector, com agrupamento por clusterização e justificativa gerada por LLM. A autenticação é do Supabase, com o token validado no backend por chave pública, e o feed continua acessível a visitantes sem conta.",
    architecture: [
      "Backend FastAPI com SQLAlchemy, GeoAlchemy2 e Alembic",
      "Frontend Next.js com App Router, React e react-leaflet para o mapa",
      "Banco único PostgreSQL: PostGIS para a geometria e pgvector para os embeddings",
      "Classificação de fotos por LLM de visão na Cloudflare Workers AI, com revisão manual de reserva",
      "Notificações por outbox de eventos, consumidas por worker Celery com Redis",
      "Entrega por push com Firebase e e-mail com Resend",
      "Supabase para autenticação por JWT e armazenamento das fotos",
      "Pipeline de recomendação em Python, separado do backend",
    ],
    tech: [
      { name: "Python 3.12", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "SQLAlchemy", category: "Backend" },
      { name: "Celery", category: "Backend" },
      { name: "Next.js 16", category: "Frontend" },
      { name: "React 19", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind v4", category: "Frontend" },
      { name: "react-leaflet", category: "Frontend" },
      { name: "Cloudflare Workers AI", category: "AI/ML" },
      { name: "sentence-transformers", category: "AI/ML" },
      { name: "Groq", category: "AI/ML" },
      { name: "PostgreSQL", category: "Database" },
      { name: "PostGIS", category: "Database" },
      { name: "pgvector", category: "Database" },
      { name: "Supabase", category: "Database" },
      { name: "Redis", category: "Infrastructure" },
      { name: "Docker", category: "Infrastructure" },
    ],
    features: [
      "Denúncia de problema urbano com foto e localização",
      "Classificação automática da categoria por LLM de visão, com revisão manual de reserva",
      "Mapa geolocalizado com PostGIS e acompanhamento de status",
      "Feed da comunidade por bairro, aberto também a visitantes sem conta",
      "Notificações internas, push e e-mail a partir de um outbox de eventos",
      "Perfil de interesses do usuário para orientar o que ele recebe",
      "Recomendação de candidatos por afinidade, com busca vetorial em pgvector",
      "Autenticação por JWT validado no backend, com cookies e cabeçalhos endurecidos",
    ],
    github: "https://github.com/TailUFPB/Trainees_2026.1-Pauta",
    role: "",
    icon: "Vote",
    featured: true,
  },
  {
    slug: "pixelmind",
    name: "PixelMind",
    tagline:
      "Editor de vídeo que aceita comandos em linguagem natural, primeiro lugar no hackathon do Trilha",
    description:
      "PixelMind permite editar vídeo conversando com o sistema. Em vez de procurar o trecho na timeline, a pessoa escreve o que quer (por exemplo, remover a parte em que se fala sobre determinado assunto) e o sistema localiza e executa o corte.\n\nO projeto conquistou o primeiro lugar entre seis equipes no hackathon do Trilha, iniciativa do TRIL Lab na UFPB, e foi construído em cerca de um mês. Nasceu como um backend único em TypeScript e cresceu para uma arquitetura de múltiplos serviços conforme novas capacidades entraram: transcrição, análise semântica e, por fim, tratamento de áudio.\n\nA ideia por trás dele é tornar a edição acessível a quem não domina ferramentas tradicionais, transformando a transcrição do próprio vídeo no índice pelo qual ele é manipulado.",
    howItWorks:
      "O vídeo enviado tem o áudio extraído com FFmpeg e transcrito pelo Whisper, que devolve marcações de tempo por trecho. O Gemini analisa esse texto e constrói um mapa semântico do conteúdo.\n\nQuando chega um comando em linguagem natural, o modelo interpreta a intenção, localiza os trechos correspondentes na transcrição e o FFmpeg executa os cortes usando as marcações de tempo.\n\nA qualidade do áudio fica a cargo de um microsserviço Python dedicado, que aplica redução espectral de ruído com librosa e noisereduce e devolve a faixa tratada para remontagem do vídeo final.",
    architecture: [
      "Frontend Next.js com App Router, TypeScript e Tailwind",
      "Backend Node.js e TypeScript: upload, orquestração e controllers de corte, transcrição e análise",
      "Microsserviço Python FastAPI dedicado à redução espectral de ruído",
      "FFmpeg: extração de áudio e execução dos cortes",
      "Whisper para transcrição com marcação de tempo e Gemini para análise semântica",
    ],
    tech: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "Whisper", category: "AI/ML" },
      { name: "Gemini", category: "AI/ML" },
      { name: "librosa", category: "AI/ML" },
      { name: "noisereduce", category: "AI/ML" },
      { name: "FFmpeg", category: "Tools" },
    ],
    features: [
      "Edição de vídeo por comando em linguagem natural",
      "Transcrição automática com marcação de tempo",
      "Análise semântica do conteúdo falado",
      "Corte preciso guiado pela transcrição",
      "Redução espectral de ruído em microsserviço dedicado",
      "Acompanhamento das etapas de processamento na interface",
    ],
    github: "https://github.com/TrilhaUFPB/PixelMind",
    githubPrivate: true,
    role: "Arquiteto backend",
    icon: "Video",
    featured: true,
  },
  {
    slug: "vero",
    name: "Vero",
    tagline:
      "Plataforma clínica que acompanha a consulta em tempo real e faz a pré-consulta do paciente pelo WhatsApp",
    description:
      "Vero dá suporte cognitivo ao médico enquanto o atendimento acontece. O áudio é capturado no navegador e transcrito por streaming; sobre essa transcrição, um serviço de IA clínica levanta hipóteses diagnósticas, aponta sinais de alerta, sugere condutas e prepara um rascunho de prescrição. O médico acompanha tudo em um painel de raciocínio clínico com chat, marcando o que é útil e dispensando o resto, e encerra a consulta com todo o material consolidado.\n\nAntes disso, o paciente já foi atendido pelo outro lado da plataforma: um agente no WhatsApp conduz a pré-consulta, coleta queixa, histórico, alergias, medicamentos em uso e exames, e entrega ao médico um caso já organizado em vez de uma ficha em branco.\n\nO sistema é um monorepo pnpm em que frontend e backend compartilham os mesmos contratos em TypeScript e Zod, incluindo o formato das mensagens de WebSocket. Dois microsserviços Python completam o conjunto: um cuida do LLM clínico com RAG sobre embeddings, o outro da importação de prontuários e laudos por OCR.",
    howItWorks:
      "A consulta abre uma sessão com dois canais WebSocket: um para o áudio, outro para o estado. O áudio segue para o Deepgram em streaming e volta como transcrição; a conexão se recupera sozinha com backoff exponencial se a rede oscilar.\n\nO serviço de LLM clínico consome a transcrição em andamento, recupera contexto por similaridade sobre a base vetorial e devolve hipóteses, sinais de alerta e sugestões de conduta, que aparecem para o médico à medida que a conversa avança. O painel de raciocínio pode ser maximizado, e o texto chega palavra a palavra em vez de aparecer de uma vez.\n\nDocumentos em PDF ou imagem passam pelo serviço de importação, que extrai o conteúdo com PyMuPDF ou OCR e organiza os achados no prontuário. Agenda, pacientes, consultas, membros da organização e trilha de auditoria são módulos da API em Fastify, com autenticação por JWT do Supabase.",
    architecture: [
      "Frontend React com Vite: painel do médico, agenda, consulta ativa e chat de raciocínio clínico",
      "API Fastify em TypeScript: REST e WebSocket para áudio e estado da consulta",
      "Módulos da API: consultas, agendamentos, pacientes, médicos, organização e auditoria",
      "Serviço Python de LLM clínico: pipeline de embeddings, RAG e geração das hipóteses",
      "Serviço Python de importação: extração de PDF e OCR de prontuários e laudos",
      "Agente de WhatsApp: pré-consulta conduzida com o paciente antes do atendimento",
      "Pacote de contratos compartilhados em TypeScript e Zod, inclusive das mensagens WebSocket",
      "PostgreSQL com Supabase para autenticação, dados e armazenamento",
    ],
    tech: [
      { name: "TypeScript", category: "Frontend/Backend" },
      { name: "React 19", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "Tailwind CSS 4", category: "Frontend" },
      { name: "TanStack Query", category: "Frontend" },
      { name: "Fastify", category: "Backend" },
      { name: "Node.js", category: "Backend" },
      { name: "WebSocket", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "Deepgram", category: "AI/ML" },
      { name: "OpenAI", category: "AI/ML" },
      { name: "RAG", category: "AI/ML" },
      { name: "PyMuPDF", category: "Tools" },
      { name: "pytesseract", category: "Tools" },
      { name: "Zod", category: "Tools" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Supabase", category: "Database" },
      { name: "Docker", category: "Infrastructure" },
    ],
    features: [
      "Transcrição da consulta em tempo real, com reconexão automática",
      "Hipóteses diagnósticas e sinais de alerta durante o atendimento",
      "Sugestão de conduta e rascunho de prescrição",
      "Painel de raciocínio clínico com chat, marcando insights úteis ou dispensados",
      "Tela de encerramento com o material da consulta consolidado",
      "Pré-consulta conduzida com o paciente pelo WhatsApp",
      "Importação de prontuários e laudos por OCR",
      "Agenda e prontuário do paciente com trilha de auditoria",
      "Contratos compartilhados entre frontend e backend, inclusive no WebSocket",
    ],
    github: "https://github.com/jvchaaves/vero",
    githubPrivate: true,
    role: "Autor principal, pipeline de LLM clínico, agente de pré-consulta e importação de documentos",
    icon: "HeartPulse",
    featured: true,
  },
  {
    slug: "lembreme-copilot",
    name: "LembreMe Copilot",
    tagline:
      "Copiloto de reuniões em tempo real, em aplicativo desktop com overlay sobre a chamada",
    description:
      "O Copilot acompanha a reunião enquanto ela acontece. Transcreve a fala ao vivo, identifica o que merece atenção (perguntas dirigidas a você, pontos-chave, sugestões do que dizer) e separa o que virou compromisso: tarefas, lembretes, gastos e decisões. Perguntas detectadas podem ser respondidas automaticamente pelo modelo, e ao fim da chamada sai um resumo executivo.\n\nÉ um aplicativo desktop em Electron, não uma aba do navegador: além do painel completo com histórico e insights, existe um overlay flutuante que fica sobre a janela da videoconferência, no canto da tela, para acompanhar sem trocar de contexto.\n\nOs itens detectados podem ser salvos direto no LembreMe principal, fechando o ciclo entre o que foi combinado na reunião e o assistente que cobra aquilo depois.",
    howItWorks:
      'O áudio capturado é transmitido por WebSocket dedicado ao backend, que mantém um segundo canal só para difundir estado e insights à interface. A transcrição usa Deepgram Nova-2, com faster-whisper local como alternativa quando o serviço não está disponível.\n\nO texto passa por um pipeline de módulos especializados: detector de insights, detector de itens acionáveis, normalizador temporal (que resolve expressões como "terça que vem" com chrono-node em português), deduplicador de intenção para não repetir o mesmo compromisso dito de formas diferentes, e um sumarizador de contexto que mantém o fio da conversa.\n\nQuando uma pergunta é dirigida ao usuário, o módulo de resposta consulta o modelo com o contexto acumulado e devolve uma sugestão no overlay. Sessões, insights e itens ficam no Supabase, com Redis opcional para cache e degradação para memória local quando ausente.',
    architecture: [
      "Aplicativo desktop Electron com overlay flutuante sobre a chamada",
      "Frontend React com painel de dashboard, histórico, insights e resumo",
      "Backend Node.js e Express com dois canais WebSocket: áudio e estado",
      "Pipeline de IA: detector de insights, detector de itens, dedupe de intenção e sumarizador",
      "Deepgram Nova-2 como transcrição primária e faster-whisper como alternativa local",
      "Supabase para sessões, autenticação e armazenamento",
      "Redis opcional, com fallback para cache em memória",
    ],
    tech: [
      { name: "TypeScript", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "Electron", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "Express", category: "Backend" },
      { name: "WebSocket", category: "Backend" },
      { name: "Deepgram Nova-2", category: "AI/ML" },
      { name: "faster-whisper", category: "AI/ML" },
      { name: "GPT-4o-mini", category: "AI/ML" },
      { name: "chrono-node", category: "Tools" },
      { name: "Supabase", category: "Database" },
      { name: "Redis", category: "Infrastructure" },
      { name: "Vitest", category: "Tools" },
    ],
    features: [
      "Transcrição da reunião em tempo real",
      "Detecção de perguntas dirigidas a você, pontos-chave e sugestões de fala",
      "Extração de tarefas, lembretes, gastos e decisões com deduplicação",
      "Resposta automática a perguntas usando o contexto da conversa",
      "Resumo executivo gerado ao fim da chamada",
      "Overlay flutuante em aplicativo desktop, sobre a videoconferência",
      "Normalização de datas ditas em português",
      "Envio dos itens detectados para o LembreMe principal",
    ],
    github: "https://github.com/dudumontenegro/LembreMe-Copilot1",
    githubPrivate: true,
    role: "Autor principal, arquitetura e desenvolvimento",
    icon: "Mic",
    featured: false,
  },
  {
    slug: "tutoria",
    name: "TutorIA",
    tagline:
      "Tutoria para o ENEM dentro do WhatsApp: resolve questões por foto, corrige redação e tira dúvidas com RAG",
    description:
      "TutorIA é uma plataforma de tutoria para quem estuda para o ENEM e vestibulares, acessível pelo WhatsApp. O aluno fotografa uma questão de matemática e recebe a resolução passo a passo; envia uma redação e recebe correção com feedback detalhado e sugestão de repertório sociocultural; pergunta sobre a prova e é atendido por um assistente que responde com base em material indexado.\n\nO sistema é dividido em quatro serviços independentes, orquestrados por Docker Compose: o gateway de WhatsApp, o núcleo de IA, o serviço de usuários e o processador de pagamentos. A monetização é por assinatura, com Stripe e webhook próprio para confirmar o pagamento.\n\nAs resoluções de matemática são entregues formatadas: o serviço gera LaTeX e devolve um PDF, em vez de despejar fórmulas em texto corrido no chat.",
    howItWorks:
      "A mensagem chega pelo gateway em TypeScript com whatsapp-web.js, que cuida do estado da conversa e roteia para o serviço de IA em Python conforme a intenção: matemática, redação, dúvidas sobre o ENEM ou estudo guiado.\n\nNa rota de matemática, o solver multimodal recebe a foto da questão, extrai o enunciado com OCR pelo Google Cloud Vision, resolve com o modelo e passa por um revisor conservador antes de responder, com a resolução convertida em LaTeX e PDF. Na rota de redação, um fluxo multiagente avalia o texto e devolve feedback por competência e repertório sugerido.\n\nO assistente do ENEM responde por RAG sobre uma base indexada, em vez de depender só do conhecimento do modelo. O serviço de usuários mantém autenticação e sessão em Postgres via Supabase, e o serviço de webhook do Stripe libera ou revoga o acesso conforme o estado da assinatura. Um módulo de custos acompanha o gasto de API por tipo de operação.",
    architecture: [
      "Gateway WhatsApp em TypeScript com whatsapp-web.js: canal e estado da conversa",
      "Serviço de IA em Python: rotas de matemática, redação, ENEM, estudo e jogo",
      "Correção de redação multiagente com feedback por competência",
      "Assistente do ENEM por RAG sobre base indexada",
      "Serviço de usuários em TypeScript: autenticação e sessão em Postgres",
      "Serviço de webhook do Stripe: assinaturas e liberação de acesso",
      "Geração de resolução em LaTeX e PDF",
      "Docker Compose unindo os quatro serviços",
    ],
    tech: [
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "TypeScript", category: "Backend" },
      { name: "whatsapp-web.js", category: "Backend" },
      { name: "OpenAI GPT", category: "AI/ML" },
      { name: "RAG", category: "AI/ML" },
      { name: "Google Cloud Vision", category: "AI/ML" },
      { name: "PyLaTeX", category: "Tools" },
      { name: "Stripe", category: "Tools" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Supabase", category: "Database" },
      { name: "Docker", category: "Infrastructure" },
    ],
    features: [
      "Resolução de questões de matemática a partir da foto do enunciado",
      "Revisor conservador antes de entregar a resposta ao aluno",
      "Resolução formatada em LaTeX e entregue em PDF",
      "Correção de redação multiagente com feedback e repertório",
      "Assistente de dúvidas sobre o ENEM com RAG",
      "Modo de estudo guiado",
      "Assinatura via Stripe com webhook de confirmação",
      "Acompanhamento de custo de API por tipo de operação",
    ],
    github: "https://github.com/adriel1ft/TutorIA-wwebjs",
    githubPrivate: true,
    role: "",
    icon: "GraduationCap",
    featured: false,
  },
  {
    slug: "lotep-data-pipeline",
    name: "LOTEP · Plataforma de dados",
    tagline:
      "Ingestão e carga das transações da Loteria do Estado da Paraíba, de API com Kafka a pipeline orquestrado com Airflow",
    description:
      "A plataforma recebe as transações do jogo (apostas, prêmios, pontos de venda e operadores lotéricos), valida cada payload e as leva até um data warehouse PostgreSQL de onde a operação é analisada. São dois caminhos de entrada que convivem: o tempo real, por API, e a carga em lote de arquivos enviados pelos operadores.\n\nO caminho em tempo real é uma API FastAPI autenticada por JWT que publica em Kafka de forma assíncrona, com proteção de contrapressão: quando o buffer enche, a API responde 503 em vez de aceitar o que não vai conseguir processar. Um worker consome o tópico e persiste no banco. O formato de payload migrou de XML para JSON validado por Pydantic, com valores monetários em decimal para não perder precisão, e cada transação recebe um protocolo determinístico gerado por HMAC.\n\nO caminho em lote evoluiu de um script de carga para um pipeline orquestrado por Airflow. O extrator busca arquivos de um servidor remoto, inclusive subdiretórios inteiros, detecta o cabeçalho e o padrão de cada arquivo, processa em lotes paralelos e registra auditoria por arquivo. Uma marca d\'água por data de modificação garante carga incremental, sem reprocessar o que já entrou.",
    howItWorks:
      "Na entrada por API, a requisição é autenticada, validada contra os modelos Pydantic e publicada no tópico Kafka. O produtor é assíncrono e monitora o próprio buffer, devolvendo indisponibilidade temporária quando está saturado, o que preserva a integridade da fila. O worker consumidor lê o tópico e escreve no PostgreSQL de destino.\n\nNa carga em lote, uma DAG do Airflow dispara o loader: o extrator lista o servidor de arquivos, compara a data de modificação de cada subdiretório com a marca d\'água guardada em tabela de controle e baixa apenas o que mudou. O detector de cabeçalho e o casador de padrões identificam o layout, os registros são processados em lotes paralelos e a carga é registrada com log de sucesso e erro por arquivo, além de sinalizar dados que sofreram modificação para reprocessamento controlado.\n\nA infraestrutura do Airflow roda completa, com scheduler, worker Celery, triggerer e Redis como intermediário, e mantém o banco de metadados separado do banco de destino. O mesmo código do loader é usado dentro e fora da orquestração.",
    architecture: [
      "API FastAPI com autenticação JWT: recebe transações e publica em Kafka",
      "Produtor assíncrono com contrapressão: responde 503 quando o buffer satura",
      "Worker consumidor do Kafka: persiste no PostgreSQL de destino",
      "Modelos Pydantic em JSON no lugar dos antigos schemas XML",
      "Loader ETL: extrator de arquivos remotos, detector de cabeçalho e casador de padrões",
      "Processamento em lotes paralelos com marca d\'água por data de modificação",
      "Airflow com scheduler, worker Celery, triggerer e Redis, com metadados em banco separado",
      "Auditoria por arquivo processado, com log de sucesso e de erro",
    ],
    tech: [
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "Kafka", category: "Infrastructure" },
      { name: "Apache Airflow", category: "Infrastructure" },
      { name: "Celery", category: "Infrastructure" },
      { name: "Redis", category: "Infrastructure" },
      { name: "Docker", category: "Infrastructure" },
      { name: "PostgreSQL", category: "Database" },
      { name: "SQLAlchemy", category: "Database" },
      { name: "Pydantic", category: "Backend" },
      { name: "pandas", category: "Data" },
      { name: "pytest", category: "Tools" },
    ],
    features: [
      "Ingestão de transações por API autenticada, publicando em Kafka",
      "Contrapressão explícita quando a fila satura, em vez de aceitar e perder",
      "Migração de payload de XML para JSON validado, com decimal para valores monetários",
      "Protocolo determinístico por transação",
      "Carga incremental de arquivos remotos por marca d\'água de modificação",
      "Detecção de cabeçalho e de padrão por arquivo",
      "Processamento em lotes paralelos",
      "Orquestração por Airflow com auditoria por arquivo",
    ],
    github: "https://github.com/arialab/lotep",
    githubPrivate: true,
    role: "",
    icon: "Database",
    featured: false,
  },
  {
    slug: "plataforma-editorial-ia",
    name: "Bancada",
    tagline:
      "Plataforma editorial da Editora BP: da prova em PDF ao comentário publicado, com IA na resolução e revisão humana no caminho",
    description:
      "Bancada produz resoluções comentadas de questões de concurso em escala, sem abrir mão da revisão humana. O nome vem das duas pontas do processo: a banca examinadora que elaborou a prova e a bancada de trabalho onde cada questão é resolvida, comentada e revisada. A prova entra em PDF, o sistema extrai as questões e o gabarito, resolve cada uma por um pipeline de recuperação e geração, compara a resposta calculada com o gabarito oficial e encaminha o resultado para o funil editorial.\n\nO funil é o coração do produto: cada comentário passa por estados definidos e por papéis distintos, do estagiário ao professor até a aprovação final, com guardas de concorrência para dois revisores não se atropelarem na mesma questão e trilha de auditoria de cada decisão. Há ainda uma política de fontes bibliográficas por disciplina, para que o comentário se ancore no material que a editora considera confiável, e uma taxonomia que define o template estrito de comentário conforme o tipo de questão.\n\nNa saída, a plataforma publica as questões comentadas na Thinkr, banco de questões de terceiros, tanto criando novas quanto atualizando existentes, com controle de idempotência e status de sincronização. Também exporta provas comentadas em PDF, DOCX e PPTX, e oferece um painel de produção com métricas por disciplina, banca e período.",
    howItWorks:
      "A importação extrai o conteúdo do PDF com PyMuPDF e OCR quando necessário, separa as questões, alinha o gabarito oficial e guarda o resultado em cache para não repetir o trabalho pesado a cada tentativa.\n\nA resolução roda como um grafo de estados em LangGraph: a questão é classificada na taxonomia, a política de fontes escolhe o material primário daquela disciplina, o pipeline recupera os trechos relevantes, o modelo redige o comentário no template do tipo de questão e o sistema confronta a alternativa calculada com o gabarito. Divergência não é escondida, é sinalizada para o revisor. O processamento pesado corre em filas Celery com Redis, fora do ciclo da requisição.\n\nAprovado o comentário, o cliente da Thinkr faz o envio ou a atualização na plataforma de destino e registra o status de sincronização, permitindo reenvio seguro. O painel administrativo acompanha questões enviadas, comentários gerados contra aprovados e falhas de envio, com recorte por disciplina, banca e prova, e exporta o relatório em PDF.",
    architecture: [
      "Frontend React com Vite, Radix UI e TanStack Query: revisão, banco de questões e painel",
      "API FastAPI: provas, questões, resoluções, importação, permissões, auditoria e integração",
      "Grafo de resolução em LangGraph: classificação, recuperação, redação e conferência de gabarito",
      "Serviços de extração: PyMuPDF, OCR e alinhamento de gabarito com cache",
      "Política de fontes por disciplina e taxonomia com template estrito por tipo de questão",
      "Filas Celery com Redis para importação, resolução e envio",
      "Cliente e mapeador da Thinkr, com idempotência e status de sincronização",
      "MinIO para armazenamento de arquivos e imagens em produção",
    ],
    tech: [
      { name: "Python", category: "Backend" },
      { name: "FastAPI", category: "Backend" },
      { name: "Celery", category: "Backend" },
      { name: "LangGraph", category: "AI/ML" },
      { name: "OpenAI", category: "AI/ML" },
      { name: "Gemini", category: "AI/ML" },
      { name: "RAG", category: "AI/ML" },
      { name: "React 19", category: "Frontend" },
      { name: "Vite", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Radix UI", category: "Frontend" },
      { name: "PyMuPDF", category: "Tools" },
      { name: "Playwright", category: "Tools" },
      { name: "Vitest", category: "Tools" },
      { name: "Supabase", category: "Database" },
      { name: "Redis", category: "Infrastructure" },
      { name: "MinIO", category: "Infrastructure" },
      { name: "Docker", category: "Infrastructure" },
    ],
    features: [
      "Importação de prova em PDF com extração de questões e gabarito",
      "Resolução por grafo de recuperação e geração, com conferência contra o gabarito oficial",
      "Política de fontes bibliográficas por disciplina",
      "Taxonomia de questões com template de comentário por tipo",
      "Funil editorial por papéis, com guardas de concorrência e auditoria",
      "Publicação e atualização de questões na Thinkr, com controle de idempotência",
      "Exportação de provas comentadas em PDF, DOCX e PPTX",
      "Painel de produção com métricas por disciplina, banca e período",
      "Testes unitários e de ponta a ponta com integração contínua",
    ],
    github: "https://github.com/jvchaaves/romulo-passos-question",
    githubPrivate: true,
    role: "",
    icon: "FileQuestion",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

/** Aplica a tradução sobre o projeto em português, campo a campo. */
export function localizedProjects(lang: Lang): Project[] {
  if (lang === "pt") return projects;

  return projects.map((project) => {
    const copy = projectsEn[project.slug];
    return copy ? { ...project, ...copy } : project;
  });
}

export function getLocalizedProject(slug: string, lang: Lang) {
  return localizedProjects(lang).find((project) => project.slug === slug);
}
