import { Layout } from '@/components/Layout';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Solana Breakpoint 2024",
      date: "Sep 20-21, 2024",
      location: "Singapore",
      category: "Crypto",
      imageGrad: "from-[#14F195] to-[#9945FF]",
      cardsAvailable: 15
    },
    {
      id: 2,
      title: "US Presidential Election",
      date: "Nov 5, 2024",
      location: "United States",
      category: "Politics",
      imageGrad: "from-[#E74C3C] to-[#3498DB]",
      cardsAvailable: 42
    },
    {
      id: 3,
      title: "The Game Awards 2024",
      date: "Dec 12, 2024",
      location: "Los Angeles",
      category: "Gaming",
      imageGrad: "from-[#F1C40F] to-[#E67E22]",
      cardsAvailable: 28
    }
  ];

  return (
    <Layout>
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Upcoming <span className="text-[#7B2FBE]">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse real-world events that our prediction cards resolve against.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-card border border-border/50 rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-white/20 transition-all">
                
                <div className={`md:w-64 h-48 md:h-auto bg-gradient-to-br ${event.imageGrad} relative`}>
                  <div className="absolute inset-0 bg-black/40 mix-blend-overlay"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-black/50 text-white backdrop-blur-sm">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00E5FF] transition-colors">{event.title}</h3>
                  
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-sm">
                      <span className="font-bold text-white">{event.cardsAvailable}</span>
                      <span className="text-muted-foreground ml-1">Related Cards</span>
                    </div>
                    <Button variant="ghost" className="hover:bg-white/5 hover:text-[#00E5FF]">
                      View Cards <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}