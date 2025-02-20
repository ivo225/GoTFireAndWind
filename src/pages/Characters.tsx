import { useState } from "react";
import { useCharacters } from "@/hooks/useCharacters";
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

export default function Characters() {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const { data: characters, isLoading, error } = useCharacters(page, pageSize);

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading characters...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center p-8 text-red-500">
        Error loading characters
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
      <h1 className="text-4xl font-bold mb-8">Characters of Ice and Fire</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {characters?.map((character) => (
          <Card key={character.url}>
            <CardHeader>
              <CardTitle>
                {character.name || character.aliases[0] || "Unknown Character"}
              </CardTitle>
              {character.culture && (
                <CardDescription>Culture: {character.culture}</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  {character.titles.length > 0 && (
                    <p>
                      <strong>Titles:</strong>{" "}
                      {character.titles.filter(Boolean).join(", ")}
                    </p>
                  )}
                  {character.aliases.length > 0 && (
                    <p>
                      <strong>Aliases:</strong>{" "}
                      {character.aliases.filter(Boolean).join(", ")}
                    </p>
                  )}
                  {character.born && (
                    <p>
                      <strong>Born:</strong> {character.born}
                    </p>
                  )}
                  {character.died && (
                    <p>
                      <strong>Died:</strong> {character.died}
                    </p>
                  )}
                  {character.playedBy.length > 0 && character.playedBy[0] !== "" && (
                    <p>
                      <strong>Played by:</strong>{" "}
                      {character.playedBy.join(", ")}
                    </p>
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
