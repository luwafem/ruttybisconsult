// src/components/FAQ.jsx
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../config";

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <div className="border-b border-stone-200 group transition-all duration-300">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center py-8 text-left focus:outline-none group"
      >
        <span className={`text-xl tracking-tight transition-colors duration-300 ${
          isOpen ? 'text-emerald-700 font-semibold' : 'text-stone-800 font-light group-hover:text-stone-950'
        }`}>
          {faq.question}
        </span>
        <div className={`flex items-center justify-center w-10 h-10 border transition-all duration-500 ${
          isOpen ? 'bg-stone-900 border-stone-900 rotate-0' : 'bg-transparent border-stone-200 rotate-90 group-hover:border-stone-400'
        }`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-stone-500 group-hover:text-stone-900" />
          )}
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 pb-10' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-2xl text-stone-600 leading-relaxed font-light text-lg border-l-2 border-emerald-500/30 pl-6">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-20">
        {/* Left Side: Editorial Heading */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase mb-4 block">
              Information Archive
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 mb-8 leading-[1.1]">
              Regulatory <br />
              <span className="font-semibold italic text-stone-400">Knowledge Base.</span>
            </h2>
            <p className="text-stone-500 font-light leading-relaxed mb-10 max-w-sm">
              In-depth responses to critical inquiries regarding Nigerian corporate governance and statutory frameworks.
            </p>
            <div className="w-16 h-1 bg-stone-900" />
          </div>
        </div>

        {/* Right Side: Accordion List */}
        <div className="lg:col-span-8">
          <div className="border-t border-stone-900">
            {faqs.map((faq) => (
              <FAQItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openId === faq.id} 
                toggle={() => toggleFaq(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;