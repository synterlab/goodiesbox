import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Wallet, PackageOpen, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Connect Wallet",
      description: "No email. No password. No KYC. Just connect your Phantom wallet for Solana Devnet or MetaMask for EVM Sepolia testnet.",
      details: "GoodiesBox is currently in Beta Testnet. All transactions use Devnet SOL or Sepolia ETH which you can get for free from public faucets.",
      icon: Wallet,
      color: "#00E5FF",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80&fit=crop"
    },
    {
      id: "02",
      title: "Rip Packs",
      description: "Visit the Goodie Store and purchase mystery packs. Each pack contains 3-5 random prediction cards for upcoming 2026 events.",
      details: "Cards range from Common to Legendary rarity. Legendary cards represent highly specific, low-probability outcomes with massive potential upside.",
      icon: PackageOpen,
      color: "#FF3CAC",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80&fit=crop"
    },
    {
      id: "03",
      title: "Enter Contests",
      description: "Put your cards to work. Submit your predictions into category-specific contests (Sports, Crypto, Gaming) before the deadline.",
      details: "When real-world events resolve, our oracle network verifies the outcome on-chain. If your card matches reality, you win a share of the prize pool.",
      icon: Trophy,
      color: "#7B2FBE",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80&fit=crop"
    }
  ];

  return (
    <Layout>
      <SEO title="How It Works" description="Learn how GoodiesBox works — connect your wallet, buy mystery packs, collect prediction cards, and enter contests to win testnet prizes on Solana and EVM." />
      <div className="pt-24 pb-32 overflow-hidden">
        
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/70"
            >
              Platform Guide
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase tracking-tight leading-[0.9]"
            >
              How It <span className="text-gradient-primary">Works</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              The adrenaline of pack ripping meets the intellectual thrill of prediction markets. Here's how to play.
            </motion.p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="container mx-auto px-4 mb-32">
          <div className="space-y-24 md:space-y-40">
            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
              >
                {/* Image side */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10 rounded-3xl" />
                  <div 
                    className="absolute -inset-4 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0 rounded-full"
                    style={{ background: step.color }}
                  />
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full aspect-square object-cover rounded-3xl relative z-10 border border-white/10 grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" 
                  />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-8 left-8 z-20 bg-black/80 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${step.color}20`, border: `1px solid ${step.color}50` }}>
                      <step.icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-0.5">Step</div>
                      <div className="text-xl font-black text-white leading-none">{step.id}</div>
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className="w-full md:w-1/2 relative z-10">
                  <div 
                    className="text-8xl md:text-[150px] font-black absolute -top-16 md:-top-32 -left-8 md:-left-16 opacity-[0.03] select-none pointer-events-none"
                    style={{ color: step.color }}
                  >
                    {step.id}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">{step.title}</h2>
                  <p className="text-xl text-white/80 mb-6 leading-relaxed font-medium">
                    {step.description}
                  </p>
                  <p className="text-base text-white/40 leading-relaxed border-l-2 pl-4" style={{ borderColor: `${step.color}50` }}>
                    {step.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="container mx-auto px-4 mb-32">
          <div className="relative rounded-3xl overflow-hidden border border-[#00E5FF]/30 p-12 md:p-20 text-center bg-[#0A0A0F]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-[#FF3CAC]/10" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">Ready to <span className="text-gradient-primary">Play?</span></h2>
              <p className="text-xl text-white/70 mb-10">Get some testnet tokens and start building your collection.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/packs">
                  <Button className="h-14 px-8 text-lg bg-[#FF3CAC] hover:bg-[#FF3CAC]/80 text-white rounded-full font-black uppercase tracking-wider glow-pulse-pink w-full sm:w-auto">
                    Open Packs Now
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button variant="outline" className="h-14 px-8 text-lg border-white/20 hover:bg-white/10 rounded-full font-black uppercase tracking-wider w-full sm:w-auto">
                    Browse Market
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about GoodiesBox.</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10 px-2">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:text-[#00E5FF] transition-colors py-6 text-left">
                Is this real money?
              </AccordionTrigger>
              <AccordionContent className="text-base text-white/60 leading-relaxed pb-6">
                No. GoodiesBox is currently running on Solana Devnet and EVM Sepolia testnets. All tokens used on the platform (Devnet SOL, Sepolia ETH, testnet USDC) have absolutely zero real-world value. This is a risk-free environment to test the platform.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-white/10 px-2">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:text-[#FF3CAC] transition-colors py-6 text-left">
                How do predictions resolve?
              </AccordionTrigger>
              <AccordionContent className="text-base text-white/60 leading-relaxed pb-6">
                We use decentralized oracle networks (like Chainlink and Pyth) to verify real-world outcomes. When a predicted event occurs (e.g., the Super Bowl ends), the oracle feeds the official result to our smart contracts, which automatically settle the contests and distribute prizes to the winning cards.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-white/10 px-2">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:text-[#7B2FBE] transition-colors py-6 text-left">
                What happens to my cards after a contest?
              </AccordionTrigger>
              <AccordionContent className="text-base text-white/60 leading-relaxed pb-6">
                If your card's prediction was correct, it becomes a "Winning" card and may grant you a share of the prize pool. Incorrect predictions are marked as "Resolved (Loss)". In both cases, you keep the card as a collectible in your wallet, representing your participation in that historical event.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-white/10 px-2">
              <AccordionTrigger className="text-lg md:text-xl font-bold hover:text-[#00E5FF] transition-colors py-6 text-left">
                Can I trade cards without entering contests?
              </AccordionTrigger>
              <AccordionContent className="text-base text-white/60 leading-relaxed pb-6">
                Yes! Many players operate solely on the Marketplace. If you pull a highly sought-after Legendary card but don't want to wait 6 months for the event to resolve, you can list it on the marketplace and sell it to someone who does. The value of cards fluctuates based on the perceived probability of the outcome.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

      </div>
    </Layout>
  );
}