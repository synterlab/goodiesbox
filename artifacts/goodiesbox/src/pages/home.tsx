import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { mockCards } from '@/data/cards';
import { PredictionCard } from '@/components/PredictionCard';
import { CardHover } from '@/components/CardHover';
import { ArrowRight, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const TICKER_ITEMS = [
  { user: '0x4f2...a9', action: 'pulled a', card: 'BTC 200K 2026', rarity: 'Legendary', color: '#FFD700' },
  { user: '0xb71...3c', action: 'listed', card: 'Super Bowl LX Champ', rarity: 'Epic', color: '#FF3CAC' },
  { user: '0x9a0...7f', action: 'won the', card: 'Q2 Crypto Contest', rarity: 'Contest', color: '#00E5FF' },
  { user: '0x1d5...ee', action: 'pulled a', card: 'ETH Hits $10k', rarity: 'Rare', color: '#00E5FF' },
  { user: '0xf33...12', action: 'opened a', card: 'Founders Pack', rarity: 'Pack', color: '#7B2FBE' },
  { user: '0x82c...5b', action: 'listed', card: 'Wimbledon 2026 Winner', rarity: 'Epic', color: '#FF3CAC' },
  { user: '0xc9e...04', action: 'pulled a', card: 'GTA 6 Sales Record', rarity: 'Legendary', color: '#FFD700' },
];

export default function Home() {
  const featuredCards = mockCards.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#7B2FBE]/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#FF3CAC]/10 border border-[#FF3CAC]/30 text-xs font-bold text-[#FF3CAC] uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3CAC] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3CAC]" />
            </span>
            Beta Testnet Live — 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-[2.8rem] leading-[1.05] sm:text-6xl md:text-7xl font-black mb-5 tracking-tight"
          >
            RIP BOXES.<br />
            <span className="text-gradient-primary">COLLECT CARDS.</span><br />
            WIN PRIZES.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 px-2"
          >
            Open mystery packs. Collect 2026 prediction cards. Enter contests on Solana Devnet and EVM testnets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link href="/packs">
              <Button size="lg" className="h-12 px-7 text-base bg-[#FF3CAC] hover:bg-[#FF3CAC]/80 text-white glow-secondary rounded-full font-bold w-full sm:w-auto">
                Open Packs Now
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button size="lg" variant="outline" className="h-12 px-7 text-base border-white/20 hover:bg-white/5 rounded-full font-bold w-full sm:w-auto">
                Explore Marketplace
              </Button>
            </Link>
          </motion.div>

          {/* Live Activity Ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Live Activity</span>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              <div className="flex gap-6 animate-marquee whitespace-nowrap">
                {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground flex-shrink-0">
                    <span className="font-mono text-white/60">{item.user}</span>
                    <span>{item.action}</span>
                    <span className="font-bold" style={{ color: item.color }}>{item.card}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/40 bg-black/50 backdrop-blur-sm py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 text-center divide-x divide-border/40">
            <div>
              <div className="text-2xl sm:text-4xl font-black text-[#00E5FF] mb-1">47.8K+</div>
              <div className="text-[9px] sm:text-xs font-medium text-muted-foreground uppercase tracking-widest leading-tight">Packs Opened</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-black text-[#FF3CAC] mb-1">143K</div>
              <div className="text-[9px] sm:text-xs font-medium text-muted-foreground uppercase tracking-widest leading-tight">Cards Minted</div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl font-black text-[#7B2FBE] mb-1">$180K</div>
              <div className="text-[9px] sm:text-xs font-medium text-muted-foreground uppercase tracking-widest leading-tight">Prize Pool</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why GoodiesBox */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-black mb-3 uppercase tracking-tight">Why GoodiesBox</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">Prediction markets meet collectible cards. No fluff, no fake liquidity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                color: '#00E5FF',
                title: 'On-Chain Outcomes',
                desc: 'Every card resolution is verified by Chainlink and Pyth oracles. No admin keys. No manipulation. Results settle directly on Solana Devnet and Sepolia.',
              },
              {
                icon: TrendingUp,
                color: '#FF3CAC',
                title: 'Real Cards, Real Predictions',
                desc: 'BTC 200K, Super Bowl LX, GTA 6 launch week sales. Every card maps to a specific, time-bound, verifiable event — not a vague outcome.',
              },
              {
                icon: ShieldCheck,
                color: '#7B2FBE',
                title: 'Testnet-Safe by Design',
                desc: 'Zero real money at risk. All tokens are Devnet SOL or Sepolia ETH from public faucets. Try every feature, open every pack, lose nothing.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-0.5" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Predictions */}
      <section className="py-16 md:py-20 bg-black/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-black mb-1 md:mb-2 uppercase tracking-tight">Hot Predictions</h2>
              <p className="text-sm text-muted-foreground">Most traded 2026 cards right now.</p>
            </div>
            <Link href="/marketplace" className="flex items-center gap-1.5 text-[#00E5FF] hover:underline font-medium text-sm flex-shrink-0">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile: horizontal scroll / Desktop: grid */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:pb-0 scrollbar-hide">
            {featuredCards.map((card) => (
              <div key={card.id} className="snap-start flex-shrink-0 w-[72vw] max-w-[220px] md:w-auto md:max-w-none md:flex-shrink">
                <CardHover>
                  <PredictionCard card={card} />
                </CardHover>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/marketplace">
              <Button variant="outline" className="w-full border-white/20 rounded-full font-bold">View All Cards <ArrowRight className="w-4 h-4 ml-1" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works — compact strip */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-black text-center mb-10 uppercase tracking-tight">3 Steps to Start</h2>
          <div className="flex flex-col gap-0">
            {[
              { num: '01', color: '#00E5FF', title: 'Connect your wallet', sub: 'Phantom for Solana Devnet. MetaMask for Sepolia. No sign-up, no email, no KYC.' },
              { num: '02', color: '#FF3CAC', title: 'Open packs, reveal cards', sub: 'Each pack drops 3 random prediction cards. Rarity ranges from Common to Legendary.' },
              { num: '03', color: '#7B2FBE', title: 'Enter contests, win prizes', sub: 'Submit your cards to active contests. When the event resolves on-chain, winners get testnet rewards instantly.' },
            ].map((step, i) => (
              <div key={i} className={`flex gap-4 md:gap-8 items-start py-7 md:py-8 ${i < 2 ? 'border-b border-border/30' : ''}`}>
                <div className="font-black text-3xl md:text-4xl leading-none flex-shrink-0 w-12 md:w-16 text-right" style={{ color: step.color, opacity: 0.25 }}>
                  {step.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base md:text-xl mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.sub}</p>
                </div>
                <div className="flex-shrink-0 w-1.5 self-stretch rounded-full" style={{ background: `${step.color}40` }} />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/how-it-works">
              <Button variant="outline" className="border-white/20 rounded-full font-bold px-8">
                Full Guide <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
