import { Options } from 'ky-universal';
import { GetRandomQuoteQueryExternal, isQuoteExternal } from './QuoteExternal';
import { getExtendKyServer } from '@/config/ky';

export const getRandomQuoteFromExternal = async (
  options: Options & { searchParams: GetRandomQuoteQueryExternal },
) => {
  const response = await getExtendKyServer(options).get('quotes/random');
  const quote = (await response.json()) as unknown;

  if (!isQuoteExternal(quote)) {
    throw Error('API type error');
  }

  return quote;
};
