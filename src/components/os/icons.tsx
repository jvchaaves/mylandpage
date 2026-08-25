/**
 * Ícones no idioma do Aqua: volume arredondado, gradiente vertical, reflexo
 * elíptico branco no topo e sombra na base. Desenhados aqui em SVG em vez de
 * usar os PNGs da Apple, que são arte proprietária.
 */

type Props = { className?: string };
const padrao = "os-icone-img h-14 w-14";

/** Reflexo de vidro reaproveitado por vários ícones. */
function Brilho({ rx = 34, ry = 14, cx = 64, cy = 34 }) {
  return (
    <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="url(#g-brilho)" opacity="0.75" />
  );
}

function Defs() {
  return (
    <defs>
      <linearGradient id="g-brilho" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

export function DiscoIcon({ className = padrao }: Props) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <Defs />
      <defs>
        <linearGradient id="g-hd-topo" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9d0d6" />
          <stop offset="22%" stopColor="#fbfdfe" />
          <stop offset="52%" stopColor="#c2cad1" />
          <stop offset="78%" stopColor="#eef2f5" />
          <stop offset="100%" stopColor="#b4bcc3" />
        </linearGradient>
        <linearGradient id="g-hd-frente" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef2f5" />
          <stop offset="55%" stopColor="#b9c1c8" />
          <stop offset="100%" stopColor="#8e979f" />
        </linearGradient>
      </defs>
      {/* corpo em perspectiva: tampa clara, frente mais escura */}
      <path d="M18 44l12-10h68l12 10v34l-12 12H30L18 78Z" fill="url(#g-hd-frente)" stroke="#79828a" />
      <path d="M18 44l12-10h68l12 10-12 8H30Z" fill="url(#g-hd-topo)" stroke="#79828a" />
      <rect x="30" y="58" width="52" height="7" rx="3.5" fill="#7d868e" opacity="0.5" />
      <circle cx="98" cy="70" r="6" fill="#6f787f" />
      <circle cx="98" cy="70" r="2.4" fill="#39c25a" />
      <ellipse cx="64" cy="42" rx="40" ry="6" fill="url(#g-brilho)" opacity="0.55" />
    </svg>
  );
}

export function FinderIcon({ className = padrao }: Props) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <Defs />
      <defs>
        <linearGradient id="g-finder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8fd0ff" />
          <stop offset="50%" stopColor="#3f8fe0" />
          <stop offset="100%" stopColor="#1f5fb0" />
        </linearGradient>
      </defs>
      <rect x="16" y="12" width="96" height="104" rx="16" fill="url(#g-finder)" stroke="#1a4f96" />
      {/* meio-rosto claro à esquerda, como o Finder */}
      <path d="M16 28a16 16 0 0 1 16-16h32v104H32a16 16 0 0 1-16-16Z" fill="#dbeaf8" opacity="0.92" />
      <Brilho cx={64} cy={30} rx={40} ry={13} />
      <ellipse cx="46" cy="52" rx="4" ry="7" fill="#123a6b" />
      <ellipse cx="84" cy="52" rx="4" ry="7" fill="#123a6b" />
      <path d="M40 78q24 16 48 0" stroke="#123a6b" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function PastaIcon({ className = padrao }: Props) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <Defs />
      <defs>
        <linearGradient id="g-pasta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfe0fb" />
          <stop offset="55%" stopColor="#7cb6ec" />
          <stop offset="100%" stopColor="#4a8ed4" />
        </linearGradient>
        <linearGradient id="g-aba" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6ecfd" />
          <stop offset="100%" stopColor="#8ec2ef" />
        </linearGradient>
      </defs>
      <path d="M10 34h38l12 12h58a8 8 0 0 1 8 8v10H10Z" fill="url(#g-aba)" stroke="#4f92d6" />
      <path d="M10 52h108a6 6 0 0 1 6 6v40a8 8 0 0 1-8 8H12a8 8 0 0 1-8-8V58a6 6 0 0 1 6-6Z" fill="url(#g-pasta)" stroke="#3f7fc4" />
      <Brilho cx={64} cy={64} rx={48} ry={12} />
    </svg>
  );
}

export function PaintIcon({ className = padrao }: Props) {
  const cores = ["#e14b3c", "#f0a32e", "#f5d431", "#5cb85c", "#3f8fe0", "#9b59d0"];
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <Defs />
      <defs>
        <linearGradient id="g-paleta" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#dfe3e7" />
        </linearGradient>
        <linearGradient id="g-cabo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c78a4a" />
          <stop offset="100%" stopColor="#8a5a28" />
        </linearGradient>
      </defs>
      <path d="M62 16c30 0 50 18 50 38 0 14-12 18-22 18-8 0-12 4-12 10 0 8-8 14-18 14-24 0-44-18-44-40S34 16 62 16Z"
            fill="url(#g-paleta)" stroke="#a9b0b6" />
      <circle cx="52" cy="30" r="1" fill="none" />
      {cores.map((cor, i) => {
        const ang = (-140 + i * 30) * (Math.PI / 180);
        return <circle key={cor} cx={64 + Math.cos(ang) * 30} cy={62 + Math.sin(ang) * 26} r="7.5" fill={cor} stroke="rgba(0,0,0,0.18)" />;
      })}
      <circle cx="46" cy="86" r="10" fill="#f3f5f7" stroke="#b3b9be" />
      {/* pincel na diagonal */}
      <rect x="78" y="18" width="9" height="52" rx="4" transform="rotate(28 82 44)" fill="url(#g-cabo)" />
      <path d="M96 82l10 16-16-6Z" fill="#e14b3c" />
      <Brilho cx={62} cy={34} rx={34} ry={12} />
    </svg>
  );
}

export function TerminalIcon({ className = padrao }: Props) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <Defs />
      <defs>
        <linearGradient id="g-term" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3f45" />
          <stop offset="8%" stopColor="#15181c" />
          <stop offset="100%" stopColor="#0a0c0f" />
        </linearGradient>
      </defs>
      <rect x="14" y="18" width="100" height="92" rx="10" fill="url(#g-term)" stroke="#4b5158" />
      <rect x="14" y="18" width="100" height="14" rx="10" fill="#5b6068" opacity="0.55" />
      <path d="M30 52l16 12-16 12" stroke="#8de08d" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M56 78h34" stroke="#8de08d" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="64" cy="26" rx="34" ry="6" fill="url(#g-brilho)" opacity="0.35" />
    </svg>
  );
}

export function DocumentoIcon({ className = padrao }: Props) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <Defs />
      <defs>
        <linearGradient id="g-doc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#e8eaec" />
        </linearGradient>
      </defs>
      <path d="M26 8h56l24 24v82a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V14a6 6 0 0 1 6-6Z" fill="url(#g-doc)" stroke="#a8adb2" />
      <path d="M82 8l24 24H88a6 6 0 0 1-6-6Z" fill="#cfd4d8" stroke="#a8adb2" />
      {[46, 58, 70, 82, 94].map((y, i) => (
        <rect key={y} x="34" y={y} width={i === 4 ? 34 : 60} height="5" rx="2.5" fill="#b9c0c6" />
      ))}
      <rect x="34" y="30" width="34" height="6" rx="3" fill="#d13a2c" opacity="0.75" />
    </svg>
  );
}

export function PerfilIcon({ className = padrao }: Props) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <Defs />
      <defs>
        <linearGradient id="g-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fdf6e3" />
          <stop offset="100%" stopColor="#e6d9b8" />
        </linearGradient>
      </defs>
      <rect x="14" y="20" width="100" height="88" rx="8" fill="url(#g-card)" stroke="#b8a781" />
      <rect x="14" y="20" width="18" height="88" fill="#8a6f3f" opacity="0.5" />
      <circle cx="66" cy="52" r="15" fill="#c9a86a" stroke="#9c7f4d" />
      <path d="M44 92q22-22 44 0Z" fill="#c9a86a" stroke="#9c7f4d" />
      <Brilho cx={70} cy={32} rx={34} ry={10} />
    </svg>
  );
}

export function LixeiraIcon({ className = padrao }: Props) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <Defs />
      <defs>
        <linearGradient id="g-lixo" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#cfd6dc" />
          <stop offset="18%" stopColor="#f4f7fa" />
          <stop offset="50%" stopColor="#c3cbd2" />
          <stop offset="82%" stopColor="#eef2f5" />
          <stop offset="100%" stopColor="#b9c1c8" />
        </linearGradient>
      </defs>
      <path d="M34 36h60l-7 76a8 8 0 0 1-8 7H49a8 8 0 0 1-8-7Z" fill="url(#g-lixo)" stroke="#8b939a" />
      <ellipse cx="64" cy="36" rx="30" ry="7" fill="#e7ecf0" stroke="#8b939a" />
      <ellipse cx="64" cy="34" rx="21" ry="4.5" fill="#9aa2a9" opacity="0.55" />
      {[52, 64, 76].map((x) => (
        <path key={x} d={`M${x} 50v58`} stroke="#96a0a8" strokeWidth="2.5" opacity="0.7" />
      ))}
    </svg>
  );
}

export function FaixaIcon({ className = padrao }: Props) {
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden>
      <Defs />
      <defs>
        <linearGradient id="g-belt" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7cb0ea" />
          <stop offset="45%" stopColor="#2f63b6" />
          <stop offset="100%" stopColor="#17407f" />
        </linearGradient>
      </defs>
      {/* faixa enrolada, vista de frente: anéis concêntricos e a ponta preta */}
      <circle cx="60" cy="66" r="44" fill="url(#g-belt)" stroke="#12336a" strokeWidth="2" />
      <circle cx="60" cy="66" r="33" fill="none" stroke="#12336a" strokeWidth="1.5" opacity="0.55" />
      <circle cx="60" cy="66" r="22" fill="none" stroke="#12336a" strokeWidth="1.5" opacity="0.55" />
      <circle cx="60" cy="66" r="11" fill="#1d4a92" stroke="#12336a" strokeWidth="1.5" />
      {/* ponta que sai do rolo, com os graus */}
      <path d="M96 42l26-12 8 17-26 13Z" fill="#161616" stroke="#0a0a0a" strokeWidth="1.5" />
      {[104, 112, 120].map((x, i) => (
        <rect key={x} x={x} y={31 + i * 2.6} width="3.5" height="13" rx="1.4" fill="#f4f4f4" opacity="0.9" transform={`rotate(-24 ${x} ${37 + i * 2.6})`} />
      ))}
      <path d="M88 46l14-6" stroke="url(#g-belt)" strokeWidth="14" strokeLinecap="round" />
      <ellipse cx="52" cy="36" rx="24" ry="8" fill="url(#g-brilho)" opacity="0.5" />
    </svg>
  );
}
