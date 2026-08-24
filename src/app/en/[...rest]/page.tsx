import { notFound } from "next/navigation";

/**
 * Qualquer rota inexistente sob /en cai aqui e dispara o not-found deste
 * segmento, que está em inglês. Sem isso, o Next usaria o 404 raiz, em português.
 */
export default function CatchAll() {
  notFound();
}
