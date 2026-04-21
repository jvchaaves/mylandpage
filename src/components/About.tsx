"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/ui/marquee";

const allTechs = [
  { name: "Python", category: "IA & ML" },
  { name: "PyTorch", category: "IA & ML" },
  { name: "TensorFlow", category: "IA & ML" },
  { name: "LangChain", category: "IA & ML" },
  { name: "OpenAI", category: "IA & ML" },
  { name: "CrewAI", category: "IA & ML" },
  { name: "FastAPI", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Pandas", category: "Data" },
  { name: "SQL", category: "Data" },
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "Airflow", category: "DevOps" },
  { name: "Scrapy", category: "DevOps" },
  { name: "FFmpeg", category: "DevOps" },
];

const firstHalf = allTechs.slice(0, Math.ceil(allTechs.length / 2));
const secondHalf = allTechs.slice(Math.ceil(allTechs.length / 2));

function TechCard({ name, category }: { name: string; category: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#141414] px-4 py-3 transition-colors hover:border-[#7EC8F5]/20">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#7EC8F5]/10 text-xs font-bold text-[#7EC8F5]">
        {name.slice(0, 2)}
      </div>
      <div>
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs text-gray-500">{category}</p>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 py-24 sm:py-32"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section title */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="mb-16 flex items-end gap-4"
        >
          <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-[#F0EDE8] sm:text-5xl">SOBRE</h2>
        </motion.div>

        {/* Asymmetric 2-column layout */}
        <div className="grid gap-12 md:grid-cols-[1fr_0.4fr] md:gap-16">
          <div>
            {/* Bio paragraphs */}
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={1}
              className="mb-6 text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              Estudante de Ciência de Dados e Inteligência Artificial na UFPB, com
              experiência como AI Engineer na{" "}
              <span className="font-medium text-[#7EC8F5]">Zoox Smart Data</span> e
              pesquisador no{" "}
              <span className="font-medium text-[#7EC8F5]">TRIL Lab</span>. Construo
              soluções que conectam IA a problemas reais — desde agentes
              inteligentes e pipelines de dados até plataformas educacionais e
              ferramentas de produtividade.
            </motion.p>

            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={2}
              className="mb-6 text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              Pesquisador no{" "}
              <span className="font-medium text-[#7EC8F5]">ARIA</span> — Laboratório de
              Aplicações em Inteligência Artificial da UFPB, que desenvolve pesquisa
              aplicada em NLP, computer vision, processamento de áudio e análise
              preditiva. Também sou trainee na{" "}
              <span className="font-medium text-[#7EC8F5]">TAIL</span> (Technology and
              Artificial Intelligence League), a primeira liga acadêmica de IA da
              Paraíba, vinculada ao ARIA.
            </motion.p>

            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={3}
              className="mb-16 text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              Ex-trainee da{" "}
              <span className="font-medium text-[#7EC8F5]">Trilha</span> na UFPB, onde
              venci o hackathon com o projeto{" "}
              <span className="font-medium text-[#7EC8F5]">PixelMind</span> —
              editor de vídeo inteligente com IA. Bilíngue em Português e Inglês.
            </motion.p>
          </div>

          {/* Right column — stats / decorative */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={2}
            className="flex flex-col gap-6"
          >
            <div className="rounded-2xl border border-[#1F1F1F] bg-[#141414] p-6">
              <p className="font-display text-4xl font-bold text-[#7EC8F5]">3+</p>
              <p className="mt-1 text-sm text-[#8B8680]">Labs & Empresas</p>
            </div>
            <div className="rounded-2xl border border-[#1F1F1F] bg-[#141414] p-6">
              <p className="font-display text-4xl font-bold text-[#F0EDE8]">20+</p>
              <p className="mt-1 text-sm text-[#8B8680]">Tecnologias</p>
            </div>
            <div className="rounded-2xl border border-[#1F1F1F] bg-[#141414] p-6">
              <p className="font-display text-4xl font-bold text-[#7EC8F5]">1º</p>
              <p className="mt-1 text-sm text-[#8B8680]">Hackathon UFPB</p>
            </div>
          </motion.div>
        </div>

        {/* Tech stack marquee */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={4}
        >
          <div className="relative flex flex-col gap-4 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {firstHalf.map((tech) => (
                <TechCard
                  key={tech.name}
                  name={tech.name}
                  category={tech.category}
                />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {secondHalf.map((tech) => (
                <TechCard
                  key={tech.name}
                  name={tech.name}
                  category={tech.category}
                />
              ))}
            </Marquee>
            {/* Gradient fade on edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0a0a0a]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0a0a0a]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
