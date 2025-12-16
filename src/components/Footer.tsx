import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Facebook, 
  Mail, 
  MapPin,
  Send,
  Heart
} from "lucide-react";

const footerLinks = {
  platform: [
    { name: "Events", href: "/events" },
    { name: "Media Hub", href: "/media" },
    { name: "TV Stations", href: "/tv" },
    { name: "Radio Stations", href: "/radio" },
    { name: "Community", href: "/community" },
    { name: "TikTok Wall", href: "/tiktok" },
    { name: "Chat with Kabs", href: "/chat" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Contact", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Community Guidelines", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* African Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
        <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
          <path
            fill="currentColor"
            className="text-gold"
            d="M0,120 L0,80 L60,80 L80,60 L100,80 L140,80 L160,40 L180,80 L220,80 L240,60 L260,80 L300,80 L320,20 L340,80 L380,80 L400,50 L420,80 L460,80 L480,70 L500,80 L540,80 L560,30 L580,80 L620,80 L640,55 L660,80 L700,80 L720,45 L740,80 L780,80 L800,65 L820,80 L860,80 L880,25 L900,80 L940,80 L960,50 L980,80 L1020,80 L1040,70 L1060,80 L1100,80 L1120,35 L1140,80 L1180,80 L1200,60 L1220,80 L1260,80 L1280,40 L1300,80 L1340,80 L1360,55 L1380,80 L1420,80 L1440,75 L1440,120 Z"
          />
        </svg>
      </div>

      {/* Top Border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Newsletter Section */}
      <div className="py-16 border-b border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-syne font-bold text-3xl md:text-4xl text-foreground mb-4">
              Stay Connected to Your <span className="text-gradient-gold">Roots</span>
            </h3>
            <p className="font-inter text-muted-foreground mb-8">
              Get the latest events, music drops, and community updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
              />
              <Button variant="hero">
                Subscribe
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block mb-6">
                <span className="font-syne font-bold text-3xl text-gradient-gold">KABS</span>
                <span className="font-syne font-light text-xl text-foreground ml-2">Promotions</span>
              </Link>
              <p className="font-inter text-muted-foreground mb-6 max-w-sm">
                Connecting the African diaspora to their roots through events, media, culture, and community. 
                Where the diaspora meets home.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="mailto:hello@kabspromotions.com" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="font-inter text-sm">hello@kabspromotions.com</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="font-inter text-sm">London, UK • Lagos, Nigeria</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-syne font-bold text-foreground mb-4">Platform</h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="font-inter text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-syne font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-inter text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-syne font-bold text-foreground mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-inter text-sm text-muted-foreground hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 border-t border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kabs Promotions. All rights reserved.
            </p>
            <p className="font-inter text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for the African Diaspora
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
