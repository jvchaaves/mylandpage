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
      className="group fixed bottom-5 right-5 z-40 hidden rounded-xl border border-line bg-surface p-2.5 transition-colors duration-200 hover:border-line-strong sm:block print:hidden"
    >
      {/* Janelinha Aqua com o semáforo — lê como "tem um sistema aqui dentro". */}
      <svg viewBox="0 0 28 22" className="h-6 w-7" aria-hidden>
        <rect
          x="1"
          y="1"
          width="26"
          height="20"
          rx="3"
          className="fill-surface-2 stroke-line-strong transition-colors duration-200 group-hover:stroke-accent"
          strokeWidth="1.2"
        />
        <path
          d="M1 6.5h26"
          className="stroke-line-strong transition-colors duration-200 group-hover:stroke-accent"
          strokeWidth="1.2"
        />
        <circle cx="5" cy="3.8" r="1.3" fill="#ff6259" />
        <circle cx="9" cy="3.8" r="1.3" fill="#ffbd2e" />
        <circle cx="13" cy="3.8" r="1.3" fill="#28c940" />
      </svg>
    </Link>
  );
}
