import { Link } from 'wouter';
import { Gift, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">

          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Gift className="w-6 h-6 text-[#00E5FF]" />
              <span className="font-black text-xl tracking-tight text-gradient-primary">
                GoodiesBox
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Open. Collect. Win. The Web3 prediction card platform on testnet. All tokens are testnet-only and have no real-world value.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/synterlab/goodiesbox"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/packs" className="hover:text-[#00E5FF] transition-colors">Buy Packs</Link></li>
              <li><Link href="/contests" className="hover:text-[#00E5FF] transition-colors">Contests</Link></li>
              <li><Link href="/marketplace" className="hover:text-[#00E5FF] transition-colors">Marketplace</Link></li>
              <li><Link href="/events" className="hover:text-[#00E5FF] transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
              <li><Link href="/how-it-works" className="hover:text-[#FF3CAC] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li>
                <div className="inline-block mt-4 text-[10px] font-bold px-2 py-1 rounded bg-[#FF3CAC]/10 text-[#FF3CAC] border border-[#FF3CAC]/30">
                  BETA TESTNET
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <p>2026 GoodiesBox. All rights reserved.</p>
          <p>Beta testnet only. All assets have no real-world monetary value.</p>
        </div>
      </div>
    </footer>
  );
}
