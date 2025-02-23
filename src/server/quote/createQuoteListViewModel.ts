import { QuoteListData } from '@/models/Quote';
import { QuoteListExternal } from './QuoteExternal';
import { createQuoteViewModel } from './createQuoteViewModel';

export const createQuoteListViewModel = (
  quoteListResponse: QuoteListExternal,
  limit: number,
  page: number,
): QuoteListData => {
  const sortedQuoteList = quoteListResponse.toSorted((a, b) =>
    a.id > b.id ? 1 : -1,
  );
  const totalPages = Math.ceil(sortedQuoteList.length / limit);
  const slicedQuoteList = new Array(totalPages)
    .fill('')
    .map((_, i) => sortedQuoteList.slice(i * limit, (i + 1) * limit));
  const targetQuoteList = slicedQuoteList[page - 1].map((quote) =>
    createQuoteViewModel(quote),
  );

  return {
    count: targetQuoteList.length,
    totalCount: sortedQuoteList.length,
    page: page,
    totalPages: totalPages,
    quoteList: targetQuoteList,
  };
};
