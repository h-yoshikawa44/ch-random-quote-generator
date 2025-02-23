import { Fragment } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import HomePage from '@/components/page/Home';
import { randomQuotePrefetchQuery } from '@/server/quote/randomQuotePrefetchQuery';

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
