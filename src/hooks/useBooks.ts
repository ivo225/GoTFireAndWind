import { useQuery } from '@tanstack/react-query';
import { fetchBooks, fetchBookById, type Book } from '@/services/api';

export const useBooks = () => {
  return useQuery<Book[]>({
    queryKey: ['books'],
    queryFn: fetchBooks,
  });
};

export const useBook = (id: number) => {
  return useQuery<Book>({
    queryKey: ['book', id],
    queryFn: () => fetchBookById(id),
    enabled: !!id,
  });
};
