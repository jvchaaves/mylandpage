"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: <Github size={18} />,
    href: "https://github.com/jvchaaves",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={18} />,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: <Mail size={18} />,
    href: "mailto:joao.chaves@academico.ufpb.br",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        {/* Made with love */}
        <p className="flex items-center gap-1.5 text-sm text-gray-400">
          Feito com{" "}
          <Heart
            size={16}
            className="fill-emerald-500 text-emerald-500"
          />{" "}
          por{" "}
          <span className="font-medium text-white">
            João Vitor Chaves
          </span>
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors duration-200 hover:bg-white/5 hover:text-emerald-400"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600">
          &copy; 2026 &mdash; Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
