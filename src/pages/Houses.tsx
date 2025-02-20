import { useState } from "react";
import { useHouses } from "@/hooks/useHouses";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Houses() {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const { data: houses, isLoading, error } = useHouses(page, pageSize);

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading houses...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center p-8 text-red-500">
        Error loading houses
      </div>
    );
  }

  const handlePreviousPage = () => {
    setPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Houses of Ice and Fire</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {houses?.map((house) => (
          <Card key={house.url} className="flex flex-col">
            <CardHeader>
              <CardTitle>{house.name}</CardTitle>
              {house.region && (
                <CardDescription>Region: {house.region}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-1">
              <ScrollArea className="h-[250px]">
                <div className="space-y-3">
                  {house.words && (
                    <div>
                      <strong>Words:</strong>
                      <p className="italic">{house.words}</p>
                    </div>
                  )}
                  {house.coatOfArms && (
                    <div>
                      <strong>Coat of Arms:</strong>
                      <p>{house.coatOfArms}</p>
                    </div>
                  )}
                  {house.titles.length > 0 && house.titles[0] !== "" && (
                    <div>
                      <strong>Titles:</strong>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {house.titles.map((title, index) => (
                          <Badge key={index} variant="secondary">
                            {title}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {house.seats.length > 0 && house.seats[0] !== "" && (
                    <div>
                      <strong>Seats:</strong>
                      <ul className="list-disc list-inside">
                        {house.seats.map((seat, index) => (
                          <li key={index}>{seat}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {house.founded && (
                    <p>
                      <strong>Founded:</strong> {house.founded}
                    </p>
                  )}
                  {house.ancestralWeapons.length > 0 &&
                    house.ancestralWeapons[0] !== "" && (
                      <div>
                        <strong>Ancestral Weapons:</strong>
                        <ul className="list-disc list-inside">
                          {house.ancestralWeapons.map((weapon, index) => (
                            <li key={index}>{weapon}</li>
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

      <div className="flex justify-center gap-4 mt-8">
        <Button
          onClick={handlePreviousPage}
          disabled={page === 1}
          variant="outline"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button onClick={handleNextPage} variant="outline">
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
