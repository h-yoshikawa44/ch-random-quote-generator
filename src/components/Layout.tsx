import { FC } from 'react';
import { css } from '@emotion/react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

type Props = {
  onRandom: VoidFunction;
};

const Layout: FC<Props> = ({ onRandom, children }) => {
  return (
    <div css={globalLayout}>
      <Header css={customHeader} onRandom={onRandom} />
      <div css={[container, contents]}>{children}</div>
      <Footer css={customFooter} />
    </div>
  );
};

const globalLayout = css`
  display: grid;
  grid-template: 'header' auto 'contents' 1fr 'footer' auto/100%;
  min-height: 100vh;
`;

const customHeader = css`
  grid-area: header;
`;

const container = css`
  max-width: 960px;
  padding: 0 4%;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0 8%;
  }
`;

const contents = css`
  grid-area: contents;
`;

const customFooter = css`
  grid-area: footer;
`;

export default Layout;
