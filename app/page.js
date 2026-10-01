import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { profile } from "../data/content";

const nav = ["Home", "About", "Resume", "Projects", "Contact"];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 text-sm">
          <a href="#home" className="font-display font-semibold"><span className="grad-text">{profile.name}</span></a>
          <ul className="flex gap-4 overflow-x-auto text-muted sm:gap-6">
            {nav.map((s) => (
              <li key={s}><a className="hover:text-ink" href={`#${s.toLowerCase()}`}>{s}</a></li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-line bg-surface py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
