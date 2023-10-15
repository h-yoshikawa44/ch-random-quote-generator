import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS } from '@/config/ky';
import { GetRequestQuery, QuoteData, isQuoteData } from '@/models/Quote';

const getRandomQuote = async (
  kyOptions?: Options & { searchParams?: GetRequestQuery },
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

export default getRandomQuote;
