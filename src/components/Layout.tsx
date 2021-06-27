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
      <Header />
      <div css={container}>{children}</div>
      <Footer />
    </div>
  );
};

const container = css`
  max-width: 960px;
  padding: 0 4%;
  margin: 0 auto;
`;

export default Layout;
