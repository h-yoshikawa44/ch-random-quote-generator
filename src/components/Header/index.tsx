import { VFC } from 'react';
import { css } from '@emotion/react';
import RandomButton from '@/components/Header/RandomButton';

const Header: VFC = () => {
  return (
    <header css={header}>
      <RandomButton />
    </header>
  );
};

const header = css`
  max-width: 1280px;
  padding: 0 4%;
  margin: 24px auto 0;
  text-align: right;
`;

export default Header;
