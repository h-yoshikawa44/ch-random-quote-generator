import { getExtendKyServer } from '@/config/ky';
import { Options } from 'ky-universal';
import {
  GetQuoteListQueryExternal,
  isQuoteListExternal,
} from './QuoteExternal';

const GET_QUOTE_COUNT = '50';

export const getQuoteListFromExternal = async (
  options: Options & { searchParams: GetQuoteListQueryExternal },
) => {
  const optionsExtend = options;
  // count が1だと1件のみ取得になってしまい、配列で返ってこないため、1の時もデフォルト値に補正する
  const isInvalidCount =
    options.searchParams.count == undefined ||
    options.searchParams.count === '1';
  if (!isInvalidCount) {
    optionsExtend.searchParams.count = GET_QUOTE_COUNT;
  }
  const response = await getExtendKyServer(optionsExtend).get('quotes/random');
  const quoteList = (await response.json()) as unknown;

  if (!isQuoteListExternal(quoteList)) {
    throw Error('API type error');
  }

  return quoteList;
};
