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
      {/* Background gradient texture */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full p-4">
        <div className="flex justify-between items-start mb-2">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${rarityColors[card.rarity]} bg-black/40`}>
            {card.rarity}
          </span>
          <span className="text-[10px] font-medium text-muted-foreground bg-black/40 px-2 py-1 rounded">
            {card.category}
          </span>
        </div>

        <div className="mt-auto mb-4">
          <h3 className="font-bold text-lg leading-tight mb-2 text-white">
            {card.title}
          </h3>
          <p className="text-xs text-white/80 line-clamp-3">
            {card.prediction}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 mt-auto grid grid-cols-2 gap-2 text-[10px]">
          <div>
            <span className="text-white/50 block">Event</span>
            <span className="font-medium text-white truncate block">{card.eventName}</span>
          </div>
          <div className="text-right">
            <span className="text-white/50 block">Deadline</span>
            <span className="font-medium text-white">
              {new Date(card.deadline).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>

        {showPrice && (
          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <div className="text-sm font-bold text-[#00E5FF]">{card.priceSOL} SOL</div>
          </div>
        )}
      </div>
    </div>
  );
}