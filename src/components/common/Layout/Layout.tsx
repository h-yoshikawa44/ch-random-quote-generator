import { FC, ReactNode } from 'react';
import { css } from '@emotion/react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { breakPoint } from '@/styles/constants';

type Props = {
  onRandom: VoidFunction;
  children: ReactNode;
};

const Layout: FC<Props> = ({ onRandom, children }) => {
  return (
    <div css={globalLayout}>
      <Header onRandom={onRandom} />
      <div css={[container, contents]}>{children}</div>
      <Footer />
    </div>
  );
};

const globalLayout = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const container = css`
  max-width: 960px;
  padding: 0 4%;
  margin: 0 auto;

  @media (width < ${breakPoint.sm}px) {
    padding: 0 8%;
  }
`;

const contents = css`
  flex: 1 0 auto;
`;

export default Layout;
