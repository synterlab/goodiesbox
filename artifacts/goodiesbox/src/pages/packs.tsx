import { Layout } from '@/components/Layout';
import { mockPacks } from '@/data/packs';
import { PackOpeningModal } from '@/components/PackOpeningModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PackageOpen, Sparkles } from 'lucide-react';

export default function Packs() {
  const [selectedPack, setSelectedPack] = useState<typeof mockPacks[0] | null>(null);

  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <div className="inline-block mb-4 text-xs font-bold px-3 py-1 rounded-full bg-[#FF3CAC]/10 text-[#FF3CAC] border border-[#FF3CAC]/30 uppercase tracking-widest">
              Beta Testnet
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Goodie <span className="text-[#FF3CAC]">Store</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Purchase mystery packs to collect 2026 prediction cards. Higher tier packs guarantee rarer cards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {mockPacks.map((pack) => (
              <div
                key={pack.id}
                className="bg-card border border-border/50 rounded-2xl overflow-hidden flex flex-col group hover:border-white/20 transition-colors"
              >
                {/* Pack Image Area */}
                <div className="h-56 relative flex items-center justify-center overflow-hidden">
                  {/* Real background image */}
                  <img
                    src={pack.imageUrl}
                    alt={pack.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent 40%, #13131A 100%)` }}
                  />
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                  {/* Pack 3D object */}
                  <div
                    className="w-28 h-36 rounded-xl relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-2"
                    style={{
                      background: `linear-gradient(135deg, ${pack.gradientFrom}, ${pack.gradientTo})`,
                      boxShadow: `0 20px 40px -10px ${pack.glowColor}`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay rounded-xl border border-white/20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/60">
                      <Sparkles className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Pack Details */}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold leading-tight">{pack.name}</h3>
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded bg-white/5 border border-white/10 flex-shrink-0 ml-2 ${
                      pack.rarity === 'Legendary' ? 'text-[#FFD700]' :
                      pack.rarity === 'Premium' ? 'text-[#00E5FF]' : 'text-gray-400'
                    }`}>
                      {pack.rarity}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                    {pack.description}
                  </p>

                  <div className="flex items-center justify-between text-sm mb-5 pb-5 border-b border-white/10">
                    <div>
                      <span className="text-muted-foreground block text-xs">Contains</span>
                      <span className="font-bold">{pack.cardsPerPack} Cards</span>
                    </div>
                    <div className="text-right">
                      <span className="text-muted-foreground block text-xs">Available</span>
                      <span className="font-bold text-[#FF3CAC]">{pack.available}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-lg font-bold text-[#00E5FF]">{pack.priceSOL} SOL</div>
                      <div className="text-xs text-muted-foreground">{pack.priceETH} ETH</div>
                    </div>
                    <Button
                      onClick={() => setSelectedPack(pack)}
                      className="bg-white text-black hover:bg-gray-200 font-bold px-5 flex-shrink-0"
                    >
                      <PackageOpen className="w-4 h-4 mr-2" />
                      Buy Pack
                    </Button>
                  </div>
                </div>
              </div>
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
