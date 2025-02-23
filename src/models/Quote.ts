// BFF API のモデル

export type GetRandomQuoteQuery = {
  /** 引用文の最小文字数 */
  minLength?: number;
  /** 引用文の最大文字数 */
  maxLength?: number;
};

export type GetQuoteListQuery = {
  maxLength?: number;
  minLength?: number;
  /** 著者名（複数名の時はカンマ区切りで繋いだもの） */
  authors?: string;
  /** タグ（複数の時はカンマ区切りで繋いだもの） */
  tags?: string;
  /** 1ページ当たりの件数 */
  count?: number;
  /** ページ指定 */
  page?: number;
};

export type Quote = {
  id: number;
  quoteText: string;
  author: string;
  tags: string[];
};

export type QuoteListData = {
  count: number;
  totalCount: number;
  page: number;
  totalPage: number;
  quoteList: Quote[];
};

export const isQuote = (arg: unknown): arg is Quote => {
  const q = arg as Quote;

  return (
    typeof q.quoteText === 'string' &&
    typeof q.author === 'string' &&
    q.tags.every((tag) => typeof tag === 'string')
  );
};

export const isQuoteListData = (args: unknown): args is QuoteListData => {
  const qb = args as QuoteListData;

  return (
    typeof qb.count === 'number' &&
    typeof qb.totalCount === 'number' &&
    typeof qb.page === 'number' &&
    typeof qb.totalPage === 'number' &&
    qb.quoteList.every((quote) => isQuote(quote))
  );
};
