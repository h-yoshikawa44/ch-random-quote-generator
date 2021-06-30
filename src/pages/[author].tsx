import { Fragment, useCallback } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import QuoteBlock from '@/components/QuoteBlock';
import { useGetQuoteListInfiniteQuey } from '@/hooks/quote';
import { useIntersectionObserver } from '@/hooks/util';

const AuthorQuotes = () => {
  const router = useRouter();
  const authorName = (router.query.author as string)?.replace('_', ' ');

  const {
    data: quoteList,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetQuoteListInfiniteQuey(
    {
      searchParams: {
        author: authorName,
        limit: 10,
      },
    },
    { enabled: !!authorName }
  );

  const { loadMoreRef } = useIntersectionObserver({
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  let loadMoreMessage;
  if (isFetchingNextPage) {
    loadMoreMessage = 'Loading...';
  } else {
    loadMoreMessage = hasNextPage ? 'Load more' : ' ';
  }

  const handleBackTopPage = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Layout onRandom={handleBackTopPage}>
      <main css={main}>
        <h2 css={authorNameText}>{authorName}</h2>
        {quoteList?.pages?.map((page) => (
          <Fragment key={page.pagination.currentPage}>
            {page.data.map((quote) => (
              <QuoteBlock key={quote._id}>{quote.quoteText}</QuoteBlock>
            ))}
          </Fragment>
        ))}
        <div css={loadMoreBox} ref={loadMoreRef}>
          {loadMoreMessage}
        </div>
      </main>
    </Layout>
  );
};

const main = css`
  display: grid;
  grid-row-gap: 136px;
  justify-content: center;
  padding: 160px 0;

  @media (max-width: 1280px) {
    grid-row-gap: 96px;
    padding: 136px 0;
  }

  @media (max-width: 600px) {
    grid-row-gap: 64px;
    padding: 80px 0;
  }
`;

const authorNameText = css`
  margin-left: 104px;
  font-family: Raleway, sans-serif;
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;

  @media (max-width: 600px) {
    margin-left: 44px;
    font-size: 32px;
  }
`;

const loadMoreBox = css`
  font-family: Raleway, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
`;

export default AuthorQuotes;
