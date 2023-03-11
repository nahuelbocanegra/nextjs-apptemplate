import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

function useUsersMe() {
  const { data, error, isLoading, mutate } = useSWR('/users/users-info', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { useUsersMe };