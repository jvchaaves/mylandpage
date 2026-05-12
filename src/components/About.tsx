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
  { name: "pgvector", category: "Data" },
  { name: "Deepgram", category: "IA & ML" },
  { name: "Whisper", category: "IA & ML" },
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
          <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-[#F0EDE8] sm:text-5xl">
            SOBRE
          </h2>
        </motion.div>

        {/* Asymmetric 2-column layout */}
        <div className="max-w-3xl">
          <div>
            {/* Bio paragraphs */}
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={1}
              className="mb-6 text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              Sou estudante de{" "}
              <span className="font-medium text-[#7EC8F5]">
                Ciência de Dados e Inteligência Artificial
              </span>{" "}
              na UFPB, atualmente no{" "}
              <span className="font-medium text-[#7EC8F5]">4º período</span>.
              Tenho interesse em construir soluções que conectam IA a problemas
              reais.
            </motion.p>

            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={2}
              className="mb-6 text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              Pesquisador no{" "}
              <span className="font-medium text-[#7EC8F5]">ARIA</span> —
              Laboratório de Aplicações em Inteligência Artificial da UFPB —
              desenvolvendo pesquisa em NLP clínico, triagem automatizada e
              sistemas de IA para telessaúde. Também trainee na{" "}
              <span className="font-medium text-[#7EC8F5]">TAIL</span>{" "}
              (Technology and Artificial Intelligence League), a primeira liga
              acadêmica de IA da Paraíba, vinculada ao ARIA.
            </motion.p>

            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={3}
              className="mb-16 text-base leading-relaxed text-neutral-400 sm:text-lg"
            >
              Ex-trainee do{" "}
              <span className="font-medium text-[#7EC8F5]">Trilha</span> na
              UFPB, onde venci o hackathon com o projeto{" "}
              <span className="font-medium text-[#7EC8F5]">PixelMind</span> —
              editor de vídeo inteligente com IA. Bilíngue em Português e
              Inglês.
            </motion.p>
          </div>
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
