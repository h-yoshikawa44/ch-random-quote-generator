import { Options, HTTPError } from 'ky';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { GetRandomQuoteQuery, Quote } from '@/models/Quote';
import getRandomQuote from '@/domains/getRandomQuote';

const queryKey = ['quote', 'random'] as string[];

const useGetRandomQuoteQuery = (
  kyOptions?: Options & { searchParams?: GetRandomQuoteQuery },
  options?: Omit<
    UseQueryOptions<Quote, HTTPError, Quote, unknown[]>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => getRandomQuote(kyOptions),
    ...options,
  });
};

export { useGetRandomQuoteQuery };
