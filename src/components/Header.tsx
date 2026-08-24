"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { t, type Lang } from "@/lib/i18n";

export default function Header({ lang }: { lang: Lang }) {
  const copy = t(lang).nav;
  const navLinks = [
    { label: copy.about, href: "#about" },
    { label: copy.experience, href: "#experiencia" },
    { label: copy.projects, href: "#projetos" },
    { label: copy.contact, href: "#contato" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Seção ativa: marca no menu onde a pessoa está na página. */
  useEffect(() => {
    const sections = ["#about", "#experiencia", "#projetos", "#contato"]
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Menu mobile: trava o scroll, fecha no Esc e mantém o foco dentro. */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = [
        toggleRef.current,
        ...Array.from(menuRef.current.querySelectorAll("button")),
      ].filter((el): el is HTMLButtonElement => el !== null);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    menuRef.current?.querySelector("button")?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollTo = useCallback((href: string) => {
    setIsMenuOpen(false);

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-bg/80 backdrop-blur-md transition-all duration-300 ease-smooth ${
        isVisible
          ? "translate-y-0 border-line opacity-100"
          : "pointer-events-none -translate-y-full border-transparent opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 pr-32">
        <button
          onClick={() => scrollTo("#top")}
          className="font-display text-sm font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-accent"
        >
          João Vitor Chaves
        </button>

        <nav aria-label={copy.projects} className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                aria-current={isActive ? "true" : undefined}
                className={`relative text-sm transition-colors duration-200 hover:text-ink ${
                  isActive ? "text-ink" : "text-ink-muted"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ease-smooth ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        <button
          ref={toggleRef}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-50 text-ink md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-bg px-8 md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="py-3 text-left font-display text-3xl font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
