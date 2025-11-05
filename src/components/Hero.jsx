import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Shield, Server, Bug } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_80%,rgba(16,185,129,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-slate-100">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 backdrop-blur">
          <Bug size={16} className="text-emerald-400" />
          <span className="text-xs font-medium tracking-wide text-slate-300">Web Pentesting • Networking • CSE Student</span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hey, I'm <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">a CSE Student</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          I explore how systems break and how to build them stronger. Passionate about web application security, network fundamentals, and modern web development.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:brightness-110"
          >
            <Shield size={18} className="transition-transform group-hover:-translate-y-0.5" />
            View Projects
          </a>
          <a
            href="mailto:youremail@example.com"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:bg-slate-800/70"
          >
            <Mail size={18} /> Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-300 transition hover:text-white"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-300 transition hover:text-white"
          >
            <Linkedin size={20} />
          </a>
          <div className="ml-2 hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-300/90 md:flex">
            <Server size={14} className="text-emerald-400" />
            always learning, always building
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
