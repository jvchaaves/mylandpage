"use client";

import { Timeline } from "@/components/ui/timeline";
import { Briefcase, FlaskConical, GraduationCap, Trophy, Brain, Search } from "lucide-react";

export default function Experience() {
  const data = [
    {
      title: "2026",
      content: (
        <div className="divide-y divide-[#1F1F1F]">
          <div className="pb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7EC8F5]/10">
                <Brain className="h-4 w-4 text-[#7EC8F5]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Trainee @ TAIL</h4>
                <span className="text-xs text-[#7EC8F5] font-medium">Dez 2025 — Presente</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed ml-12">
              Trainee na Technology and Artificial Intelligence League, participando de projetos práticos e estudos avançados em inteligência artificial e machine learning.
            </p>
          </div>

          <div className="py-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7EC8F5]/10">
                <Search className="h-4 w-4 text-[#7EC8F5]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Pesquisador @ ARIA</h4>
                <span className="text-xs text-[#7EC8F5] font-medium">Nov 2025 — Presente</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed ml-12">
              Pesquisa em inteligência artificial aplicada, desenvolvendo soluções inovadoras e contribuindo para projetos de pesquisa em João Pessoa, Paraíba.
            </p>
          </div>

          <div className="pt-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7EC8F5]/10">
                <FlaskConical className="h-4 w-4 text-[#7EC8F5]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Pesquisador @ TRIL Lab (UFPB)</h4>
                <span className="text-xs text-[#7EC8F5] font-medium">Mar 2025 — Presente</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed ml-12">
              Estágio de pesquisa em IA aplicada e engenharia de dados em parceria com empresas. Projetos envolvendo computer vision, OCR e sistemas de business intelligence.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="divide-y divide-[#1F1F1F]">
          <div className="pb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7EC8F5]/10">
                <Briefcase className="h-4 w-4 text-[#7EC8F5]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">AI Engineer @ Zoox Smart Data</h4>
                <span className="text-xs text-gray-500">Jun 2025 — Dez 2025</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed ml-12">
              Estágio em engenharia de IA, desenvolvendo gerador de agentes inteligentes que automatiza a configuração de agentes conversacionais. Interface interativa para definição de roles, goals e contexto, com geração de código pronto para produção.
            </p>
          </div>

          <div className="pt-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7EC8F5]/10">
                <GraduationCap className="h-4 w-4 text-[#7EC8F5]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Trainee @ Trilha</h4>
                <span className="text-xs text-gray-500">Jan 2025 — Jul 2025</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed ml-12">
              Programa imersivo presencial em Ciência da Computação na UFPB, com workshops e mentorias em desenvolvimento de software. Vencedor do hackathon interno com o projeto PixelMind.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7EC8F5]/10">
                <Trophy className="h-4 w-4 text-[#7EC8F5]" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Hackathon Winner — PixelMind</h4>
                <span className="text-xs text-gray-500">2024</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed ml-12">
              1º lugar entre 6 equipes no hackathon da TRILHA/UFPB. Desenvolvimento do PixelMind — editor de vídeo inteligente com IA para edição por comandos em linguagem natural.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="experiencia" className="relative bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 flex items-end gap-4">
          <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-[#F0EDE8] sm:text-5xl">EXPERIÊNCIA</h2>
        </div>
      </div>
      <Timeline data={data} />
    </section>
  );
}
