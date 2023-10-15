import { Options, HTTPError } from 'ky';
import { QueryClient, UseQueryOptions, useQuery } from '@tanstack/react-query';
import { GetRequestQuery, QuoteData } from '@/models/Quote';
import getRandomQuote from '@/domains/getRandomQuote';

const queryKeyBase = ['quote', 'random'] as unknown[];

// getServerSidePropsでprefetchする用の関数
const randomQuotePrefetchQuery = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery(queryKeyBase.concat({}), () =>
    getRandomQuote(),
  );
};

const useGetRandomQuoteQuery = (
  kyOptions?: Options & { searchParams?: GetRequestQuery },
  options?: Omit<
    UseQueryOptions<QuoteData, HTTPError, QuoteData, unknown[]>,
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
