import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Payment } from '../backend';

export function useGetAllTransactions() {
  const { actor, isFetching } = useActor();

  return useQuery<Payment[]>({
    queryKey: ['transactions'],
    queryFn: async () => {
      if (!actor) return [];
      try {
        return await actor.getAllTransactions();
      } catch (error) {
        console.error('Error fetching transactions:', error);
        return [];
      }
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAppStats() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['appStats'],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getAppStats();
      } catch (error) {
        console.error('Error fetching app stats:', error);
        return null;
      }
    },
    enabled: !!actor && !isFetching,
  });
}
