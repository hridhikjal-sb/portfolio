import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, alt, children }) {
  return (
    <section id={id} className={`scroll-mt-16 border-t border-line py-16 ${alt ? "bg-surface" : ""}`}>
      <div className="mx-auto max-w-5xl px-5">
        <Reveal type="fade">
          <div className="mb-12">
            <h2 className="head-shadow text-3xl font-extrabold sm:text-5xl">{title}</h2>
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
