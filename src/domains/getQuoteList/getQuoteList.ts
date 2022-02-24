import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { GetListRequestQuery, QuoteData, isQuoteData } from '@/models/Quote';

const getQuoteList = async (
  pageParam = 1,
  kyOptions?: Options & { searchParams?: GetListRequestQuery }
): Promise<QuoteData> => {
  const options = kyOptions;
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
    ...{ page: pageParam },
  };
  const response = await ky.get('quotes', mergedOptions);
  const data = (await response.json()) as unknown[];

  if (!isQuoteData(data)) {
    throw Error('API Type error');
  }
  return data;
};

export default getQuoteList;
