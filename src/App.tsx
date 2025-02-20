
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudioProvider } from "@/contexts/AudioContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Books from "./pages/Books";
import Characters from "./pages/Characters";
import Houses from "./pages/Houses";
import Locations from "./pages/Locations";
import KingsLanding from "./pages/locations/KingsLanding";
import Winterfell from "./pages/locations/Winterfell";
import TheWall from "./pages/locations/TheWall";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AudioProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/books" element={<Books />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/kings-landing" element={<KingsLanding />} />
          <Route path="/locations/winterfell" element={<Winterfell />} />
          <Route path="/locations/the-wall" element={<TheWall />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AudioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
