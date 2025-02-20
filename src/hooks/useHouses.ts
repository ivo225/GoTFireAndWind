import { useQuery } from '@tanstack/react-query';
import { fetchHouses, fetchHouseById, type House } from '@/services/api';

export const useHouses = (page: number = 1, pageSize: number = 20) => {
  return useQuery<House[]>({
    queryKey: ['houses', page, pageSize],
    queryFn: () => fetchHouses(page, pageSize),
  });
};

export const useHouse = (id: number) => {
  return useQuery<House>({
    queryKey: ['house', id],
    queryFn: () => fetchHouseById(id),
    enabled: !!id,
  });
};
