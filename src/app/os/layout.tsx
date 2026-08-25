import type { Metadata } from "next";
import "./os.css";

export const metadata: Metadata = {
  title: "João OS X",
  description:
    "Uma releitura do Mac OS X como portfólio: projetos, currículo, Paint e um terminal que responde.",
  robots: { index: false, follow: true },
};

export default function OsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
