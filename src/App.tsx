import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Media from "./pages/Media";
import TV from "./pages/TV";
import RadioPage from "./pages/Radio";
import Community from "./pages/Community";
import TikTok from "./pages/TikTok";
import ChatWithKabsPage from "./pages/ChatWithKabsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/media" element={<Media />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/tiktok" element={<TikTok />} />
          <Route path="/chat" element={<ChatWithKabsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
