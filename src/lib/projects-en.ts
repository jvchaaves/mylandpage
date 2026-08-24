/**
 * Tradução dos textos dos projetos. Chaves ausentes caem no português,
 * então a página nunca fica vazia enquanto uma tradução não existe.
 */
export interface ProjectCopy {
  tagline: string;
  description: string;
  howItWorks: string;
  architecture: string[];
  features: string[];
  role: string;
}

export const projectsEn: Record<string, Partial<ProjectCopy>> = {
  lembreme: {
    tagline:
      "Personal assistant that runs entirely on WhatsApp: finances, tasks, reminders, goals, and routines in natural language",
    description:
      "LembreMe is a personal assistant that operates entirely through WhatsApp. The user types, sends audio, or photographs a receipt, and the agent interprets, records, and returns what's needed: expenses and income (including fixed and installment ones), tasks, reminders, financial and personal goals, notes, and nearby restaurant searches by GPS or city.\n\nThe core is a ReAct agent in Python built with LangChain, with tools separated by domain and data access isolated through the Repository Pattern. An independent scheduler sweeps reminders and deadlines every 60 seconds and fires priority based notifications; on the Ultra plan, unfinished critical tasks trigger an automatic phone call through Vonage's voice API.\n\nThe product has matured into a SaaS with Free, Premium, and Ultra plans and per feature limits. Among the most recent additions are proactive routines, which detect patterns such as spikes in a spending category and act without waiting for a command, and messaging and scheduling to third parties, built with explicit opt-in, an allowlist, and an anti-ban cap.",
    howItWorks:
      "The Node.js gateway built with whatsapp-web.js receives the message and normalizes the input: audio is transcribed by Whisper or Google, images go through OCR with Tesseract, and the resulting text is forwarded over HTTP to the Python agent.\n\nThe FastAPI agent runs the ReAct loop with LangChain on top of GPT-4o-mini, with Gemini 1.5 Flash as a fallback, picks the tools for the right domain (finances, tasks, reminders, goals, notes, restaurants), and persists everything to Supabase, with Redis holding cache, TTL, and state shared across Gunicorn workers.\n\nIn parallel, the APScheduler based scheduler checks reminders and upcoming deadlines, and weekly financial reports are generated automatically with pandas and matplotlib. Travel searches use custom scrapers built with Playwright and Camoufox over Airbnb, Google Hotels, Google Flights, and Kayak, run in parallel.",
    architecture: [
      "Node.js gateway with whatsapp-web.js: channel, audio transcription, and image OCR",
      "Python FastAPI agent: ReAct loop with LangChain and domain based tools",
      "Repository Pattern: data access isolated from the agent's logic",
      "APScheduler based scheduler: reminders, deadlines, and priority notifications",
      "Redis: cache, TTL, and state shared across Gunicorn workers",
      "Playwright and Camoufox scrapers: parallel flight and lodging searches",
      "Vonage Voice: automatic calls for critical tasks on the Ultra plan",
      "Supabase PostgreSQL and Docker Compose with four containers on AWS EC2",
    ],
    features: [
      "Full assistant inside WhatsApp, by text, audio, or photo",
      "Finances with fixed and installment expenses, plus an automatic weekly report",
      "Tasks and reminders with a continuous scheduler and priority based notifications",
      "Financial and personal goals with progress tracking and automatic completion",
      "Proactive routines that react to spending patterns without waiting for a command",
      "Flight and lodging search through parallel scraping",
      "Automatic voice call for critical tasks on the Ultra plan",
      "Messaging to third parties with opt-in, allowlist, and anti-ban cap",
      "Free, Premium, and Ultra plans with per feature limits",
    ],
    role: "Lead author, architecture and development",
  },

  "lembreme-copilot": {
    tagline:
      "Real time meeting copilot, in a desktop app with an overlay on the call",
    description:
      "The Copilot follows the meeting as it happens. It transcribes speech live, identifies what deserves attention (questions directed at you, key points, suggestions of what to say), and separates out what turned into a commitment: tasks, reminders, expenses, and decisions. Detected questions can be answered automatically by the model, and an executive summary comes out at the end of the call.\n\nIt's a desktop app built with Electron, not a browser tab: besides the full panel with history and insights, there's a floating overlay that sits on top of the video call window, in the corner of the screen, so you can follow along without switching context.\n\nDetected items can be saved directly to the main LembreMe, closing the loop between what was agreed on in the meeting and the assistant that follows up on it afterward.",
    howItWorks:
      "Captured audio is streamed over a dedicated WebSocket to the backend, which keeps a second channel just for broadcasting state and insights to the interface. Transcription uses Deepgram Nova-2, with local faster-whisper as a fallback when the service is unavailable.\n\nThe text goes through a pipeline of specialized modules: an insight detector, an actionable item detector, a temporal normalizer (which resolves expressions like \"next Tuesday\" using chrono-node in Portuguese), an intent deduplicator so the same commitment stated in different ways isn't repeated, and a context summarizer that keeps track of the conversation thread.\n\nWhen a question is directed at the user, the answer module queries the model with the accumulated context and returns a suggestion in the overlay. Sessions, insights, and items are stored in Supabase, with optional Redis for caching and a fallback to local memory when it's unavailable.",
    architecture: [
      "Electron desktop app with a floating overlay on the call",
      "React frontend with a dashboard panel, history, insights, and summary",
      "Node.js and Express backend with two WebSocket channels: audio and state",
      "AI pipeline: insight detector, item detector, intent dedupe, and summarizer",
      "Deepgram Nova-2 as primary transcription and faster-whisper as a local fallback",
      "Supabase for sessions, authentication, and storage",
      "Optional Redis, with a fallback to in memory cache",
    ],
    features: [
      "Real time meeting transcription",
      "Detection of questions directed at you, key points, and speaking suggestions",
      "Extraction of tasks, reminders, expenses, and decisions with deduplication",
      "Automatic answers to questions using the conversation's context",
      "Executive summary generated at the end of the call",
      "Floating overlay in a desktop app, on top of the video call",
      "Normalization of dates spoken in Portuguese",
      "Sending detected items to the main LembreMe",
    ],
    role: "Lead author, architecture and development",
  },

  pixelmind: {
    tagline:
      "Video editor that accepts natural language commands, first place at the Trilha hackathon",
    description:
      "PixelMind lets you edit video by talking to the system. Instead of hunting for the clip on the timeline, the user types what they want (for example, removing the part where a certain topic is discussed) and the system locates and executes the cut.\n\nThe project took first place among six teams at the Trilha hackathon, an initiative of TRIL Lab at UFPB, and was built in about a month. It started as a single TypeScript backend and grew into a multi service architecture as new capabilities were added: transcription, semantic analysis, and finally audio processing.\n\nThe idea behind it is to make editing accessible to people who don't master traditional tools, turning the video's own transcript into the index by which it's manipulated.",
    howItWorks:
      "The uploaded video has its audio extracted with FFmpeg and transcribed by Whisper, which returns timestamps for each segment. Gemini analyzes that text and builds a semantic map of the content.\n\nWhen a natural language command comes in, the model interprets the intent, locates the matching segments in the transcript, and FFmpeg executes the cuts using the timestamps.\n\nAudio quality is handled by a dedicated Python microservice, which applies spectral noise reduction with librosa and noisereduce and returns the processed track for reassembling the final video.",
    architecture: [
      "Next.js frontend with App Router, TypeScript, and Tailwind",
      "Node.js and TypeScript backend: upload, orchestration, and controllers for cutting, transcription, and analysis",
      "Dedicated Python FastAPI microservice for spectral noise reduction",
      "FFmpeg: audio extraction and cut execution",
      "Whisper for timestamped transcription and Gemini for semantic analysis",
    ],
    features: [
      "Video editing through natural language commands",
      "Automatic transcription with timestamps",
      "Semantic analysis of spoken content",
      "Precise cuts guided by the transcript",
      "Spectral noise reduction in a dedicated microservice",
      "Processing step tracking in the interface",
    ],
    role: "Backend architect",
  },

  tutoria: {
    tagline:
      "ENEM tutoring inside WhatsApp: solves math questions from photos, grades essays, and answers questions through RAG",
    description:
      "TutorIA is a tutoring platform for students preparing for the ENEM (Brazil's national high school exam) and other college entrance exams, accessible through WhatsApp. The student photographs a math question and gets a step by step solution; submits an essay and gets a grade with detailed feedback and suggested sociocultural references; asks about the exam and is helped by an assistant that answers based on indexed material.\n\nThe system is split into four independent services, orchestrated with Docker Compose: the WhatsApp gateway, the AI core, the user service, and the payment processor. Monetization is subscription based, with Stripe and a dedicated webhook to confirm payment.\n\nMath solutions are delivered fully formatted: the service generates LaTeX and returns a PDF, instead of dumping formulas as plain text in the chat.",
    howItWorks:
      "The message arrives through the TypeScript gateway built with whatsapp-web.js, which manages conversation state and routes it to the Python AI service based on intent: math, essays, ENEM questions, or guided study.\n\nOn the math route, the multimodal solver receives the photo of the question, extracts the text with OCR through Google Cloud Vision, solves it with the model, and passes through a conservative reviewer before responding, with the solution converted into LaTeX and PDF. On the essay route, a multi agent flow evaluates the text and returns feedback by competency along with suggested references.\n\nThe ENEM assistant answers through RAG over an indexed knowledge base, instead of relying only on the model's built in knowledge. The user service keeps authentication and sessions in Postgres via Supabase, and the Stripe webhook service grants or revokes access based on the subscription's status. A cost tracking module monitors API spend by operation type.",
    architecture: [
      "WhatsApp gateway in TypeScript with whatsapp-web.js: channel and conversation state",
      "Python AI service: routes for math, essays, ENEM, study, and game",
      "Multi agent essay grading with feedback by competency",
      "ENEM assistant powered by RAG over an indexed knowledge base",
      "User service in TypeScript: authentication and sessions in Postgres",
      "Stripe webhook service: subscriptions and access provisioning",
      "Solution generation in LaTeX and PDF",
      "Docker Compose tying together the four services",
    ],
    features: [
      "Math problem solving from a photo of the question",
      "Conservative reviewer before delivering the answer to the student",
      "Solution formatted in LaTeX and delivered as a PDF",
      "Multi agent essay grading with feedback and suggested references",
      "ENEM Q&A assistant powered by RAG",
      "Guided study mode",
      "Stripe subscription with confirmation webhook",
      "API cost tracking by operation type",
    ],
    role: "",
  },

  vero: {
    tagline:
      "A clinical platform that follows the consultation in real time and runs the patient's pre-visit intake on WhatsApp",
    description:
      "Vero gives doctors cognitive support while the visit is happening. Audio is captured in the browser and transcribed via streaming; on top of that transcript, a clinical AI service raises diagnostic hypotheses, flags red flags, suggests courses of action, and drafts a prescription. The doctor follows all of this in a clinical reasoning panel with chat, marking what's useful and dismissing the rest, then closes the visit with everything consolidated.\n\nBefore that, the patient has already gone through the other side of the platform: a WhatsApp agent runs the pre-visit intake, collecting the chief complaint, history, allergies, current medications, and exams, and hands the doctor an already organized case instead of a blank form.\n\nThe system is a pnpm monorepo where frontend and backend share the same TypeScript and Zod contracts, including the WebSocket message format. Two Python microservices round out the stack: one handles the clinical LLM with RAG over embeddings, the other handles importing medical records and reports via OCR.",
    howItWorks:
      "Each visit opens a session with two WebSocket channels: one for audio, one for state. Audio streams to Deepgram and comes back as a transcript; the connection recovers on its own with exponential backoff if the network drops.\n\nThe clinical LLM service consumes the transcript as it comes in, retrieves context by similarity over the vector store, and returns hypotheses, red flags, and suggested courses of action, which appear to the doctor as the conversation progresses. The reasoning panel can be maximized, and the text streams in word by word instead of appearing all at once.\n\nPDF or image documents go through the import service, which extracts content with PyMuPDF or OCR and organizes the findings in the patient record. Scheduling, patients, visits, organization members, and the audit trail are all modules of the Fastify API, with JWT authentication via Supabase.",
    architecture: [
      "React frontend with Vite: doctor's panel, schedule, active visit, and clinical reasoning chat",
      "Fastify API in TypeScript: REST and WebSocket for audio and visit state",
      "API modules: visits, appointments, patients, doctors, organization, and audit",
      "Python clinical LLM service: embeddings pipeline, RAG, and hypothesis generation",
      "Python import service: PDF extraction and OCR for medical records and reports",
      "WhatsApp agent: pre-visit intake conducted with the patient before the appointment",
      "Shared contracts package in TypeScript and Zod, including WebSocket messages",
      "PostgreSQL with Supabase for authentication, data, and storage",
    ],
    features: [
      "Real time visit transcription with automatic reconnection",
      "Diagnostic hypotheses and red flags during the visit",
      "Suggested course of action and draft prescription",
      "Clinical reasoning panel with chat, marking insights as useful or dismissed",
      "Visit wrap up screen with all consolidated material",
      "Pre-visit intake conducted with the patient on WhatsApp",
      "Import of medical records and reports via OCR",
      "Scheduling and patient records with an audit trail",
      "Shared contracts between frontend and backend, including over WebSocket",
    ],
    role: "Lead author, clinical LLM pipeline, pre-visit intake agent, and document import",
  },

  pauta: {
    tagline:
      "Municipal political transparency: citizens report an urban problem, track its resolution, and get closer to the people who represent them",
    description:
      "Pauta was born out of a concrete gap: most people don't know who their city councilors (vereadores) are or what they propose, and complaints about the city end up as venting that never reaches whoever could actually fix them. The platform links the three ends, citizen, urban issue, and representative, into a single flow.\n\nA citizen photographs an infrastructure problem and submits it along with the location. A vision LLM automatically suggests the category, falling back to manual review as a safe default when confidence is low. The report becomes a geolocated point on the map and a post in the neighborhood feed, where it can be tracked through to resolution, with relevant updates delivered via internal notification, push, or email.\n\nThe candidate recommendation feature, matching politicians to citizens by issue affinity, is the part still under construction: the API contract and the vector search are already in place, and the embeddings pipeline was developed in parallel by the recommendation team. The chosen approach is semantic, using embeddings and cosine similarity over submitted proposals, replacing the original idea of a traditional classifier.",
    howItWorks:
      "The Next.js frontend sends the report with photo and coordinates. The FastAPI backend stores the image in Supabase Storage and calls Cloudflare Workers AI's vision LLM to classify the category; if confidence isn't high enough, the case goes to manual review instead of getting a guess. The point's geometry is persisted with GeoAlchemy2 in PostgreSQL with PostGIS, and shows up on the map via react-leaflet and in the community feed.\n\nNotifications follow the outbox pattern: the backend writes the event to a table and a Celery worker consumes it, creating the internal notification and firing off push via Firebase or email via Resend. This design avoids losing events when an external service fails.\n\nFor recommendations, the bills each lawmaker has introduced become embeddings aggregated into a track record profile, compared by cosine similarity in pgvector, with grouping via clustering and a justification generated by an LLM. Authentication is handled by Supabase, with the token validated on the backend using a public key, and the feed stays accessible to visitors without an account.",
    architecture: [
      "FastAPI backend with SQLAlchemy, GeoAlchemy2, and Alembic",
      "Next.js frontend with App Router, React, and react-leaflet for the map",
      "Single PostgreSQL database: PostGIS for geometry and pgvector for embeddings",
      "Photo classification by a vision LLM on Cloudflare Workers AI, with manual review as a fallback",
      "Event outbox notifications, consumed by a Celery worker with Redis",
      "Delivery via push with Firebase and email with Resend",
      "Supabase for JWT authentication and photo storage",
      "Recommendation pipeline in Python, separate from the backend",
    ],
    features: [
      "Report an urban problem with photo and location",
      "Automatic category classification by a vision LLM, with manual review as a fallback",
      "Geolocated map with PostGIS and status tracking",
      "Neighborhood community feed, open to visitors without an account too",
      "Internal, push, and email notifications from an event outbox",
      "User interest profile to steer what they receive",
      "Candidate recommendations by affinity, with vector search in pgvector",
      "JWT authentication validated on the backend, with hardened cookies and headers",
    ],
    role: "",
  },

  "lotep-data-pipeline": {
    tagline:
      "Ingestion and loading of transactions for LOTEP, the state lottery of Paraíba, from a Kafka backed API to an Airflow orchestrated pipeline",
    description:
      "The platform receives lottery transactions (bets, prizes, points of sale, and lottery operators), validates each payload, and carries them into a PostgreSQL data warehouse the operation is analyzed from. Two ingestion paths coexist: a real time one over the API, and a batch load of files submitted by operators.\n\nThe real time path is a JWT authenticated FastAPI service that publishes to Kafka asynchronously, with backpressure protection: when the buffer fills up, the API responds with 503 instead of accepting more than it can process. A worker consumes the topic and persists it to the database. The payload format migrated from XML to JSON validated by Pydantic, with monetary values kept as decimals to avoid losing precision, and each transaction gets a deterministic protocol number generated by HMAC.\n\nThe batch path evolved from a simple loading script into an Airflow orchestrated pipeline. The extractor fetches files from a remote server, including entire subdirectories, detects each file's header and layout, processes it in parallel batches, and logs an audit trail per file. A modification date watermark guarantees incremental loading, without reprocessing what has already been ingested.",
    howItWorks:
      "On the API path, the request is authenticated, validated against the Pydantic models, and published to the Kafka topic. The producer is asynchronous and monitors its own buffer, returning a temporary unavailability response when it's saturated, which preserves the integrity of the queue. The consumer worker reads the topic and writes to the destination PostgreSQL.\n\nOn the batch path, an Airflow DAG triggers the loader: the extractor lists the file server, compares each subdirectory's modification date against the watermark stored in a control table, and downloads only what changed. The header detector and pattern matcher identify the layout, records are processed in parallel batches, and the load is logged with a per file success and error log, while also flagging data that changed for controlled reprocessing.\n\nThe Airflow infrastructure runs in full, with a scheduler, Celery worker, triggerer, and Redis as the broker, and keeps its metadata database separate from the destination database. The same loader code runs both inside and outside the orchestration layer.",
    architecture: [
      "FastAPI service with JWT authentication: receives transactions and publishes to Kafka",
      "Asynchronous producer with backpressure: responds 503 when the buffer saturates",
      "Kafka consumer worker: persists to the destination PostgreSQL",
      "Pydantic models in JSON, replacing the old XML schemas",
      "ETL loader: remote file extractor, header detector, and pattern matcher",
      "Parallel batch processing with a modification date watermark",
      "Airflow with scheduler, Celery worker, triggerer, and Redis, metadata kept in a separate database",
      "Per file audit trail, with success and error logs",
    ],
    features: [
      "Transaction ingestion via authenticated API, publishing to Kafka",
      "Explicit backpressure when the queue saturates, instead of accepting and losing data",
      "Payload migration from XML to validated JSON, with decimals for monetary values",
      "Deterministic protocol number per transaction",
      "Incremental loading of remote files via a modification watermark",
      "Header and pattern detection per file",
      "Parallel batch processing",
      "Airflow orchestration with a per file audit trail",
    ],
    role: "",
  },

  "plataforma-editorial-ia": {
    tagline:
      "Editora BP's editorial platform: from a PDF exam to a published commentary, with AI handling the solving and human review along the way",
    description:
      "Bancada produces commented answer explanations for Brazilian civil service exam (concurso) questions at scale, without giving up human review. The name plays on both ends of the process: the banca examinadora (exam board) that wrote the test, and the bancada (workbench) where each question gets solved, commented on, and reviewed. The exam comes in as a PDF, the system extracts the questions and the answer key, solves each one through a retrieval and generation pipeline, compares the computed answer against the official key, and routes the result into the editorial funnel.\n\nThe funnel is the heart of the product: each commentary moves through defined states and distinct roles, from intern to professor to final approval, with concurrency guards so two reviewers don't collide on the same question, and an audit trail for every decision. There's also a per subject bibliographic source policy, so each commentary is grounded in material the publisher considers reliable, and a taxonomy that defines a strict commentary template based on the question type.\n\nOn the output side, the platform publishes commented questions to Thinkr, a third party question bank, both creating new ones and updating existing ones, with idempotency control and sync status tracking. It also exports commented exams in PDF, DOCX, and PPTX, and offers a production dashboard with metrics by subject, exam board, and period.",
    howItWorks:
      "Import extracts the PDF's content with PyMuPDF and OCR when needed, splits out the questions, aligns them with the official answer key, and caches the result so the heavy lifting isn't repeated on every attempt.\n\nSolving runs as a state graph in LangGraph: the question is classified by the taxonomy, the source policy picks the primary material for that subject, the pipeline retrieves the relevant passages, the model drafts the commentary using the template for that question type, and the system checks the computed answer against the key. Discrepancies aren't hidden, they're flagged for the reviewer. The heavy processing runs in Celery queues with Redis, outside the request cycle.\n\nOnce a commentary is approved, the Thinkr client sends or updates it on the destination platform and records the sync status, allowing safe resubmission. The admin dashboard tracks questions sent, generated versus approved commentaries, and submission failures, broken down by subject, exam board, and exam, and exports the report as a PDF.",
    architecture: [
      "React frontend with Vite, Radix UI, and TanStack Query: review, question bank, and dashboard",
      "FastAPI backend: exams, questions, answer explanations, import, permissions, audit, and integration",
      "LangGraph solving graph: classification, retrieval, drafting, and answer key verification",
      "Extraction services: PyMuPDF, OCR, and cached answer key alignment",
      "Per subject source policy and taxonomy with a strict template per question type",
      "Celery queues with Redis for import, solving, and submission",
      "Thinkr client and mapper, with idempotency and sync status tracking",
      "MinIO for file and image storage in production",
    ],
    features: [
      "PDF exam import with question and answer key extraction",
      "Solving via a retrieval and generation graph, checked against the official answer key",
      "Per subject bibliographic source policy",
      "Question taxonomy with a commentary template per type",
      "Role based editorial funnel, with concurrency guards and auditing",
      "Publishing and updating questions on Thinkr, with idempotency control",
      "Export of commented exams in PDF, DOCX, and PPTX",
      "Production dashboard with metrics by subject, exam board, and period",
      "Unit and end to end tests with continuous integration",
    ],
    role: "",
  },
};
