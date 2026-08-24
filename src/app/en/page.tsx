import type { Metadata } from "next";
import Home from "@/components/pages/Home";
import { dict } from "@/lib/i18n";

export const metadata: Metadata = {
  title: dict.en.meta.title,
  description: dict.en.meta.description,
  alternates: { canonical: "/en", languages: { "pt-BR": "/", en: "/en" } },
  openGraph: {
    title: dict.en.meta.title,
    description: dict.en.meta.description,
    locale: "en_US",
  },
};

export default function Page() {
  return <Home lang="en" />;
}
