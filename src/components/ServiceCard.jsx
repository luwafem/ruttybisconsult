import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative bg-white border-t border-stone-200 pt-8 pb-12 px-2 transition-all duration-500 hover:bg-stone-50">
      {/* Decorative Accent Line - appears on hover */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-emerald-600 transition-all duration-500 group-hover:w-full" />
      <Link
          to={`/services/${service.id}`}
        >

      <div className="flex flex-col h-full">
        {/* Top Meta: Icon & Category */}
        <div className="flex items-center justify-between mb-8">
          <div className="p-3 border border-stone-100 bg-stone-50 group-hover:bg-white group-hover:border-emerald-100 transition-colors">
            <Icon name={service.icon} className="w-6 h-6 text-stone-700 group-hover:text-emerald-600" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase group-hover:text-emerald-600 transition-colors">
            Practice Area
          </span>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-2xl font-light tracking-tight text-stone-900 mb-4 group-hover:font-medium transition-all">
            {service.title}
          </h3>
          <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-sm">
            {service.shortDescription}
          </p>
        </div>

        {/* Action */}
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-stone-900 group-hover:text-emerald-700 transition-colors"
        >
          Explore Framework 
          <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      </Link>
    </div>
  );
};

export default ServiceCard;