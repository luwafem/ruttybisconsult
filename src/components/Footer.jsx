import { siteConfig } from "../config";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  return (
    <footer className="bg-stone-950 text-stone-400 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Identity Section */}
          <div className="md:col-span-5">
            <Link to="/" className="text-2xl font-bold tracking-[0.2em] text-white uppercase mb-8 block">
              {siteConfig.shortName}
            </Link>
            <p className="text-sm leading-relaxed font-light max-w-sm mb-10">
              {siteConfig.description} Strategic advisory and regulatory excellence for the Nigerian corporate landscape.
            </p>
            <div className="flex space-x-6">
              {Object.entries(siteConfig.social).map(([key, url]) => {
                const Icon = socialIcons[key];
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-500 hover:text-emerald-500 transition-colors duration-300"
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-emerald-600 pl-4">
              Practice Areas
            </h4>
            <ul className="space-y-4">
              {siteConfig.services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="text-xs uppercase tracking-widest hover:text-white transition-colors duration-300">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-emerald-600 pl-4">
              Global Headquarters
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-emerald-500 mt-1 shrink-0" />
                <p className="text-xs uppercase tracking-widest leading-loose">
                  {siteConfig.address}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={16} className="text-emerald-500 shrink-0" />
                <p className="text-xs uppercase tracking-widest">{siteConfig.email}</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={16} className="text-emerald-500 shrink-0" />
                <p className="text-xs uppercase tracking-widest">{siteConfig.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 order-2 md:order-1">
            <Link to="/privacy" className="text-[10px] uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-[10px] uppercase tracking-widest hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="text-[10px] uppercase tracking-widest hover:text-white transition-colors">Regulatory Disclaimer</Link>
          </div>
          
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium order-1 md:order-2">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}<span className="text-emerald-500 italic">. All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;