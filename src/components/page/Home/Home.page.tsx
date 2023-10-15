import { FC, useCallback } from 'react';
import Layout from '@/components/common/Layout';
import Home from './Home';
import { useGetRandomQuoteQuery } from '@/hooks/quote';

const HomePage: FC = () => {
  // 本当は Home の方でカスタムフック取り出しをしたかったが、refetch()をここで使いたいのでここで取り出した
  const {
    error,
    data: quoteData,
    refetch,
  } = useGetRandomQuoteQuery(
    {},
    {
      enabled: false,
    },
  );

  const handleRandomQuote = useCallback(() => {
    refetch();
  }, [refetch]);
  const statusCode = error?.response?.status;

  return (
    <Layout onRandom={handleRandomQuote}>
      <Home quoteData={quoteData} statusCode={statusCode} />
    </Layout>
  );
};

export default HomePage;
