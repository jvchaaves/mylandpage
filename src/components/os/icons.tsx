/**
 * Ícones na grade de 32×32 do System 7. O "cinza" é sempre dithering — um
 * xadrez de 1px declarado como pattern SVG — porque a tela do Macintosh não
 * tinha meio-tom: cada pixel era preto ou branco.
 */

function Dither({ id }: { id: string }) {
  return (
    <defs>
      <pattern id={id} width="2" height="2" patternUnits="userSpaceOnUse">
        <rect width="2" height="2" fill="#fff" />
        <rect width="1" height="1" fill="#000" />
        <rect x="1" y="1" width="1" height="1" fill="#000" />
      </pattern>
    </defs>
  );
}

const svg = "os-glyph h-10 w-10";
const traco = { stroke: "#000", strokeWidth: 1 } as const;

export function DiscoIcon() {
  return (
    <svg viewBox="0 0 32 32" className={svg} aria-hidden>
      <Dither id="d-hd" />
      {/* volume em perspectiva: topo dithered, frente branca */}
      <path d="M4 11l4-3h18l2 3v13l-2 2H6l-2-2V11Z" fill="#fff" {...traco} />
      <path d="M4 11l4-3h18l2 3H4Z" fill="url(#d-hd)" {...traco} />
      <path d="M4 11h22v15" fill="none" {...traco} />
      <rect x="7" y="16" width="9" height="2" fill="#000" />
      <circle cx="22" cy="21" r="1.6" fill="#000" />
      <path d="M7 21h9" fill="none" {...traco} />
    </svg>
  );
}

export function PastaIcon() {
  return (
    <svg viewBox="0 0 32 32" className={svg} aria-hidden>
      <Dither id="d-pasta" />
      <path d="M3 8h9l3 3h14v16H3V8Z" fill="#fff" {...traco} />
      <path d="M3 8h9l3 3H3V8Z" fill="url(#d-pasta)" {...traco} />
      <path d="M3 13h26" fill="none" {...traco} />
      <path d="M26 13v14" fill="none" {...traco} />
      <path d="M26 27l3-3V13" fill="url(#d-pasta)" {...traco} />
    </svg>
  );
}

export function DocumentoIcon() {
  return (
    <svg viewBox="0 0 32 32" className={svg} aria-hidden>
      <Dither id="d-doc" />
      {/* canto dobrado, a marca do ícone de documento */}
      <path d="M7 3h12l6 6v20H7V3Z" fill="#fff" {...traco} />
      <path d="M19 3l6 6h-6V3Z" fill="url(#d-doc)" {...traco} />
      {[14, 17, 20, 23].map((y) => (
        <path key={y} d={`M10 ${y}h${y === 23 ? 8 : 12}`} fill="none" {...traco} />
      ))}
    </svg>
  );
}

export function NotasIcon() {
  return (
    <svg viewBox="0 0 32 32" className={svg} aria-hidden>
      <Dither id="d-notas" />
      <rect x="4" y="6" width="24" height="22" fill="#fff" {...traco} />
      <rect x="4" y="6" width="24" height="5" fill="url(#d-notas)" {...traco} />
      {[10, 16, 22].map((x) => (
        <path key={x} d={`M${x} 2v7`} stroke="#000" strokeWidth="2" />
      ))}
      {[16, 19, 22, 25].map((y) => (
        <path key={y} d={`M8 ${y}h16`} fill="none" {...traco} />
      ))}
    </svg>
  );
}

export function TerminalIcon() {
  return (
    <svg viewBox="0 0 32 32" className={svg} aria-hidden>
      <rect x="3" y="5" width="26" height="22" fill="#fff" {...traco} />
      <rect x="5" y="10" width="22" height="15" fill="#000" />
      <path d="M3 5h26v5H3z" fill="#fff" {...traco} />
      <path d="M8 14l3 2.5-3 2.5" stroke="#fff" strokeWidth="1.4" fill="none" />
      <path d="M13 19.5h6" stroke="#fff" strokeWidth="1.4" />
    </svg>
  );
}

export function LixeiraIcon() {
  return (
    <svg viewBox="0 0 32 32" className={svg} aria-hidden>
      <Dither id="d-lixo" />
      <rect x="11" y="4" width="10" height="2.5" fill="url(#d-lixo)" {...traco} />
      <path d="M9 8h14l-1.5 20h-11L9 8Z" fill="#fff" {...traco} />
      <path d="M9 8h14" stroke="#000" strokeWidth="1.4" />
      {[13.5, 16, 18.5].map((x) => (
        <path key={x} d={`M${x} 11v14`} fill="none" {...traco} />
      ))}
    </svg>
  );
}

/** Versões 16×16 para as linhas do Finder. */
export function DocumentoMini() {
  return (
    <svg viewBox="0 0 16 16" className="os-glyph h-3.5 w-3.5 shrink-0" aria-hidden>
      <path d="M3 1h7l3 3v11H3V1Z" fill="#fff" stroke="#000" />
      <path d="M10 1l3 3h-3V1Z" fill="#000" />
      {[7, 9.5, 12].map((y) => (
        <path key={y} d={`M5 ${y}h6`} stroke="#000" />
      ))}
    </svg>
  );
}
