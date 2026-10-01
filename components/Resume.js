import Section from "./Section";
import Reveal from "./Reveal";
import { experience, education, certifications, profile } from "../data/content";

function Timeline({ heading, children }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold">{heading}</h3>
      <Reveal as="ol" type="stagger" className="grid gap-6 md:grid-cols-2">{children}</Reveal>
    </div>
  );
}
function Item({ period, title, sub, children }) {
  return (
    <li className="lift relative rounded-xl border border-line bg-surface p-5">
      <span className="absolute -left-[7px] top-6 hidden" />
      <p className="inline-block rounded-full grad-bg px-3 py-0.5 text-xs font-medium text-white">{period}</p>
      <h4 className="mt-3 font-display text-lg font-semibold">{title}</h4>
      <p className="text-sm text-muted">{sub}</p>
      {children}
    </li>
  );
}

export default function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Education & Experience">
      <div className="space-y-14">
        <Timeline heading="Education">
          {education.map((e) => (
            <Item key={e.degree} period={e.period} title={e.degree} sub={e.school} />
          ))}
        </Timeline>
        <Timeline heading="Experience">
          {experience.map((e) => (
            <Item key={e.company} period={e.period} title={e.role} sub={`${e.company} · ${e.location}`}>
              {e.points.length > 0 && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              )}
            </Item>
          ))}
        </Timeline>
      </div>
      <div className="mt-12">
        <h3 className="mb-4 text-xl font-semibold">Certifications</h3>
        <Reveal as="ul" type="stagger" className="grid gap-2 text-sm sm:grid-cols-2">
          {certifications.map((c) => (
            <li key={c.name} className="rounded-lg border border-line bg-surface px-4 py-2.5">
              {c.name}{c.issuer && <span className="text-muted">, {c.issuer}</span>}
            </li>
          ))}
        </Reveal>
      </div>
      <div className="mt-10 text-center">
        <a href={profile.resume} download className="btn-grad grad-bg inline-block rounded-md px-6 py-3 font-medium text-white">Download CV</a>
      </div>
    </Section>
  );
}
