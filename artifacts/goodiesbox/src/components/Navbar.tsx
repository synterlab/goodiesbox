import { Link, useLocation } from 'wouter';
import { useWallet } from '@/contexts/WalletContext';
import { WalletConnectModal } from './WalletConnectModal';
import { Button } from '@/components/ui/button';
import { Menu, X, Gift } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [location] = useLocation();
  const { address, walletType, balanceSOL, balanceETH, disconnect } = useWallet();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Packs', path: '/packs' },
    { name: 'Contests', path: '/contests' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'How It Works', path: '/how-it-works' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b border-[#00E5FF]/20 shadow-[0_4px_30px_rgba(0,229,255,0.1)]' 
          : 'bg-background/60 backdrop-blur-md border-b border-border/40'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <Gift className="w-6 h-6 text-[#00E5FF] group-hover:rotate-12 transition-transform" />
          <span className="font-black text-xl tracking-tight text-gradient-primary">
            GoodiesBox
          </span>
          <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded bg-[#FF3CAC]/20 text-[#FF3CAC] border border-[#FF3CAC]/50 animate-pulse hidden sm:inline-block">
            BETA TESTNET
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 relative h-full">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`relative px-4 h-full flex items-center text-sm font-medium transition-colors hover:text-white ${
                location === link.path ? 'text-white' : 'text-muted-foreground'
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              {location === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#FF3CAC]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
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
              <div className="flex items-center gap-2 bg-card border border-border/50 rounded-full pl-3 pr-1 py-1 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-[#FF3CAC]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-xs font-mono text-muted-foreground mr-2 relative z-10">
                  {walletType === 'phantom' && balanceSOL !== null ? `${balanceSOL.toFixed(2)} SOL` : ''}
                  {walletType === 'metamask' && balanceETH !== null ? `${balanceETH.toFixed(4)} ETH` : ''}
                </div>
                <div className="text-sm font-medium bg-muted px-3 py-1 rounded-full relative z-10">
                  {address.slice(0, 4)}...{address.slice(-4)}
                </div>
                <Button variant="ghost" size="sm" onClick={disconnect} className="h-7 w-7 p-0 rounded-full relative z-10 hover:bg-destructive/20 hover:text-destructive">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ) : (
            <>
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
          className="md:hidden p-2 text-foreground relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6 pb-6 h-[100dvh]"
          >
            <div className="flex flex-col space-y-6 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-3xl font-black uppercase tracking-tight ${
                      location === link.path ? 'text-gradient-primary' : 'text-foreground hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-6 border-t border-border/40"
            >
              {address ? (
                <div className="space-y-4">
                  <Link 
                    href="/profile" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium p-2"
                  >
                    My Profile
                  </Link>
                  <div className="p-4 bg-card rounded-xl border border-border/50 text-sm flex justify-between items-center">
                    <span className="font-mono text-lg">
                      {address.slice(0, 6)}...{address.slice(-4)}
                    </span>
                    <Button variant="ghost" size="sm" onClick={disconnect} className="text-destructive">
                      Disconnect
                    </Button>
                  </div>
                </div>
              ) : (
                <WalletConnectModal>
                  <Button className="w-full h-14 text-lg bg-[#00E5FF] text-black hover:bg-[#00E5FF]/80 glow-primary font-black uppercase rounded-full">
                    Connect Wallet
                  </Button>
                </WalletConnectModal>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}