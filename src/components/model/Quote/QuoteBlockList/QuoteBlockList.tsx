import { VFC, Fragment } from 'react';
import { css } from '@emotion/react';
import QuoteBlock from '@/components/model/Quote/QuoteBlock';
import Alert from '@/components/common/Alert';
import { QuoteData } from '@/models/Quote';
import { breakPoint, fonts } from '@/styles/constants';

type Props = {
  isLoading: boolean;
  statusCode?: number;
  quoteData?: QuoteData[];
  loadMoreRef: (node: Element | null) => void;
  loadMoreMessage: string;
};

const QuoteBlockList: VFC<Props> = ({
  isLoading,
  statusCode,
  quoteData,
  loadMoreRef,
  loadMoreMessage,
}) => {
  if (isLoading) {
    return (
      <div css={quoteBlockList}>
        <QuoteBlock isLoading={isLoading} />
        <QuoteBlock isLoading={isLoading} />
        <QuoteBlock isLoading={isLoading} />
      </div>
    );
  }

  if (statusCode) {
    return (
      <div css={quoteBlockList}>
        <Alert />
      </div>
    );
  }

  return (
    <div css={quoteBlockList}>
      {quoteData && quoteData[0].totalQuotes === 0 ? (
        <p css={noResultsText}>No Results...</p>
      ) : (
        quoteData?.map((page, index) => (
          <Fragment key={index}>
            {page.data.map((quote) => (
              <QuoteBlock key={quote._id}>{quote.quoteText}</QuoteBlock>
            ))}
          </Fragment>
        ))
      )}
      <div css={loadMoreBox} ref={loadMoreRef}>
        {loadMoreMessage}
      </div>
    </div>
  );
};

const quoteBlockList = css`
  display: grid;
  grid-template-columns: 616px;
  grid-row-gap: 136px;

  @media (max-width: ${breakPoint.lg - 1}px) {
    grid-row-gap: 96px;
  }

  @media (max-width: ${breakPoint.sm - 1}px) {
    grid-template-columns: 1fr;
    grid-row-gap: 64px;
  }
`;

const noResultsText = css`
  text-align: center;
`;

const loadMoreBox = css`
  font-family: ${fonts.raleway};
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
`;

export default QuoteBlockList;
