import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tv, Play, Pause, Volume2, Users, Clock, ChevronRight, Maximize2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tvStations = [
  { id: 1, name: "Kabs TV Live", genre: "Entertainment", viewers: "12.5K", live: true, schedule: "24/7", host: "DJ Kabs", image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&h=400&fit=crop", description: "Your #1 destination for African entertainment, music videos, and live shows." },
  { id: 2, name: "African Cinema", genre: "Movies", viewers: "8.2K", live: true, schedule: "24/7", host: "Various", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop", description: "The best of Nollywood, Ghallywood, and African cinema classics." },
  { id: 3, name: "Culture Channel", genre: "Documentary", viewers: "5.8K", live: false, schedule: "6AM - 12AM", host: "Amara Obi", image: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?w=600&h=400&fit=crop", description: "Explore African history, traditions, and modern cultural movements." },
  { id: 4, name: "Sports Africa", genre: "Sports", viewers: "15.2K", live: true, schedule: "24/7", host: "Kwame Asante", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop", description: "Live African football, athletics, and sports commentary." },
  { id: 5, name: "News24 Africa", genre: "News", viewers: "22.1K", live: true, schedule: "24/7", host: "Nneka Eze", image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop", description: "Breaking news and current affairs from across the African continent." },
  { id: 6, name: "Kids Afrique", genre: "Children", viewers: "6.4K", live: true, schedule: "6AM - 9PM", host: "Aunty Bisi", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop", description: "Educational and entertaining content for African children worldwide." },
  { id: 7, name: "Fashion & Style", genre: "Lifestyle", viewers: "9.8K", live: true, schedule: "24/7", host: "Zara Adeyemi", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop", description: "African fashion, beauty, and lifestyle trends from Lagos to Joburg." },
  { id: 8, name: "Gospel TV", genre: "Religious", viewers: "11.3K", live: true, schedule: "24/7", host: "Pastor John", image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop", description: "Inspiring gospel music, sermons, and spiritual content." },
  { id: 9, name: "Diaspora Connect", genre: "Talk Show", viewers: "7.6K", live: false, schedule: "8PM - 12AM", host: "Chidi Okoro", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop", description: "Stories and discussions from Africans living abroad." },
  { id: 10, name: "Music Video Channel", genre: "Music", viewers: "18.9K", live: true, schedule: "24/7", host: "VJ Mimi", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", description: "Non-stop Afrobeats, Amapiano, and African music videos." },
];

const genres = ["All", "Entertainment", "Movies", "Documentary", "Sports", "News", "Children", "Lifestyle", "Religious", "Talk Show", "Music"];

const TV = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [playingStation, setPlayingStation] = useState<number | null>(null);

  const filteredStations = activeGenre === "All" 
    ? tvStations 
    : tvStations.filter(s => s.genre === activeGenre);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Tv className="w-4 h-4 text-gold" />
              <span className="text-sm font-inter text-muted-foreground">TV Stations</span>
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-7xl text-foreground mb-6">
              <span className="text-gradient-gold">10</span> Live TV Channels
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Stream African entertainment, news, sports, and culture — live and on-demand.
            </p>
          </div>
        </div>
      </section>

      {/* Genre Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-inter transition-all duration-300 ${
                  activeGenre === genre
                    ? "bg-gold text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground hover:border-gold/30"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TV Stations Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStations.map((station) => (
              <div
                key={station.id}
                className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02] hover:shadow-glow-gold"
              >
                {/* Image / Video Preview */}
                <div className="relative aspect-video">
                  <img
                    src={station.image}
                    alt={station.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Live Badge */}
                  {station.live && (
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

                  {/* Genre Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-gold/90 text-primary-foreground text-xs font-semibold">
                      {station.genre}
                    </span>
                  </div>

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

                  {/* Viewers Count */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{station.viewers} watching</span>
                  </div>

                  {/* Fullscreen */}
                  <button className="absolute bottom-4 right-4 p-2 rounded-lg bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-foreground" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-syne font-bold text-xl text-foreground mb-1">
                        {station.name}
                      </h3>
                      <p className="text-sm text-gold">Hosted by {station.host}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {station.description}
                  </p>

                  {/* Schedule */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4 text-gold" />
                    <span>Schedule: {station.schedule}</span>
                  </div>

                  {/* Audio Visualizer (mock) */}
                  {playingStation === station.id && (
                    <div className="flex items-end justify-center gap-1 h-8 mb-4">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-gold rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.05}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-gold">
                      <Volume2 className="w-4 h-4 mr-2" />
                      Watch Now
                    </Button>
                    <Button variant="glow" size="sm">
                      Full Screen
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TV;
