"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
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

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-end overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      />
    );
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Interactive Canvas Animation */}
      <CanvasAnimation />

      {/* Animated Grid Pattern Background */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.05]">
        <AnimatedGridPattern
          width={40}
          height={40}
          numSquares={30}
          maxOpacity={0.3}
          duration={3}
          className="h-full w-full fill-sky-300 stroke-sky-300/20"
        />
      </div>

      {/* Spotlight — lime accent */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="#7EC8F5"
      />

      {/* Horizontal rule that animates on load */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-[45%] z-10 h-px w-full origin-left"
        style={{ backgroundColor: "rgba(126, 200, 245, 0.12)" }}
      />

      {/* Main content — asymmetric, bottom-aligned */}
      <div className="relative z-10 flex w-full flex-col px-6 pb-32 pt-40 md:px-12 lg:px-20">
        {/* Name — MASSIVE, left-aligned, Syne display */}
        <div className="mb-6">
          <TextGenerateEffect
            words="João Vitor"
            className="font-display font-bold leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)", color: "#F0EDE8" }}
            duration={0.5}
          />
          <TextGenerateEffect
            words="Chaves"
            className="font-display font-bold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 8rem)",
              color: "#F0EDE8",
              WebkitTextStroke: "1px rgba(240, 237, 232, 0.3)",
              WebkitTextFillColor: "transparent",
            }}
            duration={0.5}
          />
        </div>

        {/* CTAs — pill border + text link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="mb-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-3 rounded-full border px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,255,0,0.15)]"
            style={{
              borderColor: "rgba(126, 200, 245, 0.4)",
              color: "#F0EDE8",
            }}
          >
            Ver Projetos
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: "#7EC8F5" }}
            />
          </a>
          <a
            href="#contact"
            className="group relative text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300"
            style={{ color: "#8B8680" }}
          >
            <span className="transition-colors duration-300 group-hover:text-[#F0EDE8]">
              Contato
            </span>
            <span
              className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: "#7EC8F5" }}
            />
          </a>
        </motion.div>

        {/* Social Dock — lime hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="self-start"
        >
          <Dock className="border-neutral-800 bg-neutral-900/60 backdrop-blur-md">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <DockIcon key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="flex h-full w-full items-center justify-center transition-colors duration-200"
                  style={{ color: "#8B8680" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#7EC8F5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8B8680")}
                >
                  <Icon size={20} />
                </a>
              </DockIcon>
            ))}
          </Dock>
        </motion.div>
      </div>

      {/* Scroll indicator — minimal vertical line that grows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.8 }}
        className="absolute bottom-0 right-8 z-10 md:right-12"
      >
        <a
          href="#about"
          aria-label="Scroll down"
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 64 }}
            transition={{
              duration: 1,
              delay: 3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-px overflow-hidden"
            style={{ backgroundColor: "rgba(126, 200, 245, 0.3)" }}
          >
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1/2 w-full"
              style={{ backgroundColor: "#7EC8F5" }}
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
