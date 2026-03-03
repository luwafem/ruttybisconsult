import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../config";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Practice Areas" },
    { to: "/about", label: "The Firm" },
    { to: "/contact", label: "Briefing" },
  ];

  // Determine if we are on the home page (where we want transparency)
  const isHome = location.pathname === "/";

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-4 border-stone-200 shadow-sm" 
          : isHome 
            ? "bg-transparent py-6 border-transparent" 
            : "bg-white py-6 border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`text-xl font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                !scrolled && isHome ? "text-white" : "text-stone-900"
              }`}
            >
              {siteConfig.shortName}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300
                  ${!scrolled && isHome ? "text-stone-300 hover:text-white" : "text-stone-500 hover:text-stone-900"}
                  ${isActive ? "!text-emerald-600" : ""}
                  relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-emerald-600 after:transition-all hover:after:w-full
                `}
              >
                {link.label}
              </NavLink>
            ))}
            
            {/* CTA Button in Nav */}
            <a 
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                !scrolled && isHome 
                ? "border-white/30 text-white hover:bg-white hover:text-stone-900" 
                : "border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white"
              }`}
            >
              Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={!scrolled && isHome ? "text-white" : "text-stone-900"}
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 top-[72px] bg-stone-950 z-40 transition-transform duration-500 md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          <div className="flex flex-col p-10 space-y-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-light tracking-tight text-stone-400 hover:text-white transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-10 border-t border-stone-800">
              <p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Contact Briefing</p>
              <p className="text-white font-medium">{siteConfig.whatsapp}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;