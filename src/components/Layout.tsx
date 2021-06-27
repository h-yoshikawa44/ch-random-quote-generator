import { FC } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  pageName?: string;
};

const Layout: FC<Props> = ({ pageName, children }) => {
  const content = pageName
    ? `devChallenges.io - Random quote generator - ${pageName} | by h-yoshikawa44`
    : 'devChallenges.io - Random quote generator | by h-yoshikawa44';
  return (
    <div>
      <Head>
        <title>Random quote generator</title>
        <meta name="description" content={content} />
      </Head>
      <div css={headerContainer}>
        <Header />
      </div>
      <div css={container}>{children}</div>
      <Footer />
    </div>
  );
};

const headerContainer = css`
  max-width: 1280px;
  padding: 0 4%;
  margin: 24px auto 0;
`;

const container = css`
  max-width: 960px;
  padding: 0 4%;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0 8% 0 16%;
  }
`;

export default Layout;
