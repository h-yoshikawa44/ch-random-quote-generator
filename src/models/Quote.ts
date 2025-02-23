// BFF API のモデル

export type GetRandomQuoteQuery = {
  /** 引用文の最小文字数 */
  minLength?: number;
  /** 引用文の最大文字数 */
  maxLength?: number;
};

// export type GetListRequestQuery = {
//   maxLength?: number;
//   minLength?: number;
//   tags?: string;
//   author?: string;
//   sortBy?: 'dateAdded' | 'dateModified' | 'author' | 'content';
//   order?: 'asc' | 'desc';
//   limit?: number;
//   page?: number;
// };

// export type GetRequestQuery = {
//   count?: number;
//   maxLength?: number;
//   minLength?: number;
//   /** カンマ区切りの著者 */
//   authors?: string;
//   /** カンマ区切りのタグ */
//   tags?: string;
// };

export type Quote = {
  quote: string;
  author: string;
  tags: string[];
};

export const isQuote = (arg: unknown): arg is Quote => {
  const q = arg as Quote;

  return (
    typeof q.quote === 'string' &&
    typeof q.author === 'string' &&
    q.tags.every((tag) => typeof tag === 'string')
  );
};

// const isQuoteListData = (args: unknown): args is QuoteListData => {
//   const qb = args as QuoteListData;

//   return (
//     typeof qb.count === 'number' &&
//     typeof qb.totalCount === 'number' &&
//     typeof qb.page === 'number' &&
//     typeof qb.totalPages === 'number' &&
//     typeof qb.lastItemIndex === 'number' &&
//     qb.results.every((quote) => isQuote(quote))
//   );
// };
