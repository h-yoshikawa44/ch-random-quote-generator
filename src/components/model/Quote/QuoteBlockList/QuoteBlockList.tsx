import { FC, Fragment } from 'react';
import { css } from '@emotion/react';
import QuoteBlock from '@/components/model/Quote/QuoteBlock';
import Alert from '@/components/common/Alert';
import { QuoteListData } from '@/models/Quote';
import { breakPoint } from '@/styles/constants';
import { raleway } from '@/styles/fonts';

type Props = {
  isLoading: boolean;
  statusCode?: number;
  quoteData?: QuoteListData[];
  loadMoreRef: (node: Element | null) => void;
  loadMoreMessage: string;
};

const QuoteBlockList: FC<Props> = ({
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
      {quoteData && quoteData[0].totalCount === 0 ? (
        <p css={noResultsText}>No Results...</p>
      ) : (
        quoteData?.map((page, index) => (
          <Fragment key={index}>
            {page.quoteList.map((quote) => (
              <QuoteBlock key={quote.id}>{quote.quoteText}</QuoteBlock>
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

  @media (width < ${breakPoint.lg}px) {
    grid-row-gap: 96px;
  }

  @media (width < ${breakPoint.sm}px) {
    grid-template-columns: 1fr;
    grid-row-gap: 64px;
  }
`;

const noResultsText = css`
  text-align: center;
`;

const loadMoreBox = css`
  font-family: ${raleway.style.fontFamily};
  font-size: 18px;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
`;

export default QuoteBlockList;
