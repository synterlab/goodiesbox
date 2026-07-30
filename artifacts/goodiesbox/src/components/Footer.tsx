import { Link } from 'wouter';
import { Gift, Github, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="relative bg-background pt-20 pb-8 mt-auto overflow-hidden">
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-[#00E5FF] glow-pulse-cyan" />
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF3CAC]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-16">

          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Gift className="w-8 h-8 text-[#00E5FF] group-hover:rotate-12 transition-transform" />
              <span className="font-black text-2xl tracking-tight text-gradient-primary">
                GoodiesBox
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Open. Collect. Win. The Web3 prediction card platform on testnet. All tokens are testnet-only and have no real-world value.
            </p>
            
            {/* Chain badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Powered By</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#14F195] shadow-[0_0_8px_#14F195]" />
                <span className="text-xs font-medium">Solana</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#627EEA] shadow-[0_0_8px_#627EEA]" />
                <span className="text-xs font-medium">EVM</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/synterlab/goodiesbox"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-white uppercase tracking-wider mb-6">Platform</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/packs" className="hover:text-[#00E5FF] transition-colors">Buy Packs</Link></li>
              <li><Link href="/contests" className="hover:text-[#00E5FF] transition-colors">Contests</Link></li>
              <li><Link href="/marketplace" className="hover:text-[#00E5FF] transition-colors">Marketplace</Link></li>
              <li><Link href="/events" className="hover:text-[#00E5FF] transition-colors">Events</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-white uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/how-it-works" className="hover:text-[#FF3CAC] transition-colors">How it Works</Link></li>
              <li>
                <a
                  href="https://github.com/synterlab/goodiesbox"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF3CAC] transition-colors"
                >
                  Source Code
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-black text-white uppercase tracking-wider mb-6">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get notified about new pack drops, contests, and platform updates.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="pl-9 bg-black/40 border-white/10 focus-visible:ring-[#00E5FF] h-11 rounded-full"
                />
              </div>
              <Button className="h-11 px-6 bg-[#FF3CAC] hover:bg-[#FF3CAC]/80 text-white rounded-full font-bold">
                Join <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="mt-8">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FF3CAC]/10 border border-[#FF3CAC]/20 text-[#FF3CAC]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3CAC] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3CAC]" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Beta Testnet Live</span>
               </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p className="font-mono">© 2026 GoodiesBox. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          <p className="font-mono opacity-60">Beta testnet only. No real value.</p>
        </div>
      </div>
    </footer>
  );
}