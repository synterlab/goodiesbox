import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { mockPacks, Pack } from '@/data/packs';
import { PackOpeningModal } from '@/components/PackOpeningModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PackageOpen, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Packs() {
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);
  const [activeTheme, setActiveTheme] = useState<string>('All');

  const themes = ['All', 'Sports', 'Crypto', 'Entertainment', 'Gaming'];

  const filteredPacks = mockPacks.filter(pack => 
    activeTheme === 'All' || pack.theme === activeTheme
  );

  return (
    <Layout>
      <SEO title="Buy Packs" description="Buy mystery prediction card packs on Solana Devnet and EVM testnets. Open them to collect rare outcome cards and enter contests to win testnet prizes." />
      <div className="pt-24 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#FF3CAC]/10 border border-[#FF3CAC]/30 text-xs font-bold text-[#FF3CAC] uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3CAC] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3CAC]" />
              </span>
              Goodie Store
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight"
            >
              Secure The <span className="text-gradient-primary">Bag</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Purchase mystery packs to collect 2026 prediction cards. Higher tier packs guarantee rarer cards.
            </motion.p>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide">
            {themes.map((theme) => (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme)}
                className="relative px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider whitespace-nowrap"
              >
                {activeTheme === theme && (
                  <motion.div
                    layoutId="pack-filter-bg"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${activeTheme === theme ? 'text-black' : 'text-white/60 hover:text-white'}`}>
                  {theme}
                </span>
                {activeTheme !== theme && (
                  <div className="absolute inset-0 border border-white/10 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredPacks.map((pack, i) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#0A0A0F] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)]"
              >
                {/* Pack Image Area */}
                <div className="h-56 relative flex items-center justify-center overflow-hidden">
                  <img
                    src={pack.imageUrl}
                    alt={pack.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 scale-100"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(10,10,15,0.95) 100%)` }}
                  />

                  {/* Rarity glow overlay */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: `radial-gradient(ellipse at center, ${pack.gradientFrom}60 0%, transparent 70%)` }}
                  />

                  {/* Pack card visual */}
                  <div
                    className="w-28 h-40 rounded-xl relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:-translate-y-3 shadow-2xl overflow-hidden"
                    style={{ boxShadow: `0 20px 50px -8px ${pack.glowColor}, 0 0 30px ${pack.gradientFrom}50` }}
                  >
                    <img
                      src={pack.packImageUrl}
                      alt={pack.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Holographic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 mix-blend-overlay" />
                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-4 pb-1.5 text-center">
                      <span className="text-[7px] font-black text-white/80 uppercase tracking-widest">Open</span>
                    </div>
                    {/* Neon border glow */}
                    <div className="absolute inset-0 rounded-xl border border-white/20" />
                  </div>
                  
                  {/* Countdown Badge - if legendary, show it opening soon */}
                  {pack.rarity === 'Legendary' && (
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[#FF3CAC]/50 rounded-full px-3 py-1.5 flex items-center gap-1.5 z-20 shadow-[0_0_15px_rgba(255,60,172,0.3)]">
                      <Clock className="w-3.5 h-3.5 text-[#FF3CAC]" />
                      <span className="text-[10px] font-bold text-[#FF3CAC] uppercase tracking-wider">Opens in 2d 14h</span>
                    </div>
                  )}
                </div>

                {/* Pack Details */}
                <div className="p-6 flex-1 flex flex-col relative z-20 bg-[#0A0A0F]">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-black leading-tight tracking-tight">{pack.name}</h3>
                    <span className={`animate-shimmer text-[10px] uppercase font-black px-2.5 py-1 rounded bg-white/5 border border-white/10 flex-shrink-0 ml-2 ${
                      pack.rarity === 'Legendary' ? 'text-[#FFD700] border-[#FFD700]/30 shadow-[0_0_10px_rgba(255,215,0,0.2)]' :
                      pack.rarity === 'Premium' ? 'text-[#00E5FF] border-[#00E5FF]/30 shadow-[0_0_10px_rgba(0,229,255,0.2)]' : 'text-gray-400'
                    }`}>
                      {pack.rarity}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed font-medium">
                    {pack.description}
                  </p>

                  <div className="flex items-center justify-between text-sm mb-6 pb-6 border-b border-white/10">
                    <div className="bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                      <span className="text-white/40 block text-[9px] uppercase font-bold tracking-wider mb-1">Contains</span>
                      <span className="font-black text-sm">{pack.cardsPerPack} Cards</span>
                    </div>
                    <div className="text-right bg-white/5 px-3 py-2 rounded-lg border border-white/5">
                      <span className="text-white/40 block text-[9px] uppercase font-bold tracking-wider mb-1">Available</span>
                      <span className="font-black text-sm text-gradient-primary">{pack.available}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xl font-black text-[#00E5FF]">{pack.priceSOL} SOL</div>
                      <div className="text-xs text-muted-foreground font-mono">{pack.priceETH} ETH</div>
                    </div>
                    <Button
                      onClick={() => setSelectedPack(pack)}
                      className="bg-white text-black hover:bg-[#00E5FF] hover:text-black font-black uppercase tracking-wider px-6 h-12 flex-shrink-0 transition-colors"
                    >
                      <PackageOpen className="w-5 h-5 mr-2" />
                      Buy
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <PackOpeningModal
        pack={selectedPack}
        isOpen={!!selectedPack}
        onClose={() => setSelectedPack(null)}
      />
    </Layout>
  );
}