import { Options, HTTPError } from 'ky';
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { GetQuoteListQuery, QuoteListData } from '@/models/Quote';
import getQuoteList from '@/domains/getQuoteList';

const queryKeyBase = ['quote'] as unknown[];

const useGetQuoteListInfiniteQuery = (
  kyOptions?: Options & { searchParams?: GetQuoteListQuery },
  options?: Omit<
    UseInfiniteQueryOptions<
      QuoteListData,
      HTTPError,
      QuoteListData,
      QuoteListData,
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
        firstPage.page > 1 ? firstPage.page - 1 : false,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.totalPage ? lastPage.page + 1 : false,
    },
  );
};

export default useGetQuoteListInfiniteQuery;
