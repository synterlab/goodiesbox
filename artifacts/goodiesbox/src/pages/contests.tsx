import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Timer, Users, Trophy } from 'lucide-react';
import { Link } from 'wouter';

export default function Contests() {
  const activeContests = [
    {
      id: 1,
      title: "Super Bowl LX Mega Pool",
      category: "Sports",
      prizePool: "$25,000",
      entries: 1245,
      endsIn: "4d 12h",
      color: "#FF3CAC",
      description: "Submit your NFL prediction cards for Super Bowl LX. Highest accuracy wins testnet prizes."
    },
    {
      id: 2,
      title: "Q2 2026 Crypto Outlook",
      category: "Crypto",
      prizePool: "50 SOL",
      entries: 890,
      endsIn: "12d 5h",
      color: "#00E5FF",
      description: "Hold or submit BTC and ETH prediction cards for Q2 2026 targets."
    },
    {
      id: 3,
      title: "Oscars 2026 Predictor",
      category: "Entertainment",
      prizePool: "$5,000",
      entries: 340,
      endsIn: "2mo 4d",
      color: "#7B2FBE",
      description: "Best Picture, Best Actor, Best Actress sweeps for the 98th Academy Awards."
    }
  ];

  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <div className="inline-block mb-4 text-xs font-bold px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 uppercase tracking-widest">
              Beta Testnet
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Live <span className="text-[#00E5FF]">Contests</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Put your cards to work. Enter prediction cards into contests to win testnet prizes and exclusive drops.
            </p>
          </div>

          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-5 flex-shrink-0">All Contests</Button>
            <Button variant="outline" className="rounded-full px-5 flex-shrink-0">Sports</Button>
            <Button variant="outline" className="rounded-full px-5 flex-shrink-0">Crypto</Button>
            <Button variant="outline" className="rounded-full px-5 flex-shrink-0">Gaming</Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activeContests.map((contest) => (
              <div
                key={contest.id}
                className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:border-white/20 transition-all"
              >
                <div
                  className="absolute top-0 right-0 w-64 h-64 opacity-[0.04] blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{ backgroundColor: contest.color }}
                />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 relative z-10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10 text-muted-foreground mb-3 inline-block">
                      {contest.category}
                    </span>
                    <h3 className="text-2xl font-bold">{contest.title}</h3>
                    <p className="text-muted-foreground mt-2 text-sm">{contest.description}</p>
                  </div>

                  <div className="text-left md:text-right w-full md:w-auto flex-shrink-0">
                    <div className="text-sm text-muted-foreground mb-1">Prize Pool</div>
                    <div className="text-3xl font-black" style={{ color: contest.color }}>
                      {contest.prizePool}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 relative z-10 border-t border-border/30 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Users className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{contest.entries}</div>
                      <div className="text-xs text-muted-foreground">Total Entries</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <Timer className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{contest.endsIn}</div>
                      <div className="text-xs text-muted-foreground">Time Remaining</div>
                    </div>
                  </div>
                </div>

                <Link href="/packs">
                  <Button className="w-full md:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/10 font-bold px-8">
                    Join Contest
                  </Button>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}
