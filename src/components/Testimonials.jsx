// src/components/Testimonials.jsx
import { testimonials } from "../config";
import { Quote } from "lucide-react";

const Testimonials = ({ darkVariant = true }) => {
  return (
    <section className={`py-32 ${darkVariant ? 'bg-stone-950 text-white' : 'bg-white text-stone-900'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className={`text-xs font-bold tracking-[0.3em] uppercase mb-4 block ${darkVariant ? 'text-emerald-400' : 'text-emerald-600'}`}>
              Client Perspectives
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Institutional Trust & <br /> 
              <span className="font-semibold italic text-stone-400">Proven Outcomes.</span>
            </h2>
          </div>
          <div className={`hidden md:block w-32 h-[1px] mb-4 ${darkVariant ? 'bg-stone-800' : 'bg-stone-200'}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-stone-800/50">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`p-10 border-b border-stone-800/50 lg:border-b-0 group hover:bg-stone-900/40 transition-all duration-500 
                ${idx !== testimonials.length - 1 ? 'lg:border-r' : ''}`}
            >
             
              
              <blockquote className="mb-10">
                <p className={`text-lg leading-relaxed font-light italic ${darkVariant ? 'text-stone-300' : 'text-stone-600'}`}>
                  "{t.content}"
                </p>
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                {t.image && (
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12  filter  transition-all duration-700 object-cover border border-stone-800"
                      loading="lazy"
                    />
                  </div>
                )}
                <div>
                  <h3 className={`font-bold text-sm tracking-wide uppercase ${darkVariant ? 'text-white' : 'text-stone-900'}`}>
                    {t.name}
                  </h3>
                  <p className={`text-[10px] font-bold tracking-widest uppercase mt-1 ${darkVariant ? 'text-emerald-400/80' : 'text-emerald-600'}`}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;