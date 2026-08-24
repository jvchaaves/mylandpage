import fs from "fs";
import path from "path";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { t, type Lang, type Segment } from "@/lib/i18n";

const stack = [
  {
    area: "ai" as const,
    items: ["Python", "PyTorch", "LangChain", "LLMs", "Computer Vision", "Whisper"],
  },
  {
    area: "backend" as const,
    items: ["TypeScript", "Node.js", "Express", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    area: "frontend" as const,
    items: ["React", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    area: "data" as const,
    items: ["Docker", "RabbitMQ", "Airflow", "pandas", "pgvector", "Git"],
  },
];

/**
 * Retrato opcional: basta salvar a foto como `public/retrato.{jpg,jpeg,png,webp}`
 * que ela aparece aqui. Sem arquivo, a bio ocupa a largura toda.
 */
function findPortrait() {
  const candidates = ["retrato.jpg", "retrato.jpeg", "retrato.png", "retrato.webp"];
  return candidates.find((file) =>
    fs.existsSync(path.join(process.cwd(), "public", file)),
  );
}

function Paragraph({ segments }: { segments: readonly Segment[] }) {
  return (
    <p>
      {segments.map((segment, i) =>
        segment.em ? (
          <span key={i} className="font-medium text-ink">
            {segment.t}
          </span>
        ) : (
          <span key={i}>{segment.t}</span>
        ),
      )}
    </p>
  );
}

export default function About({ lang }: { lang: Lang }) {
  const copy = t(lang).about;
  const portrait = findPortrait();

  return (
    <Section id="about">
      <SectionHeading label={copy.label} title={copy.title} />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="max-w-prose space-y-6 text-base leading-relaxed text-ink-secondary">
          {copy.paragraphs.map((segments, i) => (
            <Paragraph key={i} segments={segments} />
          ))}

          <p className="border-t border-line pt-6 text-ink">{copy.closing}</p>
        </div>

        {portrait && (
          <figure className="order-first lg:order-last">
            <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-xl border border-line bg-surface lg:w-[280px]">
              <Image
                src={`/${portrait}`}
                alt={copy.portraitAlt}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          </figure>
        )}
      </div>

      <div className="mt-16">
        <p className="mb-6 font-mono text-label uppercase text-ink-muted">
          {copy.toolsLabel}
        </p>
        <dl className="grid grid-cols-1 gap-x-10 gap-y-8 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map(({ area, items }) => (
            <div key={area}>
              <dt className="mb-3 text-sm font-medium text-ink">
                {copy.stackAreas[area]}
              </dt>
              <dd>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="font-mono text-xs text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
