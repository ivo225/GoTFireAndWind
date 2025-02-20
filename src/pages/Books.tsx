import { useBooks } from "@/hooks/useBooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";

export default function Books() {
  const { data: books, isLoading, error } = useBooks();

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading books...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center p-8 text-red-500">
        Error loading books
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Books of Ice and Fire</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books?.map((book) => (
          <Card key={book.isbn}>
            <CardHeader>
              <CardTitle>{book.name}</CardTitle>
              <CardDescription>By {book.authors.join(", ")}</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-2">
                  <p><strong>ISBN:</strong> {book.isbn}</p>
                  <p><strong>Pages:</strong> {book.numberOfPages}</p>
                  <p><strong>Publisher:</strong> {book.publisher}</p>
                  <p><strong>Country:</strong> {book.country}</p>
                  <p><strong>Media Type:</strong> {book.mediaType}</p>
                  <p>
                    <strong>Released:</strong>{" "}
                    {format(new Date(book.released), "MMMM d, yyyy")}
                  </p>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
