import { useEffect } from "react"; // 1. Added useEffect
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config";
import Icon from "../components/Icon";
import { ArrowRight, ChevronLeft } from "lucide-react";

const ServiceDetail = () => {
  const { id } = useParams();

  // 2. Scroll to top whenever the ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const service = siteConfig.services.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const whatsappNumber = siteConfig.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(`Inquiry regarding technical advisory: ${service.title}.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="bg-white text-stone-900 font-sans antialiased min-h-screen">
      <Helmet>
        <title>{service.title} | {siteConfig.companyName}</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      {/* --- MINIMAL HEADER --- */}
      <section className="pt-32 pb-16 bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 hover:text-emerald-600 transition-colors mb-12 group">
            <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to Practice Areas
          </Link>
          
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              
              <h1 className="text-5xl md:text-7xl font-light tracking-tight text-stone-900 leading-tight">
                {service.title.split(' ').map((word, i) => i === 0 ? word : <span key={i}> {word}</span>)}
                
              </h1>
            </div>
            <div className="lg:col-span-4 pb-2">
               <p className="text-stone-500 font-light leading-relaxed border-l border-emerald-500/30 pl-6 italic">
                 Official briefing on regulatory standards and institutional compliance frameworks.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">
          
          {/* Left Side: Technical Image & Meta */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="aspect-[4/5] bg-stone-100 overflow-hidden mb-8 border border-stone-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover contrast-125 mix-blend-multiply opacity-90"
                />
              </div>
              <div className="bg-stone-900 p-8 text-white">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-emerald-400">Consultation Status</h4>
                <p className="text-sm font-light text-stone-300 leading-relaxed mb-6">
                  Our senior partners are currently accepting briefs for {service.title} within the West African jurisdiction.
                </p>
                <a href={whatsappUrl} className="flex items-center justify-between group">
                   <span className="text-xs font-bold uppercase tracking-widest">Initiate Briefing</span>
                   <ArrowRight size={16} className="transition-transform group-hover:translate-x-2 text-emerald-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600 mb-10">Service Overview</h3>
              <div className="prose prose-stone max-w-none">
                <p className="text-xl text-stone-800 leading-relaxed mb-12 font-light">
                  {service.shortDescription}
                </p>
                <div className="h-[1px] w-20 bg-emerald-600 mb-12"></div>
                <p className="text-stone-600 leading-relaxed whitespace-pre-line text-lg font-light">
                  {service.fullDescription}
                </p>
              </div>

              {/* Call to Action Grid */}
              <div className="mt-20 grid sm:grid-cols-2 gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-stone-900 text-white px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all duration-300 shadow-2xl shadow-stone-200"
                >
                  WhatsApp Consultation
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center border border-stone-200 text-stone-900 px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-stone-50 transition-all duration-300"
                >
                  Formal Inquiry Form
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;