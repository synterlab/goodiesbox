import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Gift } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Pack } from '@/data/packs';
import { Card, mockCards } from '@/data/cards';
import { PredictionCard } from './PredictionCard';
import { Button } from '@/components/ui/button';

interface PackOpeningModalProps {
  pack: Pack | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PackOpeningModal({ pack, isOpen, onClose }: PackOpeningModalProps) {
  const [phase, setPhase] = useState<'idle' | 'shaking' | 'exploding' | 'revealed'>('idle');
  const [drawnCards, setDrawnCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (isOpen && pack) {
      setPhase('idle');
      setFlippedCards({});
      // Mock draw cards based on pack count
      const shuffled = [...mockCards].sort(() => 0.5 - Math.random());
      setDrawnCards(shuffled.slice(0, pack.cardsPerPack || 3));
    }
  }, [isOpen, pack]);

  const handleOpenClick = () => {
    setPhase('shaking');
    setTimeout(() => {
      setPhase('exploding');
      setTimeout(() => {
        setPhase('revealed');
      }, 600);
    }, 1800);
  };

  const handleFlip = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: true }));
  };

  const allFlipped = Object.keys(flippedCards).length === drawnCards.length && drawnCards.length > 0;

  if (!pack) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && phase === 'idle' ? onClose() : null}>
      <DialogContent className="max-w-[100vw] w-[100vw] h-[100dvh] bg-[#0A0A0F]/95 backdrop-blur-2xl border-none p-0 flex flex-col justify-center items-center overflow-hidden m-0 rounded-none sm:rounded-none">
        
        {/* Grain overlay for cinematic feel */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

        {/* Close Button - only show when revealed */}
        {phase === 'revealed' && (
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose} 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/50 hover:text-white transition-colors z-50 backdrop-blur-md border border-white/10"
          >
            <X className="w-6 h-6" />
          </motion.button>
        )}

        <AnimatePresence mode="wait">
          {(phase === 'idle' || phase === 'shaking') && (
            <motion.div
              key="box"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={
                phase === 'shaking' 
                  ? { 
                      scale: [1, 1.15, 1, 1.15, 1], 
                      rotate: [-8, 8, -8, 8, 0],
                      y: [0, -20, 0, -20, 0],
                      filter: ['brightness(1) contrast(1)', 'brightness(1.5) contrast(1.2)', 'brightness(1) contrast(1)']
                    }
                  : { scale: 1, opacity: 1, y: 0 }
              }
              exit={{ scale: 2, opacity: 0, filter: 'brightness(3)', rotate: 15 }}
              transition={
                phase === 'shaking'
                  ? { duration: 1.8, ease: "easeInOut" }
                  : { duration: 0.6, type: "spring" }
              }
              className="flex flex-col items-center gap-12 cursor-pointer z-10"
              onClick={phase === 'idle' ? handleOpenClick : undefined}
            >
              <div 
                className="w-72 h-96 rounded-2xl flex items-center justify-center relative neon-border"
                style={{
                  background: `linear-gradient(135deg, ${pack.gradientFrom}, ${pack.gradientTo})`,
                  boxShadow: `0 0 100px ${pack.glowColor}`
                }}
              >
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl" />
                
                <div className="text-center p-8 relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 shadow-2xl">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-3">{pack.name}</h3>
                  <div className="bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-white/80 text-xs font-bold uppercase tracking-widest">
                    Click to Rip
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'revealed' && (
            <motion.div
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full px-4 md:px-12 flex flex-col items-center justify-center h-full z-10"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-12 text-4xl md:text-5xl font-black text-white uppercase tracking-tight text-center"
              >
                Pack <span className="text-gradient-primary">Ripped</span>
              </motion.h2>
              
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 perspective-1000 w-full max-w-7xl mt-12">
                {drawnCards.map((card, i) => {
                  // Calculate dramatic fanning out positions
                  const totalCards = drawnCards.length;
                  const middleIndex = (totalCards - 1) / 2;
                  const offsetFromCenter = i - middleIndex;
                  const rotation = offsetFromCenter * 12; // Spread angle
                  const yOffset = Math.abs(offsetFromCenter) * 20; // Arc shape
                  
                  return (
                    <motion.div
                      key={card.id + i}
                      initial={{ 
                        scale: 0, 
                        opacity: 0, 
                        x: 0,
                        y: 300,
                        rotateZ: 0,
                        rotateY: 180 
                      }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        x: 0,
                        y: flippedCards[i] ? 0 : yOffset, // Remove arc offset when flipped
                        rotateZ: flippedCards[i] ? 0 : rotation, // Remove tilt when flipped
                        rotateY: flippedCards[i] ? 0 : 180 
                      }}
                      transition={{ 
                        // Dramatic reveal spreading out
                        scale: { delay: i * 0.1, duration: 0.6, type: 'spring', damping: 12 },
                        y: { delay: i * 0.1, duration: 0.6, type: 'spring', damping: 15 },
                        rotateZ: { delay: i * 0.1, duration: 0.8, type: 'spring' },
                        // Flip animation
                        rotateY: { duration: 0.8, type: 'spring', damping: 15 }
                      }}
                      className="w-[200px] h-[300px] sm:w-[260px] sm:h-[390px] relative cursor-pointer group"
                      onClick={() => handleFlip(i)}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Card Back */}
                      <div 
                        className="absolute inset-0 w-full h-full rounded-xl backface-hidden flex flex-col items-center justify-center border border-white/20 shadow-2xl overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, #13131A, #0A0A0F)`,
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                        <div className="holographic-shimmer opacity-30 group-hover:opacity-60 transition-opacity" />
                        
                        <div className="w-16 h-16 rounded-full bg-[#00E5FF]/10 flex items-center justify-center mb-4 border border-[#00E5FF]/30 glow-pulse-cyan">
                          <Gift className="w-8 h-8 text-[#00E5FF]" />
                        </div>
                        <div className="font-black text-xl uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">Reveal</div>
                      </div>
                      
                      {/* Card Front */}
                      <div className="absolute inset-0 w-full h-full backface-hidden">
                        <PredictionCard card={card} showPrice />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {allFlipped && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="absolute bottom-12"
                >
                  <Button 
                    onClick={onClose}
                    className="bg-white hover:bg-gray-200 text-black font-black px-12 py-7 text-lg rounded-full uppercase tracking-widest shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
                  >
                    Claim Cards
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cinematic explosion effect */}
        {phase === 'exploding' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
            <motion.div 
              className="w-full h-full bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, times: [0, 0.2, 1] }}
            />
            <motion.div 
              className="absolute w-40 h-40 rounded-full"
              style={{ background: pack.glowColor }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 30, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}