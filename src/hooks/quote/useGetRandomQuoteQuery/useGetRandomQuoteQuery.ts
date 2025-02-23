import { Options, HTTPError } from 'ky';
import { QueryClient, UseQueryOptions, useQuery } from '@tanstack/react-query';
import { GetRandomQuoteQuery, Quote } from '@/models/Quote';
import getRandomQuote from '@/domains/getRandomQuote';
import { getRandomQuoteFromExternal } from '@/server/quote/getRandomQuoteFromExternal';
import { createQuoteViewModel } from '@/server/quote/createQuoteViewModel';

const queryKeyBase = ['quote', 'random'] as unknown[];

// getServerSidePropsでprefetchする用の関数
const randomQuotePrefetchQuery = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery(queryKeyBase.concat({}), () =>
    getRandomQuoteFromExternal().then((data) => createQuoteViewModel(data)),
  );
};

const useGetRandomQuoteQuery = (
  kyOptions?: Options & { searchParams?: GetRandomQuoteQuery },
  options?: Omit<
    UseQueryOptions<Quote, HTTPError, Quote, unknown[]>,
    'queryKey' | 'queryFn'
  >,
) => {
  const searchParams = kyOptions?.searchParams ?? {};
  return useQuery(
    queryKeyBase.concat(searchParams),
    () => getRandomQuote(kyOptions),
    options,
  );
};

export { randomQuotePrefetchQuery, useGetRandomQuoteQuery };
