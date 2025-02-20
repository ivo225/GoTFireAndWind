import { useQuery } from '@tanstack/react-query';
import { fetchCharacters, fetchCharacterById, type Character } from '@/services/api';

export const useCharacters = (page: number = 1, pageSize: number = 20) => {
  return useQuery<Character[]>({
    queryKey: ['characters', page, pageSize],
    queryFn: () => fetchCharacters(page, pageSize),
  });
};

export const useCharacter = (id: number) => {
  return useQuery<Character>({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
    enabled: !!id,
  });
};
