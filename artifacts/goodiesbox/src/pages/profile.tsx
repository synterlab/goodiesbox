import { Layout } from '@/components/Layout';
import { useWallet } from '@/contexts/WalletContext';
import { Redirect, Link } from 'wouter';
import { CardHover } from '@/components/CardHover';
import { PredictionCard } from '@/components/PredictionCard';
import { mockCards } from '@/data/cards';
import { Button } from '@/components/ui/button';
import { LogOut, Copy, ExternalLink, Activity } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Profile() {
  const { address, walletType, balanceSOL, balanceETH, disconnect } = useWallet();
  const { toast } = useToast();

  // Mock user's owned cards
  const ownedCards = mockCards.slice(2, 6);

  if (!address) {
    return <Redirect to="/" />;
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    toast({ description: "Address copied to clipboard" });
  };

  const getExplorerLink = () => {
    if (walletType === 'phantom') return `https://explorer.solana.com/address/${address}?cluster=devnet`;
    return `https://sepolia.etherscan.io/address/${address}`;
  };

  return (
    <Layout>
      <div className="pt-12 pb-24">
        <div className="container mx-auto px-4">
          
          {/* Header Profile Card */}
          <div className="bg-card border border-border/50 rounded-3xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF] opacity-[0.05] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF3CAC] to-[#7B2FBE] p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <span className="text-3xl">👻</span>
                </div>
              </div>
              
              <div className="flex-1 space-y-2">
                <h1 className="text-3xl font-black">Collector #{(address.slice(2, 6))}</h1>
                
                <div className="flex flex-wrap gap-3 items-center">
                  <div className="flex items-center gap-2 bg-black/50 border border-white/10 rounded-lg px-3 py-1.5 text-sm font-mono text-muted-foreground">
                    {address.slice(0, 8)}...{address.slice(-6)}
                    <button onClick={copyAddress} className="hover:text-white ml-2"><Copy className="w-3 h-3" /></button>
                    <a href={getExplorerLink()} target="_blank" rel="noreferrer" className="hover:text-white"><ExternalLink className="w-3 h-3" /></a>
                  </div>
                  
                  <div className="text-xs font-bold px-2 py-1 rounded bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 uppercase">
                    {walletType === 'phantom' ? 'Solana Devnet' : 'Sepolia Testnet'}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full md:w-auto">
                <div className="bg-black/50 border border-white/10 rounded-xl p-4 min-w-[200px]">
                  <div className="text-xs text-muted-foreground mb-1">Wallet Balance</div>
                  <div className="text-2xl font-bold">
                    {walletType === 'phantom' ? `${balanceSOL?.toFixed(2) || 0} SOL` : `${balanceETH?.toFixed(4) || 0} ETH`}
                  </div>
                </div>
                <Button variant="destructive" onClick={disconnect} className="w-full bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20">
                  <LogOut className="w-4 h-4 mr-2" /> Disconnect
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Cards Owned", value: ownedCards.length },
              { label: "Contests Entered", value: "3" },
              { label: "Total Value", value: "3.5 SOL" },
              { label: "Prizes Won", value: "$0" },
            ].map((stat, i) => (
              <div key={i} className="bg-card/50 border border-border/30 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Collection Grid */}
          <div>
            <div className="flex items-center justify-between mb-8 border-b border-border/30 pb-4">
              <h2 className="text-2xl font-bold">My Collection</h2>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Activity className="w-4 h-4" /> Value tracking coming soon
              </div>
            </div>

            {ownedCards.length === 0 ? (
              <div className="text-center py-24 bg-card/30 rounded-2xl border border-dashed border-border/50">
                <p className="text-muted-foreground mb-4">You don't own any cards yet.</p>
                <Link href="/packs">
                  <Button className="bg-[#FF3CAC] hover:bg-[#FF3CAC]/80 text-white">Buy a Pack</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {ownedCards.map((card) => (
                  <CardHover key={card.id}>
                    <PredictionCard card={card} />
                  </CardHover>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </Layout>
  );
}