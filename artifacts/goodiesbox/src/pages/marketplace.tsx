import { Layout } from '@/components/Layout';
import { CardHover } from '@/components/CardHover';
import { mockCards } from '@/data/cards';
import { PredictionCard } from '@/components/PredictionCard';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredCards = mockCards.filter(card => {
    const matchesSearch = card.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.prediction.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || card.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="pt-12 pb-24">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-black mb-4 uppercase tracking-tight">Marketplace</h1>
              <p className="text-muted-foreground">Buy and sell prediction cards with other players.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search cards..." 
                  className="pl-9 bg-card border-border/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-40 bg-card border-border/50">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    <SelectValue placeholder="Category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
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

          {filteredCards.length === 0 ? (
            <div className="text-center py-24 bg-card/30 rounded-2xl border border-dashed border-border/50">
              <p className="text-muted-foreground">No cards found matching your criteria.</p>
              <Button 
                variant="link" 
                onClick={() => { setSearchTerm(''); setCategoryFilter('All'); }}
                className="text-[#00E5FF] mt-2"
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredCards.map((card) => (
                <div key={card.id} className="group relative">
                  <CardHover>
                    <PredictionCard card={card} />
                  </CardHover>
                  
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Price</span>
                      <span className="font-bold text-[#00E5FF]">{card.priceSOL} SOL</span>
                    </div>
                    <div className="flex justify-between items-center text-xs text-muted-foreground border-b border-border/30 pb-3">
                      <span>Vol: {(Math.random() * 100).toFixed(1)} SOL</span>
                      <span>{card.available} listed</span>
                    </div>
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">
                      Buy Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}