import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ChevronRight, Filter } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Afrobeats Night Lagos",
    date: "Dec 28, 2024",
    time: "10:00 PM",
    location: "Lagos, Nigeria",
    type: "Club Event",
    attendees: 450,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Diaspora Connect - London",
    date: "Jan 5, 2025",
    time: "7:00 PM",
    location: "London, UK",
    type: "Cultural Night",
    attendees: 280,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "TikTok Live Takeover",
    date: "Jan 12, 2025",
    time: "8:00 PM",
    location: "Online",
    type: "TikTok Live",
    attendees: 1200,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Amapiano Festival NYC",
    date: "Jan 20, 2025",
    time: "9:00 PM",
    location: "New York, USA",
    type: "Concert",
    attendees: 850,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
    featured: true,
  },
];

const filters = ["All Events", "Club Events", "Cultural Night", "TikTok Live", "Concert", "Online"];

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All Events");

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-emerald/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-sm font-inter text-muted-foreground">Upcoming Events</span>
          </div>
          <h2 className="font-syne font-bold text-4xl md:text-6xl text-foreground mb-4">
            Experience the <span className="text-gradient-gold">Rhythm</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            From Lagos to London, New York to Nairobi — join the biggest African events worldwide.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-inter transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gold text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground hover:border-gold/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02] hover:shadow-glow-gold ${
                event.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className={`relative ${event.featured ? "h-80 md:h-full" : "h-48"}`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-gold/90 text-primary-foreground text-xs font-semibold">
                    {event.type}
                  </span>
                </div>

                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-emerald text-accent-foreground text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className={`font-syne font-bold text-foreground mb-3 ${event.featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
                  {event.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald" />
                    <span className="text-sm text-muted-foreground">{event.attendees} attending</span>
                  </div>
                  <Button variant="hero" size="sm" className="group/btn">
                    Get Tickets
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg">
            View All Events
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
