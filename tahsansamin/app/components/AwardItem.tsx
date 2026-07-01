interface AwardItemProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export default function AwardItem({
  title,
  issuer,
  date,
  description,
}: AwardItemProps) {
  return (
    <div className="relative group bg-[#1a1a1a] border border-zinc-800/50 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 overflow-hidden">
      {/* Subtle gradient background for prestige effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
        <div className="flex-shrink-0 mt-1 hidden md:block">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.1)]">
            <span className="text-xl text-amber-500 font-serif leading-none">✧</span>
          </div>
        </div>
        
        <div className="flex-1 space-y-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-serif leading-none md:hidden">✧</span>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">{title}</h3>
              </div>
              <p className="text-amber-500/80 font-medium mt-1">{issuer}</p>
            </div>
            <span className="font-mono text-amber-500/90 text-sm whitespace-nowrap bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              {date}
            </span>
          </div>
          
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base mt-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
