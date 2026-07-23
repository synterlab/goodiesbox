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
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Goodie <span className="text-[#FF3CAC]">Store</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Purchase mystery packs to collect prediction cards. Higher tier packs guarantee rarer cards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {mockPacks.map((pack) => (
              <div 
                key={pack.id} 
                className="bg-card border border-border/50 rounded-2xl overflow-hidden flex flex-col group hover:border-white/20 transition-colors"
              >
                {/* Pack Image Area */}
                <div 
                  className="h-64 relative flex items-center justify-center p-8"
                  style={{
                    background: `linear-gradient(to bottom, #13131A, #0A0A0F)`
                  }}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  
                  {/* The Pack 3D object representation */}
                  <div 
                    className="w-32 h-40 rounded-xl relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                    style={{
                      background: `linear-gradient(135deg, ${pack.gradientFrom}, ${pack.gradientTo})`,
                      boxShadow: `0 20px 40px -10px ${pack.glowColor}`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay rounded-xl border border-white/20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50">
                      <Sparkles className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                {/* Pack Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{pack.name}</h3>
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded bg-white/5 border border-white/10 ${
                      pack.rarity === 'Legendary' ? 'text-[#FFD700]' :
                      pack.rarity === 'Premium' ? 'text-[#00E5FF]' : 'text-gray-400'
                    }`}>
                      {pack.rarity}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6 flex-1">
                    {pack.description}
                  </p>

                  <div className="flex items-center justify-between text-sm mb-6 pb-6 border-b border-white/10">
                    <div>
                      <span className="text-muted-foreground block text-xs">Contains</span>
                      <span className="font-bold">{pack.cardsPerPack} Cards</span>
                    </div>
                    <div className="text-right">
                      <span className="text-muted-foreground block text-xs">Available</span>
                      <span className="font-bold text-[#FF3CAC]">{pack.available}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-lg font-bold text-[#00E5FF]">{pack.priceSOL} SOL</div>
                      <div className="text-xs text-muted-foreground">{pack.priceETH} ETH</div>
                    </div>
                    <Button 
                      onClick={() => setSelectedPack(pack)}
                      className="bg-white text-black hover:bg-gray-200 font-bold px-6"
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