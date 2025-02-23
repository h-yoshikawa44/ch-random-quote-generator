import { FC, useCallback } from 'react';
import Layout from '@/components/common/Layout';
import Home from './Home';
import { useGetRandomQuoteQuery } from '@/hooks/quote';

const HomePage: FC = () => {
  // 本当は Home の方でカスタムフック取り出しをしたかったが、refetch()をここで使いたいのでここで取り出した
  const {
    error,
    data: quote,
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
  const isError = error !== null;

  return (
    <Layout onRandom={handleRandomQuote}>
      <Home quote={quote} isError={isError} />
    </Layout>
  );
};

export default HomePage;
