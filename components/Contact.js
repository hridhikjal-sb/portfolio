import Section from "./Section";
import Reveal from "./Reveal";
import Icon from "./Icons";
import { profile } from "../data/content";

export default function Contact() {
  const cards = [
    ["pin", "Address", profile.location, null],
    ["phone", "Phone", profile.phone, `tel:${profile.phoneRaw}`],
    ["mail", "Email", profile.email, `mailto:${profile.email}`],
    ["linkedin", "LinkedIn", "hridhikjalsb", profile.linkedin],
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Contact Me">
      <p className="mb-10 max-w-xl text-muted">
        Open to data analyst and AI-focused analytics roles. Reach out using any of the details below.
      </p>
      <Reveal type="stagger" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([icon, label, value, href]) => {
          const inner = (
            <>
              <span className="grad-bg mx-auto flex h-12 w-12 items-center justify-center rounded-full text-white"><Icon name={icon} className="h-5 w-5" /></span>
              <span className="mt-3 block text-sm text-muted">{label}</span>
              <span className="mt-1 block break-words font-medium">{value}</span>
            </>
          );
          return href ? (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
               className="grad-border lift rounded-xl p-5 text-center hover:text-accent">{inner}</a>
          ) : (
            <div key={label} className="grad-border lift rounded-xl p-5 text-center">{inner}</div>
          );
        })}
      </Reveal>
      <div className="mt-8 text-center">
        <a href={profile.resume} download className="btn-grad grad-bg inline-block rounded-md px-6 py-3 font-medium text-white">Download resume</a>
      </div>
    </Section>
  );
}
