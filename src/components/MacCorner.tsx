import { Link } from "next-view-transitions";

/**
 * Ícone das Preferências do Sistema: placa de metal escovado com o
 * interruptor à esquerda e a maçã à direita, parafusada nos quatro cantos.
 * Fica ao lado dos controles de idioma e tema — no rodapé passava
 * despercebido.
 */
export default function MacCorner({ label }: { label: string }) {
  return (
    <Link
      href="/os"
      aria-label={label}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface transition-colors duration-200 hover:border-line-strong print:hidden"
    >
      <svg viewBox="0 0 64 64" className="h-[22px] w-[22px]" aria-hidden>
        <defs>
          <linearGradient id="mc-placa" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f4f5f6" />
            <stop offset="38%" stopColor="#d9dcdf" />
            <stop offset="62%" stopColor="#eceef0" />
            <stop offset="100%" stopColor="#c8ccd0" />
          </linearGradient>
          <linearGradient id="mc-switch" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#dcdfe2" />
          </linearGradient>
          <linearGradient id="mc-maca" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c8288" />
            <stop offset="100%" stopColor="#4d5257" />
          </linearGradient>
        </defs>

        <rect x="6" y="6" width="52" height="52" rx="5" fill="url(#mc-placa)" stroke="#a9aeb3" />
        <path d="M27 6v52" stroke="#b4b9be" strokeWidth="1.2" />
        <path d="M28 6v52" stroke="#fdfdfd" strokeWidth="1" />

        <rect x="13" y="19" width="9" height="26" rx="2" fill="url(#mc-switch)" stroke="#9ea3a8" />
        <rect x="14.6" y="21" width="5.8" height="11" rx="1.6" fill="#fbfbfc" stroke="#b9bec3" strokeWidth="0.8" />

        <path
          transform="translate(34.5 20) scale(1.02)"
          fill="url(#mc-maca)"
          d="M15.6 12.4c0-2.8 2.3-4.2 2.4-4.3-1.3-1.9-3.3-2.2-4-2.2-1.7-.2-3.3 1-4.2 1-.8 0-2.2-1-3.6-1-1.9 0-3.6 1.1-4.5 2.8-1.9 3.3-.5 8.1 1.3 10.7.9 1.3 1.9 2.7 3.3 2.7 1.3 0 1.8-.8 3.4-.8 1.5 0 2 .8 3.4.8s2.3-1.2 3.2-2.5c1-1.5 1.4-2.9 1.4-3s-2.7-1.1-2.7-4.2Zm-2.7-7.7c.7-.9 1.2-2.1 1.1-3.3-1.1 0-2.4.7-3.1 1.6-.7.8-1.3 2.1-1.1 3.3 1.2.1 2.4-.6 3.1-1.6Z"
        />

        {[[13, 13], [51, 13], [13, 51], [51, 51]].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="2.1" fill="#c6cacd" stroke="#9ea3a8" strokeWidth="0.7" />
            <path d={`M${cx - 1.1} ${cy}h2.2`} stroke="#8e9398" strokeWidth="0.7" />
          </g>
        ))}
      </svg>
    </Link>
  );
}
