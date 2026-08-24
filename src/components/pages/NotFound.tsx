import { Link } from "next-view-transitions";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import TopControls from "@/components/TopControls";
import { t, path, type Lang } from "@/lib/i18n";

/** Faixa azul com dois graus: a graduação atual. */
function Belt() {
  return (
    <svg
      viewBox="0 0 340 30"
      role="img"
      aria-hidden
      className="h-9 w-auto"
    >
      {/* barra da faixa */}
      <rect x="0" y="7" width="340" height="16" rx="2.5" fill="#1F5FAF" />

      {/* ponteira preta, contida na barra para se manter legível nos dois temas */}
      <rect x="236" y="7" width="104" height="16" rx="2.5" fill="#0E0E0E" />

      {/* dois graus */}
      {[258, 276].map((x) => (
        <rect key={x} x={x} y="10" width="6" height="10" rx="1" fill="#F2F0EC" />
      ))}
    </svg>
  );
}

export default function NotFound({ lang }: { lang: Lang }) {
  const copy = t(lang).notFound;

  return (
    <>
      <TopControls lang={lang} />

      <main className="flex min-h-screen items-center px-6 py-24">
        <div className="mx-auto w-full max-w-content">
          <p className="fade-up mb-8 font-mono text-label uppercase text-ink-muted">
            {copy.code}
          </p>

          <div className="fade-up mb-10" style={{ animationDelay: "0.05s" }}>
            <Belt />
          </div>

          <h1
            className="fade-up font-display font-semibold leading-[0.95] tracking-tight text-ink"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              animationDelay: "0.1s",
            }}
          >
            {copy.title}
          </h1>

          <p
            className="fade-up mt-6 max-w-prose text-lg leading-relaxed text-ink-secondary"
            style={{ animationDelay: "0.18s" }}
          >
            {copy.body}
          </p>

          <div
            className="fade-up mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: "0.26s" }}
          >
            <Link
              href={path(lang, "/")}
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent"
            >
              <ArrowLeft
                size={16}
                className="text-ink-muted transition-all duration-200 group-hover:-translate-x-0.5 group-hover:text-accent"
              />
              {copy.home}
            </Link>

            <span aria-hidden className="h-4 w-px bg-line-strong" />

            <Link
              href={`${path(lang, "/")}#projetos`}
              className="group inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {copy.projects}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
