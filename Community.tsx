import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Globe, Heart, Send, Smile, Mic, Search, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chatRooms = [
  { id: 1, name: "General Chat", members: 2450, active: true, unread: 12, emoji: "🌍" },
  { id: 2, name: "Nigeria 🇳🇬", members: 890, active: true, unread: 5, emoji: "🇳🇬" },
  { id: 3, name: "Kenya 🇰🇪", members: 650, active: true, unread: 3, emoji: "🇰🇪" },
  { id: 4, name: "Ghana 🇬🇭", members: 720, active: false, unread: 0, emoji: "🇬🇭" },
  { id: 5, name: "South Africa 🇿🇦", members: 580, active: true, unread: 8, emoji: "🇿🇦" },
  { id: 6, name: "UK Diaspora 🇬🇧", members: 1200, active: true, unread: 15, emoji: "🇬🇧" },
  { id: 7, name: "USA Diaspora 🇺🇸", members: 980, active: true, unread: 7, emoji: "🇺🇸" },
  { id: 8, name: "Canada Diaspora 🇨🇦", members: 450, active: true, unread: 2, emoji: "🇨🇦" },
  { id: 9, name: "Ethiopia 🇪🇹", members: 380, active: false, unread: 0, emoji: "🇪🇹" },
  { id: 10, name: "Tanzania 🇹🇿", members: 290, active: true, unread: 1, emoji: "🇹🇿" },
  { id: 11, name: "Music Lovers 🎵", members: 1500, active: true, unread: 20, emoji: "🎵" },
  { id: 12, name: "Events & Parties 🎉", members: 1100, active: true, unread: 18, emoji: "🎉" },
];

const sampleMessages = [
  { id: 1, user: "Amara O.", message: "Who's going to the Lagos event? 🔥", time: "2m ago", avatar: "AO" },
  { id: 2, user: "Kwame A.", message: "The Afrobeats FM show was incredible!", time: "5m ago", avatar: "KA" },
  { id: 3, user: "Nneka E.", message: "Just joined from London! Hello everyone 👋", time: "8m ago", avatar: "NE" },
  { id: 4, user: "Thabo M.", message: "Can't wait for the Amapiano Festival", time: "12m ago", avatar: "TM" },
  { id: 5, user: "Fatima B.", message: "Anyone watching the match tonight?", time: "15m ago", avatar: "FB" },
  { id: 6, user: "Chidi O.", message: "The new Burna Boy track is fire 🔥🔥", time: "18m ago", avatar: "CO" },
  { id: 7, user: "Zara A.", message: "Just booked my flight to Accra!", time: "22m ago", avatar: "ZA" },
  { id: 8, user: "Kofi M.", message: "Who else is streaming the live DJ set?", time: "25m ago", avatar: "KM" },
];

const Community = () => {
  const [selectedRoom, setSelectedRoom] = useState(chatRooms[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRooms = chatRooms.filter(room => 
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Users className="w-4 h-4 text-gold" />
              <span className="text-sm font-inter text-muted-foreground">Community Hub</span>
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-7xl text-foreground mb-6">
              Connect with Your <span className="text-gradient-gold">People</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Join real-time conversations with Africans worldwide. Share stories, plan meetups, and stay connected.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[700px]">
            {/* Chat Rooms Sidebar */}
            <div className="lg:col-span-1 glass-card rounded-2xl flex flex-col">
              <div className="p-4 border-b border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-syne font-bold text-lg text-foreground">Chat Rooms</h3>
                  <Button variant="ghost" size="icon" className="text-gold">
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search rooms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 text-sm"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-2 space-y-1">
                {filteredRooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                      selectedRoom.id === room.id 
                        ? "bg-gold/20 border border-gold/30" 
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-lg">
                          {room.emoji}
                        </div>
                        {room.active && (
                          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className={`font-inter font-medium text-sm ${selectedRoom.id === room.id ? "text-gold" : "text-foreground"}`}>
                          {room.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {room.members.toLocaleString()} members
                        </p>
                      </div>
                    </div>
                    {room.unread > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-gold text-primary-foreground text-xs font-bold">
                        {room.unread}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="lg:col-span-3 glass-card rounded-2xl overflow-hidden flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-2xl">
                      {selectedRoom.emoji}
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-xl text-foreground">{selectedRoom.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedRoom.members.toLocaleString()} members • {selectedRoom.active ? "Active now" : "Offline"}
                      </p>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {["AO", "KA", "NE", "TM", "FB"].map((initials, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-burnt-orange flex items-center justify-center text-xs font-bold text-primary-foreground border-2 border-background"
                      >
                        {initials}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground border-2 border-background">
                      +{selectedRoom.members - 5}
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
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
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity self-center">
                      <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Smile className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Type a message..."
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
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "50K+", label: "Community Members" },
              { icon: MessageCircle, value: "1M+", label: "Messages Sent" },
              { icon: Globe, value: "54", label: "Countries" },
              { icon: Heart, value: "99%", label: "Positive Vibes" },
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <stat.icon className="w-10 h-10 text-gold mx-auto mb-3" />
                <div className="font-syne font-bold text-3xl text-foreground mb-1">{stat.value}</div>
                <div className="font-inter text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
