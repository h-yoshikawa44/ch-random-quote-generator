import { Fragment, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import { css } from '@emotion/react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Layout from '@/components/Layout';
import QuoteBlock from '@/components/QuoteBlock';
import AuthorLinkCard from '@/components/AuthorLinkCard';
import Alert from '@/components/common/Alert';
import {
  randomQuotePrefetchQuery,
  useGetRandomQuoteQuery,
} from '@/hooks/quote';

const Home = () => {
  const {
    error,
    data: quoteData,
    refetch,
  } = useGetRandomQuoteQuery(
    {},
    {
      enabled: false,
    }
  );

  const handleRandomQuote = useCallback(() => {
    refetch();
  }, [refetch]);
  const statusCode = error?.response?.status;

  if (statusCode) {
    return (
      <Layout onRandom={handleRandomQuote}>
        <main css={main}>
          <Alert />
        </main>
      </Layout>
    );
  }

  return (
    <Layout onRandom={handleRandomQuote}>
      <main css={main}>
        {quoteData && (
          <Fragment>
            <QuoteBlock>{quoteData.data[0].quoteText}</QuoteBlock>
            <div css={authorLinkCardBox}>
              <AuthorLinkCard
                author={quoteData.data[0].quoteAuthor}
                genre={quoteData.data[0].quoteGenre}
              />
            </div>
          </Fragment>
        )}
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  await randomQuotePrefetchQuery(queryClient);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 160px 0;

  @media (max-width: 1280px) {
    padding: 136px 0;
  }

  @media (max-width: 600px) {
    height: 100%;
    padding: 80px 0;
  }
`;

const authorLinkCardBox = css`
  width: 80%;
  margin-top: 104px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default Home;
