import * as Icons from "lucide-react";

const Icon = ({ name, className = "w-5 h-5" }) => {
  const LucideIcon = Icons[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
};

export default Icon;