
import { ChevronRight } from "lucide-react";
import { KEY_LOCATIONS } from "@/constants/content";
import Section from "./Section";

const KeyLocations = () => {
  return (
    <Section background="muted" className="py-12">
      <h2 className="section-title text-center">Key Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {KEY_LOCATIONS.map((location) => (
          <div
            key={location.id}
            className="card group cursor-pointer"
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={location.imageUrl}
                alt={location.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-cinzel text-xl font-semibold mb-2">{location.name}</h3>
            <p className="text-accent text-sm mb-4">{location.description}</p>
            <a
              href={`/locations/${location.id}`}
              className="inline-flex items-center text-primary hover:opacity-80 transition-opacity text-sm"
            >
              Learn More <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default KeyLocations;
