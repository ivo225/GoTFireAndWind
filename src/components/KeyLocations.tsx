
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Section from "./Section";
import { locations } from "@/data/locations";

const KEY_LOCATION_IDS = ['kings-landing', 'winterfell', 'wall'];

const locationImages: Record<string, string> = {
  'kings-landing': '/kings_landing.jpg',
  'winterfell': '/winterfell_mapv2.jpg',
  'wall': '/the_wall.jpg'
};

const locationRoutes: Record<string, string> = {
  'kings-landing': '/locations/kings-landing',
  'winterfell': '/locations/winterfell',
  'wall': '/locations/the-wall'
};

const KeyLocations = () => {
  const keyLocations = locations.filter(loc => KEY_LOCATION_IDS.includes(loc.id));

  return (
    <Section background="muted" className="py-12">
      <h2 className="section-title text-center">Key Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {keyLocations.map((location) => (
          <div
            key={location.id}
            className="card group bg-card rounded-lg p-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-muted">
              <img
                src={locationImages[location.id]}
                alt={location.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-cinzel text-xl font-semibold mb-2">{location.name}</h3>
            <p className="text-accent text-sm mb-2">{location.type} in {location.continent}</p>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{location.description}</p>
            <Link
              to={locationRoutes[location.id]}
              className="inline-flex items-center text-primary hover:opacity-80 transition-opacity text-sm font-medium"
            >
              Learn More <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default KeyLocations;
