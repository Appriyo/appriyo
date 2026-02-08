import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { teamData } from '../../data/teamData';

const MemberCard = ({ member }) => {
  const { name, role, expertise, background, philosophy, techStack, image, links } = member;
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className="flex flex-col p-8 bg-white border border-slate-200 hover:border-slate-300 transition-shadow shadow-sm hover:shadow-md">
      <div className="flex items-start justify-between mb-8">
        {image ? (
          <img src={image} alt={name} className="w-14 h-14 rounded grayscale border border-slate-200" />
        ) : (
          <div className="w-14 h-14 bg-slate-50 flex items-center justify-center text-slate-500 font-mono text-sm border border-slate-200">
            {initials}
          </div>
        )}
        <div className="flex gap-4 text-slate-300">
          {links.github && <a href={links.github}><Github size={18} /></a>}
          {links.linkedin && <a href={links.linkedin}><Linkedin size={18} /></a>}
        </div>
      </div>

      <h4 className="text-xl font-bold mb-1">{name}</h4>
      <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-6">{role}</p>

      <p className="text-sm font-semibold mb-1">{expertise}</p>
      <p className="text-sm text-slate-600 mb-8">{background}</p>

      <blockquote className="italic text-slate-600 border-l-2 border-slate-900 pl-4 mb-10">
        “{philosophy}”
      </blockquote>

      <div className="mt-auto pt-6 border-t border-slate-100 flex flex-wrap gap-3">
        {techStack.map(t => (
          <span key={t} className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const TeamSection = () => (
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-8">

      <header className="max-w-2xl mb-24">
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-slate-400 mb-6 block">
          Core Team
        </span>
        <h2 className="text-4xl font-bold mb-8 leading-tight">
          The people who actually build your software
        </h2>
        <p className="text-lg text-slate-600">
          We are a small, focused engineering team. You work directly with the people
          designing, building, and maintaining your system — no layers, no delegation.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
        {teamData.map((m, i) => <MemberCard key={i} member={m} />)}
      </div>

      <footer className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between gap-6">
        <p className="text-[13px] font-mono uppercase text-slate-400 max-w-xl">
          Small team. Direct communication. Long-term responsibility.
        </p>
        <span className="text-[11px] font-mono uppercase tracking-widest font-bold">
          Appriyo · 2026
        </span>
      </footer>

    </div>
  </section>
);

export default TeamSection;
