"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({
  email,
  copyLabel,
  copiedLabel,
}: {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard bloqueado: o link mailto do card continua funcionando */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 text-xs text-ink-muted transition-colors duration-200 hover:text-accent"
    >
      {copied ? (
        <>
          <Check size={13} />
          {copiedLabel}
        </>
      ) : (
        <>
          <Copy size={13} />
          {copyLabel}
        </>
      )}
    </button>
  );
}
