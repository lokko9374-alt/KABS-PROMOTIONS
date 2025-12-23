import { useState } from "react";
import { radioStations } from "@/data/radioStations";

import { Button } from "@/components/ui/button";
import { Radio, Play, Pause, Headphones, Heart } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// imports (above)

const genres = [
  "All",
  "Afrobeats",
  "Amapiano",
  "Gospel",
  "Highlife",
  "Traditional",
  "Talk Show",
  "Hip Hop",
  "Reggae",
  "R&B Soul",
  "Afro House",
];

const RadioPage = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [playingStation, setPlayingStation] = useState<number | null>(null);
  const [likedStations, setLikedStations] = useState<number[]>([]);

  const filteredStations =
    activeGenre === "All"
      ? radioStations
      : radioStations.filter((s) => s.genre === activeGenre);

  return (
    <>
      {/* UI here */}
    </>
  );
};

export default RadioPage;
