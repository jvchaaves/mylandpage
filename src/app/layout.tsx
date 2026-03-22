import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "João Vitor Chaves | AI Engineer & Full-Stack Developer",
  description: "Estudante de Ciência da Computação na UFPB, construindo soluções inteligentes com IA aplicada à saúde, educação e produtividade.",
  keywords: ["AI Engineer", "Full-Stack Developer", "Python", "LLM", "UFPB", "João Vitor Chaves"],
  authors: [{ name: "João Vitor Chaves de Souza" }],
  openGraph: {
    title: "João Vitor Chaves | AI Engineer & Full-Stack Developer",
    description: "Construindo soluções inteligentes com IA aplicada à saúde, educação e produtividade.",
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
