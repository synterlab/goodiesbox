import { motion } from 'framer-motion';
import { Card } from '@/data/cards';

interface PredictionCardProps {
  card: Card;
  showPrice?: boolean;
}

// Category-specific SVG art (no external image deps)
function CardArt({ category, gradientFrom, gradientTo, rarity }: {
  category: Card['category'];
  gradientFrom: string;
  gradientTo: string;
  rarity: Card['rarity'];
}) {
  const icons: Record<Card['category'], JSX.Element> = {
    Crypto: (
      <g>
        {/* Hexagon grid pattern */}
        <path d="M80 20 L95 29 L95 47 L80 56 L65 47 L65 29 Z" stroke="white" strokeWidth="1.2" fill="none" opacity="0.18"/>
        <path d="M56 38 L65 29 L65 47 L56 56 L47 47 L47 29 Z" stroke="white" strokeWidth="1" fill="none" opacity="0.1"/>
        <path d="M104 38 L113 29 L113 47 L104 56 L95 47 L95 29 Z" stroke="white" strokeWidth="1" fill="none" opacity="0.1"/>
        {/* Bitcoin / ETH symbol */}
        {category === 'Crypto' && (
          <text x="80" y="48" textAnchor="middle" fontSize="32" fontWeight="900" fill="white" opacity="0.92" fontFamily="Arial, sans-serif">₿</text>
        )}
        {/* Glow dot */}
        <circle cx="80" cy="38" r="28" fill="white" opacity="0.04"/>
      </g>
    ),
    Sports: (
      <g>
        {/* Trophy */}
        <path d="M68 48 L68 38 Q68 20 80 20 Q92 20 92 38 L92 48 Q92 58 80 60 Q68 58 68 48Z" fill="white" opacity="0.25"/>
        <rect x="76" y="60" width="8" height="8" fill="white" opacity="0.22"/>
        <rect x="70" y="68" width="20" height="4" rx="2" fill="white" opacity="0.28"/>
        {/* Handles */}
        <path d="M68 32 Q58 32 58 42 Q58 50 68 50" stroke="white" strokeWidth="3" fill="none" opacity="0.2"/>
        <path d="M92 32 Q102 32 102 42 Q102 50 92 50" stroke="white" strokeWidth="3" fill="none" opacity="0.2"/>
        {/* Star */}
        <text x="80" y="52" textAnchor="middle" fontSize="26" fill="white" opacity="0.85" fontFamily="Arial">🏆</text>
      </g>
    ),
    Gaming: (
      <g>
        {/* Controller body */}
        <rect x="54" y="30" width="52" height="36" rx="10" fill="white" opacity="0.2"/>
        {/* D-pad */}
        <rect x="62" y="42" width="5" height="12" rx="2" fill="white" opacity="0.5"/>
        <rect x="58" y="46" width="13" height="5" rx="2" fill="white" opacity="0.5"/>
        {/* Buttons */}
        <circle cx="93" cy="42" r="3" fill="white" opacity="0.5"/>
        <circle cx="99" cy="46" r="3" fill="white" opacity="0.5"/>
        <circle cx="87" cy="46" r="3" fill="white" opacity="0.5"/>
        <circle cx="93" cy="50" r="3" fill="white" opacity="0.5"/>
        {/* Center */}
        <rect x="76" y="41" width="8" height="5" rx="2" fill="white" opacity="0.35"/>
      </g>
    ),
    Entertainment: (
      <g>
        {/* Film reel circle */}
        <circle cx="80" cy="42" r="22" stroke="white" strokeWidth="2" fill="none" opacity="0.2"/>
        <circle cx="80" cy="42" r="8" fill="white" opacity="0.15"/>
        {/* Reel holes */}
        <circle cx="80" cy="25" r="3" fill="white" opacity="0.4"/>
        <circle cx="80" cy="59" r="3" fill="white" opacity="0.4"/>
        <circle cx="63" cy="42" r="3" fill="white" opacity="0.4"/>
        <circle cx="97" cy="42" r="3" fill="white" opacity="0.4"/>
        {/* Star */}
        <text x="80" y="48" textAnchor="middle" fontSize="14" fill="white" opacity="0.9" fontFamily="Arial">★</text>
      </g>
    ),
    Politics: (
      <g>
        {/* Globe */}
        <circle cx="80" cy="40" r="22" stroke="white" strokeWidth="1.5" fill="none" opacity="0.22"/>
        <ellipse cx="80" cy="40" rx="10" ry="22" stroke="white" strokeWidth="1.5" fill="none" opacity="0.18"/>
        <line x1="58" y1="40" x2="102" y2="40" stroke="white" strokeWidth="1.5" opacity="0.18"/>
        <line x1="62" y1="27" x2="98" y2="27" stroke="white" strokeWidth="1" opacity="0.12"/>
        <line x1="62" y1="53" x2="98" y2="53" stroke="white" strokeWidth="1" opacity="0.12"/>
        {/* Center glow */}
        <circle cx="80" cy="40" r="10" fill="white" opacity="0.06"/>
      </g>
    ),
  };

  return (
    <svg viewBox="0 0 160 90" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`cg-${category}`} x1="0" y1="0" x2="160" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={gradientFrom}/>
          <stop offset="100%" stopColor={gradientTo}/>
        </linearGradient>
        <radialGradient id={`rg-${category}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="160" height="90" fill={`url(#cg-${category})`}/>
      <rect width="160" height="90" fill={`url(#rg-${category})`}/>
      {/* Scanline texture */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 10 + 5} x2="160" y2={i * 10 + 5} stroke="white" strokeWidth="0.5" opacity="0.04"/>
      ))}
      {icons[category]}
    </svg>
  );
}

export function PredictionCard({ card, showPrice = false }: PredictionCardProps) {
  const rarityConfig = {
    Common: { color: '#9CA3AF', bg: 'bg-gray-400/10', border: 'border-gray-400/30', text: 'text-gray-400' },
    Rare: { color: '#00E5FF', bg: 'bg-[#00E5FF]/10', border: 'border-[#00E5FF]/30', text: 'text-[#00E5FF]', glow: 'shadow-[0_0_10px_rgba(0,229,255,0.5)]' },
    Epic: { color: '#FF3CAC', bg: 'bg-[#FF3CAC]/10', border: 'border-[#FF3CAC]/30', text: 'text-[#FF3CAC]', glow: 'shadow-[0_0_15px_rgba(255,60,172,0.6)]' },
    Legendary: { color: '#FFD700', bg: 'bg-[#FFD700]/10', border: 'border-[#FFD700]/30', text: 'text-[#FFD700]', glow: 'shadow-[0_0_20px_rgba(255,215,0,0.8)]' },
  };

  const style = rarityConfig[card.rarity];

  const deadline = new Date(card.deadline);
  const now = new Date();
  const diffTime = Math.abs(deadline.getTime() - now.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const isExpired = deadline < now;

  return (
    <div className="w-full aspect-[2.5/3.5] relative rounded-xl overflow-hidden bg-[#0A0A0F] border border-white/10 flex flex-col group hover:border-white/30 transition-colors">
      
      {/* Holographic Shimmer Effect */}
      <div className="holographic-shimmer z-20" />

      {/* Card Art - top 45% — CSS-based, no external images */}
      <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '45%' }}>
        <CardArt
          category={card.category}
          gradientFrom={card.gradientFrom}
          gradientTo={card.gradientTo}
          rarity={card.rarity}
        />
        {/* Gradient overlay fading into card body */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(10,10,15,0.05) 0%, rgba(10,10,15,0.55) 65%, rgba(10,10,15,1) 100%)`
          }}
        />
        {/* Rarity + category badges */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-10">
          <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded border backdrop-blur-md ${style.bg} ${style.border} ${style.text} ${(style as any).glow ?? ''}`}>
            {card.rarity}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-white/80 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10">
            {card.category}
          </span>
        </div>
        {/* Rarity color bar at top */}
        <div
          className="absolute top-0 left-0 right-0 h-1 z-10"
          style={{ background: `linear-gradient(90deg, ${card.gradientFrom}, ${card.gradientTo})` }}
        />
      </div>

      {/* Card Body */}
      <div className="relative z-10 flex flex-col flex-1 p-3.5 pt-2">
        <div className="flex-1">
          <h3 className="font-black text-lg leading-tight mb-1.5 text-white tracking-tight drop-shadow-md">
            {card.title}
          </h3>
          <p className="text-[11px] text-white/70 line-clamp-3 leading-relaxed font-medium">
            {card.prediction}
          </p>
        </div>

        <div className="pt-2.5 mt-auto grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-white/5 rounded-md p-1.5 border border-white/5">
            <span className="text-white/40 block uppercase tracking-wider text-[8px] font-bold mb-0.5">Event</span>
            <span className="font-bold text-white truncate block text-[10px]">{card.eventName}</span>
          </div>
          <div className="bg-white/5 rounded-md p-1.5 border border-white/5 text-right">
            <span className="text-white/40 block uppercase tracking-wider text-[8px] font-bold mb-0.5">Deadline</span>
            <span className={`font-bold text-[10px] ${isExpired ? 'text-destructive' : 'text-[#00E5FF]'}`}>
              {isExpired ? 'Ended' : `${diffDays}d Left`}
            </span>
          </div>
        </div>

        {showPrice && (
          <div className="absolute top-12 right-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1.5 flex items-center gap-1 z-10 shadow-xl">
            <div className="text-sm font-black text-gradient-primary">{card.priceSOL} SOL</div>
          </div>
        )}
      </div>
      
      {/* Border glow on hover */}
      <div 
        className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30 mix-blend-overlay"
        style={{ borderColor: style.color }}
      />
    </div>
  );
}
