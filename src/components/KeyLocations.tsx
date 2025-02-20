
import React from 'react';
import { ChevronRight } from "lucide-react";

interface LocationCard {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const locations: LocationCard[] = [
  {
    id: 1,
    name: "King's Landing",
    description: "The capital and largest city of the Seven Kingdoms, located on the east coast of Westeros.",
    imageUrl: "/kings-landing.jpg"
  },
  {
    id: 2,
    name: "Winterfell",
    description: "The ancient seat of House Stark and the capital of the North, known for its strong fortifications.",
    imageUrl: "/winterfell.jpg"
  },
  {
    id: 3,
    name: "The Wall",
    description: "A colossal fortification of ice that stretches along the northern border of the Seven Kingdoms.",
    imageUrl: "/the-wall.jpg"
  }
];

const KeyLocations = () => {
  return (
    <div className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Key Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
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
      </div>
    </div>
  );
};

export default KeyLocations;
