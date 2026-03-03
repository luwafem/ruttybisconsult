// src/config.js

export const siteConfig = {
  companyName: "RuttyBis Consult Limited",
  shortName: "RuttyBis",
  tagline: "Your Partner in Business Compliance",
  description:
    "We provide the regulatory framework for Nigeria's most influential enterprises, ensuring seamless compliance across all statutory requirements.",
  
  // --- INTEGRATED HERO CONFIG ---
  hero: {
    title: "Strategic Compliance",
    subtitle: "Global Ambitions",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", 
    stats: [
      { label: "Statutory Success", value: "100%" },
      { label: "Enterprises Managed", value: "500+" },
      { label: "Regulatory Speed", value: "2x" }
    ]
  },

  // --- CONTACT CHANNELS ---
  phone: "+2348000000000",
  whatsapp: "+2348000000000", 
  email: "info@ruttybisconsult.ng",
  address: "Lagos, Nigeria",
  formspreeEndpoint: "https://formspree.io/f/your-form-id", 

  // --- SOCIAL ASSETS ---
  social: {
    facebook: "https://facebook.com/yourpage",
    twitter: "https://twitter.com/yourpage",
    linkedin: "https://linkedin.com/company/yourpage",
    instagram: "https://instagram.com/yourpage",
  },

  // --- PRACTICE AREAS (SERVICES) ---
  services: [
    {
      id: "cac-registration",
      title: "CAC Registration",
      shortDescription: "Seamless registration with the Corporate Affairs Commission.",
      fullDescription: "We provide end to end assistance for business registration with CAC, including business name, incorporated trustees, and limited liability companies.",
      icon: "Building2",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", 
    },
    {
      id: "tin-registration",
      title: "Tax Identification Number",
      shortDescription: "Efficient TIN acquisition via FIRS protocols.",
      fullDescription: "We handle the entire TIN application process with the Federal Inland Revenue Service (FIRS), ensuring prompt delivery and zero administrative delays.",
      icon: "FileText",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
    },
    {
      id: "scuml-registration",
      title: "SCUML Registration",
      shortDescription: "Anti money laundering compliance for non-financial entities.",
      fullDescription: "Professional guidance through the Special Control Unit against Money Laundering (SCUML) registration and reporting frameworks.",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "trademark",
      title: "Trademark Protection",
      shortDescription: "Institutional safeguarding of brand intellectual property.",
      fullDescription: "Search, filing, and registration services with the Nigerian Trademarks Registry to protect your commercial identity.",
      icon: "Award",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "export-license",
      title: "Export Licensing",
      shortDescription: "Expanding domestic enterprises to global markets.",
      fullDescription: "Facilitating NEPC requirements to obtain export permits and navigate international trade incentives.",
      icon: "Globe",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "post-incorporation",
      title: "Statutory Maintenance",
      shortDescription: "Comprehensive post incorporation governance.",
      fullDescription: "Management of annual returns, change of directors, share allotments, and statutory register maintenance.",
      icon: "FileCheck",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "annual-filing",
      title: "Annual Returns",
      shortDescription: "Yearly compliance management for CAC and FIRS.",
      fullDescription: "Filing of financial statements and tax returns to ensure your entity remains in good standing with all federal bodies.",
      icon: "Calendar",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop",
    },
  ],
};

// --- TESTIMONIALS ---
export const testimonials = [
  {
    id: 1,
    name: "Adebayo Ogunlesi",
    role: "Managing Director",
    content: "RuttyBis Consult handled our institutional filings with exceptional speed. Their mastery of the Nigerian regulatory landscape is unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", 
  },
  {
    id: 2,
    name: "Chioma Nwosu",
    role: "Enterprise Founder",
    content: "The team simplified complex SCUML requirements into a seamless process. Truly a partner led advisory experience.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Musa Tanko",
    role: "Operations Director",
    content: "We have outsourced our statutory maintenance to RuttyBis for years. They ensure we are always statutory ready.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
  },
];

// --- LEADERSHIP TEAM ---
export const team = [
  {
    id: 1,
    name: "Ruth Johnson",
    position: "Founder & Lead Consultant",
    bio: "Certified CAC consultant with over 12 years of experience in corporate governance and Nigerian business law.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Michael Adeyemi",
    position: "Senior Compliance Officer",
    bio: "Specialist in tax registration and export licensing, facilitating growth for over 200 domestic enterprises.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Funke Okafor",
    position: "Client Relations Manager",
    bio: "Oversees statutory briefing and ensures seamless communication across all partner led engagements.",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1972&auto=format&fit=crop",
    linkedin: "#",
  },
];

// --- FAQ BRIEFINGS ---
export const faqs = [
  {
    id: 1,
    question: "What is the timeline for CAC incorporation?",
    answer: "Typically 2 to 4 weeks. We manage the entire lifecycle from name reservation to final certificate delivery.",
  },
  {
    id: 2,
    question: "Which entities require SCUML certification?",
    answer: "Designated Non Financial Businesses and Professions (DNFBPs) such as law firms, hotels, and real estate developers.",
  },
  {
    id: 3,
    question: "Does the firm handle post incorporation filings?",
    answer: "Yes. We manage annual returns, share capital increases, and changes to board composition as part of our governance suite.",
  },
  {
    id: 4,
    question: "Can consultations be conducted remotely?",
    answer: "Absolutely. We offer digital briefings via secure video channels or WhatsApp for rapid advisory.",
  },
];