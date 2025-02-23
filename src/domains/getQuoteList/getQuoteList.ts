import { Options } from 'ky';
import {
  GetQuoteListQuery,
  QuoteListData,
  isQuoteListData,
} from '@/models/Quote';
import { getExtendKy } from '@/config/ky';

const getQuoteList = async (
  pageParam = 1,
  kyOptions?: Options & { searchParams?: GetQuoteListQuery },
): Promise<QuoteListData> => {
  let options = kyOptions ?? {};
  if (options.searchParams !== undefined) {
    options.searchParams.page = pageParam;
  } else {
    options = { searchParams: { page: pageParam } };
  }
  const response = await getExtendKy(options).get('quotes');
  const data = (await response.json()) as unknown[];

  if (!isQuoteListData(data)) {
    throw Error('API Type error');
  }
  return data;
};

export default getQuoteList;
