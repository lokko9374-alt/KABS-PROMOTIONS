import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, ChevronRight, Filter, Search, Ticket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allEvents = [
  {
    id: 1,
    title: "Afrobeats Night Lagos",
    date: "Dec 28, 2024",
    time: "10:00 PM",
    location: "Lagos, Nigeria",
    type: "Club Event",
    attendees: 450,
    price: "$25",
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
    price: "$35",
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
    price: "Free",
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
    price: "$50",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 5,
    title: "Afro Nation Ghana",
    date: "Jan 27, 2025",
    time: "6:00 PM",
    location: "Accra, Ghana",
    type: "Festival",
    attendees: 5000,
    price: "$75",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 6,
    title: "Nairobi Nights",
    date: "Feb 3, 2025",
    time: "10:00 PM",
    location: "Nairobi, Kenya",
    type: "Club Event",
    attendees: 320,
    price: "$20",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 7,
    title: "Toronto Afro Carnival",
    date: "Feb 10, 2025",
    time: "2:00 PM",
    location: "Toronto, Canada",
    type: "Carnival",
    attendees: 2500,
    price: "$40",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 8,
    title: "Dubai African Night",
    date: "Feb 17, 2025",
    time: "9:00 PM",
    location: "Dubai, UAE",
    type: "Gala",
    attendees: 400,
    price: "$100",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 9,
    title: "Paris Afro Festival",
    date: "Feb 24, 2025",
    time: "4:00 PM",
    location: "Paris, France",
    type: "Festival",
    attendees: 1800,
    price: "$45",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 10,
    title: "Johannesburg Jazz & Soul",
    date: "Mar 3, 2025",
    time: "7:00 PM",
    location: "Johannesburg, SA",
    type: "Concert",
    attendees: 650,
    price: "$30",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 11,
    title: "Atlanta African Excellence",
    date: "Mar 10, 2025",
    time: "8:00 PM",
    location: "Atlanta, USA",
    type: "Gala",
    attendees: 500,
    price: "$60",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop",
    featured: false,
  },
  {
    id: 12,
    title: "Berlin Afro House",
    date: "Mar 17, 2025",
    time: "11:00 PM",
    location: "Berlin, Germany",
    type: "Club Event",
    attendees: 380,
    price: "$25",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop",
    featured: false,
  },
];

const filters = ["All Events", "Club Event", "Cultural Night", "TikTok Live", "Concert", "Festival", "Carnival", "Gala", "Online"];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Calendar className="w-4 h-4 text-gold" />
              <span className="text-sm font-inter text-muted-foreground">Upcoming Events</span>
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-7xl text-foreground mb-6">
              Experience the <span className="text-gradient-gold">Rhythm</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground mb-8">
              From Lagos to London, New York to Nairobi — discover and attend the biggest African events worldwide.
            </p>
            
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search events, artists, or cities..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <Button variant="hero" size="lg">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-inter transition-all duration-300 ${
                  index === 0
                    ? "bg-gold text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground hover:border-gold/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allEvents.map((event) => (
              <div
                key={event.id}
                className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02] hover:shadow-glow-gold"
              >
                {/* Image */}
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-gold/90 text-primary-foreground text-xs font-semibold">
                      {event.type}
                    </span>
                    {event.featured && (
                      <span className="px-3 py-1 rounded-full bg-emerald text-accent-foreground text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full glass text-foreground text-sm font-bold">
                      {event.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-syne font-bold text-lg text-foreground mb-3 line-clamp-1">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span>{event.date}</span>
                      <Clock className="w-4 h-4 text-gold ml-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-emerald" />
                      <span className="text-sm text-muted-foreground">{event.attendees} going</span>
                    </div>
                    <Button variant="hero" size="sm">
                      <Ticket className="w-4 h-4 mr-1" />
                      Get Tickets
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg">
              Load More Events
              <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
