import { useState } from "react";
import { motion } from "framer-motion";
import { Radio, Play, Pause, Volume2, SkipForward, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { radioStreams } from "@/config/streams";
import radioDj from "@/assets/radio-dj.jpg";

const RadioPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStation, setActiveStation] = useState(radioStreams[0]);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-midnight/90 backdrop-blur-xl border-b border-gold/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 text-foreground hover:text-gold transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-display font-bold">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <Radio className="w-5 h-5 text-gold" />
              <span className="font-display font-bold text-foreground">Kabs Radio</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              Live Radio Streaming
            </span>
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Listen to <span className="gradient-text-gold">Kabs Radio</span>
            </h1>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Tune in to the best Afrobeats, Highlife, and Urban Contemporary music from across Africa.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Audio Player */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-midnight-deep">
                <img
                  src={radioDj}
                  alt="Radio player"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
                
                {/* Live Badge */}
                {activeStation.live && (
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/90 text-foreground text-sm font-bold">
                    <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                    LIVE
                  </div>
                )}

                {/* Player Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4">
                    <h3 className="font-display font-bold text-xl text-foreground">
                      {activeStation.name}
                    </h3>
                    <p className="text-foreground/60">{activeStation.genre} • {activeStation.frequency}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="h-1 bg-foreground/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-gold to-burnt-orange rounded-full" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-14 h-14 rounded-full bg-gold text-midnight flex items-center justify-center hover:scale-105 transition-transform shadow-glow"
                      >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                      </button>
                      <button className="w-10 h-10 rounded-full bg-foreground/10 text-foreground flex items-center justify-center hover:bg-foreground/20 transition-colors">
                        <SkipForward className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-foreground/60" />
                      <div className="w-24 h-1 bg-foreground/20 rounded-full">
                        <div className="h-full w-2/3 bg-foreground/60 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stations List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="font-display font-semibold text-foreground mb-4">All Stations</h3>
              {radioStreams.map((station, index) => (
                <motion.div
                  key={station.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => setActiveStation(station)}
                  className={`group p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeStation.id === station.id
                      ? "bg-gold/10 border-gold/50"
                      : "bg-card/50 border-border hover:border-gold/50 hover:bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                        <Radio className="w-6 h-6 text-midnight" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-gold transition-colors">
                          {station.name}
                        </h4>
                        <p className="text-sm text-foreground/60">{station.genre}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {station.live && (
                        <span className="px-2 py-1 rounded-full bg-destructive/20 text-destructive text-xs font-medium">
                          LIVE
                        </span>
                      )}
                      <span className="text-xs text-foreground/60">{station.frequency}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RadioPage;
