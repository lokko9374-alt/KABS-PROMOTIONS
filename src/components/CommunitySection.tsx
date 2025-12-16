import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Globe, Heart, Send, Smile, Mic } from "lucide-react";

const chatRooms = [
  { id: 1, name: "General Chat", members: 2450, active: true, unread: 12 },
  { id: 2, name: "Nigeria 🇳🇬", members: 890, active: true, unread: 5 },
  { id: 3, name: "Kenya 🇰🇪", members: 650, active: true, unread: 3 },
  { id: 4, name: "Ghana 🇬🇭", members: 720, active: false, unread: 0 },
  { id: 5, name: "South Africa 🇿🇦", members: 580, active: true, unread: 8 },
  { id: 6, name: "UK Diaspora 🇬🇧", members: 1200, active: true, unread: 15 },
];

const sampleMessages = [
  { id: 1, user: "Amara O.", message: "Who's going to the Lagos event? 🔥", time: "2m ago", avatar: "AO" },
  { id: 2, user: "Kwame A.", message: "The Afrobeats FM show was incredible!", time: "5m ago", avatar: "KA" },
  { id: 3, user: "Nneka E.", message: "Just joined from London! Hello everyone 👋", time: "8m ago", avatar: "NE" },
  { id: 4, user: "Thabo M.", message: "Can't wait for the Amapiano Festival", time: "12m ago", avatar: "TM" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-emerald/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Users className="w-4 h-4 text-gold" />
            <span className="text-sm font-inter text-muted-foreground">Community Hub</span>
          </div>
          <h2 className="font-syne font-bold text-4xl md:text-6xl text-foreground mb-4">
            Connect with Your <span className="text-gradient-gold">People</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Join real-time conversations with Africans worldwide. Share stories, plan meetups, and stay connected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Rooms List */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-syne font-bold text-xl text-foreground">Chat Rooms</h3>
                <span className="px-3 py-1 rounded-full bg-emerald/20 text-emerald text-xs font-semibold">
                  {chatRooms.filter(r => r.active).length} Active
                </span>
              </div>

              <div className="space-y-3">
                {chatRooms.map((room) => (
                  <button
                    key={room.id}
                    className="w-full flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                          <MessageCircle className="w-5 h-5 text-gold" />
                        </div>
                        {room.active && (
                          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-inter font-medium text-foreground group-hover:text-gold transition-colors">
                          {room.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {room.members.toLocaleString()} members
                        </p>
                      </div>
                    </div>
                    {room.unread > 0 && (
                      <span className="px-2 py-1 rounded-full bg-gold text-primary-foreground text-xs font-bold">
                        {room.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <Button variant="heroOutline" className="w-full mt-6">
                <Globe className="w-4 h-4 mr-2" />
                View All Rooms
              </Button>
            </div>
          </div>

          {/* Live Chat Preview */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-xl text-foreground">General Chat</h3>
                      <p className="text-sm text-muted-foreground">2,450 members • 156 online</p>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {["AO", "KA", "NE", "TM"].map((initials, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-burnt-orange flex items-center justify-center text-xs font-bold text-primary-foreground border-2 border-background"
                      >
                        {initials}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground border-2 border-background">
                      +99
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto max-h-80">
                {sampleMessages.map((msg) => (
                  <div key={msg.id} className="flex gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/80 to-burnt-orange flex-shrink-0 flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {msg.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-inter font-medium text-foreground">{msg.user}</span>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-muted-foreground bg-muted/50 rounded-2xl rounded-tl-none px-4 py-2 inline-block">
                        {msg.message}
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Smile className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Join the conversation..."
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <button className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Mic className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <Button variant="hero" size="icon" className="rounded-full">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Button variant="hero" size="xl">
              <Users className="mr-2" />
              Join the Community
            </Button>
            <p className="text-sm text-muted-foreground">
              Free to join • No spam • Real conversations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
