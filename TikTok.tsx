import { Button } from "@/components/ui/button";
import { Play, Heart, MessageCircle, Share2, TrendingUp, Flame, Filter, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiktokPosts = [
  { id: 1, creator: "@afrodancer_jay", caption: "When the Amapiano hits different 🔥💃", likes: "245K", comments: "12.3K", thumbnail: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&h=600&fit=crop", trending: true },
  { id: 2, creator: "@lagos_vibes", caption: "Lagos nightlife hits different ✨🌃", likes: "180K", comments: "8.9K", thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop", trending: true },
  { id: 3, creator: "@african_queen", caption: "Traditional meets modern 👑", likes: "156K", comments: "7.2K", thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=600&fit=crop", trending: false },
  { id: 4, creator: "@dj_kabs", caption: "Behind the decks at Kabs Live 🎧", likes: "198K", comments: "10.1K", thumbnail: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=600&fit=crop", trending: true },
  { id: 5, creator: "@naija_comedy", caption: "When your aunty hears you're coming home 😂", likes: "320K", comments: "25.4K", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop", trending: false },
  { id: 6, creator: "@afrofashion", caption: "Ankara but make it fashion 🧵✨", likes: "134K", comments: "6.8K", thumbnail: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=400&h=600&fit=crop", trending: false },
  { id: 7, creator: "@ghana_moves", caption: "Azonto never dies 💪🏾", likes: "267K", comments: "14.2K", thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=600&fit=crop", trending: true },
  { id: 8, creator: "@sa_lifestyle", caption: "Johannesburg sunsets hit different", likes: "89K", comments: "4.1K", thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=600&fit=crop", trending: false },
  { id: 9, creator: "@kenyan_chef", caption: "Jollof rice tutorial - the RIGHT way 🍚", likes: "412K", comments: "32.1K", thumbnail: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=400&h=600&fit=crop", trending: true },
  { id: 10, creator: "@diaspora_tales", caption: "Growing up African in the West", likes: "178K", comments: "9.8K", thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=600&fit=crop", trending: false },
  { id: 11, creator: "@afro_fitness", caption: "African dance workout 🏋🏾‍♀️💃🏾", likes: "223K", comments: "11.5K", thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=600&fit=crop", trending: true },
  { id: 12, creator: "@nairobi_nights", caption: "Kenya's music scene is unmatched", likes: "145K", comments: "7.9K", thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=600&fit=crop", trending: false },
];

const categories = ["All", "Trending", "Music", "Dance", "Comedy", "Food", "Fashion", "Lifestyle"];

const TikTok = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-neon-purple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Flame className="w-4 h-4 text-destructive" />
              <span className="text-sm font-inter text-muted-foreground">Trending Now</span>
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-7xl text-foreground mb-6">
              The <span className="text-gradient-gold">TikTok</span> Wall
            </h1>
            <p className="font-inter text-lg text-muted-foreground mb-8">
              Discover the hottest African content creators and viral moments curated just for you.
            </p>

            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search creators or content..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50"
                />
              </div>
              <Button variant="hero">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-inter transition-all duration-300 ${
                  index === 0
                    ? "bg-destructive text-destructive-foreground"
                    : "glass text-muted-foreground hover:text-foreground hover:border-destructive/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {tiktokPosts.map((post) => (
              <div
                key={post.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer break-inside-avoid"
                style={{ aspectRatio: Math.random() > 0.5 ? "9/16" : "9/12" }}
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

                {/* Side Actions */}
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

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg">
              Load More Content
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TikTok;
