
import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import WorldMap from "../components/WorldMap";
import KeyLocations from "../components/KeyLocations";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="animate-fade-down">
          <h1 className="hero-title text-center mb-6">
            A Song of Ice and Fire
          </h1>
          <p className="text-accent text-center text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Explore the rich world of Westeros and beyond through our comprehensive encyclopedia
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search characters, houses, or locations..."
              className="w-full px-6 py-4 rounded-full border-2 border-stone/20 focus:border-primary focus:outline-none shadow-sm text-lg"
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-stone/50" />
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="section-title text-center mb-12">Explore the World</h2>
        <WorldMap />
      </section>

      {/* Key Locations Section */}
      <KeyLocations />

      {/* Featured Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Characters */}
          <div className="card animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="section-title">Characters</h2>
            <p className="text-accent mb-4">
              From noble lords to fearless warriors, discover the compelling characters that shape this epic tale.
            </p>
            <a href="/characters" className="inline-flex items-center text-primary hover:opacity-80 transition-opacity">
              Explore Characters <ChevronRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Houses */}
          <div className="card animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="section-title">Noble Houses</h2>
            <p className="text-accent mb-4">
              Learn about the great houses of Westeros, their histories, sigils, and words.
            </p>
            <a href="/houses" className="inline-flex items-center text-primary hover:opacity-80 transition-opacity">
              Explore Houses <ChevronRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Locations */}
          <div className="card animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="section-title">Locations</h2>
            <p className="text-accent mb-4">
              Journey through the Seven Kingdoms and beyond, from Castle Black to King's Landing.
            </p>
            <a href="/locations" className="inline-flex items-center text-primary hover:opacity-80 transition-opacity">
              Explore Locations <ChevronRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-stone py-16 mt-16">
        <div className="container mx-auto px-4">
          <blockquote className="text-center">
            <p className="font-cinzel text-white text-2xl md:text-3xl italic mb-4">
              "When you play the game of thrones, you win or you die."
            </p>
            <footer className="text-white/80">― Cersei Lannister</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Index;
