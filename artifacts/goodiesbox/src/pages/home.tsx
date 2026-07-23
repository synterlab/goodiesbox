import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { mockCards } from '@/data/cards';
import { PredictionCard } from '@/components/PredictionCard';
import { CardHover } from '@/components/CardHover';
import { ArrowRight, Box, Trophy, Wallet } from 'lucide-react';

export default function Home() {
  const featuredCards = mockCards.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7B2FBE]/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#00E5FF]"
          >
            Welcome to the Beta Testnet 🚀
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight"
          >
            RIP BOXES.<br />
            <span className="text-gradient-primary">COLLECT CARDS.</span><br />
            WIN PRIZES.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            GoodiesBox is the premiere Web3 prediction card platform. Open mystery packs, collect prediction cards, and compete in contests.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/packs">
              <Button size="lg" className="h-14 px-8 text-lg bg-[#FF3CAC] hover:bg-[#FF3CAC]/80 text-white glow-secondary rounded-full font-bold w-full sm:w-auto">
                Open Packs Now
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/20 hover:bg-white/5 rounded-full font-bold w-full sm:w-auto">
                Explore Marketplace
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/40 bg-black/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/40">
            <div className="pt-4 md:pt-0">
              <div className="text-4xl font-black text-[#00E5FF] mb-2">12,450+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Packs Opened</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-4xl font-black text-[#FF3CAC] mb-2">37,350</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Cards Minted</div>
            </div>
            <div className="pt-8 md:pt-0">
              <div className="text-4xl font-black text-[#7B2FBE] mb-2">$45,000</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Prize Pool Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">How It Works</h2>
            <p className="text-muted-foreground">3 simple steps to start winning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Wallet, title: "1. Connect Wallet", desc: "Connect Phantom or MetaMask to join the beta.", color: "#00E5FF" },
              { icon: Box, title: "2. Open Packs", desc: "Buy packs to reveal mystery prediction cards.", color: "#FF3CAC" },
              { icon: Trophy, title: "3. Enter Contests", desc: "Use your cards to predict outcomes and win.", color: "#7B2FBE" },
            ].map((step, i) => (
              <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: step.color }} />
                <div className="w-16 h-16 mx-auto rounded-full bg-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="py-24 bg-black/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-4">Hot Predictions</h2>
              <p className="text-muted-foreground">The most traded cards right now.</p>
            </div>
            <Link href="/marketplace" className="hidden md:flex items-center gap-2 text-[#00E5FF] hover:underline font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCards.map((card) => (
              <CardHover key={card.id}>
                <PredictionCard card={card} />
              </CardHover>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/marketplace">
              <Button variant="outline" className="w-full">View All Cards</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}