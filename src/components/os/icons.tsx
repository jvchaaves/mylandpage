/**
 * Ícones em traço 1-bit, na grade de 32×32 que o System 7 usava. Sem
 * preenchimento cinza: só contorno preto e branco chapado.
 */
const base = "os-glyph h-8 w-8";

export function DiscoIcon() {
  return (
    <svg viewBox="0 0 32 32" className={base} aria-hidden>
      <rect x="3" y="7" width="26" height="18" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <rect x="6" y="10" width="20" height="7" fill="none" stroke="#000" />
      <rect x="8" y="20" width="6" height="2" fill="#000" />
      <circle cx="24" cy="21" r="1.5" fill="#000" />
    </svg>
  );
}

export function PastaIcon() {
  return (
    <svg viewBox="0 0 32 32" className={base} aria-hidden>
      <path d="M3 9h9l2.5 3H29v14H3V9Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <path d="M3 15h26" stroke="#000" />
    </svg>
  );
}

export function DocumentoIcon() {
  return (
    <svg viewBox="0 0 32 32" className={base} aria-hidden>
      <path d="M7 3h13l6 6v20H7V3Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <path d="M20 3v6h6" fill="none" stroke="#000" strokeWidth="1.5" />
      {[13, 16, 19, 22].map((y) => (
        <path key={y} d={`M11 ${y}h13`} stroke="#000" />
      ))}
    </svg>
  );
}

export function TerminalIcon() {
  return (
    <svg viewBox="0 0 32 32" className={base} aria-hidden>
      <rect x="3" y="5" width="26" height="22" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <path d="M3 10h26" stroke="#000" />
      <path d="M7 15l4 3-4 3" fill="none" stroke="#000" strokeWidth="1.5" />
      <path d="M13 21h7" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function LixeiraIcon() {
  return (
    <svg viewBox="0 0 32 32" className={base} aria-hidden>
      <path d="M9 9h14l-1.5 19h-11L9 9Z" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <rect x="11" y="5" width="10" height="3" fill="#fff" stroke="#000" strokeWidth="1.5" />
      {[14, 16.5, 19].map((x) => (
        <path key={x} d={`M${x} 13v11`} stroke="#000" />
      ))}
    </svg>
  );
}

export function NotasIcon() {
  return (
    <svg viewBox="0 0 32 32" className={base} aria-hidden>
      <rect x="4" y="5" width="24" height="22" fill="#fff" stroke="#000" strokeWidth="1.5" />
      <path d="M4 10h24" stroke="#000" strokeWidth="1.5" />
      {[9, 14, 19, 24].map((x) => (
        <path key={x} d={`M${x} 3v4`} stroke="#000" strokeWidth="1.5" />
      ))}
      {[15, 19, 23].map((y) => (
        <path key={y} d={`M8 ${y}h16`} stroke="#000" />
      ))}
    </svg>
  );
}
