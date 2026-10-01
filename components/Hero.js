import { profile, skills } from "../data/content";
import Icon from "./Icons";
import DataGraphic from "./DataGraphic";
import Reveal from "./Reveal";
import HeroPhoto from "./HeroPhoto";

const iconBtn = "flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface transition hover:border-accent hover:text-accent";

export default function Hero() {
  return (
    <section id="home" className="relative scroll-mt-16 overflow-hidden">
      <div className="orb -left-24 top-0 h-72 w-72" style={{ background: "var(--pale)" }} />
      <div className="orb right-0 top-40 h-72 w-72" style={{ background: "#dbeafe", animationDelay: "-6s" }} />
      <div className="relative mx-auto max-w-5xl px-5">
        <div className="grid items-center gap-8 py-12 md:grid-cols-12 md:py-20">
          <div className="md:order-2 md:col-span-5">
            <HeroPhoto src="/profile.webp" alt="Portrait of Hridhikjal S B" />
          </div>
          <div className="md:order-1 md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
              <span className="pulse h-2 w-2 rounded-full bg-emerald" /> Open to data analyst roles
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl">
              I&apos;m <span className="grad-text">{profile.name}</span>
            </h1>
            <h2 className="mt-3 text-2xl font-medium sm:text-3xl">A Data Analyst</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{profile.positioning}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.resume} download className="btn-grad grad-bg rounded-md px-5 py-2.5 font-medium text-white">Download resume</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className={iconBtn}><Icon name="linkedin" /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" title="Email" className={iconBtn}><Icon name="mail" /></a>
              <a href={`tel:${profile.phoneRaw}`} aria-label="Phone" title="Phone" className={iconBtn}><Icon name="phone" /></a>
            </div>
          </div>
        </div>

        <div className="relative mb-16 grid gap-8 rounded-2xl border border-line bg-surface p-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-display text-lg font-semibold">Skills</p>
            <Reveal type="stagger" className="mt-3 space-y-4">
              {skills.map((g) => (
                <div key={g.group}>
                  <p className="text-sm font-medium">{g.group}</p>
                  <ul className="mt-2 flex flex-wrap gap-2 text-sm">
                    {g.items.map((t) => (
                      <li key={t} className="rounded-full border border-line bg-pale px-3 py-1 text-accent">{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>
          </div>
          <DataGraphic />
        </div>
      </div>
    </section>
  );
}
