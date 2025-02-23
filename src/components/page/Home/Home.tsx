import { FC, Fragment } from 'react';
import { css } from '@emotion/react';
import QuoteBlock from '@/components/model/Quote/QuoteBlock';
import QuoteAuthorLinkCard from '@/components/model/Quote/QuoteAuthorLinkCard';
import Alert from '@/components/common/Alert';
import { Quote } from '@/models/Quote';
import { breakPoint } from '@/styles/constants';

type Props = {
  quote?: Quote;
  isError: boolean;
};

const Home: FC<Props> = ({ quote, isError }) => {
  if (isError) {
    return (
      <main css={main}>
        <Alert />
      </main>
    );
  }

  return (
    <main css={main}>
      {quote && (
        <Fragment>
          <QuoteBlock>{quote.quoteText}</QuoteBlock>
          <div css={authorLinkCardBox}>
            <QuoteAuthorLinkCard author={quote.author} tags={quote.tags} />
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

  @media (width < ${breakPoint.lg}px) {
    padding: 136px 0;
  }

  @media (width < ${breakPoint.sm}px) {
    height: 100%;
    padding: 80px 0;
  }
`;

const authorLinkCardBox = css`
  width: 80%;
  margin-top: 104px;

  @media (width < ${breakPoint.sm}px) {
    width: 100%;
  }
`;

export default Home;
