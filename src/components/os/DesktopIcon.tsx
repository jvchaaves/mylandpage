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
      className={`flex w-[88px] flex-col items-center gap-1.5 p-1 ${
        selecionado ? "os-icon-selected" : ""
      }`}
    >
      {children}
      <span className="os-icon-label os-chrome px-1 text-[8px] leading-[1.4]">{label}</span>
    </button>
  );
}
