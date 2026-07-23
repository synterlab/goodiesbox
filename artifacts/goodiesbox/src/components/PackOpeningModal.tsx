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
      // Mock draw 3 random cards
      const shuffled = [...mockCards].sort(() => 0.5 - Math.random());
      setDrawnCards(shuffled.slice(0, 3));
    }
  }, [isOpen, pack]);

  const handleOpenClick = () => {
    setPhase('shaking');
    setTimeout(() => {
      setPhase('exploding');
      setTimeout(() => {
        setPhase('revealed');
      }, 500);
    }, 1500);
  };

  const handleFlip = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: true }));
  };

  const allFlipped = Object.keys(flippedCards).length === drawnCards.length && drawnCards.length > 0;

  if (!pack) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && phase === 'idle' ? onClose() : null}>
      <DialogContent className="max-w-5xl h-[80vh] bg-black border-border/20 p-0 flex flex-col justify-center items-center overflow-hidden">
        {/* Close Button - only show when revealed */}
        {phase === 'revealed' && (
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white z-50">
            <X className="w-6 h-6" />
          </button>
        )}

        <AnimatePresence mode="wait">
          {(phase === 'idle' || phase === 'shaking') && (
            <motion.div
              key="box"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                phase === 'shaking' 
                  ? { 
                      scale: [1, 1.1, 1, 1.1, 1], 
                      rotate: [-5, 5, -5, 5, 0],
                      filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
                    }
                  : { scale: 1, opacity: 1 }
              }
              exit={{ scale: 1.5, opacity: 0, filter: 'brightness(2)' }}
              transition={
                phase === 'shaking'
                  ? { duration: 1.5, ease: "easeInOut" }
                  : { duration: 0.5 }
              }
              className="flex flex-col items-center gap-8 cursor-pointer z-10"
              onClick={phase === 'idle' ? handleOpenClick : undefined}
            >
              <div 
                className="w-64 h-80 rounded-xl flex items-center justify-center border-2 border-white/20 shadow-2xl relative"
                style={{
                  background: `linear-gradient(135deg, ${pack.gradientFrom}, ${pack.gradientTo})`,
                  boxShadow: `0 0 60px ${pack.glowColor}`
                }}
              >
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                <div className="text-center p-6 relative z-10">
                  <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-white">{pack.name}</h3>
                  <p className="text-white/60 text-sm mt-2">Click to Open</p>
                </div>
              </div>
            </motion.div>
          )}

          {phase === 'revealed' && (
            <motion.div
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full px-8 flex flex-col items-center z-10"
            >
              <h2 className="text-3xl font-black text-white mb-12 animate-in fade-in slide-in-from-bottom-4">
                Pack Opened!
              </h2>
              
              <div className="flex flex-wrap justify-center gap-8 perspective-1000">
                {drawnCards.map((card, i) => (
                  <motion.div
                    key={card.id + i}
                    initial={{ y: 100, opacity: 0, rotateY: 180 }}
                    animate={{ y: 0, opacity: 1, rotateY: flippedCards[i] ? 0 : 180 }}
                    transition={{ 
                      y: { delay: i * 0.2, type: 'spring', damping: 15 },
                      opacity: { delay: i * 0.2 },
                      rotateY: { duration: 0.6, type: 'spring' }
                    }}
                    className="w-64 h-96 relative cursor-pointer"
                    onClick={() => handleFlip(i)}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Card Back */}
                    <div 
                      className="absolute inset-0 w-full h-full rounded-xl backface-hidden flex items-center justify-center border border-white/10"
                      style={{
                        background: `linear-gradient(135deg, #1A1A24, #0A0A0F)`,
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="text-center opacity-30">
                        <Gift className="w-12 h-12 mx-auto mb-2" />
                        <div className="font-black text-xl">GoodiesBox</div>
                      </div>
                    </div>
                    
                    {/* Card Front */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <PredictionCard card={card} />
                    </div>
                  </motion.div>
                ))}
              </div>

              {allFlipped && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12"
                >
                  <Button 
                    onClick={onClose}
                    className="bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-black font-bold px-8 py-6 text-lg glow-primary rounded-full"
                  >
                    Claim Cards to Wallet
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Particles effect when exploding */}
        {phase === 'exploding' && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              className="w-32 h-32 rounded-full bg-white blur-3xl"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 20, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}