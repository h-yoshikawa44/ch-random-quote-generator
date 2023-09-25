import { Fragment } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import HomePage from '@/components/page/Home';
import { randomQuotePrefetchQuery } from '@/hooks/quote';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>{'Random quote generator'}</title>
        <meta
          name="description"
          content={`devChallenges.io(legacy) - Random quote generator | by h-yoshikawa44`}
        />
      </Head>
      <HomePage />
    </Fragment>
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

export default Home;
