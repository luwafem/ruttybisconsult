// src/components/TeamCard.jsx
import { Linkedin } from "lucide-react";

const TeamCard = ({ member }) => {
  return (
    <div className="group relative bg-white border border-stone-100 transition-all duration-500 hover:border-emerald-200">
      <div className="aspect-[3/4] overflow-hidden  transition-all duration-700">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-stone-900 tracking-tight">{member.name}</h3>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 mt-1">
            {member.position}
          </p>
        </div>
        
        <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
          {member.bio}
        </p>
        
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-emerald-600 transition-colors"
          >
            <Linkedin size={14} className="mr-2" /> LinkedIn Profile
          </a>
        )}
      </div>
      
      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-emerald-600 transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

export default TeamCard;