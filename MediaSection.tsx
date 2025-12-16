import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tv, Radio, Music, Play, Pause, Volume2, ChevronRight, Headphones } from "lucide-react";

const mediaCategories = [
  { id: "tv", name: "TV Stations", icon: Tv },
  { id: "radio", name: "Radio Stations", icon: Radio },
  { id: "music", name: "Music & Podcasts", icon: Music },
];

const stations = {
  tv: [
    { id: 1, name: "Kabs TV Live", genre: "Entertainment", viewers: "12.5K", live: true, image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&h=300&fit=crop" },
    { id: 2, name: "African Cinema", genre: "Movies", viewers: "8.2K", live: true, image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=300&fit=crop" },
    { id: 3, name: "Culture Channel", genre: "Documentary", viewers: "5.8K", live: false, image: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?w=400&h=300&fit=crop" },
  ],
  radio: [
    { id: 1, name: "Afrobeats FM", genre: "Music", listeners: "25K", live: true, image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=300&fit=crop" },
    { id: 2, name: "Diaspora Radio", genre: "Talk Show", listeners: "18K", live: true, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=300&fit=crop" },
    { id: 3, name: "Roots & Rhythm", genre: "Traditional", listeners: "10K", live: false, image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop" },
  ],
  music: [
    { id: 1, name: "Top Afrobeats 2024", type: "Playlist", tracks: 50, image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop" },
    { id: 2, name: "Amapiano Essentials", type: "Playlist", tracks: 40, image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop" },
    { id: 3, name: "African Stories Podcast", type: "Podcast", episodes: 120, image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&h=300&fit=crop" },
  ],
};

const MediaSection = () => {
  const [activeCategory, setActiveCategory] = useState<"tv" | "radio" | "music">("tv");
  const [playingStation, setPlayingStation] = useState<number | null>(null);

  return (
    <section id="media" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Radio className="w-4 h-4 text-emerald" />
            <span className="text-sm font-inter text-muted-foreground">Media Network</span>
          </div>
          <h2 className="font-syne font-bold text-4xl md:text-6xl text-foreground mb-4">
            Your African <span className="text-gradient-gold">Media Hub</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Stream live TV, listen to radio stations, and discover the best African music and podcasts.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl glass">
            {mediaCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as "tv" | "radio" | "music")}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-inter text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-primary-foreground shadow-glow-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations[activeCategory].map((station, index) => (
            <div
              key={station.id}
              className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02] hover:border-gold/30"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={station.image}
                  alt={station.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Live Badge */}
                {"live" in station && station.live && (
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive" />
                    </span>
                    <span className="text-xs font-semibold text-destructive uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setPlayingStation(playingStation === station.id ? null : station.id)}
                    className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-glow-gold transition-transform hover:scale-110"
                  >
                    {playingStation === station.id ? (
                      <Pause className="w-6 h-6 text-primary-foreground" />
                    ) : (
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-syne font-bold text-xl text-foreground mb-1">
                      {station.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {"genre" in station ? station.genre : station.type}
                    </p>
                  </div>
                  {activeCategory !== "music" && (
                    <div className="flex items-center gap-1.5 text-emerald">
                      <Headphones className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {"viewers" in station ? station.viewers : station.listeners}
                      </span>
                    </div>
                  )}
                  {activeCategory === "music" && (
                    <div className="text-sm text-muted-foreground">
                      {"tracks" in station ? `${station.tracks} tracks` : `${station.episodes} episodes`}
                    </div>
                  )}
                </div>

                {/* Audio Visualizer (mock) */}
                {playingStation === station.id && (
                  <div className="flex items-end justify-center gap-1 h-8 mb-4">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gold rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-gold">
                    <Volume2 className="w-4 h-4 mr-2" />
                    Listen Now
                  </Button>
                  <Button variant="glow" size="sm">
                    View Channel
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg">
            Explore All Media
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
