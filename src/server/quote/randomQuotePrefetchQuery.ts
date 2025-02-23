import { QueryClient } from '@tanstack/react-query';
import { createQuoteViewModel } from './createQuoteViewModel';
import { getRandomQuoteFromExternal } from './getRandomQuoteFromExternal';

const queryKey = ['quote', 'random'] as string[];

// getServerSideProps で prefetch する用の関数
export const randomQuotePrefetchQuery = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: queryKey,
    queryFn: () =>
      getRandomQuoteFromExternal().then((data) => createQuoteViewModel(data)),
  });
};
