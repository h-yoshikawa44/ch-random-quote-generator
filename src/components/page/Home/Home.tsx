import { FC, Fragment } from 'react';
import { css } from '@emotion/react';
import QuoteBlock from '@/components/model/Quote/QuoteBlock';
import QuoteAuthorLinkCard from '@/components/model/Quote/QuoteAuthorLinkCard';
import Alert from '@/components/common/Alert';
import { QuoteData } from '@/models/Quote';
import { breakPoint } from '@/styles/constants';

type Props = {
  quoteData?: QuoteData;
  statusCode?: number;
};

const Home: FC<Props> = ({ quoteData, statusCode }) => {
  if (statusCode) {
    return (
      <main css={main}>
        <Alert />
      </main>
    );
  }

  return (
    <main css={main}>
      {quoteData && (
        <Fragment>
          <QuoteBlock>{quoteData.data[0].quoteText}</QuoteBlock>
          <div css={authorLinkCardBox}>
            <QuoteAuthorLinkCard
              author={quoteData.data[0].quoteAuthor}
              genre={quoteData.data[0].quoteGenre}
            />
          </div>
        </Fragment>
      )}
    </main>
  );
};

const main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 160px 0;

  @media (max-width: ${breakPoint.lg - 1}px) {
    padding: 136px 0;
  }

  @media (max-width: ${breakPoint.sm - 1}px) {
    height: 100%;
    padding: 80px 0;
  }
`;

const authorLinkCardBox = css`
  width: 80%;
  margin-top: 104px;

  @media (max-width: ${breakPoint.sm - 1}px) {
    width: 100%;
  }
`;

export default Home;
