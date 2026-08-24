import { t, type Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-content flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm font-medium text-ink-muted">
          João Vitor Chaves
        </p>
        <p className="font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} · {t(lang).footer.madeWith}
        </p>
      </div>
    </footer>
  );
}
