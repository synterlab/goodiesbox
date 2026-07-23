import { Layout } from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function HowItWorks() {
  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              How It <span className="text-[#00E5FF]">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the GoodiesBox platform in minutes. Buy packs, collect cards, and win contests.
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="aspect-video w-full bg-card border border-border/50 rounded-2xl mb-24 relative overflow-hidden flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7B2FBE]/20 to-[#00E5FF]/20 mix-blend-overlay" />
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform z-10 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent" />
            </div>
            <p className="absolute bottom-6 left-6 text-sm font-bold tracking-widest uppercase text-white/50">Watch Tutorial</p>
          </div>

          <div className="space-y-24 mb-24">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center font-bold text-xl mb-6">1</div>
                <h2 className="text-3xl font-bold">Connect & Buy Packs</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Start by connecting your Solana (Phantom) or Ethereum (MetaMask) wallet. Navigate to the Packs store and purchase mystery boxes using testnet tokens. Each box contains a random assortment of prediction cards based on real-world events.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-64 bg-card border border-border/50 rounded-xl relative overflow-hidden p-6 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 to-transparent" />
                <div className="text-xs font-mono text-[#00E5FF] opacity-50 mb-2">await provider.connect()</div>
                <div className="h-12 w-full bg-black/50 rounded border border-white/10" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#FF3CAC]/20 text-[#FF3CAC] flex items-center justify-center font-bold text-xl mb-6">2</div>
                <h2 className="text-3xl font-bold">Build Your Collection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Open your packs to reveal your cards. Cards have different rarities (Common to Legendary) and represent specific predictions (e.g., "BTC hits $100k"). Trade cards on the marketplace to build the ultimate prediction deck.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-64 bg-card border border-border/50 rounded-xl relative overflow-hidden flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-bl from-[#FF3CAC]/10 to-transparent" />
                <div className="w-32 h-48 bg-black rounded-lg border border-white/20 -rotate-12 translate-x-4 absolute" />
                <div className="w-32 h-48 bg-black rounded-lg border border-[#FF3CAC]/50 rotate-6 -translate-x-4 absolute shadow-[0_0_30px_rgba(255,60,172,0.2)]" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#7B2FBE]/20 text-[#7B2FBE] flex items-center justify-center font-bold text-xl mb-6">3</div>
                <h2 className="text-3xl font-bold">Enter Contests & Win</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Submit your cards into live contests. When the real-world events resolve, points are awarded for accurate predictions. Top the leaderboard to win prize pools paid out in crypto.
                </p>
              </div>
              <div className="md:w-1/2 w-full h-64 bg-card border border-border/50 rounded-xl relative overflow-hidden p-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7B2FBE]/10 to-transparent" />
                <div className="flex justify-between items-end h-full">
                  <div className="w-8 h-24 bg-white/5 rounded-t" />
                  <div className="w-8 h-48 bg-[#7B2FBE] rounded-t shadow-[0_0_20px_rgba(123,47,190,0.5)]" />
                  <div className="w-8 h-32 bg-white/10 rounded-t" />
                  <div className="w-8 h-16 bg-white/5 rounded-t" />
                  <div className="w-8 h-40 bg-white/10 rounded-t" />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border/40">
                <AccordionTrigger className="hover:text-[#00E5FF]">Is GoodiesBox free to play?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Currently, GoodiesBox is in Beta Testnet. All transactions use testnet tokens (Devnet SOL or Sepolia ETH), which have no real-world value. You can get these for free from faucets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border/40">
                <AccordionTrigger className="hover:text-[#00E5FF]">How are event outcomes verified?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We use decentralized oracles (like Chainlink and Pyth) to verify real-world outcomes securely on-chain. This ensures no manipulation in contest results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border/40">
                <AccordionTrigger className="hover:text-[#00E5FF]">Can I trade cards after an event finishes?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Once an event resolves, the associated cards are locked and "burned" from active trading, but remain in your collection as historical memorabilia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-border/40">
                <AccordionTrigger className="hover:text-[#00E5FF]">What wallets are supported?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We currently support Phantom for Solana Devnet and MetaMask for EVM Testnets (Sepolia). More wallet integrations are planned for mainnet.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div>
    </Layout>
  );
}