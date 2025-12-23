export type RadioStation = {
  id: number;
  name: string;
  genre: string;
  listeners: string;
  live: boolean;
  frequency: string;
  host: string;
  image: string;
  description: string;
  streamUrl: string;
};

export const radioStations: RadioStation[] = [
  {
    id: 16,
    name: "Sanyu FM",
    genre: "Afrobeats",
    listeners: "—",
    live: true,
    frequency: "88.2 FM",
    host: "Sanyu FM",
    image: "https://cdn.instant.audio/images/logos/radio-co-ug/sanyu.png",
    description: "Uganda’s home of Afrobeat, urban hits, and nonstop entertainment.",
    streamUrl: "https://s44.myradiostream.com:8138/stream/1/",
  },

  // keep your other stations below (must all include streamUrl if you want play)
];
