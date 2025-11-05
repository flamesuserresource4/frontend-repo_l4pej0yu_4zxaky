import React from 'react';
import { Shield, Server, Wifi, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            I'm a Computer Science and Engineering student focused on security-minded development. I love exploring web vulnerabilities,
            understanding network protocols, and building practical projects that blend both worlds.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <div className="mb-3 inline-flex rounded-lg bg-emerald-500/10 p-2">
              <Shield className="text-emerald-400" size={22} />
            </div>
            <h3 className="text-lg font-semibold">Web Application Security</h3>
            <p className="mt-2 text-sm text-slate-300">
              From OWASP Top 10 to practical bug hunting, I enjoy testing, reporting, and fixing vulnerabilities.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2">
              <Server className="text-cyan-400" size={22} />
            </div>
            <h3 className="text-lg font-semibold">Networking Foundations</h3>
            <p className="mt-2 text-sm text-slate-300">
              Comfortable with TCP/IP, subnetting, routing basics, and securing services on Linux.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
            <div className="mb-3 inline-flex rounded-lg bg-blue-500/10 p-2">
              <Terminal className="text-blue-400" size={22} />
            </div>
            <h3 className="text-lg font-semibold">Builder Mindset</h3>
            <p className="mt-2 text-sm text-slate-300">
              I prototype tools, dashboards, and small web apps to practice secure coding and automation.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Tech Snapshot</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {["JavaScript","React","Node.js","Python","Linux","Bash","Git","Docker","Nmap","Burp Suite","OWASP","Wireshark"].map((item) => (
              <span key={item} className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-200">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
