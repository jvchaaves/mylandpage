"use client";

import { Printer } from "lucide-react";

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-ink transition-colors duration-200 hover:border-line-strong hover:text-accent"
    >
      <Printer size={15} />
      {label}
    </button>
  );
}
