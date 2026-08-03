import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { mockCards } from '@/data/cards';
import { mockPacks } from '@/data/packs';
import { PredictionCard } from '@/components/PredictionCard';
import { CardHover } from '@/components/CardHover';
import { ArrowRight, Zap, ShieldCheck, TrendingUp, Trophy, Sparkles, ChevronRight, PackageOpen, Crown, Wallet } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const TICKER_ITEMS = [
  { user: '0x4f2...a9', action: 'pulled a', card: 'BTC 200K 2026', rarity: 'Legendary', color: '#FFD700' },
  { user: '0xb71...3c', action: 'listed', card: 'Super Bowl LX Champ', rarity: 'Epic', color: '#FF3CAC' },
  { user: '0x9a0...7f', action: 'won the', card: 'Q2 Crypto Contest', rarity: 'Contest', color: '#00E5FF' },
  { user: '0x1d5...ee', action: 'pulled a', card: 'ETH Hits $10k', rarity: 'Rare', color: '#00E5FF' },
  { user: '0xf33...12', action: 'opened a', card: 'Founders Pack', rarity: 'Pack', color: '#7B2FBE' },
  { user: '0x82c...5b', action: 'listed', card: 'Wimbledon 2026 Winner', rarity: 'Epic', color: '#FF3CAC' },
  { user: '0xc9e...04', action: 'pulled a', card: 'GTA 6 Sales Record', rarity: 'Legendary', color: '#FFD700' },
];

const LEADERBOARD_DATA = [
  { rank: 1, address: '0x8f...39a', cards: 412, rarest: 'SpaceX Mars', prize: '$12,450' },
  { rank: 2, address: '0x2b...11c', cards: 389, rarest: 'BTC 200k', prize: '$9,200' },
  { rank: 3, address: '0x5c...88e', cards: 310, rarest: 'Solana 10k TPS', prize: '$7,850' },
  { rank: 4, address: '0x1a...44f', cards: 275, rarest: 'GTA 6 Sales', prize: '$4,300' },
  { rank: 5, address: '0x9d...22b', cards: 198, rarest: 'Super Bowl LX', prize: '$2,100' },
];

function AnimatedCounter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;
    
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = value.toLocaleString(undefined, { maximumFractionDigits: 1 }) + suffix;
      }
    });
    
    return () => controls.stop();
  }, [from, to, inView, duration, suffix]);
  
  return <span ref={ref}>{from}{suffix}</span>;
}

export default function Home() {
  const featuredCards = mockCards.slice(0, 4);
  const featuredPacks = mockPacks.slice(0, 3);

  // Staggered text reveal variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const wordVars = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 15 } }
  };

  return (
    <Layout>
      <SEO />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
        {/* Background Glowing Orbs */}
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#00E5FF]/20 blur-[120px] rounded-full mix-blend-screen animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#FF3CAC]/10 blur-[150px] rounded-full mix-blend-screen animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-[#7B2FBE]/20 blur-[100px] rounded-full mix-blend-screen animate-float" style={{ animationDelay: '-4s' }} />
        
        {/* Live Activity Ticker (Bloomberg Terminal Style) */}
        <div className="absolute top-20 left-0 w-full bg-black/80 border-y border-[#00E5FF]/20 z-20 py-2 backdrop-blur-md">
          <div className="flex relative items-center">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 flex items-center pl-4">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14F195] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14F195]" />
              </span>
              <span className="text-[10px] font-mono text-[#14F195] uppercase tracking-widest">Live</span>
            </div>
            
            <div className="flex gap-10 animate-marquee whitespace-nowrap pl-32">
              {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="inline-flex items-center text-xs font-mono">
                  <span className="text-white/40 mr-2">[{new Date().toISOString().substring(11, 19)}]</span>
                  <span className="text-white/60 mr-1">{item.user}</span>
                  <span className="text-white/40 mr-1">{item.action}</span>
                  <span className="font-bold" style={{ color: item.color }}>{item.card}</span>
                </span>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between mt-12 gap-12 lg:gap-0">
          
          {/* Left: Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-[#FF3CAC]/10 border border-[#FF3CAC]/30 text-xs font-bold text-[#FF3CAC] uppercase tracking-widest shadow-[0_0_20px_rgba(255,60,172,0.2)]"
            >
              <Zap className="w-3.5 h-3.5" /> Devnet + Sepolia Live
            </motion.div>

            <motion.h1
              variants={containerVars}
              initial="hidden"
              animate="visible"
              className="text-[4rem] sm:text-[5rem] lg:text-[6rem] xl:text-[7.5rem] leading-[0.9] font-black mb-8 uppercase tracking-tighter"
            >
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="inline-block mr-4">RIP</motion.span>
                <motion.span variants={wordVars} className="inline-block text-white/50">BOXES.</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="inline-block text-gradient-primary">COLLECT</motion.span>
                <motion.span variants={wordVars} className="inline-block text-[#00E5FF]">CARDS.</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="inline-block text-white">WIN</motion.span>
                <motion.span variants={wordVars} className="inline-block text-[#FFD700] ml-4">PRIZES.</motion.span>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
            >
              The adrenaline of mystery packs meets the intellectual thrill of on-chain prediction markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link href="/packs">
                <Button className="h-16 px-10 text-lg bg-[#FF3CAC] hover:bg-white hover:text-black text-white glow-pulse-pink rounded-full font-black uppercase tracking-wider w-full sm:w-auto transition-all duration-300 shadow-[0_0_30px_rgba(255,60,172,0.4)]">
                  Start Ripping <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button variant="outline" className="h-16 px-10 text-lg border-white/20 hover:bg-white/10 rounded-full font-black uppercase tracking-wider w-full sm:w-auto transition-colors">
                  Explore Market
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Floating 3D Pack - hidden on mobile to avoid overlap */}
          <div className="hidden lg:flex w-full lg:w-2/5 justify-center lg:justify-end perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotateY: [-20, 20, -20],
                y: [-15, 15, -15] 
              }}
              transition={{ 
                opacity: { duration: 1 },
                scale: { duration: 1, type: "spring" },
                rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-64 h-96 md:w-80 md:h-[450px]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="absolute inset-0 rounded-2xl neon-border border-2 border-white/10 shadow-[0_0_100px_rgba(0,229,255,0.4)]"
                style={{ 
                  background: 'linear-gradient(135deg, #0A0A0F, #13131A)',
                  transform: 'translateZ(0px)'
                }}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 via-transparent to-[#FF3CAC]/20 rounded-2xl" />
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6">
                  <div className="w-24 h-24 mx-auto bg-black/40 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md mb-6 shadow-2xl">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2 text-gradient-primary">Founder's</h3>
                  <div className="text-2xl font-black text-white uppercase tracking-widest opacity-50">Edition</div>
                </div>
              </div>
              
              {/* Backing shadow layers for 3D depth */}
              <div className="absolute inset-0 rounded-2xl bg-black/80" style={{ transform: 'translateZ(-10px)', filter: 'blur(5px)' }} />
              <div className="absolute inset-0 rounded-2xl bg-black" style={{ transform: 'translateZ(-20px)', filter: 'blur(15px)' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-white/10 bg-black/60 backdrop-blur-xl py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-x-0 md:divide-x divide-white/10">
            <div>
              <div className="text-3xl md:text-5xl font-black text-[#00E5FF] mb-2 font-mono flex items-center justify-center gap-2">
                <AnimatedCounter from={0} to={47.8} suffix="K" />
                <TrendingUp className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">Packs Opened</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-black text-[#FF3CAC] mb-2 font-mono flex items-center justify-center gap-2">
                <AnimatedCounter from={0} to={143} suffix="K" />
                <TrendingUp className="w-5 h-5 text-[#FF3CAC]" />
              </div>
              <div className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">Cards Minted</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-black text-[#7B2FBE] mb-2 font-mono flex items-center justify-center gap-2">
                $<AnimatedCounter from={0} to={180} suffix="K" />
                <TrendingUp className="w-5 h-5 text-[#7B2FBE]" />
              </div>
              <div className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">Total Prizes Paid</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-black text-[#14F195] mb-2 font-mono flex items-center justify-center gap-2">
                <AnimatedCounter from={0} to={12.5} suffix="K" />
              </div>
              <div className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest">Active Players</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Packs Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                Trending Now
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">Hot <span className="text-[#FF3CAC]">Packs</span></h2>
            </div>
            <Link href="/packs">
              <Button variant="outline" className="border-white/20 hover:bg-white hover:text-black rounded-full font-black uppercase tracking-wider transition-colors">
                View Store <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPacks.map((pack, i) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#0A0A0F] border border-white/10 rounded-3xl p-6 overflow-hidden hover:border-white/30 transition-colors"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top right, ${pack.gradientTo}, transparent 70%)` }} />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-2xl font-black tracking-tight">{pack.name}</h3>
                  <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1.5 rounded-md bg-white/10 border border-white/20 backdrop-blur-md" style={{ color: pack.gradientFrom }}>
                    {pack.rarity}
                  </span>
                </div>
                
                <div className="h-48 mb-8 flex justify-center items-center perspective-1000">
                  <div 
                    className="w-32 h-44 rounded-xl relative transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-2xl"
                    style={{ background: `linear-gradient(135deg, ${pack.gradientFrom}, ${pack.gradientTo})` }}
                  >
                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay rounded-xl border border-white/30" />
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white/80" />
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-6 relative z-10">
                  <div>
                    <div className="text-sm font-black text-white/50 uppercase tracking-widest mb-1">Price</div>
                    <div className="text-2xl font-black text-gradient-primary leading-none">{pack.priceSOL} SOL</div>
                  </div>
                  <Link href="/packs">
                    <Button className="bg-white text-black hover:bg-gray-200 font-black uppercase tracking-wider rounded-full px-6">
                      Buy <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Prediction Cards */}
      <section className="py-24 bg-black/40 border-t border-white/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#FF3CAC]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                Hot Cards
              </div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">Featured <span className="text-[#00E5FF]">Cards</span></h2>
            </div>
            <Link href="/marketplace">
              <Button variant="outline" className="border-white/20 hover:bg-white hover:text-black rounded-full font-black uppercase tracking-wider transition-colors">
                Browse All <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <CardHover glowColor={card.gradientFrom + '80'}>
                  <PredictionCard card={card} />
                </CardHover>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-24 bg-black/40 border-y border-white/10 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#00E5FF]/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Top <span className="text-[#00E5FF]">Collectors</span></h2>
            <p className="text-xl text-white/60">The wallets holding the most valuable prediction portfolios on testnet.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-[#0A0A0F] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white/50">
              <div className="col-span-2 md:col-span-1 text-center">Rank</div>
              <div className="col-span-5 md:col-span-4">Wallet</div>
              <div className="col-span-5 md:col-span-3 text-right md:text-left">Cards</div>
              <div className="hidden md:block col-span-2">Rarest Pull</div>
              <div className="hidden md:block col-span-2 text-right">Prizes</div>
            </div>

            <div className="divide-y divide-white/5">
              {LEADERBOARD_DATA.map((user, i) => (
                <motion.div 
                  key={user.address}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-12 gap-4 p-6 items-center hover:bg-white/5 transition-colors group"
                >
                  <div className="col-span-2 md:col-span-1 flex justify-center">
                    {user.rank === 1 ? (
                      <div className="w-8 h-8 rounded-full bg-[#FFD700]/20 border border-[#FFD700] flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                        <Crown className="w-4 h-4 text-[#FFD700]" />
                      </div>
                    ) : user.rank === 2 ? (
                      <div className="w-8 h-8 rounded-full bg-[#C0C0C0]/20 border border-[#C0C0C0] flex items-center justify-center">
                        <span className="font-black text-[#C0C0C0]">{user.rank}</span>
                      </div>
                    ) : user.rank === 3 ? (
                      <div className="w-8 h-8 rounded-full bg-[#CD7F32]/20 border border-[#CD7F32] flex items-center justify-center">
                        <span className="font-black text-[#CD7F32]">{user.rank}</span>
                      </div>
                    ) : (
                      <span className="font-black text-white/30">{user.rank}</span>
                    )}
                  </div>
                  
                  <div className="col-span-5 md:col-span-4 font-mono font-bold text-sm md:text-base group-hover:text-[#00E5FF] transition-colors">
                    {user.address}
                  </div>
                  
                  <div className="col-span-5 md:col-span-3 text-right md:text-left font-black text-lg">
                    {user.cards}
                  </div>
                  
                  <div className="hidden md:block col-span-2 text-sm text-white/70 font-medium truncate">
                    {user.rarest}
                  </div>
                  
                  <div className="hidden md:block col-span-2 text-right font-mono font-bold text-[#14F195]">
                    {user.prize}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button variant="outline" className="border-white/20 hover:bg-white hover:text-black rounded-full font-black uppercase tracking-wider px-8 h-12">
              Connect Wallet to Join
            </Button>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-[#0A0A0F]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">The <span className="text-[#7B2FBE]">Roadmap</span></h2>
            <p className="text-xl text-white/60">From Devnet to Mainnet. The path to the ultimate prediction market.</p>
          </div>

          <div className="relative">
            {/* Vertical Line — left-aligned on mobile, centered on desktop */}
            <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 z-0" />
            <div className="absolute left-7 md:left-1/2 top-0 h-[60%] w-[2px] bg-gradient-to-b from-[#00E5FF] to-[#7B2FBE] -translate-x-1/2 z-0 shadow-[0_0_10px_#00E5FF]" />

            <div className="space-y-8 md:space-y-12 relative z-10">
              {[
                { quarter: "Q1 2026", title: "Beta Testnet Launch", desc: "Core packs, basic prediction cards, and Phantom wallet integration.", status: "completed" },
                { quarter: "Q2 2026", title: "EVM Support + Sepolia", desc: "MetaMask support, cross-chain UI, and initial marketplace launch.", status: "completed" },
                { quarter: "Q3 2026", title: "Tournament Mode", desc: "Multi-week prediction leagues with progressive elimination.", status: "current" },
                { quarter: "Q4 2026", title: "Mainnet Launch", desc: "Real money, real stakes. Migration of testnet rewards to mainnet airdrops.", status: "upcoming" },
                { quarter: "2027", title: "DAO Governance", desc: "Community token launch. Holders vote on which events get card sets.", status: "upcoming" },
              ].map((item, i) => (
                /* Each row is `relative` so the node positions inside it, not the outer wrapper */
                <div key={i} className={`relative min-h-[4rem] flex flex-col md:flex-row md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content — always pl-16 on mobile to clear the left-side timeline */}
                  <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="text-[#00E5FF] font-black uppercase tracking-widest text-xs md:text-sm mb-1 md:mb-2">{item.quarter}</div>
                    <h3 className={`text-xl md:text-2xl font-black mb-2 md:mb-3 uppercase tracking-tight ${item.status === 'upcoming' ? 'text-white/50' : 'text-white'}`}>{item.title}</h3>
                    <p className="text-sm md:text-base text-white/60 leading-relaxed font-medium">{item.desc}</p>
                  </div>

                  {/* Timeline Node — centered vertically per-item on both mobile and desktop */}
                  <div className="absolute left-7 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-14 h-14 bg-[#0A0A0F] rounded-full border-[4px] border-[#0A0A0F]">
                    {item.status === 'completed' ? (
                      <div className="w-8 h-8 rounded-full bg-[#00E5FF] flex items-center justify-center shadow-[0_0_15px_#00E5FF]">
                        <ShieldCheck className="w-4 h-4 text-black" />
                      </div>
                    ) : item.status === 'current' ? (
                      <div className="w-8 h-8 rounded-full bg-[#7B2FBE] flex items-center justify-center shadow-[0_0_20px_#7B2FBE] animate-pulse">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-white/20" />
                    )}
                  </div>

                  {/* Spacer for desktop alternating layout */}
                  <div className="hidden md:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why GoodiesBox / How it Works Strip */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tight">3 Steps to <span className="text-[#FF3CAC]">Play</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left mb-16">
            <div className="relative">
              <div className="text-8xl font-black absolute -top-10 -left-6 text-[#00E5FF]/10 z-0 select-none">1</div>
              <div className="relative z-10">
                <Wallet className="w-8 h-8 text-[#00E5FF] mb-6" />
                <h3 className="text-2xl font-black mb-3 uppercase">Connect</h3>
                <p className="text-white/60">Link Phantom or MetaMask. No sign-up, no email. Web3 native.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="text-8xl font-black absolute -top-10 -left-6 text-[#FF3CAC]/10 z-0 select-none">2</div>
              <div className="relative z-10">
                <PackageOpen className="w-8 h-8 text-[#FF3CAC] mb-6" />
                <h3 className="text-2xl font-black mb-3 uppercase">Rip Packs</h3>
                <p className="text-white/60">Buy mystery packs to collect outcome cards for real-world events.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="text-8xl font-black absolute -top-10 -left-6 text-[#7B2FBE]/10 z-0 select-none">3</div>
              <div className="relative z-10">
                <Trophy className="w-8 h-8 text-[#7B2FBE] mb-6" />
                <h3 className="text-2xl font-black mb-3 uppercase">Win Prizes</h3>
                <p className="text-white/60">Enter cards into contests. If the oracle proves you right, you win.</p>
              </div>
            </div>
          </div>

          <Link href="/how-it-works">
            <Button variant="outline" className="h-14 px-8 text-lg border-white/20 hover:bg-white hover:text-black rounded-full font-black uppercase tracking-wider transition-colors">
              Read the Full Guide <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
      
    </Layout>
  );
}