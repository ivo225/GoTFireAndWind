
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import WorldMap from "../components/WorldMap";
import KeyLocations from "../components/KeyLocations";
import Footer from "../components/Footer";
import Section from "../components/Section";
import SearchBar from "../components/SearchBar";
import { FEATURED_SECTIONS } from "@/constants/content";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow">
        {/* Hero Section */}
        <Section className="py-16 md:py-24 relative">
          {/* Left Dragon */}
          <div className="absolute left-[15%] w-48 h-48 hidden md:block">
            <img
              src="/Game-of-Thrones-Dragon-Free.png"
              alt="Dragon"
              className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
              style={{ 
                filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))',
                transform: 'translateY(40px)'
              }}
            />
          </div>

          {/* Right Dragon */}
          <div className="absolute right-[15%] w-48 h-48 hidden md:block">
            <img
              src="/Game-of-Thrones-Dragon-Free.png"
              alt="Dragon"
              className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
              style={{ 
                filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2))',
                transform: 'translateY(40px) scaleX(-1)'
              }}
            />
          </div>

          <div className="animate-fade-down max-w-6xl mx-auto px-4">
            <div className="text-center mb-6">
              <h1 className="hero-title text-primary text-4xl md:text-5xl lg:text-6xl font-cinzel font-bold tracking-wide leading-tight mb-6">
                A Song of Ice and Fire
              </h1>
            </div>
            <div className="max-w-2xl mx-auto px-4">
              <p className="text-accent text-center text-lg md:text-xl font-medium leading-relaxed">
                Explore the rich world of Westeros and beyond through our comprehensive encyclopedia
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="mt-8 md:mt-12">
              <SearchBar />
            </div>
          </div>
        </Section>

        {/* Featured Sections */}
        <Section className="py-8 md:py-20">
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
        <Section className="py-17">
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
