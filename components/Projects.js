import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" alt eyebrow="Projects" title="Projects">
      <p className="mb-10 max-w-2xl text-muted">
        AI and machine learning projects built end to end, from data ingestion to a working app.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100} className={i === 0 ? "md:col-span-2" : ""}>
            <article className="grad-border lift h-full rounded-xl p-6">
              <p className="font-display text-sm font-semibold text-emerald">0{i + 1}</p>
              <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-muted">{p.problem}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed">
                {p.built.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm">
                {p.stack.map((t) => <li key={t} className="rounded-full border border-line bg-pale px-3 py-1 text-accent">{t}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
