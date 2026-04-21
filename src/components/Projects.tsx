"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  MessageSquare,
  Heart,
  FileQuestion,
  Search,
  BarChart3,
  Video,
  ArrowRight,
  Mic,
  Database,
  Bot,
  GraduationCap,
  Brain,
  HeartPulse,
  FileSearch,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { projects as projectData } from "@/lib/projects";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Mic,
  Heart,
  HeartPulse,
  GraduationCap,
  Bot,
  FileQuestion,
  FileSearch,
  Search,
  Database,
  Video,
  BarChart3,
  Brain,
};

const featuredProjects = projectData.filter((p) => p.featured);
const otherProjects = projectData.filter((p) => !p.featured);

/* ── Animation variants ──────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

/* ── Featured Carousel ───────────────────────────────────── */

function FeaturedCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const go = (dir: -1 | 1) => {
    setDirection(dir);
    setActive(
      (prev) =>
        (prev + dir + featuredProjects.length) % featuredProjects.length,
    );
    resetTimer();
  };

  const project = featuredProjects[active];
  const Icon = iconMap[project.icon] || MessageSquare;

  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <div className="mb-20">
      <div className="relative overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#141414]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={200}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={project.slug}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col lg:flex-row"
          >
            {/* Left – Info */}
            <div className="flex flex-1 flex-col justify-center p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#7EC8F5]/10">
                  <Icon className="h-5 w-5 text-[#7EC8F5]" />
                </div>
                {project.metrics && (
                  <span className="rounded-full bg-[#7EC8F5]/10 px-3 py-1 text-xs font-medium text-[#7EC8F5]">
                    {project.metrics.split("•")[0].trim()}
                  </span>
                )}
              </div>

              <h3 className="mb-1 text-2xl font-bold text-white lg:text-3xl">
                {project.name}
              </h3>

              <p className="mb-2 text-base font-medium text-gray-300">
                {project.tagline}
              </p>

              <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-500">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.slice(0, 6).map((t) => (
                  <span
                    key={t.name}
                    className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {t.name}
                  </span>
                ))}
                {project.tech.length > 6 && (
                  <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-gray-500">
                    +{project.tech.length - 6}
                  </span>
                )}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="group/link inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#7EC8F5] transition-colors hover:text-[#7EC8F5]"
              >
                Ver detalhes
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>

            {/* Right – Visual placeholder */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-[#7EC8F5]/10 via-[#7EC8F5]/5 to-transparent p-8 lg:p-12">
              {/* Decorative circles */}
              <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-[#7EC8F5]/5 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#7EC8F5]/5 blur-2xl" />

              <div className="relative flex h-48 w-full max-w-sm items-center justify-center rounded-2xl border border-white/5 bg-[#0a0a0a]/60 shadow-2xl backdrop-blur-sm lg:h-64">
                <Icon className="h-16 w-16 text-[#7EC8F5]/30" />
                <div className="absolute bottom-4 left-4 right-4 space-y-2">
                  <div className="h-2 w-3/4 rounded-full bg-white/5" />
                  <div className="h-2 w-1/2 rounded-full bg-white/5" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <button
          onClick={() => go(-1)}
          aria-label="Projeto anterior"
          className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#141414]/80 text-gray-400 backdrop-blur-sm transition-colors hover:border-[#7EC8F5]/30 hover:text-[#7EC8F5]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Próximo projeto"
          className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#141414]/80 text-gray-400 backdrop-blur-sm transition-colors hover:border-[#7EC8F5]/30 hover:text-[#7EC8F5]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {featuredProjects.map((p, i) => (
          <button
            key={p.slug}
            aria-label={`Ir para ${p.name}`}
            onClick={() => {
              setDirection(i > active ? 1 : -1);
              setActive(i);
              resetTimer();
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "w-6 bg-[#7EC8F5]"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Other Projects Card ─────────────────────────────────── */

function SmallProjectCard({
  project,
}: {
  project: (typeof projectData)[number];
}) {
  const Icon = iconMap[project.icon] || MessageSquare;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-[#1F1F1F] bg-[#141414] p-6 transition-colors duration-300 hover:border-[#7EC8F5]/30"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={200}
        inactiveZone={0.01}
        borderWidth={2}
      />
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-[#7EC8F5]/5" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7EC8F5]/10">
            <Icon className="h-5 w-5 text-[#7EC8F5]" />
          </div>
        </div>

        {/* Name & Tagline */}
        <h3 className="mb-1 text-lg font-bold text-white">{project.name}</h3>

        <p className="mb-5 text-sm leading-relaxed text-gray-400">
          {project.tagline}
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t.name}
              className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {t.name}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-gray-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-[#7EC8F5] transition-colors hover:text-[#7EC8F5]"
        >
          Ver detalhes
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

/* ── Main Section ────────────────────────────────────────── */

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="relative bg-[#0a0a0a] px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-end gap-4">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[#F0EDE8] md:text-5xl">
              PROJETOS
            </h2>
          </div>
        </motion.div>

        {/* Featured Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <FeaturedCarousel />
        </motion.div>

        {/* Other Projects Grid */}
        <div ref={gridRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {otherProjects.map((project) => (
              <SmallProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/jvchaaves"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-[#7EC8F5]/20 bg-[#7EC8F5]/5 px-6 py-3 text-sm font-medium text-[#7EC8F5] transition-all duration-300 hover:border-[#7EC8F5]/40 hover:bg-[#7EC8F5]/10"
          >
            Ver todos no GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
