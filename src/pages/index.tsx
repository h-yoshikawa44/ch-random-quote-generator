import { css } from '@emotion/react';
import Layout from '@/components/Layout';
import QuoteBlock from '@/components/QuoteBlock';
import AuthorLinkCard from '@/components/AuthorLinkCard';

const Home = () => {
  return (
    <Layout>
      <main css={main}>
        <QuoteBlock>
          The first rule of any technology used in a business is that automation
          applied to an efficient operation will magnify the efficiency. The
          second is that automation applied to an inefficient operation will
          magnify the inefficiency.
        </QuoteBlock>
        <div css={authorLinkCardBox}>
          <AuthorLinkCard author="Bill Gates" genre="business" />
        </div>
      </main>
    </Layout>
  );
};

const main = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 160px 0;

  @media (max-width: 1280px) {
    padding: 136px 0;
  }

  @media (max-width: 600px) {
    height: 100%;
    padding: 80px 0;
  }
`;

const authorLinkCardBox = css`
  width: 80%;
  margin-top: 104px;

  @media (max-width: 600px) {
    width: 100%;

    /* QuoteBlockの位置調整をレイアウトファイルでやっているが、LinkCardでは不要なのでネガティブマージンで打消し */
    margin: 104px -4% 0 -12%;
  }
`;

export default Home;
