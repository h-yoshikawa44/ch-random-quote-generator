// ref: https://quoteslate.vercel.app

export type GetRandomQuoteQueryExternal = {
  /** 取得件数 */
  count?: string; // クエリパラメータなので型としては string だが number 形式
  /** 引用文の最小文字数 */
  minLength?: string; // クエリパラメータなので型としては string だが number 形式
  /** 引用文の最大文字数 */
  maxLength?: string; // クエリパラメータなので型としては string だが number 形式
  /** 著者名（複数名の時はカンマ区切りで繋いだもの） */
  authors?: string;
  /** タグ（複数の時はカンマ区切りで繋いだもの） */
  tags?: string;
};

// リクエストする外部 API としては、同じエンドポイントになるため同じ型
export type GetQuoteListQueryExternal = GetRandomQuoteQueryExternal;

export type QuoteExternal = {
  id: number;
  quote: string;
  author: string;
  length: number;
  tags: string[];
};

export type QuoteListExternal = QuoteExternal[];

export const isGetRandomQuoteQueryExternal = (
  query: unknown,
): query is GetRandomQuoteQueryExternal => {
  const q = query as GetRandomQuoteQueryExternal;

  return (
    (q.count === undefined || typeof q.count === 'string') &&
    (q.maxLength === undefined || typeof q.maxLength === 'string') &&
    (q.minLength === undefined || typeof q.minLength === 'string') &&
    (q.authors === undefined || typeof q.authors === 'string') &&
    (q.tags === undefined || typeof q.tags === 'string')
  );
};

// リクエストする外部 API としては、同じエンドポイントになるため同じ処理
export const isGetQuoteListQueryExternal = (
  query: unknown,
): query is GetQuoteListQueryExternal => {
  const q = query as GetQuoteListQueryExternal;

  return isGetRandomQuoteQueryExternal(q);
};

export const isQuoteExternal = (arg: unknown): arg is QuoteExternal => {
  const q = arg as QuoteExternal;

  return (
    typeof q.id === 'number' &&
    typeof q.quote === 'string' &&
    typeof q.author === 'string' &&
    typeof q.length === 'number' &&
    q.tags.every((tag) => typeof tag === 'string')
  );
};

export const isQuoteListExternal = (
  args: unknown,
): args is QuoteListExternal => {
  const ql = args as QuoteListExternal;

  return ql.every((q) => isQuoteExternal(q));
};
