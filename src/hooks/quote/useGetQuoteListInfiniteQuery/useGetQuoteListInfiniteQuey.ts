import { Options, HTTPError } from 'ky';
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  InfiniteData,
} from '@tanstack/react-query';
import { GetQuoteListQuery, QuoteListData } from '@/models/Quote';
import getQuoteList from '@/domains/getQuoteList';

const queryKeyBase = ['quote'] as unknown[];

const useGetQuoteListInfiniteQuery = (
  kyOptions?: Options & { searchParams?: GetQuoteListQuery },
  options?: Partial<
    Omit<
      UseInfiniteQueryOptions<
        QuoteListData,
        HTTPError,
        InfiniteData<QuoteListData>,
        QuoteListData,
        unknown[],
        number
      >,
      'queryKey' | 'queryFn'
    >
  >,
) => {
  const searchParams = kyOptions?.searchParams ?? {};
  return useInfiniteQuery({
    queryKey: queryKeyBase.concat(searchParams),
    queryFn: ({ pageParam }) => getQuoteList(pageParam, kyOptions),
    initialPageParam: 1,
    getPreviousPageParam: (firstPage) =>
      firstPage.page > 1 ? firstPage.page - 1 : null,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPage ? lastPage.page + 1 : null,
    ...options,
  });
};

export default useGetQuoteListInfiniteQuery;
