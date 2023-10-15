import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AuthorQuotesPage from '@/components/page/AuthorQuotes';

const AuthorQuotes = () => {
  const router = useRouter();
  const authorName = (router.query.author as string)?.replace('_', ' ');

  return (
    <Fragment>
      <Head>
        <title>{`${authorName} - Random quote generator`}</title>
        <meta
          name="description"
          content={`devChallenges.io(legacy) - Random quote generator - ${authorName} | by h-yoshikawa44`}
        />
      </Head>
      <AuthorQuotesPage authorName={authorName} />
    </Fragment>
  );
};

export default AuthorQuotes;
