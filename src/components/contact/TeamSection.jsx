import React from 'react';

// Reusable Individual Member Card
const MemberCard = ({ name, role, bio, image, skills }) => (
  <div className="flex flex-col p-6 bg-base-100 border border-base-300 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <div className="avatar">
        <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={image || "https://api.dicebear.com/7.x/avataaars/svg?seed=" + name} alt={name} />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-base-content leading-tight">{name}</h4>
        <p className="text-sm text-primary font-medium">{role}</p>
      </div>
    </div>
    
    <p className="text-base-content/70 text-sm leading-relaxed mb-4">
      {bio}
    </p>

    <div className="mt-auto flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span key={index} className="badge badge-ghost badge-sm py-3 px-3 text-xs opacity-70">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const TeamSection = () => {
  const teamData = [
    {
      name: "Sabbir Rahman",
      role: "Lead Engineer",
      bio: "Focuses on high-performance backend architecture and system security.",
      skills: ["Node.js", "AWS", "Docker"],
      image: "" 
    },
    {
      name: "Anika Tasnim",
      role: "UI/UX Specialist",
      bio: "Ensures Appriyo products are not just functional, but beautiful and intuitive.",
      skills: ["Figma", "React", "Tailwind"],
      image: ""
    },
    {
      name: "Tanvir Ahmed",
      role: "Full Stack Developer",
      bio: "The bridge between frontend logic and complex database structures.",
      skills: ["Next.js", "PostgreSQL", "Prisma"],
      image: ""
    },
    {
      name: "Rifat Hasan",
      role: "Project Manager",
      bio: "Your primary point of contact for project timelines and strategy.",
      skills: ["Agile", "Scrum", "Strategy"],
      image: ""
    }
  ];

  return (
    <div className="mt-20 border-t border-base-300 pt-16">
      <div className="text-center mb-12">
        <h3 className="text-2xl lg:text-3xl font-bold text-base-content mb-4">
          The Experts Behind Appriyo
        </h3>
        <p className="text-base-content/60 max-w-2xl mx-auto">
          We are a core team of 4 dedicated specialists working together to build your digital future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamData.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
      
      {/* Scalability Note */}
      <div className="mt-12 p-6 bg-primary/5 rounded-box text-center border border-primary/10">
        <p className="text-sm text-base-content/70 italic">
          "Our team combines technical rigor with business strategy to ensure your project's success."
        </p>
      </div>
    </div>
  );
};

export default TeamSection;