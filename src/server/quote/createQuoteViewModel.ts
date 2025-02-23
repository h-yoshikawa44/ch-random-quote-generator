import { Quote } from '@/models/Quote';
import { QuoteExternal } from './QuoteExternal';

export const createQuoteViewModel = (quoteResponse: QuoteExternal): Quote => {
  return {
    id: quoteResponse.id,
    quoteText: quoteResponse.quote,
    author: quoteResponse.author,
    tags: quoteResponse.tags,
  };
};
