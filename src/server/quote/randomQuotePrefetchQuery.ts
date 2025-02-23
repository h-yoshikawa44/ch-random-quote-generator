import { QueryClient } from '@tanstack/react-query';
import { createQuoteViewModel } from './createQuoteViewModel';
import { getRandomQuoteFromExternal } from './getRandomQuoteFromExternal';

const queryKeyBase = ['quote', 'random'] as unknown[];

// getServerSideProps で prefetch する用の関数
export const randomQuotePrefetchQuery = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery(queryKeyBase.concat({}), () =>
    getRandomQuoteFromExternal().then((data) => createQuoteViewModel(data)),
  );
};
