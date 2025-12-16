import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tv, Radio, Music, Play, ChevronRight, Headphones, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mediaCategories = [
  {
    id: "tv",
    name: "TV Stations",
    icon: Tv,
    count: 10,
    description: "Live African TV channels and entertainment",
    link: "/tv",
    color: "gold",
  },
  {
    id: "radio",
    name: "Radio Stations",
    icon: Radio,
    count: 15,
    description: "Afrobeats, talk shows, and traditional music",
    link: "/radio",
    color: "emerald",
  },
  {
    id: "music",
    name: "Music & Podcasts",
    icon: Music,
    count: 50,
    description: "Curated playlists and African stories",
    link: "/media#music",
    color: "neon-purple",
  },
];

const featuredContent = [
  { id: 1, type: "TV", name: "Kabs TV Live", viewers: "12.5K", live: true, image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=300&fit=crop" },
  { id: 2, type: "Radio", name: "Afrobeats FM", listeners: "25K", live: true, image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop" },
  { id: 3, type: "Music", name: "Top Afrobeats 2024", tracks: 50, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop" },
  { id: 4, type: "TV", name: "African Cinema", viewers: "8.2K", live: true, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop" },
];

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Radio className="w-4 h-4 text-emerald" />
              <span className="text-sm font-inter text-muted-foreground">Media Network</span>
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-7xl text-foreground mb-6">
              Your African <span className="text-gradient-gold">Media Hub</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Stream live TV, listen to radio stations, and discover the best African music and podcasts — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Media Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaCategories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="group relative rounded-2xl overflow-hidden glass-card p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow-gold"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${category.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-8 h-8 text-${category.color}`} />
                </div>
                <h3 className="font-syne font-bold text-2xl text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gold font-semibold">{category.count}+ Channels</span>
                  <ChevronRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-syne font-bold text-3xl text-foreground">
              Featured <span className="text-gradient-gold">Content</span>
            </h2>
            <Button variant="ghost" className="text-gold">
              View All <ChevronRight className="ml-1 w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredContent.map((content) => (
              <div
                key={content.id}
                className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative h-40">
                  <img
                    src={content.image}
                    alt={content.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Live Badge */}
                  {"live" in content && content.live && (
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive" />
                      </span>
                      <span className="text-xs font-semibold text-destructive uppercase">Live</span>
                    </div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 rounded-full glass text-xs font-semibold">
                      {content.type}
                    </span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-glow-gold">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-syne font-bold text-lg text-foreground mb-2">{content.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {"viewers" in content ? (
                      <>
                        <Users className="w-4 h-4 text-gold" />
                        <span>{content.viewers} watching</span>
                      </>
                    ) : "listeners" in content ? (
                      <>
                        <Headphones className="w-4 h-4 text-emerald" />
                        <span>{content.listeners} listening</span>
                      </>
                    ) : (
                      <>
                        <Music className="w-4 h-4 text-neon-purple" />
                        <span>{content.tracks} tracks</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Tv, value: "10+", label: "TV Channels" },
              { icon: Radio, value: "15+", label: "Radio Stations" },
              { icon: Music, value: "50+", label: "Playlists" },
              { icon: Users, value: "100K+", label: "Daily Listeners" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="font-syne font-bold text-3xl text-foreground mb-1">{stat.value}</div>
                <div className="font-inter text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Media;
