import { Connection, PublicKey } from '@solana/web3.js';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

export type WalletType = 'phantom' | 'metamask' | null;

interface WalletContextType {
  address: string | null;
  walletType: WalletType;
  balanceSOL: number | null;
  balanceETH: number | null;
  connectPhantom: () => Promise<void>;
  connectMetaMask: () => Promise<void>;
  disconnect: () => void;
  isConnecting: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<string | null>(null);
  const [walletType, setWalletType] = useState<WalletType>(null);
  const [balanceSOL, setBalanceSOL] = useState<number | null>(null);
  const [balanceETH, setBalanceETH] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const connectPhantom = async () => {
    setIsConnecting(true);
    try {
      const provider = (window as any).solana;
      if (!provider?.isPhantom) {
        toast({
          title: "Phantom not found",
          description: "Please install the Phantom wallet extension.",
          variant: "destructive"
        });
        window.open('https://phantom.app/', '_blank');
        return;
      }

      const resp = await provider.connect();
      const pubKey = resp.publicKey.toString();
      setAddress(pubKey);
      setWalletType('phantom');

      toast({
        title: "Connected to Phantom",
        description: `Address: ${pubKey.slice(0, 4)}...${pubKey.slice(-4)}`,
      });

      // Get Devnet balance
      const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
      const balance = await connection.getBalance(new PublicKey(pubKey));
      setBalanceSOL(balance / 1e9);

    } catch (err: any) {
      toast({
        title: "Connection Failed",
        description: err.message || "Failed to connect to Phantom",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const connectMetaMask = async () => {
    setIsConnecting(true);
    try {
      const provider = (window as any).ethereum;
      if (!provider) {
        toast({
          title: "MetaMask not found",
          description: "Please install the MetaMask wallet extension.",
          variant: "destructive"
        });
        window.open('https://metamask.io/', '_blank');
        return;
      }

      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      
      // Switch to Sepolia
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xaa36a7' }], // Sepolia chainId
        });
      } catch (switchError: any) {
        if (switchError.code === 4902) {
          toast({
            title: "Network not found",
            description: "Please add Sepolia testnet to your MetaMask.",
            variant: "destructive"
          });
        }
      }

      setAddress(account);
      setWalletType('metamask');

      toast({
        title: "Connected to MetaMask",
        description: `Address: ${account.slice(0, 4)}...${account.slice(-4)}`,
      });

      // Get ETH Balance
      const balanceHex = await provider.request({
        method: 'eth_getBalance',
        params: [account, 'latest']
      });
      const balanceStr = parseInt(balanceHex, 16);
      setBalanceETH(balanceStr / 1e18);

    } catch (err: any) {
      toast({
        title: "Connection Failed",
        description: err.message || "Failed to connect to MetaMask",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = () => {
    if (walletType === 'phantom') {
      (window as any).solana?.disconnect();
    }
    setAddress(null);
    setWalletType(null);
    setBalanceSOL(null);
    setBalanceETH(null);
    toast({
      title: "Disconnected",
      description: "Wallet has been disconnected.",
    });
  };

  return (
    <WalletContext.Provider value={{
      address,
      walletType,
      balanceSOL,
      balanceETH,
      connectPhantom,
      connectMetaMask,
      disconnect,
      isConnecting
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}
