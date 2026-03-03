import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { siteConfig, faqs, team } from "../config";
import ServiceCard from "../components/ServiceCard";
import TeamCard from "../components/TeamCard";
import Testimonials from "../components/Testimonials";
import { ArrowRight, ChevronDown } from "lucide-react"; // Added ChevronDown

const Home = () => {
  const featuredServices = siteConfig.services.slice(0, 3);
  const featuredTeam = team.slice(0, 3);
  const featuredFaqs = faqs.slice(0, 3);
  const whatsappLink = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;

  return (
    <div className="bg-white text-stone-900 font-sans antialiased">
      <Helmet>
        <title>{siteConfig.companyName} | Corporate Compliance & Advisory</title>
      </Helmet>

      {/* --- FULL SCREEN IMMERSIVE HERO --- */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-stone-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={siteConfig.hero.image} 
            alt={`${siteConfig.companyName} Headquarters`} 
            className="w-full h-full object-cover  opacity-40 contrast-125"
            />
          {/* Gradient mask for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20"> {/* pt-20 accounts for fixed navbar */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-bold tracking-[0.4em] text-emerald-400 uppercase">
                Institutional Excellence
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white mb-8 leading-[1.05]">
              Strategic Compliance <br />
              for <span className="font-semibold italic">Global Ambitions.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-300 mb-12 max-w-2xl leading-relaxed border-l border-emerald-500/50 pl-6 font-light">
              {siteConfig.description} We provide the regulatory framework for Nigeria's most influential enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/services" className="px-12 py-6 bg-emerald-600 text-white font-bold uppercase tracking-widest text-xs hover:bg-emerald-500 transition-all flex items-center justify-center gap-3">
                Our Practice Areas <ArrowRight size={16} />
              </Link>
              <a href={whatsappLink} className="px-12 py-6 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-stone-900 transition-all text-center">
                Schedule Briefing
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-bounce opacity-50">
           <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Scroll</span>
           <ChevronDown size={20} className="text-emerald-500" />
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-stone-950/40 backdrop-blur-md border-t border-white/5 py-8 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex gap-16">
              <div>
                <p className="text-white font-light text-2xl tracking-tight">100%</p>
                <p className="text-stone-500 text-[10px] uppercase tracking-tighter font-bold">Statutory Success</p>
              </div>
              <div>
                <p className="text-white font-light text-2xl tracking-tight">500+</p>
                <p className="text-stone-500 text-[10px] uppercase tracking-tighter font-bold">Enterprises Managed</p>
              </div>
            </div>
            <p className="text-stone-600 text-[10px] uppercase tracking-[0.3em] font-bold">Trusted Regulatory Advisory</p>
          </div>
        </div>
      </section>

      {/* --- SUBSEQUENT SECTIONS (PRACTICE AREAS, TEAM, ETC) --- */}
      {/* ... keeping the rest of your sections as they were ... */}
      
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-light tracking-tight text-stone-900 mb-4">Core Practice Areas</h2>
              <div className="w-20 h-1 bg-emerald-600"></div>
            </div>
            <p className="text-stone-500 max-w-sm text-sm font-light">
              Professional B2B advisory across incorporation, taxation, and statutory maintenance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-stone-100">
            {featuredServices.map((service) => (
              <div key={service.id} className="border-r border-stone-100">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase mb-4 block">Our People</span>
            <h2 className="text-4xl font-light tracking-tight text-stone-900">Partner-Led Governance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link to="/team" className="text-xs font-bold uppercase tracking-widest text-stone-900 hover:text-emerald-600 transition-colors border-b border-stone-300 pb-2">
              View Entire Leadership <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-stone-950 py-12">
         <Testimonials darkVariant={true} />
      </div>

      <section className="py-32 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-light tracking-tight mb-8 leading-tight">Regulatory Intelligence <br /><span className="font-semibold">Briefings</span></h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-10 font-light">
              Technical guidance on business formation and ongoing statutory obligations within the Nigerian jurisdiction.
            </p>
            <Link to="/faq" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-emerald-600 pb-2 hover:text-emerald-700 transition-colors">
              Access Knowledge Base <ArrowRight size={14} />
            </Link>
          </div>
          <div className="lg:col-span-8">
            {featuredFaqs.map((faq) => (
              <details key={faq.id} className="group border-b border-stone-100 last:border-0">
                <summary className="flex items-center justify-between py-10 cursor-pointer list-none">
                  <span className="text-xl font-medium text-stone-800 group-hover:text-emerald-700 transition-colors">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
                    <span className="text-2xl font-light leading-none">+</span>
                  </div>
                </summary>
                <div className="pb-10 text-stone-600 leading-relaxed max-w-2xl text-base font-light">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-32 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-white">
            Ensure your enterprise is <br />
            <span className="font-semibold italic text-emerald-400">statutory ready.</span>
          </h2>
          <a href={whatsappLink} className="inline-block px-16 py-6 bg-white text-stone-950 uppercase tracking-[0.3em] text-xs font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-2xl">
            Initiate Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;