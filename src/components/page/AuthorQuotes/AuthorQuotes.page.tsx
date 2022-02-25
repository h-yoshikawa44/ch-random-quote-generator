import { VFC, useCallback } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/common/Layout';
import AuthorQuotes from './AuthorQuotes';

type Props = {
  authorName: string;
};

const AuthorQuotesPage: VFC<Props> = ({ authorName }) => {
  const router = useRouter();

  const handleBackTopPage = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Layout onRandom={handleBackTopPage}>
      <AuthorQuotes authorName={authorName} />
    </Layout>
  );
};

export default AuthorQuotesPage;
