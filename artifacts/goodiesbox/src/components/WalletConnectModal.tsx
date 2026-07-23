import { useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2, Ghost, Wallet } from 'lucide-react';

export function WalletConnectModal({ children }: { children: React.ReactNode }) {
  const { connectPhantom, connectMetaMask, isConnecting } = useWallet();
  const [open, setOpen] = useState(false);

  const handlePhantom = async () => {
    await connectPhantom();
    setOpen(false);
  };

  const handleMetaMask = async () => {
    await connectMetaMask();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border/40">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Connect Wallet</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Connect to start opening Goodie Boxes.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="text-center text-xs font-medium text-[#FF3CAC] bg-[#FF3CAC]/10 py-1.5 px-3 rounded-full mx-auto animate-pulse">
            DEVNET / TESTNET ONLY - BETA TESTNET
          </div>
          
          <Button 
            onClick={handlePhantom} 
            disabled={isConnecting}
            className="h-16 text-lg justify-start px-6 bg-[#7B2FBE] hover:bg-[#7B2FBE]/80 text-white shadow-[0_0_15px_rgba(123,47,190,0.4)]"
          >
            {isConnecting ? <Loader2 className="mr-4 h-6 w-6 animate-spin" /> : <Ghost className="mr-4 h-6 w-6" />}
            Phantom (Solana Devnet)
          </Button>

          <Button 
            onClick={handleMetaMask}
            disabled={isConnecting}
            className="h-16 text-lg justify-start px-6 bg-[#F6851B] hover:bg-[#F6851B]/80 text-white shadow-[0_0_15px_rgba(246,133,27,0.4)]"
          >
            {isConnecting ? <Loader2 className="mr-4 h-6 w-6 animate-spin" /> : <Wallet className="mr-4 h-6 w-6" />}
            MetaMask (EVM Testnet)
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-4">
            New to wallets? <a href="#" className="text-[#00E5FF] hover:underline">Learn more</a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}