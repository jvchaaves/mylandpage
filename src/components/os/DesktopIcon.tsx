"use client";

export default function DesktopIcon({
  label,
  selecionado,
  onSelect,
  onOpen,
  children,
}: {
  label: string;
  selecionado: boolean;
  onSelect: () => void;
  onOpen: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      onDoubleClick={onOpen}
      className={`flex w-[86px] flex-col items-center gap-1 p-1 ${selecionado ? "os-icone-sel" : ""}`}
    >
      {children}
      <span className="os-icone-label text-center text-[11px] leading-tight">{label}</span>
    </button>
  );
}
