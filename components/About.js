import Section from "./Section";
import Reveal from "./Reveal";
import { about } from "../data/content";

export default function About() {
  return (
    <Section id="about" alt eyebrow="About" title="About Me">
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <p className="leading-relaxed text-muted">{about.text}</p>
        <Reveal as="dl" type="stagger" className="divide-y divide-line rounded-xl border border-line bg-surface">
          {about.details.map(([k, v]) => (
            <div key={k} className="grid grid-cols-3 gap-3 px-4 py-3 text-sm">
              <dt className="font-medium">{k}</dt>
              <dd className="col-span-2 text-muted">{v}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
