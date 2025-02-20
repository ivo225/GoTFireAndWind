
import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import WorldMap from "../components/WorldMap";
import KeyLocations from "../components/KeyLocations";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { FEATURED_SECTIONS } from "@/constants/content";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <Section className="py-16 md:py-24">
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
        </Section>

        {/* Featured Sections */}
        <Section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_SECTIONS.map((section) => (
              <div
                key={section.id}
                className="card animate-fade-up"
                style={{ animationDelay: section.delay }}
              >
                <h2 className="section-title">{section.title}</h2>
                <p className="text-accent mb-4">{section.description}</p>
                <a
                  href={section.link}
                  className="inline-flex items-center text-primary hover:opacity-80 transition-opacity"
                >
                  Explore {section.title} <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* World Map Section */}
        <Section className="py-16">
          <h2 className="section-title text-center mb-12">Explore the World</h2>
          <WorldMap />
        </Section>

        {/* Key Locations Section */}
        <KeyLocations />

        {/* Quote Section */}
        <Section background="stone" className="py-16" container={false}>
          <div className="container mx-auto px-4">
            <blockquote className="text-center">
              <p className="font-cinzel text-white text-2xl md:text-3xl italic mb-4">
                "When you play the game of thrones, you win or you die."
              </p>
              <footer className="text-white/80">― Cersei Lannister</footer>
            </blockquote>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
