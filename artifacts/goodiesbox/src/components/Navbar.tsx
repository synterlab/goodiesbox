import { Link, useLocation } from 'wouter';
import { useWallet } from '@/contexts/WalletContext';
import { WalletConnectModal } from './WalletConnectModal';
import { Button } from '@/components/ui/button';
import { Menu, X, Gift } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [location] = useLocation();
  const { address, walletType, balanceSOL, balanceETH, disconnect } = useWallet();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Packs', path: '/packs' },
    { name: 'Contests', path: '/contests' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Gift className="w-6 h-6 text-[#00E5FF] group-hover:rotate-12 transition-transform" />
          <span className="font-black text-xl tracking-tight text-gradient-primary">
            GoodiesBox
          </span>
          <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded bg-[#FF3CAC]/20 text-[#FF3CAC] border border-[#FF3CAC]/50 animate-pulse hidden sm:inline-block">
            BETA TESTNET
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#00E5FF] ${
                location === link.path ? 'text-[#00E5FF]' : 'text-muted-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth / Wallet */}
        <div className="hidden md:flex items-center gap-4">
          {address ? (
            <div className="flex items-center gap-4">
              <Link href="/profile" className="text-sm font-medium hover:text-[#00E5FF] transition-colors">
                Profile
              </Link>
              <div className="flex items-center gap-2 bg-card border border-border/50 rounded-full pl-3 pr-1 py-1">
                <div className="text-xs font-mono text-muted-foreground mr-2">
                  {walletType === 'phantom' && balanceSOL !== null ? `${balanceSOL.toFixed(2)} SOL` : ''}
                  {walletType === 'metamask' && balanceETH !== null ? `${balanceETH.toFixed(4)} ETH` : ''}
                </div>
                <div className="text-sm font-medium bg-muted px-3 py-1 rounded-full">
                  {address.slice(0, 4)}...{address.slice(-4)}
                </div>
                <Button variant="ghost" size="sm" onClick={disconnect} className="h-7 w-7 p-0 rounded-full">
                  <X className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Login
              </Link>
              <WalletConnectModal>
                <Button className="bg-[#00E5FF] text-black hover:bg-[#00E5FF]/80 glow-primary rounded-full px-6 font-bold">
                  Connect Wallet
                </Button>
              </WalletConnectModal>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium p-2 rounded-md ${
                    location === link.path ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border/40">
                {address ? (
                  <div className="space-y-4">
                    <Link 
                      href="/profile" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-lg font-medium p-2"
                    >
                      My Profile
                    </Link>
                    <div className="p-3 bg-card rounded-lg border border-border/50 text-sm flex justify-between items-center">
                      <span className="font-mono">
                        {address.slice(0, 6)}...{address.slice(-4)}
                      </span>
                      <Button variant="ghost" size="sm" onClick={disconnect}>
                        Disconnect
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <WalletConnectModal>
                      <Button className="w-full bg-[#00E5FF] text-black hover:bg-[#00E5FF]/80 glow-primary font-bold">
                        Connect Wallet
                      </Button>
                    </WalletConnectModal>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}