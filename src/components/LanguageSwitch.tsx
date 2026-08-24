"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Check } from "lucide-react";
import type { Lang } from "@/lib/i18n";

const options: { code: Lang; flag: string; name: string; short: string }[] = [
  { code: "pt", flag: "🇧🇷", name: "Português", short: "PT" },
  { code: "en", flag: "🇺🇸", name: "English", short: "EN" },
];

/** Troca o prefixo /en da rota atual, preservando a página em que a pessoa está. */
function localizePath(pathname: string, lang: Lang) {
  const clean = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return lang === "en" ? (clean === "/" ? "/en" : `/en${clean}`) : clean;
}

export default function LanguageSwitch({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const active = options.find((o) => o.code === lang) ?? options[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (code: Lang) => {
    setOpen(false);
    if (code !== lang) router.push(localizePath(pathname, code));
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={lang === "pt" ? "Selecionar idioma" : "Select language"}
        className="flex h-9 items-center gap-2 rounded-full border border-line bg-surface pl-1.5 pr-3 text-ink-secondary transition-colors duration-200 hover:border-line-strong hover:text-ink"
      >
        <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-surface-2 text-[13px] leading-none">
          {active.flag}
        </span>
        <span className="font-mono text-[11px] tracking-wider">
          {active.short}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-11 z-50 w-44 origin-top-right overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-xl"
          style={{ animation: "pop-in 0.16s var(--ease) both" }}
        >
          {options.map((option) => {
            const selected = option.code === lang;

            return (
              <li key={option.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => choose(option.code)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors duration-150 hover:bg-surface-2 ${
                    selected ? "text-ink" : "text-ink-secondary"
                  }`}
                >
                  <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-surface-2 text-[13px] leading-none">
                    {option.flag}
                  </span>
                  <span className="flex-1">{option.name}</span>
                  {selected && <Check size={14} className="text-accent" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
