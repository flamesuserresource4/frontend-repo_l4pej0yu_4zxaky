import React from 'react';
import { ShieldCheck, Bug, Server, Wifi, Globe, Code } from 'lucide-react';

const SectionTag = ({ children }) => (
  <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-200">
    {children}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Focus</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          A mix of security analysis, network fundamentals, and full‑stack web development.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <div className="mb-3 inline-flex rounded-lg bg-emerald-500/10 p-2">
              <ShieldCheck className="text-emerald-400" size={22} />
            </div>
            <h3 className="text-lg font-semibold">Pentesting</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Recon","Auth bypass","XSS","SQLi","CSRF","IDOR"].map((s) => (
                <SectionTag key={s}>{s}</SectionTag>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2">
              <Wifi className="text-cyan-400" size={22} />
            </div>
            <h3 className="text-lg font-semibold">Networking</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["TCP/IP","Subnetting","DNS","HTTP","TLS","Linux services"].map((s) => (
                <SectionTag key={s}>{s}</SectionTag>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <div className="mb-3 inline-flex rounded-lg bg-blue-500/10 p-2">
              <Code className="text-blue-400" size={22} />
            </div>
            <h3 className="text-lg font-semibold">Development</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {["React","Node","Express","MongoDB","REST","Tailwind"].map((s) => (
                <SectionTag key={s}>{s}</SectionTag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
