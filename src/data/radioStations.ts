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
};

export const radioStations: RadioStation[] = [
  {
    id: 1,
    name: "Capital FM Uganda",
    genre: "Talk Show",
    listeners: "—",
    live: true,
    frequency: "Online",
    host: "Capital FM",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop",
    description: "Kampala’s hit music, news and lifestyle.",
  },
];
