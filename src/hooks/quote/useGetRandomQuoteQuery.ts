import ky, { Options, HTTPError } from 'ky';
import {
  QueryClient,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from 'react-query';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { QuoteData, isQuoteData } from '@/models/Quote';

const queryKey = ['quote', 'random'];

type QueryParam = {
  author?: string;
  genre?: string;
  count?: number;
};

const getRandomQuote = async (
  kyOptions?: Options & { searchParams?: QueryParam }
): Promise<QuoteData> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...kyOptions,
  };
  const response = await ky.get('quotes/random', mergedOptions);
  const data = (await response.json()) as unknown[];

  if (!isQuoteData(data)) {
    throw Error('API Type error');
  }

  return data;
};

// getServerSidePropsでprefetchする用の関数
const randomQuotePrefetchQuery = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery(queryKey, () => getRandomQuote());
};

const useGetRandomQuoteQuery = <TData = QuoteData>(
  kyOptions?: Options & { searchParams?: QueryParam },
  options?: UseQueryOptions<QuoteData, HTTPError, TData>
): UseQueryResult<TData, HTTPError> => {
  return useQuery(queryKey, () => getRandomQuote(kyOptions), options);
};

export { randomQuotePrefetchQuery, useGetRandomQuoteQuery };
