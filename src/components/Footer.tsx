import { Link } from "next-view-transitions";
import { t, type Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4">
        <p className="font-display text-sm font-medium text-ink-muted">
          João Vitor Chaves
        </p>

        {/* Segundo caminho para o /os: o canto sozinho passa despercebido. */}
        <Link
          href="/os"
          className="group inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-accent"
        >
          {t(lang).macCorner}
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
        </Link>
      </div>
    </footer>
  );
}
