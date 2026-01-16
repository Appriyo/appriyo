import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { teamData } from '../../data/teamData';

const MemberCard = ({ member }) => {
  const { name, role, expertise, background, philosophy, techStack, image, links } = member;
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className="flex flex-col p-8 bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 group shadow-sm hover:shadow-md">
      {/* Header: Identity & Socials */}
      <div className="flex items-start justify-between mb-8">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-14 h-14 rounded grayscale filter contrast-125 border border-slate-200" 
          />
        ) : (
          <div className="w-14 h-14 bg-slate-50 flex items-center justify-center text-slate-400 font-mono text-sm border border-slate-200 tracking-tighter">
            {initials}
          </div>
        )}
        <div className="flex gap-4 text-slate-300">
          {links.github && (
            <a href={links.github} className="hover:text-slate-900 transition-colors" aria-label="Github">
              <Github size={18} strokeWidth={1.5} />
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} className="hover:text-slate-900 transition-colors" aria-label="LinkedIn">
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>

      {/* Name & Role */}
      <div className="mb-6">
        <h4 className="text-xl font-bold text-slate-900 tracking-tight leading-none">{name}</h4>
        <p className="text-[11px] font-mono text-slate-500 uppercase tracking-[0.2em] mt-2.5">
          {role}
        </p>
      </div>

      {/* Experience Anchor */}
      <div className="relative pl-5 mb-8 border-l border-slate-100">
        <p className="text-[13px] text-slate-900 font-semibold mb-1">{expertise}</p>
        <p className="text-[13px] text-slate-500 leading-relaxed font-normal">{background}</p>
      </div>

      {/* Engineering Philosophy */}
      <div className="mb-10">
        <p className="text-[14px] leading-relaxed text-slate-600 font-serif italic border-l-2 border-slate-900 pl-4 py-1">
          “{philosophy}”
        </p>
      </div>

      {/* Technical Stack Footer */}
      <div className="mt-auto pt-6 border-t border-slate-50">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {techStack.map((tech) => (
            <span key={tech} className="text-[10px] font-mono font-medium text-slate-400 uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="py-32 bg-white selection:bg-slate-900 selection:text-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Section Header */}
        <header className="max-w-2xl mb-24">
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.4em] block mb-6">
            Core Collective
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Direct accountability through senior leadership.
          </h2>
          <div className="w-12 h-0.5 bg-slate-900 mb-8"></div>
          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            We are a small, focused collective of career engineers. We avoid the 
            traditional agency model of over-leveraging junior talent, ensuring 
            your systems are built by experts who prioritize long-term stability 
            over short-term speed.
          </p>
        </header>

        {/* Team Grid - Semantic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {teamData.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        {/* Professional Metadata Footer */}
        <footer className="mt-20 flex flex-col md:flex-row md:items-center justify-between gap-8 pt-10 border-t border-slate-100">
          <p className="text-[13px] text-slate-400 max-w-xl leading-relaxed font-mono uppercase tracking-tight">
            Commitment to engineering excellence: We maintain a 1:1 senior-to-project ratio to guarantee architectural integrity.
          </p>
          <div className="text-[11px] font-mono text-slate-900 font-bold uppercase tracking-widest">
            Appriyo / Systems Division / 2026
          </div>
        </footer>
      </div>
    </section>
  );
};

export default TeamSection;