import { useState } from "react";
import { locations, type Location } from "@/data/locations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type LocationType = Location["type"];
type Continent = Location["continent"];

export default function Locations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<LocationType | "all">("all");
  const [selectedContinent, setSelectedContinent] = useState<Continent | "all">("all");

  const filteredLocations = locations.filter((location) => {
    const matchesSearch = location.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || location.type === selectedType;
    const matchesContinent =
      selectedContinent === "all" || location.continent === selectedContinent;
    return matchesSearch && matchesType && matchesContinent;
  });

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Locations of Ice and Fire</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          placeholder="Search locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:w-1/3"
        />
        <Select
          value={selectedType}
          onValueChange={(value) => setSelectedType(value as LocationType | "all")}
        >
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="region">Regions</SelectItem>
            <SelectItem value="city">Cities</SelectItem>
            <SelectItem value="castle">Castles</SelectItem>
            <SelectItem value="landmark">Landmarks</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectedContinent}
          onValueChange={(value) => setSelectedContinent(value as Continent | "all")}
        >
          <SelectTrigger className="md:w-1/4">
            <SelectValue placeholder="Select continent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Continents</SelectItem>
            <SelectItem value="Westeros">Westeros</SelectItem>
            <SelectItem value="Essos">Essos</SelectItem>
            <SelectItem value="Sothoryos">Sothoryos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredLocations.map((location) => (
          <Card key={location.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{location.name}</CardTitle>
                  <CardDescription>{location.continent}</CardDescription>
                </div>
                <Badge variant="outline" className="capitalize">
                  {location.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  <p>{location.description}</p>
                  {location.notableFor && location.notableFor.length > 0 && (
                    <div>
                      <strong>Notable for:</strong>
                      <ul className="list-disc list-inside mt-2">
                        {location.notableFor.map((note, index) => (
                          <li key={index}>{note}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredLocations.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No locations found matching your criteria
        </div>
      )}
    </div>
  );
}
