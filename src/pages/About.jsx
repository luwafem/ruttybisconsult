import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config";
import { ArrowRight, Shield, Globe, Award } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-stone-900 font-sans antialiased">
      <Helmet>
        <title>The Firm | {siteConfig.companyName}</title>
        <meta name="description" content="Institutional governance and corporate advisory services in Nigeria." />
      </Helmet>

      {/* --- MINIMALIST HERO --- */}
      <section className="pt-40 pb-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.4em] text-emerald-600 uppercase mb-6 block">
              Firm Profile
            </span>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-stone-900 mb-10 leading-none">
              Institutional <br /> 
              <span className="font-semibold italic">Integrity.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* --- CORE NARRATIVE --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-20">
          
          {/* Left: The "Executive Statement" */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <p className="text-2xl font-light leading-relaxed text-stone-800 mb-8 italic border-l-2 border-emerald-500 pl-8">
                "We provide the regulatory framework that allows Nigeria's most ambitious enterprises to compete on a global scale."
              </p>
              <div className="w-16 h-[1px] bg-stone-300 mb-4"></div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                Strategic Mission Statement
              </p>
            </div>
          </div>

          {/* Right: Detailed History & Methodology */}
          <div className="lg:col-span-7">
            <div className="prose prose-stone max-w-none">
              <p className="text-lg text-stone-600 leading-relaxed font-light mb-8">
                {siteConfig.companyName} is a premier institutional compliance firm headquartered in Lagos. 
                We operate at the intersection of regulatory complexity and commercial agility, 
                serving as the statutory backbone for both emerging entrepreneurs and established conglomerates.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
                <div className="border-t border-stone-100 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-4 flex items-center gap-2">
                    <Shield size={14} className="text-emerald-600" /> Regulatory Mastery
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed font-light">
                    Deep expertise in CAC protocols, SCUML certifications, and federal trademarking frameworks.
                  </p>
                </div>
                <div className="border-t border-stone-100 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-4 flex items-center gap-2">
                    <Globe size={14} className="text-emerald-600" /> Global Standards
                  </h4>
                  <p className="text-sm text-stone-500 leading-relaxed font-light">
                    Implementing international compliance best practices tailored for the Nigerian jurisdiction.
                  </p>
                </div>
              </div>

              <p className="text-lg text-stone-600 leading-relaxed font-light mb-8">
                From pre-incorporation strategy to complex post-incorporation filings and export licensing, 
                our practice is built on a foundation of absolute accuracy and professional discretion. 
                We simplify the burden of compliance so our clients can focus exclusively on market expansion.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-12 pt-12 border-t border-stone-100">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-4 group"
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-900 group-hover:text-emerald-600 transition-colors">
                  Inquire for Engagement
                </span>
                <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-all">
                  <ArrowRight size={16} className="text-stone-400 group-hover:text-emerald-600" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES GRID --- */}
      <section className="py-24 bg-stone-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <h2 className="text-4xl font-light tracking-tight">Our Operational <br /><span className="font-semibold italic text-emerald-400">Tenets.</span></h2>
             <Award size={48} className="text-stone-800" />
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-stone-800 border border-stone-800">
            {[
              { title: "Precision", desc: "Technical accuracy in every filing and advisory brief." },
              { title: "Agility", desc: "Rapid response to shifting regulatory environments." },
              { title: "Governance", desc: "Commitment to ethical excellence and institutional trust." }
            ].map((tenet, i) => (
              <div key={i} className="bg-stone-950 p-12 hover:bg-stone-900 transition-colors duration-500">
                <span className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-6 block">0{i+1}</span>
                <h3 className="text-xl font-semibold mb-4">{tenet.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-light">{tenet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;