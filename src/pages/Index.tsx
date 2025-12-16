import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Users, Radio, Calendar, Tv, MessageCircle, ChevronRight, Flame } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="African futurist nightlife"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>

        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 pattern-kente opacity-30" />

        {/* Floating Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-emerald/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-purple/10 rounded-full blur-2xl animate-float-slow" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse-glow" />
              <span className="text-sm font-inter text-muted-foreground">
                Connecting the African Diaspora
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-syne font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="text-foreground">Where the </span>
              <span className="text-gradient-gold text-glow-gold">Diaspora</span>
              <br />
              <span className="text-foreground">Meets </span>
              <span className="text-gradient-gold text-glow-gold">Home</span>
            </h1>

            {/* Subtitle */}
            <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Events. Media. Culture. Community. — Experience the rhythm of Africa
              from anywhere in the world.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Link to="/community">
                <Button variant="hero" size="xl" className="group">
                  <Users className="mr-2 group-hover:scale-110 transition-transform" />
                  Join the Community
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="heroOutline" size="xl" className="group">
                  <Calendar className="mr-2 group-hover:scale-110 transition-transform" />
                  Explore Events
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              {[
                { icon: Users, value: "50K+", label: "Community Members" },
                { icon: Calendar, value: "200+", label: "Events Hosted" },
                { icon: Radio, value: "15+", label: "Live Stations" },
                { icon: Play, value: "1M+", label: "Content Views" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-4 md:p-6 hover:border-gold/30 transition-all duration-300 group cursor-pointer"
                >
                  <stat.icon className="w-8 h-8 text-gold mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="font-syne font-bold text-2xl md:text-3xl text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="font-inter text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-foreground mb-4">
              Explore <span className="text-gradient-gold">Kabs</span>
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Your gateway to African culture, entertainment, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: "Events", desc: "Discover upcoming events from Lagos to London", link: "/events", count: "200+ Events" },
              { icon: Tv, title: "TV Stations", desc: "Watch live African TV channels and entertainment", link: "/tv", count: "10 Channels" },
              { icon: Radio, title: "Radio Stations", desc: "Listen to Afrobeats, Amapiano, and more", link: "/radio", count: "15 Stations" },
              { icon: Users, title: "Community", desc: "Connect with Africans worldwide", link: "/community", count: "50K+ Members" },
              { icon: Flame, title: "TikTok Wall", desc: "Trending African content creators", link: "/tiktok", count: "Viral Content" },
              { icon: MessageCircle, title: "Chat with Kabs", desc: "Your AI guide to African culture", link: "/chat", count: "AI Powered" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group relative rounded-2xl overflow-hidden glass-card p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-glow-gold"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-syne font-bold text-2xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gold font-semibold">{item.count}</span>
                  <ChevronRight className="w-5 h-5 text-gold group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
