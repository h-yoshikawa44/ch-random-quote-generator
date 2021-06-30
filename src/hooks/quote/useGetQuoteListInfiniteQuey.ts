import ky, { Options, HTTPError } from 'ky';
import {
  UseInfiniteQueryResult,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from 'react-query';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { QuoteData, isQuoteData } from '@/models/Quote';

const queryKeyBase = ['quote'] as unknown[];

type QueryParam = {
  author?: string;
  genre?: string;
  query?: string;
  page?: number;
  limit?: number;
};

const getQuoteList = async (
  pageParam = 1,
  kyOptions?: Options & { searchParams?: QueryParam }
): Promise<QuoteData> => {
  const options = kyOptions;
  options.searchParams.page = pageParam;
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get('quotes', mergedOptions);
  const data = (await response.json()) as unknown[];

  if (!isQuoteData(data)) {
    throw Error('API Type error');
  }
  return data;
};

const useGetQuoteListInfiniteQuery = <TData = QuoteData>(
  kyOptions?: Options & { searchParams?: QueryParam },
  options?: UseInfiniteQueryOptions<QuoteData, HTTPError, TData>
): UseInfiniteQueryResult<TData, HTTPError> => {
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
    }
  );
};

export default useGetQuoteListInfiniteQuery;
