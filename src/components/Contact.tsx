"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { type ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  delay: number;
}

function ContactCard({ icon, label, value, href, delay }: ContactCardProps) {
  const isMailto = href.startsWith("mailto:");
  return (
    <motion.a
      href={href}
      target={isMailto ? "_self" : "_blank"}
      rel={isMailto ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative z-10 flex flex-col items-center gap-4 rounded-2xl border border-[#1F1F1F] bg-[#141414] p-8 transition-all duration-300 hover:border-[#7EC8F5]/50 hover:shadow-lg hover:shadow-[#7EC8F5]/5 cursor-pointer"
    >
      {/* Animated gradient border on hover */}
      <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="pointer-events-none absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-[#7EC8F5]/20 via-[#7EC8F5]/10 to-[#7EC8F5]/20" />
        <div className="pointer-events-none absolute inset-[1px] rounded-2xl bg-[#141414]" />
      </div>

      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#7EC8F5]/10 text-[#7EC8F5] transition-colors duration-300 group-hover:bg-[#7EC8F5]/20">
        {icon}
      </div>

      <div className="relative text-center">
        <p className="mb-1 text-sm font-medium text-gray-500">{label}</p>
        <p className="text-sm text-gray-300 transition-colors duration-300 group-hover:text-white">
          {value}
        </p>
      </div>
    </motion.a>
  );
}

const contacts = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "joaovitorchavesdesouza@gmail.com",
    href: "mailto:joaovitorchavesdesouza@gmail.com",
  },
  {
    icon: <Github size={24} />,
    label: "GitHub",
    value: "github.com/jvchaaves",
    href: "https://github.com/jvchaaves",
  },
  {
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
    value: "linkedin.com/in/jvchaaves",
    href: "https://linkedin.com/in/jvchaaves",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 sm:py-32"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-64 w-full max-w-lg bg-[#7EC8F5]/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-end justify-center gap-4">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[#F0EDE8] sm:text-5xl">
              Vamos <span className="text-[#7EC8F5]">Conversar</span>
            </h2>
          </div>
          <p className="mx-auto max-w-md text-gray-400">
            Tem um projeto interessante ou quer trocar uma ideia? Entre em
            contato!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {contacts.map((contact, i) => (
            <ContactCard
              key={contact.label}
              icon={contact.icon}
              label={contact.label}
              value={contact.value}
              href={contact.href}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
