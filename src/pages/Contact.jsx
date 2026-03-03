import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Loader2 } from "lucide-react";

const Contact = () => {
  const [succeeded, setSucceeded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSucceeded(true);
        form.reset();
      } else {
        const json = await response.json();
        setError(json.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Network error – please verify your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-stone-900 font-sans antialiased min-h-screen">
      <Helmet>
        <title>Briefing & Inquiries | {siteConfig.companyName}</title>
        <meta name="description" content="Initiate a formal compliance consultation." />
      </Helmet>

      {/* --- MINIMAL HEADER --- */}
      <section className="pt-40 pb-20 bg-stone-50 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="text-xs font-bold tracking-[0.4em] text-emerald-600 uppercase mb-6 block">
            Engagement
          </span>
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-stone-900 leading-none">
            Initiate <br />
            <span className="font-semibold italic">Consultation.</span>
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-20">
          
          {/* Left: Contact Intelligence */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-10">Direct Channels</h3>
              
              <div className="space-y-12">
                <div className="group">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">WhatsApp Briefing</p>
                  <a 
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                    className="text-2xl font-light hover:text-emerald-600 transition-colors flex items-center gap-3"
                  >
                    {siteConfig.whatsapp} <ArrowRight size={20} className="text-stone-300 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>

                <div className="group">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">Electronic Mail</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-2xl font-light hover:text-emerald-600 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>

                <div className="pt-10 border-t border-stone-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-6">Headquarters</p>
                  <div className="flex gap-4">
                    <MapPin size={20} className="text-emerald-600 shrink-0" />
                    <p className="text-sm leading-relaxed text-stone-600 font-light">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Formal Briefing Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 border border-stone-100 p-8 md:p-16">
              {succeeded ? (
                <div className="py-20 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="-rotate-45" size={32} />
                  </div>
                  <h2 className="text-3xl font-light mb-4 text-stone-900">Brief Received.</h2>
                  <p className="text-stone-500 font-light mb-10">A senior consultant will review your inquiry and respond within 24 business hours.</p>
                  <button
                    onClick={() => setSucceeded(false)}
                    className="text-xs font-bold uppercase tracking-widest border-b border-stone-900 pb-2 hover:text-emerald-600 hover:border-emerald-600 transition-all"
                  >
                    Send Additional Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-emerald-600 transition-colors">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors font-light text-lg"
                        placeholder="e.g. Aliko Dangote"
                      />
                    </div>
                    <div className="relative group">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-emerald-600 transition-colors">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors font-light text-lg"
                        placeholder="name@enterprise.com"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-emerald-600 transition-colors">Inquiry Type</label>
                    <select 
                      name="subject" 
                      className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors font-light text-lg appearance-none cursor-pointer"
                    >
                      <option>Corporate Registration</option>
                      <option>Taxation & Regulatory</option>
                      <option>Statutory Post-Incorporation</option>
                      <option>Other Advisory</option>
                    </select>
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-focus-within:text-emerald-600 transition-colors">The Brief</label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      className="w-full bg-transparent border-b border-stone-200 py-4 focus:outline-none focus:border-stone-900 transition-colors font-light text-lg resize-none"
                      placeholder="Describe your regulatory requirements..."
                    ></textarea>
                  </div>

                  {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{error}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-stone-900 text-white py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all duration-500 flex items-center justify-center gap-4 group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <>Submit Brief <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;