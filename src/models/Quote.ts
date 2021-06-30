export type Quote = {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: number;
};

export type QuoteData = {
  statusCode: number;
  message: string;
  pagination: {
    currentPage: number;
    nextPage: number | null;
    totalPages: number | null;
  };
  totalQuotes: number;
  data: Quote[];
};

const isQuote = (arg: unknown): arg is Quote => {
  const q = arg as Quote;

  return (
    typeof q._id === 'string' &&
    typeof q.quoteText === 'string' &&
    typeof q.quoteAuthor === 'string' &&
    typeof q.quoteGenre === 'string' &&
    typeof q.__v === 'number'
  );
};

const isQuoteData = (args: unknown): args is QuoteData => {
  const qb = args as QuoteData;

  return (
    typeof qb.statusCode === 'number' &&
    typeof qb.message === 'string' &&
    typeof qb.pagination.currentPage === 'number' &&
    (typeof qb.pagination.nextPage === 'number' ||
      qb.pagination.nextPage === null) &&
    (typeof qb.pagination.totalPages === 'number' ||
      qb.pagination.totalPages === null) &&
    !qb.data.some((arg) => !isQuote(arg))
  );
};

export { isQuote, isQuoteData };
