
import { useState } from 'react';
import { MapPin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { locations, type Location } from "@/data/locations";

// Map coordinates for major locations
const locationCoordinates: Record<string, { x: number; y: number }> = {
  'winterfell': { x: 32, y: 42 },  // Winterfell in the North
  'kings-landing': { x: 52, y: 65 }, // King's Landing in the Crownlands
  'wall': { x: 28, y: 22 },         // The Wall in the far North
  'pentos': { x: 75, y: 60 },       // Pentos in Essos
};

const WorldMap = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <Card className="w-full max-w-6xl mx-auto overflow-hidden shadow-xl">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src="/world-map.jpg"
            alt="World Map of Ice and Fire"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 transition-colors">

            {/* Map Markers */}
            {locations.filter(loc => locationCoordinates[loc.id]).map((location) => (
              <TooltipProvider key={location.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 group ${
                        activeLocation?.id === location.id ? "z-20" : "z-10"
                      }`}
                      style={{
                        left: `${locationCoordinates[location.id].x}%`,
                        top: `${locationCoordinates[location.id].y}%`,
                      }}
                      onClick={() => setActiveLocation(location)}
                    >
                      <MapPin
                        className={`w-4 h-4 ${
                          activeLocation?.id === location.id
                            ? "text-red-500"
                            : "text-white hover:text-red-400"
                        } transition-colors duration-200 drop-shadow-md`}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-cinzel">{location.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}

            {/* Location Info */}
            {activeLocation && (
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-4 backdrop-blur-sm">
                <div className="container mx-auto">
                  <h3 className="font-cinzel text-lg font-semibold text-primary mb-1">
                    {activeLocation.name}
                  </h3>
                  <p className="text-sm text-accent mb-1">{activeLocation.type} in {activeLocation.continent}</p>
                  <p className="text-sm mb-2">{activeLocation.description}</p>
                  {activeLocation.notableFor && (
                    <div className="text-sm text-muted-foreground">
                      <strong>Notable for:</strong> {activeLocation.notableFor.join(', ')}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorldMap;
