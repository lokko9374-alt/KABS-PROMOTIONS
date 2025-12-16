import { Button } from "@/components/ui/button";
import { Play, Users, Radio, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
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
            <Button variant="hero" size="xl" className="group">
              <Users className="mr-2 group-hover:scale-110 transition-transform" />
              Join the Community
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <Calendar className="mr-2 group-hover:scale-110 transition-transform" />
              Explore Events
            </Button>
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
  );
};

export default HeroSection;
