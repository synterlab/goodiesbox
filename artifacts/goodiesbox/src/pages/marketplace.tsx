import { Layout } from '@/components/Layout';
import { CardHover } from '@/components/CardHover';
import { mockCards } from '@/data/cards';
import { PredictionCard } from '@/components/PredictionCard';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';

// Mock sparkline generator
const generateSparkline = () => {
  const points = [];
  let y = 50;
  for (let x = 0; x <= 100; x += 10) {
    y += (Math.random() - 0.4) * 20;
    y = Math.max(10, Math.min(90, y));
    points.push(`${x},${y}`);
  }
  return points.join(' ');
};

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredCards = mockCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.prediction.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || card.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="pt-24 pb-32 min-h-screen">
        <div className="container mx-auto px-4">
          
          <div className="max-w-3xl mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
              The <span className="text-gradient-primary">Market</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trade prediction cards. Buy low, hold until resolution, or flip for profit.
            </p>
          </div>
          
          {/* Sticky Filter Bar */}
          <div className={`transition-all duration-300 z-40 mb-12 rounded-2xl ${
            isSticky 
              ? 'fixed top-20 left-4 right-4 md:left-auto md:right-auto md:w-[calc(100%-2rem)] max-w-[1504px] bg-background/90 backdrop-blur-xl border border-white/10 shadow-2xl p-4' 
              : 'relative bg-[#0A0A0F] border border-white/10 p-6'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-96 flex-shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search cards, events, predictions..." 
                  className="pl-12 bg-black/50 border-white/10 focus-visible:ring-[#00E5FF] h-12 rounded-full text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex w-full sm:w-auto gap-4">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-48 bg-black/50 border-white/10 h-12 rounded-full font-bold uppercase tracking-wider text-xs">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      <SelectValue placeholder="Category" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-[#0A0A0F] border-white/10 text-white">
                    <SelectItem value="All">All Categories</SelectItem>
                    <SelectItem value="Crypto">Crypto</SelectItem>
                    <SelectItem value="Sports">Sports</SelectItem>
                    <SelectItem value="Gaming">Gaming</SelectItem>
                    <SelectItem value="Entertainment">Entertainment</SelectItem>
                    <SelectItem value="Politics">Politics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {filteredCards.length === 0 ? (
            <div className="text-center py-32 bg-[#0A0A0F] rounded-3xl border border-dashed border-white/20">
              <p className="text-xl text-muted-foreground mb-4">No cards found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => { setSearchTerm(''); setCategoryFilter('All'); }}
                className="border-white/20 hover:bg-white/10 rounded-full font-bold uppercase tracking-wider"
              >
                Clear filters
              </Button>
            </div>
          ) : (
            /* Masonry-style layout via CSS columns */
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredCards.map((card, i) => (
                <motion.div 
                  key={card.id} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 8) * 0.05 }}
                  className="break-inside-avoid bg-[#0A0A0F] border border-white/10 rounded-2xl p-3 hover:border-white/30 transition-colors group"
                >
                  <CardHover glowColor={`rgba(${parseInt(card.gradientFrom.slice(1,3),16)}, ${parseInt(card.gradientFrom.slice(3,5),16)}, ${parseInt(card.gradientFrom.slice(5,7),16)}, 0.4)`}>
                    <PredictionCard card={card} />
                  </CardHover>
                  
                  <div className="mt-4 px-2 pb-2 flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1">Current Price</div>
                        <div className="text-xl font-black text-gradient-primary leading-none">{card.priceSOL} SOL</div>
                      </div>
                      
                      {/* Mini Sparkline Chart */}
                      <div className="w-20 h-8 flex items-end">
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                          <polyline 
                            fill="none" 
                            stroke={card.gradientFrom} 
                            strokeWidth="3" 
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points={generateSparkline()} 
                            className="opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs text-muted-foreground bg-white/5 p-2.5 rounded-lg border border-white/5">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[#14F195]" />
                        <span>Vol: {(Math.random() * 100).toFixed(1)} SOL</span>
                      </div>
                      <span>{card.available} listed</span>
                    </div>
                    
                    <Button className="w-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/10 font-black uppercase tracking-wider transition-all h-10">
                      Buy Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}