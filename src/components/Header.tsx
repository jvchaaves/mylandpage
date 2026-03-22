"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#about", index: "01" },
  { label: "Experiência", href: "#experiencia", index: "02" },
  { label: "Projetos", href: "#projects", index: "03" },
  { label: "Contato", href: "#contact", index: "04" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollTo = useCallback(
    (href: string) => {
      setIsMobileMenuOpen(false);

      if (href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/70 backdrop-blur-xl"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#top")}
              className="font-display text-lg font-bold tracking-tight text-[#F0EDE8] transition-colors hover:text-[#C8FF00]"
            >
              jv.
              <span className="text-[#C8FF00]">chaves</span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="group relative text-sm font-medium text-[#8B8680] transition-colors hover:text-[#F0EDE8]"
                >
                  <span className="text-[10px] text-[#C8FF00]/60 mr-1.5 font-mono">
                    {link.index}
                  </span>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C8FF00] transition-all duration-300 ease-out group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 text-[#F0EDE8] md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Full-Screen Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 z-40 flex flex-col items-start justify-center bg-[#0a0a0a]/98 px-8 backdrop-blur-2xl md:hidden"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      onClick={() => scrollTo(link.href)}
                      className="group flex items-baseline gap-4 py-3 text-left"
                    >
                      <span className="font-mono text-sm text-[#C8FF00]/50">
                        {link.index}
                      </span>
                      <span className="font-display text-4xl font-bold text-[#F0EDE8] transition-colors group-hover:text-[#C8FF00]">
                        {link.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-12 h-px w-full origin-left bg-gradient-to-r from-[#C8FF00]/40 to-transparent"
                />
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
