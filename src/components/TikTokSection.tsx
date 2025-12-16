import { Button } from "@/components/ui/button";
import { Play, Heart, MessageCircle, Share2, TrendingUp, Flame } from "lucide-react";

const tiktokPosts = [
  {
    id: 1,
    creator: "@afrodancer_jay",
    caption: "When the Amapiano hits different 🔥💃",
    likes: "245K",
    comments: "12.3K",
    thumbnail: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=600&fit=crop",
    trending: true,
  },
  {
    id: 2,
    creator: "@lagos_vibes",
    caption: "Lagos nightlife hits different ✨🌃",
    likes: "180K",
    comments: "8.9K",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
    trending: true,
  },
  {
    id: 3,
    creator: "@african_queen",
    caption: "Traditional meets modern 👑",
    likes: "156K",
    comments: "7.2K",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=600&fit=crop",
    trending: false,
  },
  {
    id: 4,
    creator: "@dj_kabs",
    caption: "Behind the decks at Kabs Live 🎧",
    likes: "198K",
    comments: "10.1K",
    thumbnail: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=600&fit=crop",
    trending: true,
  },
  {
    id: 5,
    creator: "@naija_comedy",
    caption: "When your aunty hears you're coming home 😂",
    likes: "320K",
    comments: "25.4K",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    trending: false,
  },
  {
    id: 6,
    creator: "@afrofashion",
    caption: "Ankara but make it fashion 🧵✨",
    likes: "134K",
    comments: "6.8K",
    thumbnail: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=400&h=600&fit=crop",
    trending: false,
  },
];

const TikTokSection = () => {
  return (
    <section id="tiktok" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Flame className="w-4 h-4 text-destructive" />
            <span className="text-sm font-inter text-muted-foreground">Trending Now</span>
          </div>
          <h2 className="font-syne font-bold text-4xl md:text-6xl text-foreground mb-4">
            The <span className="text-gradient-gold">TikTok</span> Wall
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the hottest African content creators and viral moments curated just for you.
          </p>
        </div>

        {/* TikTok Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tiktokPosts.map((post, index) => (
            <div
              key={post.id}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: index === 0 || index === 3 ? "9/16" : "9/12" }}
            >
              {/* Thumbnail */}
              <img
                src={post.thumbnail}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              
              {/* Trending Badge */}
              {post.trending && (
                <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-destructive/90">
                  <TrendingUp className="w-3 h-3 text-destructive-foreground" />
                  <span className="text-xs font-semibold text-destructive-foreground">Trending</span>
                </div>
              )}

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-foreground/20 backdrop-blur-md flex items-center justify-center border border-foreground/30">
                  <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-inter font-semibold text-foreground text-sm mb-1">
                  {post.creator}
                </p>
                <p className="font-inter text-xs text-foreground/80 line-clamp-2 mb-3">
                  {post.caption}
                </p>
                
                {/* Stats */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-destructive" />
                    <span className="text-xs text-foreground/80">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-foreground/80" />
                    <span className="text-xs text-foreground/80">{post.comments}</span>
                  </div>
                </div>
              </div>

              {/* Side Actions (visible on hover) */}
              <div className="absolute right-3 bottom-24 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <button className="w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-md flex items-center justify-center hover:bg-destructive/80 transition-colors">
                  <Heart className="w-5 h-5 text-foreground" />
                </button>
                <button className="w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-md flex items-center justify-center hover:bg-gold/80 transition-colors">
                  <MessageCircle className="w-5 h-5 text-foreground" />
                </button>
                <button className="w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-md flex items-center justify-center hover:bg-emerald/80 transition-colors">
                  <Share2 className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Play className="w-4 h-4 mr-2" />
            Watch More Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TikTokSection;
