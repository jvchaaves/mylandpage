"use client";

import { useEffect } from "react";

/**
 * O App Router tem um único root layout, então o atributo lang do <html>
 * nasce em pt-BR. Aqui ele é corrigido para as rotas em inglês.
 */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "pt-BR";
    };
  }, [lang]);

  return null;
}
