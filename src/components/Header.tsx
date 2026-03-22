"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#about" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
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
              className="text-lg font-bold tracking-tight text-white transition-colors hover:text-emerald-400"
            >
              jv.
              <span className="text-emerald-500">chaves</span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 text-white md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Drawer */}
                <motion.nav
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed right-0 top-0 z-40 flex h-full w-64 flex-col gap-2 border-l border-white/5 bg-[#0a0a0a]/95 px-6 pt-24 backdrop-blur-xl md:hidden"
                >
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => scrollTo(link.href)}
                      className="rounded-lg px-4 py-3 text-left text-lg font-medium text-gray-300 transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </motion.nav>
              </>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
