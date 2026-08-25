import { Link } from "next-view-transitions";

/**
 * Entrada discreta para o /os. Fica no canto porque é um desvio, não o
 * caminho principal: quem veio avaliar o portfólio não precisa tropeçar nele.
 */
export default function MacCorner({ label }: { label: string }) {
  return (
    <Link
      href="/os"
      aria-label={label}
      title={label}
      className="group fixed bottom-5 right-5 z-40 hidden rounded-lg border border-line bg-surface p-2.5 transition-colors duration-200 hover:border-line-strong sm:block print:hidden"
    >
      <svg viewBox="0 0 24 28" className="h-6 w-6" aria-hidden>
        {/* Macintosh 128K de frente, em traço */}
        <rect x="2" y="2" width="20" height="24" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-ink-muted transition-colors duration-200 group-hover:text-accent" />
        <rect x="5" y="5" width="14" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-ink-muted transition-colors duration-200 group-hover:text-accent" />
        <rect x="6" y="18" width="7" height="5" rx="0.8" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-ink-muted transition-colors duration-200 group-hover:text-accent" />
        <path d="M15.5 21h3" stroke="currentColor" strokeWidth="1.2" className="text-ink-muted transition-colors duration-200 group-hover:text-accent" />
      </svg>
    </Link>
  );
}
