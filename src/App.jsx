import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Simple sticky header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-slate-200">
            cse.security
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#projects">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="border-t border-slate-800/80 bg-slate-950 py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Built with curiosity and secure coding principles.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
