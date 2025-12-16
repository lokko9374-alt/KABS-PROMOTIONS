import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Send, Sparkles, Calendar, Music, Globe, Gamepad2 } from "lucide-react";

const suggestedPrompts = [
  { icon: Calendar, text: "Find events near me" },
  { icon: Music, text: "Recommend some Afrobeats" },
  { icon: Globe, text: "Tell me about the diaspora" },
  { icon: Gamepad2, text: "Play a trivia game" },
];

const ChatWithKabs = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      content: "Hey fam! 👋 I'm Kabs, your guide to all things African culture, events, and vibes. What can I help you with today?",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory([
      ...chatHistory,
      { role: "user", content: message },
      {
        role: "assistant",
        content: "That's a great question! Let me think about that... As an AI, I'm here to help you discover amazing African events, music, and connect with the community. What specifically would you like to know more about? 🎵🌍",
      },
    ]);
    setMessage("");
  };

  return (
    <section id="chat" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-inter text-muted-foreground">AI-Powered</span>
          </div>
          <h2 className="font-syne font-bold text-4xl md:text-6xl text-foreground mb-4">
            Chat with <span className="text-gradient-gold">Kabs</span>
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Your AI companion for discovering events, music recommendations, and everything African culture.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Chat Header */}
            <div className="p-6 border-b border-border/50 flex items-center gap-4">
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

            {/* Chat Messages */}
            <div className="p-6 h-80 overflow-y-auto space-y-4">
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
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(prompt.text)}
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

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Calendar, title: "Event Discovery", desc: "Find events tailored to you" },
              { icon: Music, title: "Music Recs", desc: "Personalized playlists" },
              { icon: Globe, title: "Culture Guide", desc: "Learn about Africa" },
              { icon: Gamepad2, title: "Mini Games", desc: "Fun trivia & quizzes" },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-4 text-center hover:border-gold/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                <h4 className="font-syne font-semibold text-foreground text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatWithKabs;
