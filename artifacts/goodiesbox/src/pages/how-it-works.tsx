import { Layout } from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Flame, Star, Zap } from 'lucide-react';

const RARITIES = [
  { name: 'Common', pct: '60%', color: '#9CA3AF', desc: 'Baseline predictions on well-known outcomes.' },
  { name: 'Rare', pct: '25%', color: '#00E5FF', desc: 'Specific calls with meaningful upside.' },
  { name: 'Epic', pct: '12%', color: '#FF3CAC', desc: 'High-conviction niche predictions.' },
  { name: 'Legendary', pct: '3%', color: '#FFD700', desc: 'Audacious calls. Massive multiplier if correct.' },
];

export default function HowItWorks() {
  return (
    <Layout>
      <div className="pt-14 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-bold text-[#00E5FF] uppercase tracking-widest">
              Beta Testnet
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-5 uppercase tracking-tight">
              How It <span className="text-[#00E5FF]">Works</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              GoodiesBox is a Web3 prediction card game on testnet. Here's exactly what happens from wallet connect to contest payout.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-0 mb-20">
            {[
              {
                num: '01',
                color: '#00E5FF',
                title: 'Connect your wallet',
                body: (
                  <>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      GoodiesBox runs on <strong className="text-white">Solana Devnet</strong> (for Phantom users) and <strong className="text-white">Sepolia testnet</strong> (for MetaMask users). Click "Connect Wallet" in the top-right, choose your wallet, and approve the connection. No email. No sign-up. No KYC.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Need testnet tokens? Grab <strong className="text-white">Devnet SOL</strong> from <a href="https://faucet.solana.com" target="_blank" rel="noopener" className="text-[#00E5FF] hover:underline">faucet.solana.com</a> or <strong className="text-white">Sepolia ETH</strong> from <a href="https://sepoliafaucet.com" target="_blank" rel="noopener" className="text-[#00E5FF] hover:underline">sepoliafaucet.com</a>. Both are free and instant.
                    </p>
                  </>
                ),
              },
              {
                num: '02',
                color: '#FF3CAC',
                title: 'Buy packs & reveal cards',
                body: (
                  <>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Head to the <Link href="/packs" className="text-[#FF3CAC] hover:underline font-medium">Packs store</Link>. Each pack costs testnet tokens and drops <strong className="text-white">3 random prediction cards</strong> when opened. Cards are minted on-chain to your wallet immediately.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      Every card represents a specific, time-bound, verifiable prediction tied to a real 2026 event — from Bitcoin price targets to Super Bowl LX results to GTA 6 launch week sales.
                    </p>
                    {/* Rarity table */}
                    <div className="bg-card border border-border/50 rounded-xl overflow-hidden">
                      <div className="grid grid-cols-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border-b border-border/40 px-4 py-2.5">
                        <span>Rarity</span>
                        <span className="text-center">Drop Rate</span>
                        <span className="col-span-2 text-right">What it means</span>
                      </div>
                      {RARITIES.map((r) => (
                        <div key={r.name} className="grid grid-cols-4 px-4 py-3 border-b border-border/20 last:border-0 items-center">
                          <span className="text-sm font-bold" style={{ color: r.color }}>{r.name}</span>
                          <span className="text-sm font-mono text-center text-white">{r.pct}</span>
                          <span className="col-span-2 text-xs text-muted-foreground text-right">{r.desc}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ),
              },
              {
                num: '03',
                color: '#7B2FBE',
                title: 'Build your collection',
                body: (
                  <>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Cards you don't want can be listed on the <Link href="/marketplace" className="text-[#7B2FBE] hover:underline font-medium">Marketplace</Link> for other players to buy. Set your price in SOL, and the contract holds escrow until a buyer takes it.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Strategy matters. Legendary Crypto cards that expire Q4 2026 are worth more early in the year. Common cards for events that already resolved are cheap floor buys for collectors.
                    </p>
                  </>
                ),
              },
              {
                num: '04',
                color: '#FF3CAC',
                title: 'Enter contests & collect payouts',
                body: (
                  <>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Active <Link href="/contests" className="text-[#FF3CAC] hover:underline font-medium">Contests</Link> accept card submissions during their entry window. Submit matching cards to a contest (e.g. a Crypto card to the Q2 Crypto Contest) and your entry is locked on-chain.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      When the event resolves, <strong className="text-white">Chainlink</strong> and <strong className="text-white">Pyth oracles</strong> push the outcome on-chain. Correct predictions receive testnet prize tokens directly to their wallet — no claim button, no waiting room.
                    </p>
                  </>
                ),
              },
            ].map((step, i) => (
              <div key={i} className={`flex gap-5 md:gap-8 py-10 md:py-12 ${i < 3 ? 'border-b border-border/30' : ''}`}>
                <div className="flex-shrink-0 pt-1">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-sm md:text-base"
                    style={{ background: `${step.color}18`, color: step.color, border: `1px solid ${step.color}30` }}
                  >
                    {step.num}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg md:text-2xl font-bold mb-4">{step.title}</h2>
                  {step.body}
                </div>
              </div>
            ))}
          </div>

          {/* Card Burn mechanic */}
          <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF3CAC] to-transparent" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF3CAC]/10 border border-[#FF3CAC]/30 flex items-center justify-center flex-shrink-0">
                <Flame className="w-5 h-5 text-[#FF3CAC]" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2">What happens when an event ends?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Once an event resolves, associated cards are <strong className="text-white">locked and burned from active trading</strong>. They stay in your collection as historical proof — a permanent on-chain record that you called Bitcoin hitting $200K in 2026. Burned cards can't be relisted but they're yours forever.
                </p>
              </div>
            </div>
          </div>

          {/* Tokenomics note */}
          <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#7B2FBE] to-transparent" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#7B2FBE]/10 border border-[#7B2FBE]/30 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-[#7B2FBE]" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg mb-2">Testnet only — zero real money</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every token used on GoodiesBox — pack prices, marketplace listings, contest prize pools — is <strong className="text-white">Devnet SOL or Sepolia ETH</strong> from public faucets. There is no mainnet. There is no presale. Nothing you do on this platform involves real currency. This is a beta testnet for stress-testing the prediction market mechanics before any mainnet launch.
                </p>
              </div>
            </div>
          </div>

          {/* Packs preview */}
          <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 mb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00E5FF] to-transparent" />
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-[#00E5FF]" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base md:text-lg mb-2">Available pack types</h3>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {[
                    { name: 'Starter Pack', price: '0.1 SOL', desc: '3 cards, Common–Rare pool' },
                    { name: 'Crypto Pack', price: '0.5 SOL', desc: 'Crypto-only, boosted Epic rate' },
                    { name: 'Sports Pack', price: '0.5 SOL', desc: 'Sports-only, boosted Epic rate' },
                    { name: 'Founders Pack', price: '2.5 SOL', desc: '5 cards, guaranteed 1 Legendary' },
                  ].map((p) => (
                    <div key={p.name} className="bg-background/50 border border-border/40 rounded-xl p-3">
                      <div className="font-bold text-sm mb-0.5">{p.name}</div>
                      <div className="text-[#00E5FF] text-xs font-mono mb-1">{p.price}</div>
                      <div className="text-muted-foreground text-xs">{p.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <Link href="/packs">
                    <Button className="bg-[#FF3CAC] hover:bg-[#FF3CAC]/80 text-white rounded-full font-bold text-sm h-10 px-6">
                      Open Packs <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  q: 'Is GoodiesBox free to play?',
                  a: 'Yes. All packs are priced in Devnet SOL or Sepolia ETH, both available free from public faucets. There is no purchase required with real money.',
                },
                {
                  q: 'How are event outcomes verified?',
                  a: 'Chainlink and Pyth oracles push real-world outcomes on-chain automatically. The smart contracts resolve the contest without any admin action, so results cannot be tampered with.',
                },
                {
                  q: 'Can I trade cards after an event finishes?',
                  a: 'No. Once the associated event resolves, cards are locked and removed from active trading. They remain in your wallet as non-transferable collectibles.',
                },
                {
                  q: 'What wallets are supported?',
                  a: 'Phantom (Solana Devnet) and MetaMask (Sepolia). Mobile wallet support via WalletConnect is planned for a future release.',
                },
                {
                  q: 'Will there be a mainnet launch?',
                  a: 'The current testnet phase is for stress-testing mechanics and gathering community feedback. Mainnet decisions depend on how the beta performs. No date is confirmed.',
                },
                {
                  q: 'Where is the source code?',
                  a: 'Fully open-source on GitHub at github.com/synterlab/goodiesbox. Smart contracts, frontend, and data layer are all public.',
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/40">
                  <AccordionTrigger className="hover:text-[#00E5FF] text-left text-sm md:text-base">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </Layout>
  );
}
