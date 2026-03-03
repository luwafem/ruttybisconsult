import { siteConfig } from "../config";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent("Inquiry: Institutional Advisory Services.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-8 right-8 z-[60] group">
      {/* Tooltip Label */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        <div className="bg-stone-900 text-white text-[10px] font-bold uppercase tracking-[0.3em] py-2 px-4 whitespace-nowrap border-l-2 border-emerald-500">
          Direct Briefing
        </div>
      </div>

      {/* Button Body */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-stone-950 text-white shadow-2xl hover:bg-emerald-600 transition-all duration-500 relative overflow-hidden group-hover:-translate-y-1"
        aria-label="Direct Consultation via WhatsApp"
      >
        {/* Subtle decorative background slash */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        
        <MessageSquare 
          size={20} 
          strokeWidth={1.5} 
          className="relative z-10 transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Border Pulse Effect */}
        <div className="absolute inset-0 border border-white/10 group-hover:border-emerald-400/50 transition-colors duration-500" />
      </a>
    </div>
  );
};

export default WhatsAppButton;