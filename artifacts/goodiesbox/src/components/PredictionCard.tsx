import { motion } from 'framer-motion';
import { Card } from '@/data/cards';

interface PredictionCardProps {
  card: Card;
  showPrice?: boolean;
}

export function PredictionCard({ card, showPrice = false }: PredictionCardProps) {
  const rarityColors = {
    Common: 'text-gray-400 border-gray-400/30',
    Rare: 'text-[#00E5FF] border-[#00E5FF]/30',
    Epic: 'text-[#FF3CAC] border-[#FF3CAC]/30',
    Legendary: 'text-[#FFD700] border-[#FFD700]/30',
  };

  return (
    <div className="w-full aspect-[2.5/3.5] relative rounded-xl overflow-hidden bg-[#13131A] border border-border/50 flex flex-col">
      {/* Card Image - top 42% */}
      <div className="relative flex-shrink-0" style={{ height: '42%' }}>
        <img
          src={card.imageUrl}
          alt={card.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Gradient overlay fading into card body */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(19,19,26,0.1) 0%, rgba(19,19,26,0.5) 70%, rgba(19,19,26,1) 100%)`
          }}
        />
        {/* Rarity + category badges over image */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${rarityColors[card.rarity]} bg-black/70 backdrop-blur-sm`}>
            {card.rarity}
          </span>
          <span className="text-[10px] font-medium text-muted-foreground bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
            {card.category}
          </span>
        </div>
        {/* Colored glow bar at top edge matching rarity */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, ${card.gradientFrom}, ${card.gradientTo})` }}
        />
      </div>

      {/* Card Body */}
      <div className="relative z-10 flex flex-col flex-1 p-3">
        <div className="flex-1">
          <h3 className="font-bold text-base leading-tight mb-1 text-white">
            {card.title}
          </h3>
          <p className="text-[11px] text-white/70 line-clamp-3 leading-relaxed">
            {card.prediction}
          </p>
        </div>

        <div className="pt-2 border-t border-white/10 mt-auto grid grid-cols-2 gap-1 text-[10px]">
          <div>
            <span className="text-white/40 block">Event</span>
            <span className="font-medium text-white truncate block text-[10px]">{card.eventName}</span>
          </div>
          <div className="text-right">
            <span className="text-white/40 block">Deadline</span>
            <span className="font-medium text-white text-[10px]">
              {new Date(card.deadline).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>

        {showPrice && (
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1 flex items-center gap-1">
            <div className="text-sm font-bold text-[#00E5FF]">{card.priceSOL} SOL</div>
          </div>
        )}
      </div>
    </div>
  );
}
