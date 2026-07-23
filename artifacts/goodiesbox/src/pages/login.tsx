import { Layout } from '@/components/Layout';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WalletConnectModal } from '@/components/WalletConnectModal';

export default function Login() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your GoodiesBox account.</p>
          </div>

          <div className="bg-card border border-border/50 p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF] opacity-[0.05] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <Input type="email" placeholder="you@example.com" className="bg-background border-border/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Password</label>
                <Input type="password" placeholder="••••••••" className="bg-background border-border/50" />
              </div>

              <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold" type="submit">
                Sign In
              </Button>
            </form>

            <div className="mt-6 mb-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-border/50"></div>
              <div className="text-xs text-muted-foreground uppercase font-medium">Or continue with</div>
              <div className="flex-1 h-px bg-border/50"></div>
            </div>

            <WalletConnectModal>
              <Button variant="outline" className="w-full border-white/20 bg-background hover:bg-white/5">
                Connect Wallet
              </Button>
            </WalletConnectModal>
            
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/register" className="text-[#00E5FF] hover:underline font-medium">
                Create one
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground space-x-4">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}