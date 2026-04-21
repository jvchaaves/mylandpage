"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Github size={16} />,
    href: "https://github.com/jvchaaves",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={16} />,
    href: "https://linkedin.com/in/jvchaaves",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={16} />,
    href: "mailto:joao.chaves@academico.ufpb.br",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-6 pb-8 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-[#7EC8F5]/40 via-[#1F1F1F] to-transparent" />

        <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">
          {/* Logo */}
          <p className="font-display text-sm font-medium text-[#F0EDE8]/40">
            jv.<span className="text-[#7EC8F5]/40">chaves</span>
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[#8B8680] transition-all duration-200 hover:border-[#7EC8F5]/40 hover:text-[#7EC8F5]"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#8B8680]/50">
            &copy; 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
