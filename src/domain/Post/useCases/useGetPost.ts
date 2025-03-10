import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
} from '@tanstack/react-query';

import {postService} from '../postService';
import {Post} from '../postTypes';

interface UseGetPostReturn<TData> {
  posts: TData[] | undefined;
  isLoading: boolean;
  isError: boolean;
  refetch: (
    options?: RefetchOptions,
  ) => Promise<QueryObserverResult<TData[], Error>>;
}

export function useGetPost(): UseGetPostReturn<Post> {
  const {data, isLoading, isError, refetch} = useQuery<Post[]>({
    queryKey: ['Posts'],
    queryFn: postService.getList,
  });

  return {
    posts: data,
    isLoading,
    isError,
    refetch,
  };
}
