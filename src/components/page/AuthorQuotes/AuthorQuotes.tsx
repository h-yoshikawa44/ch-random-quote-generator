import { FC } from 'react';
import { css } from '@emotion/react';
import QuoteBlockList from '@/components/model/Quote/QuoteBlockList';
import { breakPoint } from '@/styles/constants';
import { raleway } from '@/styles/fonts';
import { useGetQuoteListInfiniteQuey } from '@/hooks//quote';
import { useIntersectionObserver } from '@/hooks/util';

type Props = {
  authorName: string;
};

const AuthorQuotes: FC<Props> = ({ authorName }) => {
  const {
    isLoading,
    error,
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
    { enabled: !!authorName },
  );
  const statusCode = error?.response?.status;

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

  return (
    <main css={main}>
      <h2 css={authorNameText}>{authorName}</h2>
      <QuoteBlockList
        isLoading={isLoading}
        statusCode={statusCode}
        quoteData={quoteList?.pages}
        loadMoreRef={loadMoreRef}
        loadMoreMessage={loadMoreMessage}
      />
    </main>
  );
};

const main = css`
  display: grid;
  grid-row-gap: 136px;
  justify-content: center;
  padding: 160px 0;

  @media (width < ${breakPoint.lg}px) {
    grid-row-gap: 96px;
    padding: 136px 0;
  }

  @media (width < ${breakPoint.sm}px) {
    grid-row-gap: 64px;
    padding: 80px 0;
  }
`;

const authorNameText = css`
  margin-left: 104px;
  font-family: ${raleway.style.fontFamily};
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;

  @media (width < ${breakPoint.sm}px) {
    margin-left: 44px;
    font-size: 32px;
  }
`;

export default AuthorQuotes;
