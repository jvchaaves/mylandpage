import { Link } from "next-view-transitions";
import { ArrowDownRight } from "lucide-react";
import ContactHover from "@/components/ContactHover";
import { canais } from "@/lib/contatos";
import { t, path, type Lang } from "@/lib/i18n";

export default async function Hero({ lang }: { lang: Lang }) {
  const copy = t(lang).hero;
  const contatos = await canais(lang);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-20 pt-32"
    >
      {/* Único elemento decorativo da página: um halo frio, quase imperceptível */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(60% 100% at 20% 0%, rgba(126,200,245,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-content">
        <p
          className="fade-up mb-8 font-mono text-label uppercase text-ink-muted"
          style={{ animationDelay: "0.05s" }}
        >
          {copy.location}
        </p>

        <h1
          className="fade-up font-display font-semibold leading-[0.95] tracking-tight text-ink"
          style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", animationDelay: "0.1s" }}
        >
          João Vitor Chaves
        </h1>

        <p
          className="fade-up mt-6 max-w-prose text-lg leading-relaxed text-ink-secondary"
          style={{ animationDelay: "0.2s" }}
        >
          {copy.intro}
        </p>

        {/* Posições atuais: o que antes exigia rolar até a timeline */}
        <dl
          className="fade-up mt-14 grid grid-cols-1 gap-px overflow-hidden border-y border-line bg-line sm:grid-cols-3"
          style={{ animationDelay: "0.3s" }}
        >
          {copy.now.map(({ org, role }) => (
            <div key={org} className="bg-bg py-5 sm:px-5 sm:py-6 sm:first:pl-0">
              <dt className="mb-2 font-mono text-label uppercase text-accent">
                {org}
              </dt>
              <dd className="text-sm leading-relaxed text-ink-secondary">
                {role}
              </dd>
            </div>
          ))}
        </dl>

        <div
          className="fade-up mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent"
          >
            {copy.seeProjects}
            <ArrowDownRight
              size={16}
              className="text-ink-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-accent"
            />
          </a>

          <Link
            href={path(lang, "/cv")}
            className="text-sm text-ink-muted transition-colors duration-200 hover:text-ink"
          >
            {copy.resume}
          </Link>

          <span aria-hidden className="h-4 w-px bg-line-strong" />

          {/* Contatos com prévia do perfil, na primeira tela. */}
          <div className="flex items-center gap-2">
            {contatos.map((canal) => (
              <ContactHover key={canal.label} canal={canal} tamanho={18} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
