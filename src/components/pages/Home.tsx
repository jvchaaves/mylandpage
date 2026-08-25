import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MacCorner from "@/components/MacCorner";
import { t, type Lang } from "@/lib/i18n";

export default function Home({ lang }: { lang: Lang }) {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[70] focus:rounded focus:border focus:border-line-strong focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        {t(lang).skipLink}
      </a>
      <Header lang={lang} />
      <main className="min-h-screen">
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer />
      <MacCorner label={t(lang).macCorner} />
    </>
  );
}
