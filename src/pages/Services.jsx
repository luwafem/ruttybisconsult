import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config";
import ServiceCard from "../components/ServiceCard";
// Fixed the import path and removed unused Briefcase icon
import { Briefcase } from "lucide-react"; 

const Services = () => {
  return (
    <div className="bg-white text-stone-900 font-sans antialiased min-h-screen">
      <Helmet>
        <title>Practice Areas | {siteConfig.companyName}</title>
        <meta name="description" content="Explore our comprehensive institutional compliance services including CAC, TIN, SCUML, and export licensing." />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <section className="pt-40 pb-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold tracking-[0.4em] text-emerald-600 uppercase mb-6 block">
                Expertise & Capabilities
              </span>
              <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-stone-900 leading-none">
                Practice <br />
                <span className="font-semibold italic">Areas.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-stone-500 font-light leading-relaxed border-l border-emerald-500/30 pl-6 mb-2">
                Providing specialized regulatory intelligence and statutory maintenance for enterprises operating within the Nigerian landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES MASTER GRID --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone-100">
            {siteConfig.services.map((service) => (
              <div 
                key={service.id} 
                className="border-r border-b border-stone-100 transition-colors duration-500 hover:bg-stone-50"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADVISORY FOOTER CALLOUT --- */}
      <section className="py-20 bg-stone-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-light tracking-tight mb-4">
              Require a <span className="font-semibold italic text-emerald-400">customized</span> compliance framework?
            </h2>
            <p className="text-stone-400 font-light text-sm">
              Our partners are available for bespoke technical briefings tailored to your specific industry vertical.
            </p>
          </div>
          <a 
            href="/contact" 
            className="px-10 py-5 bg-white text-stone-950 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-emerald-500 hover:text-white transition-all duration-500 shrink-0"
          >
            Request Briefing
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;