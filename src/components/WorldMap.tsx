
import { useState } from 'react';
import { MapPin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MAP_LOCATIONS } from "@/constants/content";

interface Location {
  id: number;
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  region: string;
}

const WorldMap = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <div className="relative w-full aspect-[16/9] bg-muted rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-[url('/map-background.jpg')] bg-cover bg-center opacity-90">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/10" />
      </div>
      
      {MAP_LOCATIONS.map((location) => (
        <TooltipProvider key={location.id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 group ${
                  activeLocation?.id === location.id ? "z-20" : "z-10"
                }`}
                style={{
                  left: `${location.coordinates.x}%`,
                  top: `${location.coordinates.y}%`,
                }}
                onClick={() => setActiveLocation(location)}
              >
                <MapPin
                  className={`w-6 h-6 ${
                    activeLocation?.id === location.id
                      ? "text-primary"
                      : "text-stone hover:text-primary"
                  } transition-colors duration-200`}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-cinzel">{location.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}

      {activeLocation && (
        <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 backdrop-blur-sm">
          <div className="container mx-auto">
            <h3 className="font-cinzel text-lg font-semibold text-primary mb-1">
              {activeLocation.name}
            </h3>
            <p className="text-sm text-accent mb-1">{activeLocation.region}</p>
            <p className="text-sm">{activeLocation.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
