import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeToggle from "@/components/ThemeToggle";
import { t, type Lang } from "@/lib/i18n";

/** Idioma e tema, sempre visíveis no topo da página. */
export default function TopControls({ lang }: { lang: Lang }) {
  return (
    <div className="fixed right-6 top-5 z-[60] flex items-center gap-2 print:hidden">
      <LanguageSwitch lang={lang} />
      <ThemeToggle label={t(lang).theme.toggle} />
    </div>
  );
}
