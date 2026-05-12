import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "João Vitor Chaves",
  description:
    "Estudante de Ciência de Dados e Inteligência Artificial na UFPB.",
  keywords: [
    "Ciência de Dados",
    "Inteligência Artificial",
    "Python",
    "LLM",
    "UFPB",
    "João Vitor Chaves",
  ],
  authors: [{ name: "João Vitor Chaves de Souza" }],
  openGraph: {
    title: "João Vitor Chaves",
    description:
      "Estudante de Ciência de Dados e Inteligência Artificial na UFPB.",
    url: "https://jvchaaves.dev",
    siteName: "João Vitor Chaves",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
