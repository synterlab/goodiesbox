import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "FIFA World Cup 2026",
      date: "Jun 11 - Jul 19, 2026",
      location: "USA, Canada, Mexico",
      category: "Sports",
      imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80&fit=crop",
      gradientFallback: "from-[#27AE60] to-[#2ECC71]",
      cardsAvailable: 38
    },
    {
      id: 2,
      title: "Solana Breakpoint 2026",
      date: "Oct 9-10, 2026",
      location: "Singapore",
      category: "Crypto",
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80&fit=crop",
      gradientFallback: "from-[#14F195] to-[#9945FF]",
      cardsAvailable: 15
    },
    {
      id: 3,
      title: "The Game Awards 2026",
      date: "Dec 10, 2026",
      location: "Los Angeles",
      category: "Gaming",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80&fit=crop",
      gradientFallback: "from-[#F1C40F] to-[#E67E22]",
      cardsAvailable: 28
    }
  ];

  return (
    <Layout>
      <SEO title="Upcoming Events" description="Explore upcoming real-world events on GoodiesBox — sports, crypto, and entertainment. Collect prediction cards for each event and win when you're right." />
      <div className="pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <div className="inline-block mb-4 text-xs font-bold px-3 py-1 rounded-full bg-[#7B2FBE]/10 text-[#7B2FBE] border border-[#7B2FBE]/30 uppercase tracking-widest">
              Beta Testnet
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
              Upcoming <span className="text-[#7B2FBE]">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse real-world 2026 events that prediction cards resolve against.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-card border border-border/50 rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-white/20 transition-all">

                {/* Event image */}
                <div className="md:w-64 h-52 md:h-auto relative overflow-hidden flex-shrink-0">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-black/60 text-white backdrop-blur-sm">
                      {event.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00E5FF] transition-colors">{event.title}</h3>

                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      {event.location}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-sm">
                      <span className="font-bold text-white">{event.cardsAvailable}</span>
                      <span className="text-muted-foreground ml-1">Related Cards</span>
                    </div>
                    <Link href="/marketplace">
                      <Button variant="ghost" className="hover:bg-white/5 hover:text-[#00E5FF]">
                        View Cards <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
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
