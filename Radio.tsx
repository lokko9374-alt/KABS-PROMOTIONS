import { radioStations } from "@/data/radioStations";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Radio, Play, Pause, Volume2, Headphones, Clock, ChevronRight, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


  {
   {  id: 16, name: "Sanyu FM", genre: "Afrobeats", listeners: "—",  live: true, frequency: "88.2 FM", host: "Sanyu FM DJs", image: "https://cdn.instant.audio/images/logos/radio-co-ug/sanyu.png", description: "Uganda’s home of Afrobeat, urban hits, and nonstop entertainment.", streamUrl: "https://s44.myradiostream.com:8138/stream/1/"},
    id: 1, name: "Afrobeats FM", genre: "Afrobeats", listeners: "25K", live: true, frequency: "98.5 FM", host: "DJ Spinall", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop", description: "Non-stop Afrobeats hits from Nigeria, Ghana, and beyond." },
  { id: 2, name: "Diaspora Radio", genre: "Talk Show", listeners: "18K", live: true, frequency: "Online", host: "Aunty Funke", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop", description: "Conversations and stories from Africans living abroad." },
  { id: 3, name: "Roots & Rhythm", genre: "Traditional", listeners: "10K", live: false, frequency: "101.3 FM", host: "Papa Wemba Jr", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop", description: "Traditional African music from all 54 countries." },
  { id: 4, name: "Amapiano Central", genre: "Amapiano", listeners: "32K", live: true, frequency: "Online", host: "DJ Maphorisa", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop", description: "The hottest Amapiano tracks from South Africa." },
  { id: 5, name: "Gospel Hour", genre: "Gospel", listeners: "15K", live: true, frequency: "89.7 FM", host: "Minister Grace", image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&h=400&fit=crop", description: "Uplifting gospel music and spiritual inspiration." },
  { id: 6, name: "Highlife Classics", genre: "Highlife", listeners: "8K", live: true, frequency: "95.1 FM", host: "Uncle Ebo", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop", description: "Golden era highlife from Ghana and Nigeria." },
  { id: 7, name: "Naija Hits", genre: "Afrobeats", listeners: "28K", live: true, frequency: "102.9 FM", host: "DJ Neptune", image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600&h=400&fit=crop", description: "The biggest Nigerian hits 24/7." },
  { id: 8, name: "East Africa Vibes", genre: "Bongo Flava", listeners: "12K", live: true, frequency: "Online", host: "DJ Diamond", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop", description: "Bongo Flava, Kenyan pop, and East African sounds." },
  { id: 9, name: "Francophone Beats", genre: "French African", listeners: "9K", live: false, frequency: "94.3 FM", host: "DJ Arafat", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=400&fit=crop", description: "Coupé-Décalé, Ndombolo, and French African hits." },
  { id: 10, name: "Reggae Africa", genre: "Reggae", listeners: "11K", live: true, frequency: "97.8 FM", host: "Ras Kimono Jr", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=400&fit=crop", description: "African reggae and dancehall vibes." },
  { id: 11, name: "Hip Hop Afrika", genre: "Hip Hop", listeners: "20K", live: true, frequency: "Online", host: "Nasty C", image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop", description: "African hip hop from South Africa to Senegal." },
  { id: 12, name: "Kwaito Legends", genre: "Kwaito", listeners: "7K", live: false, frequency: "91.5 FM", host: "DJ Cleo", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop", description: "Classic and new school Kwaito from SA." },
  { id: 13, name: "Late Night Chill", genre: "R&B Soul", listeners: "14K", live: true, frequency: "Online", host: "Simi", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop", description: "Smooth African R&B and soul for late nights." },
  { id: 14, name: "Morning Show", genre: "Talk Show", listeners: "35K", live: true, frequency: "99.1 FM", host: "Toolz & Banky", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop", description: "Wake up with the biggest morning show in Africa." },
  { id: 15, name: "Afro House", genre: "Afro House", listeners: "22K", live: true, frequency: "Online", host: "Black Coffee", image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop", description: "Deep Afro House and electronic African sounds." },
];

const genres = ["All", "Afrobeats", "Amapiano", "Gospel", "Highlife", "Traditional", "Talk Show", "Hip Hop", "Reggae", "R&B Soul", "Afro House"];

const RadioPage = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [playingStation, setPlayingStation] = useState<number | null>(null);
  const [likedStations, setLikedStations] = useState<number[]>([]);

  const filteredStations = activeGenre === "All" 
    ? radioStations 
    : radioStations.filter(s => s.genre === activeGenre);

  const toggleLike = (id: number) => {
    setLikedStations(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Radio className="w-4 h-4 text-emerald" />
              <span className="text-sm font-inter text-muted-foreground">Radio Stations</span>
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-7xl text-foreground mb-6">
              <span className="text-gradient-gold">15</span> Live Radio Stations
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Tune into Afrobeats, Amapiano, Gospel, Talk Shows, and more — streaming 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Now Playing Banner */}
      {playingStation && (
        <section className="sticky top-20 z-40 py-4 bg-muted/80 backdrop-blur-xl border-y border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={radioStations.find(s => s.id === playingStation)?.image}
                    alt=""
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald" />
                  </span>
                </div>
                <div>
                  <p className="font-syne font-bold text-foreground">
                    {radioStations.find(s => s.id === playingStation)?.name}
                  </p>
                  <p className="text-sm text-muted-foreground">Now Playing</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {/* Audio Visualizer */}
                <div className="hidden md:flex items-end gap-0.5 h-8">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-emerald rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
                <Button
                  variant="hero"
                  size="icon"
                  onClick={() => setPlayingStation(null)}
                >
                  <Pause className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Genre Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-inter transition-all duration-300 ${
                  activeGenre === genre
                    ? "bg-emerald text-accent-foreground"
                    : "glass text-muted-foreground hover:text-foreground hover:border-emerald/30"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Radio Stations Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {filteredStations.map((station) => (
              <div
                key={station.id}
                className={`group relative rounded-2xl overflow-hidden glass-card transition-all duration-500 hover:scale-[1.02] ${
                  playingStation === station.id ? "ring-2 ring-emerald shadow-glow-emerald" : "hover:shadow-glow-gold"
                }`}
              >
                {/* Image */}
                <div className="relative aspect-square">
                  <img
                    src={station.image}
                    alt={station.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Live Badge */}
                  {station.live && (
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive" />
                      </span>
                      <span className="text-xs font-semibold text-destructive uppercase">Live</span>
                    </div>
                  )}

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(station.id)}
                    className="absolute top-3 right-3 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className={`w-4 h-4 ${likedStations.includes(station.id) ? "fill-destructive text-destructive" : "text-foreground"}`} />
                  </button>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setPlayingStation(playingStation === station.id ? null : station.id)}
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                        playingStation === station.id 
                          ? "bg-emerald scale-100" 
                          : "bg-gold/90 opacity-0 group-hover:opacity-100 hover:scale-110"
                      }`}
                    >
                      {playingStation === station.id ? (
                        <Pause className="w-6 h-6 text-accent-foreground" />
                      ) : (
                        <Play className="w-6 h-6 text-primary-foreground ml-1" />
                      )}
                    </button>
                  </div>

                  {/* Listeners */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-foreground">
                    <Headphones className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{station.listeners}</span>
                  </div>

                  {/* Frequency */}
                  <div className="absolute bottom-3 right-3">
                    <span className="text-xs font-mono text-foreground/80">{station.frequency}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-syne font-bold text-base text-foreground mb-1 line-clamp-1">
                    {station.name}
                  </h3>
                  <p className="text-xs text-gold mb-2">{station.genre} • {station.host}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {station.description}
                  </p>
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

export default RadioPage;
