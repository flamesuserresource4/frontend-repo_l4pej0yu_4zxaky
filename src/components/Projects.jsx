import React from 'react';
import { ExternalLink, Shield, Server, Globe } from 'lucide-react';

const projects = [
  {
    title: 'VulnLab Scanner',
    description:
      'A lightweight CLI + dashboard that automates recon, directories fuzzing, and simple web vulnerability checks.',
    tags: ['Node', 'Express', 'React', 'Nmap', 'OWASP'],
    icon: <Shield size={18} className="text-emerald-400" />,
    link: '#',
  },
  {
    title: 'Network Topology Visualizer',
    description:
      'Parses traceroute outputs and renders an interactive graph to understand routes and latencies across the network.',
    tags: ['Python', 'Flask', 'D3.js', 'ICMP'],
    icon: <Server size={18} className="text-cyan-400" />,
    link: '#',
  },
  {
    title: 'Secure Notes App',
    description:
      'End-to-end encrypted notes with per-note sharing, built to practice secure authentication and crypto basics.',
    tags: ['React', 'Node', 'JWT', 'Crypto'],
    icon: <Globe size={18} className="text-blue-400" />,
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Hands-on builds that combine security, networking, and modern web dev practices.
            </p>
          </div>
          <a
            href="#home"
            className="hidden rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200 backdrop-blur transition hover:bg-slate-800/70 md:block"
          >
            Back to top
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-slate-300">
                {p.icon}
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-200">{t}</span>
                ))}
              </div>
              <a
                href={p.link}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition group-hover:translate-x-0.5"
              >
                View details <ExternalLink size={16} />
              </a>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
