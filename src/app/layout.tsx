import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { dict } from "@/lib/i18n";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const url = "https://mylandpage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: dict.pt.meta.title,
  description: dict.pt.meta.description,
  keywords: [
    "João Vitor Chaves",
    "Desenvolvedor Full-Stack",
    "Inteligência Artificial",
    "Ciência de Dados",
    "LAVID",
    "UFPB",
    "LLM",
    "Visão Computacional",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "João Vitor Chaves de Souza" }],
  creator: "João Vitor Chaves de Souza",
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en" } },
  openGraph: {
    title: dict.pt.meta.title,
    description: dict.pt.meta.description,
    url,
    siteName: "João Vitor Chaves",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: dict.pt.meta.title,
    description: dict.pt.meta.description,
  },
  robots: { index: true, follow: true },
};

/**
 * Aplica o tema antes do primeiro paint: sem isso, quem escolheu o claro
 * veria um flash escuro a cada carregamento.
 */
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":!window.matchMedia("(prefers-color-scheme: light)").matches;document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){document.documentElement.classList.add("dark");}})();`;

/** Dados estruturados: é este site que responde por uma busca pelo meu nome. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "João Vitor Chaves de Souza",
  alternateName: "João Vitor Chaves",
  url,
  jobTitle: "Desenvolvedor Full-Stack",
  description: dict.pt.meta.description,
  email: "mailto:joaovitorchavesdesouza@gmail.com",
  knowsLanguage: ["pt-BR", "en"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "João Pessoa",
    addressRegion: "PB",
    addressCountry: "BR",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade Federal da Paraíba",
  },
  worksFor: {
    "@type": "Organization",
    name: "LAVID, Laboratório de Vídeo Digital da UFPB",
  },
  knowsAbout: [
    "Inteligência Artificial",
    "Visão Computacional",
    "Large Language Models",
    "Desenvolvimento Full-Stack",
    "Ciência de Dados",
  ],
  sameAs: ["https://github.com/jvchaaves", "https://linkedin.com/in/jvchaaves"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="pt-BR" suppressHydrationWarning>
        <head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </head>
        <body
          className={`${syne.variable} ${spaceGrotesk.variable} font-sans antialiased`}
        >
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        </body>
      </html>
    </ViewTransitions>
  );
}
