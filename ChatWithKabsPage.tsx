import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Send, Sparkles, Calendar, Music, Globe, Gamepad2, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const suggestedPrompts = [
  { icon: Calendar, text: "Find events near me" },
  { icon: Music, text: "Recommend some Afrobeats" },
  { icon: Globe, text: "Tell me about the diaspora" },
  { icon: Gamepad2, text: "Play a trivia game" },
];

const features = [
  { icon: Calendar, title: "Event Discovery", desc: "Find events tailored to your location and interests" },
  { icon: Music, title: "Music Recommendations", desc: "Personalized playlists based on your taste" },
  { icon: Globe, title: "Culture Guide", desc: "Learn about African history and traditions" },
  { icon: Gamepad2, title: "Mini Games", desc: "Fun trivia and quizzes about African culture" },
];

const ChatWithKabsPage = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content: "Hey fam! 👋 I'm Kabs, your guide to all things African culture, events, and vibes. What can I help you with today? You can ask me about upcoming events, get music recommendations, learn about African culture, or even play some trivia games!",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory([
      ...chatHistory,
      { role: "user", content: message },
      {
        role: "assistant",
        content: "That's a great question! Let me think about that... As your AI guide, I'm here to help you discover amazing African events, music, and connect with the community. I can recommend events based on your location, suggest playlists for any mood, or share fascinating stories about African culture. What specifically would you like to explore? 🎵🌍",
      },
    ]);
    setMessage("");
  };

  const handlePromptClick = (promptText: string) => {
    setMessage(promptText);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-emerald/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-inter text-muted-foreground">AI-Powered Assistant</span>
            </div>
            <h1 className="font-syne font-bold text-5xl md:text-7xl text-foreground mb-6">
              Chat with <span className="text-gradient-gold">Kabs</span>
            </h1>
            <p className="font-inter text-lg text-muted-foreground">
              Your AI companion for discovering events, music recommendations, and everything African culture.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl overflow-hidden">
              {/* Chat Header */}
              <div className="p-6 border-b border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-burnt-orange flex items-center justify-center">
                      <Bot className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald rounded-full border-2 border-background flex items-center justify-center">
                      <span className="w-2 h-2 bg-emerald-foreground rounded-full animate-pulse" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-xl text-foreground">Kabs AI</h3>
                    <p className="text-sm text-muted-foreground">Always online • Powered by AI</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <RefreshCw className="w-5 h-5" />
                </Button>
              </div>

              {/* Chat Messages */}
              <div className="p-6 h-96 overflow-y-auto space-y-4">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-burnt-orange flex-shrink-0 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        msg.role === "user"
                          ? "bg-gold text-primary-foreground rounded-tr-none"
                          : "bg-muted rounded-tl-none"
                      }`}
                    >
                      <p className={`font-inter ${msg.role === "user" ? "text-primary-foreground" : "text-foreground"}`}>
                        {msg.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggested Prompts */}
              <div className="px-6 pb-4">
                <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handlePromptClick(prompt.text)}
                      className="flex items-center gap-2 px-3 py-2 rounded-full glass text-sm text-muted-foreground hover:text-foreground hover:border-gold/30 transition-all duration-300"
                    >
                      <prompt.icon className="w-4 h-4 text-gold" />
                      {prompt.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Ask Kabs anything..."
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <Button
                    variant="hero"
                    size="icon"
                    className="rounded-xl h-12 w-12"
                    onClick={handleSendMessage}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl text-foreground mb-4">
              What Kabs Can <span className="text-gradient-gold">Help With</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Your AI-powered guide to the African experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover:border-gold/30 transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-syne font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatWithKabsPage;
