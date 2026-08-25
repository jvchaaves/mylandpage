import type { Metadata } from "next";
import { Silkscreen } from "next/font/google";
import "./os.css";

/* Chicago não existe como webfont livre; Silkscreen é a pixel font mais
   próxima em peso e altura-x, e mantém tudo na grade. */
const pixel = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "João OS 7.1",
  description:
    "Uma releitura do Macintosh System 7 como portfólio: projetos, trajetória e um terminal que responde.",
  robots: { index: false, follow: true },
};

export default function OsLayout({ children }: { children: React.ReactNode }) {
  return <div className={pixel.variable}>{children}</div>;
}
