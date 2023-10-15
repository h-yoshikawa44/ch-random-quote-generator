import { Options, HTTPError } from 'ky';
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { GetListRequestQuery, QuoteData } from '@/models/Quote';
import getQuoteList from '@/domains/getQuoteList';

const queryKeyBase = ['quote'] as unknown[];

const useGetQuoteListInfiniteQuery = (
  kyOptions?: Options & { searchParams?: GetListRequestQuery },
  options?: Omit<
    UseInfiniteQueryOptions<
      QuoteData,
      HTTPError,
      QuoteData,
      QuoteData,
      unknown[]
    >,
    'queryKey' | 'queryFn'
  >,
) => {
  const searchParams = kyOptions?.searchParams ?? {};
  return useInfiniteQuery(
    queryKeyBase.concat(searchParams),
    ({ pageParam }) => getQuoteList(pageParam, kyOptions),
    {
      ...options,
      getPreviousPageParam: (firstPage) =>
        firstPage.pagination.currentPage > 1
          ? firstPage.pagination.currentPage - 1
          : false,
      getNextPageParam: (lastPage) =>
        lastPage.pagination.nextPage ? lastPage.pagination.nextPage : false,
    },
  );
};

export default useGetQuoteListInfiniteQuery;
