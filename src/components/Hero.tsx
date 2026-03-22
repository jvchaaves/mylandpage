"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Dock, DockIcon } from "@/components/ui/dock";
import { CanvasAnimation } from "@/components/ui/canvas";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/jvchaaves",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/jvchaaves",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:joaovitorchavesdesouza@gmail.com",
    label: "Email",
  },
];

function useTypedText(text: string, speed = 40, delay = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, started, text, speed]);

  return displayed;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const typedSubtitle = useTypedText(
    "Construindo soluções inteligentes com IA aplicada à saúde, educação e produtividade.",
    40,
    1800
  );

  if (!mounted) {
    return (
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
        style={{ backgroundColor: "#0a0a0a" }}
      />
    );
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Interactive Canvas Animation */}
      <CanvasAnimation />

      {/* Animated Grid Pattern Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.07]">
        <AnimatedGridPattern
          width={40}
          height={40}
          numSquares={30}
          maxOpacity={0.3}
          duration={3}
          className="h-full w-full fill-emerald-500 stroke-emerald-500/20"
        />
      </div>

      {/* Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#10b981"
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        {/* Name with TextGenerateEffect */}
        <div className="mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          <TextGenerateEffect
            words="João Vitor Chaves"
            className="tracking-tight"
            duration={0.5}
          />
        </div>

        {/* Tagline with gradient text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-6 text-xl font-medium sm:text-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        >
          AI Engineer &amp; Data Science Student
        </motion.p>

        {/* Typed subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="mb-10 h-14 max-w-2xl text-base text-neutral-400 sm:text-lg"
        >
          <p>
            {typedSubtitle}
            <span className="inline-block w-[2px] h-[1em] bg-emerald-400 align-middle ml-0.5 animate-pulse" />
          </p>
        </motion.div>

        {/* CTA Buttons with glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="mb-12 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#projetos"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-[1.02]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative">Ver Projetos</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-700 px-8 py-3 font-medium text-neutral-300 transition-all duration-300 hover:border-emerald-500/50 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:scale-[1.02]"
          >
            Contato
          </a>
        </motion.div>

        {/* Social Dock (macOS-style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.3 }}
        >
          <Dock className="bg-neutral-900/60 border-neutral-800 backdrop-blur-md">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <DockIcon key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="flex h-full w-full items-center justify-center text-neutral-400 transition-colors duration-200 hover:text-emerald-400"
                >
                  <Icon size={20} />
                </a>
              </DockIcon>
            ))}
          </Dock>
        </motion.div>
      </div>

      {/* Scroll indicator with bouncing chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Scroll down"
          className="flex flex-col items-center gap-2 text-neutral-500 transition-colors duration-300 hover:text-emerald-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
