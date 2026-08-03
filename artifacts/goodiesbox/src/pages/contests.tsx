import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Timer, Users, Trophy, ChevronRight, Star } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function Contests() {
  const activeContests = [
    {
      id: 1,
      title: "Super Bowl LX Mega Pool",
      category: "Sports",
      prizePool: "25,000 USDC",
      entries: 1245,
      maxEntries: 2000,
      endsIn: "4d 12h",
      color: "#FF3CAC",
      description: "Submit your NFL prediction cards for Super Bowl LX. Highest accuracy wins testnet prizes.",
      featured: true,
      bgImage: "https://images.unsplash.com/photo-1566132127697-4524fea60007?w=800&q=80&fit=crop"
    },
    {
      id: 2,
      title: "Q2 2026 Crypto Outlook",
      category: "Crypto",
      prizePool: "50 SOL",
      entries: 890,
      maxEntries: 1000,
      endsIn: "12d 5h",
      color: "#00E5FF",
      description: "Hold or submit BTC and ETH prediction cards for Q2 2026 targets.",
      featured: false,
      bgImage: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80&fit=crop"
    },
    {
      id: 3,
      title: "Oscars 2026 Predictor",
      category: "Entertainment",
      prizePool: "5,000 USDC",
      entries: 340,
      maxEntries: 500,
      endsIn: "2mo 4d",
      color: "#7B2FBE",
      description: "Best Picture, Best Actor, Best Actress sweeps for the 98th Academy Awards.",
      featured: false,
      bgImage: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80&fit=crop"
    }
  ];

  return (
    <Layout>
      <SEO title="Live Contests" description="Enter your prediction cards into live contests and win testnet prizes. Compete in sports, crypto, and entertainment prediction pools on GoodiesBox." />
      <div className="pt-24 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 text-xs font-bold px-4 py-1.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 uppercase tracking-widest"
            >
              Testnet Arena
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight"
            >
              Live <span className="text-gradient-primary">Contests</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Put your cards to work. Enter prediction cards into contests to win testnet prizes and exclusive drops.
            </motion.p>
          </div>

          <div className="flex gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12 font-bold uppercase tracking-wider flex-shrink-0">All Contests</Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-full px-8 h-12 font-bold uppercase tracking-wider flex-shrink-0">Sports</Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-full px-8 h-12 font-bold uppercase tracking-wider flex-shrink-0">Crypto</Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 rounded-full px-8 h-12 font-bold uppercase tracking-wider flex-shrink-0">Gaming</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeContests.map((contest, i) => {
              const fillPercentage = (contest.entries / contest.maxEntries) * 100;
              const spotsRemaining = contest.maxEntries - contest.entries;
              const almostFull = fillPercentage > 85;

              return (
                <motion.div
                  key={contest.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="group bg-[#0A0A0F] border border-white/10 rounded-3xl relative overflow-hidden transition-all duration-500 hover:border-white/30"
                  style={{ boxShadow: contest.featured ? `0 0 40px ${contest.color}20` : 'none' }}
                >
                  {/* Background Image & Gradient */}
                  <div className="absolute inset-0 z-0">
                    <img src={contest.bgImage} alt="" role="presentation" className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/90 to-[#0A0A0F]/60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] to-transparent opacity-80" />
                  </div>

                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                    {/* Header: Badges */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-2">
                        {contest.featured && (
                          <div className="animate-shimmer overflow-hidden bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                            <Star className="w-3 h-3 fill-black" /> Featured
                          </div>
                        )}
                        <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white backdrop-blur-md">
                          {contest.category}
                        </span>
                      </div>
                      
                      {/* Spots remaining warning */}
                      {almostFull && (
                        <div className="text-[10px] font-black uppercase tracking-widest text-[#FF3CAC] bg-[#FF3CAC]/10 border border-[#FF3CAC]/30 px-3 py-1.5 rounded-md animate-pulse">
                          Almost Full
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="mb-8">
                      <h3 className="text-3xl font-black mb-3 tracking-tight leading-none text-white">{contest.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed max-w-md">{contest.description}</p>
                    </div>

                    {/* Prize Pool */}
                    <div className="mb-8 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-5">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${contest.color}15`, border: `1px solid ${contest.color}30` }}>
                        <Trophy className="w-7 h-7" style={{ color: contest.color }} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest mb-1">Prize Pool</div>
                        <div className="text-3xl font-black tracking-tight" style={{ color: contest.color }}>
                          {contest.prizePool}
                        </div>
                      </div>
                    </div>

                    {/* Stats & Progress */}
                    <div className="grid grid-cols-2 gap-6 mb-8 mt-auto">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-white/40" />
                          <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Entries</span>
                        </div>
                        <div className="flex justify-between text-sm font-black mb-2">
                          <span className="text-white">{contest.entries}</span>
                          <span className="text-white/40">{contest.maxEntries}</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 ease-out relative"
                            style={{ width: `${fillPercentage}%`, backgroundColor: contest.color }}
                          >
                            <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                          </div>
                        </div>
                        <div className="text-[10px] text-right mt-1.5 font-bold text-white/50 uppercase">
                          {spotsRemaining} spots left
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Timer className="w-4 h-4 text-white/40" />
                          <span className="text-xs font-bold text-white/60 uppercase tracking-wider">Time Left</span>
                        </div>
                        <div className="text-xl font-black text-white">{contest.endsIn}</div>
                      </div>
                    </div>

                    <Link href="/packs" className="block mt-4">
                      <Button className="w-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 font-black uppercase tracking-widest h-14 rounded-xl group-hover:bg-white group-hover:text-black transition-all">
                        Enter Contest <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  {/* Accent border bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: contest.color }} />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </Layout>
  );
}