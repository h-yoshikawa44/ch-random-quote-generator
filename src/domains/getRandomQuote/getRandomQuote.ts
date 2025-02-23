import { Options } from 'ky';
import { getExtendKy } from '@/config/ky';
import { GetRandomQuoteQuery, Quote, isQuote } from '@/models/Quote';

const getRandomQuote = async (
  kyOptions?: Options & { searchParams?: GetRandomQuoteQuery },
): Promise<Quote> => {
  const response = await getExtendKy(kyOptions).get('quote/random');
  const data = (await response.json()) as unknown[];

  if (!isQuote(data)) {
    throw Error('API Type error');
  }

  return data;
};

export default getRandomQuote;
