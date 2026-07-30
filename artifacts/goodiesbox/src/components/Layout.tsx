import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-[#00E5FF]/30 selection:text-white">
      <div className="grain-overlay" />
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-grid-pattern opacity-50" />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}