import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-10">
      {/* Background gradient UNDER content */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 opacity-90 z-0" />

      <div className="relative z-10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 text-white">
          {/* Black circular brand badge */}
          <div className="bg-black rounded-full w-12 h-12 inline-flex items-center justify-center shadow-lg">
            <a href="#" className="font-bold text-3xl tracking-tight text-white">
              CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden inline-flex items-center gap-2 border border-white/30 rounded-md px-3 py-2 text-sm"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>

          {/* Desktop menu */}
          <ul className="hidden sm:flex gap-6 text-sm">
            <li><a href="#about" className="hover:opacity-90">About</a></li>
            <li><a href="#experience" className="hover:opacity-90">Experience</a></li>
            <li><a href="#education" className="hover:opacity-90">Education</a></li>
            <li><a href="#projects" className="hover:opacity-90">Projects</a></li>
            <li><a href="#skills" className="hover:opacity-90">Skills</a></li>
            <li><a href="#contact" className="hover:opacity-90">Contact</a></li>
          </ul>
        </nav>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="text-5xl font-extrabold leading-tight tracking-tight">
                Hello! I’m{" "}
                <span className="underline decoration-white/60">Chaitanya Vidudhala</span>
              </div>
              <p className="mt-4 text-lg max-w-2xl">
                Full Stack Developer (4+ yrs) in Birmingham, AL. I build scalable backends, crisp
                frontends, and smooth cloud deployments that perform under load and drive business impact.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-md bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:shadow-md"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md ring-1 ring-white/60 px-4 py-2 text-sm font-semibold hover:bg-white/10"
                >
                  Contact Me
                </a>
                <a
                  href="mailto:vidudhala.chaitu@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Chaitanya,"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700 transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="md:col-span-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-sm uppercase tracking-widest opacity-80">Quick Info</div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>📍 Birmingham, AL</li>
                  <li>💼 Full Stack Developer</li>
                  <li>☁️ Java • Spring Boot • React • AWS</li>
                  <li>🛠️ CI/CD • Docker • Kafka • Spark</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile menu */}
        {open && (
          <ul
            id="mobile-menu"
            className="sm:hidden flex flex-col gap-2 bg-white/95 text-slate-900 absolute right-4 top-16 rounded-md p-4 shadow-lg"
          >
            <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
            <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
            <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        )}
      </div>
    </header>
  );
}