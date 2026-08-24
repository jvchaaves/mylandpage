import { Mail, Github, Linkedin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import CopyEmail from "@/components/CopyEmail";
import { t, type Lang } from "@/lib/i18n";

const EMAIL = "joaovitorchavesdesouza@gmail.com";

const channels = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/jvchaaves",
    href: "https://github.com/jvchaaves",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jvchaaves",
    href: "https://linkedin.com/in/jvchaaves",
  },
];

export default function Contact({ lang }: { lang: Lang }) {
  const copy = t(lang).contact;

  return (
    <Section id="contato">
      <SectionHeading label={copy.label} title={copy.title} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {channels.map(({ icon: Icon, label, value, href }) => {
          const isMail = href.startsWith("mailto:");

          return (
            <a
              key={label}
              href={href}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noopener noreferrer"}
              className="group flex flex-col items-center gap-4 rounded-xl border border-line bg-surface px-6 py-8 text-center transition-colors duration-200 hover:border-line-strong"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-accent transition-colors duration-200 group-hover:bg-accent/10">
                <Icon size={20} />
              </span>

              <span>
                <span className="mb-1.5 block font-mono text-label uppercase text-ink-muted">
                  {label}
                </span>
                <span className="block break-all text-sm text-ink-secondary transition-colors duration-200 group-hover:text-ink">
                  {value}
                </span>
              </span>
            </a>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center sm:justify-start">
        <CopyEmail email={EMAIL} copyLabel={copy.copy} copiedLabel={copy.copied} />
      </div>
    </Section>
  );
}
