import { Layout } from '@/components/Layout';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function Register() {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center p-4 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join the GoodiesBox beta testnet.</p>
          </div>

          <div className="bg-card border border-border/50 p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3CAC] opacity-[0.05] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Username</label>
                <Input type="text" placeholder="goodiedegen" className="bg-background border-border/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <Input type="email" placeholder="you@example.com" className="bg-background border-border/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Password</label>
                <Input type="password" placeholder="••••••••" className="bg-background border-border/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Confirm Password</label>
                <Input type="password" placeholder="••••••••" className="bg-background border-border/50" />
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="terms" className="border-white/20 data-[state=checked]:bg-[#00E5FF] data-[state=checked]:text-black" />
                <label
                  htmlFor="terms"
                  className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                >
                  I agree to the Beta <Link href="/terms" className="text-[#00E5FF] hover:underline">Terms of Service</Link>
                </label>
              </div>

              <Button className="w-full bg-[#FF3CAC] hover:bg-[#FF3CAC]/80 text-white font-bold mt-4" type="submit">
                Create Account
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-[#00E5FF] hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}