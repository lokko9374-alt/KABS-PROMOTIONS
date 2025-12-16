import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Events", href: "/events" },
    { name: "Media", href: "/media" },
    { name: "TV", href: "/tv" },
    { name: "Radio", href: "/radio" },
    { name: "Community", href: "/community" },
    { name: "TikTok", href: "/tiktok" },
    { name: "Chat with Kabs", href: "/chat" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <span className="font-syne font-bold text-2xl md:text-3xl text-gradient-gold">
              KABS
            </span>
            <span className="font-syne font-light text-lg md:text-xl text-foreground ml-1">
              Promotions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-inter text-sm transition-colors duration-300 relative group ${
                isActive(link.href) ? "text-gold" : "text-muted-foreground hover:text-gold"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden xl:flex items-center gap-3">
          <Button variant="glass" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Join Community
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-inter text-lg py-2 transition-colors ${
                isActive(link.href) ? "text-gold" : "text-foreground hover:text-gold"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-border">
            <Button variant="glass" className="w-full">
              Sign In
            </Button>
            <Button variant="hero" className="w-full">
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
