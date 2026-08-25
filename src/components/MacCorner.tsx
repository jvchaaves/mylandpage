import { Link } from "next-view-transitions";

/**
 * Entrada para o /os. Fica no canto porque é um desvio, não o caminho
 * principal — mas expande com o rótulo no hover, senão ninguém descobre que
 * é clicável.
 */
export default function MacCorner({ label }: { label: string }) {
  return (
    <Link
      href="/os"
      aria-label={label}
      className="group fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-xl border border-line bg-surface/90 p-2.5 backdrop-blur transition-all duration-200 hover:border-line-strong hover:bg-surface sm:flex print:hidden"
    >
      <svg viewBox="0 0 28 22" className="h-6 w-7 shrink-0" aria-hidden>
        <rect
          x="1" y="1" width="26" height="20" rx="3"
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

      {/* O rótulo nasce com largura zero e abre no hover. */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm text-ink-secondary transition-all duration-300 ease-smooth group-hover:max-w-[180px] group-hover:pr-1">
        {label}
      </span>
    </Link>
  );
}
