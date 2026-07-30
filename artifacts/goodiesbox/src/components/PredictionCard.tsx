import { motion } from 'framer-motion';
import { Card } from '@/data/cards';

interface PredictionCardProps {
  card: Card;
  showPrice?: boolean;
}

export function PredictionCard({ card, showPrice = false }: PredictionCardProps) {
  const rarityConfig = {
    Common: { color: '#9CA3AF', bg: 'bg-gray-400/10', border: 'border-gray-400/30', text: 'text-gray-400' },
    Rare: { color: '#00E5FF', bg: 'bg-[#00E5FF]/10', border: 'border-[#00E5FF]/30', text: 'text-[#00E5FF]', glow: 'shadow-[0_0_10px_rgba(0,229,255,0.5)]' },
    Epic: { color: '#FF3CAC', bg: 'bg-[#FF3CAC]/10', border: 'border-[#FF3CAC]/30', text: 'text-[#FF3CAC]', glow: 'shadow-[0_0_15px_rgba(255,60,172,0.6)]' },
    Legendary: { color: '#FFD700', bg: 'bg-[#FFD700]/10', border: 'border-[#FFD700]/30', text: 'text-[#FFD700]', glow: 'shadow-[0_0_20px_rgba(255,215,0,0.8)]' },
  };

  const style = rarityConfig[card.rarity];

  // Calculate days remaining
  const deadline = new Date(card.deadline);
  const now = new Date();
  const diffTime = Math.abs(deadline.getTime() - now.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const isExpired = deadline < now;

  return (
    <div className="w-full aspect-[2.5/3.5] relative rounded-xl overflow-hidden bg-[#0A0A0F] border border-white/10 flex flex-col group hover:border-white/30 transition-colors">
      
      {/* Holographic Shimmer Effect */}
      <div className="holographic-shimmer z-20" />

      {/* Card Image - top 45% */}
      <div className="relative flex-shrink-0" style={{ height: '45%' }}>
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {/* Gradient overlay fading into card body */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(10,10,15,0.1) 0%, rgba(10,10,15,0.6) 60%, rgba(10,10,15,1) 100%)`
          }}
        />
        {/* Rarity + category badges over image */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-10">
          <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded border backdrop-blur-md ${style.bg} ${style.border} ${style.text} ${style.glow || ''}`}>
            {card.rarity}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wider text-white/80 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/10">
            {card.category}
          </span>
        </div>
        {/* Colored glow bar at top edge matching rarity */}
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
              {isExpired ? 'Ended' : `${diffDays} Days Left`}
            </span>
          </div>
        </div>

        {showPrice && (
          <div className="absolute top-12 right-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1.5 flex items-center gap-1 z-10 shadow-xl">
            <div className="text-sm font-black text-gradient-primary">{card.priceSOL} SOL</div>
          </div>
        )}
      </div>
      
      {/* Subtle border glow that responds to hover */}
      <div 
        className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30 mix-blend-overlay"
        style={{ borderColor: style.color }}
      />
    </div>
  );
}